'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string;
    }> = [];

    const colors = ['#a78bfa', '#e879f9', '#38bdf8', '#818cf8'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.bgOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Available for freelance
          </div>

          <p className={styles.greeting}>{t.hero.greeting}</p>
          <h1 className={styles.name}>{t.hero.name}</h1>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{t.hero.title}</span>
          </div>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={scrollToPortfolio} id="hero-cta-primary">
              <span>{t.hero.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className={styles.ctaSecondary} onClick={scrollToContact} id="hero-cta-secondary">
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t.hero.yearsExp}</span>
              <span className={styles.statLabel}>{t.hero.yearsLabel}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t.hero.projects}</span>
              <span className={styles.statLabel}>{t.hero.projectsLabel}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{t.hero.clients}</span>
              <span className={styles.statLabel}>{t.hero.clientsLabel}</span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}>
            <div className={styles.imageInner}>
              <Image
                src="/sheikh-riad-hasan.jpg"
                alt="Sheikh Riad Hasan - Senior Graphic Designer"
                width={682}
                height={1024}
                className={styles.portrait}
                priority
              />
            </div>
          </div>
          <div className={styles.floatingCard1}>
            <span className={styles.cardIcon}>🎨</span>
            <div>
              <div className={styles.cardTitle}>Brand Design</div>
              <div className={styles.cardSub}>Visual Identity</div>
            </div>
          </div>
          <div className={styles.floatingCard2}>
            <span className={styles.cardIcon}>✦</span>
            <div>
              <div className={styles.cardTitle}>Cannes Lions</div>
              <div className={styles.cardSub}>Award Winner</div>
            </div>
          </div>
          <div className={styles.imageDeco1}></div>
          <div className={styles.imageDeco2}></div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
