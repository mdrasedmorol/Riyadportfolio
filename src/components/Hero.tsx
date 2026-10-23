'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated words for the quote pill — sequential reveal
  const words = ['Design', 'Create', 'Inspire'];
  const [visibleCount, setVisibleCount] = useState(0);
  const [phase, setPhase] = useState<'building' | 'complete' | 'resetting'>('building');

  useEffect(() => {
    if (phase === 'building') {
      if (visibleCount < words.length) {
        const timer = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, 700);
        return () => clearTimeout(timer);
      } else {
        setPhase('complete');
      }
    } else if (phase === 'complete') {
      // Hold all three visible for a moment, then reset
      const timer = setTimeout(() => {
        setPhase('resetting');
      }, 2000);
      return () => clearTimeout(timer);
    } else if (phase === 'resetting') {
      const timer = setTimeout(() => {
        setVisibleCount(0);
        setPhase('building');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, visibleCount, words.length]);

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
          <div className={styles.topBarGroup}>
            <div className={`${styles.quotePill} ${phase === 'resetting' ? styles.quotePillResetting : ''}`}>
              <span className={styles.quoteStatic}>
                {words.map((word, index) => {
                  const isRevealed = index < visibleCount;
                  const isLatest = index === visibleCount - 1 && phase === 'building';
                  return (
                    <span key={word} className={styles.quoteWordGroup}>
                      {index > 0 && (
                        <span
                          className={`${styles.quoteDot} ${isRevealed ? styles.quoteDotVisible : ''}`}
                        >
                          &middot;
                        </span>
                      )}
                      <span
                        className={`${styles.quoteWord} ${
                          isRevealed
                            ? isLatest
                              ? styles.quoteWordLatest
                              : styles.quoteWordRevealed
                            : styles.quoteWordHidden
                        }`}
                      >
                        {word}
                      </span>
                    </span>
                  );
                })}
              </span>
            </div>
          </div>

          <p className={styles.greeting}>{t.hero.greeting}</p>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{t.hero.name}</h1>
            <span
              className={styles.activeIndicator}
              title="Active now"
              aria-label="Active now"
            >
              <span className={styles.activeDot}></span>
              <span className={styles.activePing}></span>
            </span>
          </div>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>{t.hero.title}</span>
          </div>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>

          <div className={styles.ctas}>
            <a
              href="/Sheikh-Riyad-Hassan-CV.pdf"
              download="Sheikh-Riyad-Hassan-CV.pdf"
              className={styles.ctaDownload}
              id="hero-download-cv-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>{t.hero.downloadCv}</span>
            </a>

            <button className={styles.ctaPrimary} onClick={scrollToPortfolio} id="hero-cta-primary">
              <span>{t.hero.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
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
                src="/sheikh-riyad-hero.png"
                alt="Sheikh Riyad Hassan - Graphic Designer & Video Editor"
                width={1086}
                height={1448}
                className={styles.portrait}
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
