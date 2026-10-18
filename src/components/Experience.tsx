'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

const companyLogos: Record<string, { symbol: string; color: string }> = {
  Google: { symbol: 'G', color: '#4285F4' },
  Meta: { symbol: 'M', color: '#0866FF' },
  Adobe: { symbol: 'Ae', color: '#FF0000' },
  Ogilvy: { symbol: 'O', color: '#CC0000' },
  গুগল: { symbol: 'G', color: '#4285F4' },
  মেটা: { symbol: 'M', color: '#0866FF' },
  অ্যাডোবি: { symbol: 'Ae', color: '#FF0000' },
  ওগিলভি: { symbol: 'O', color: '#CC0000' },
};

export default function Experience() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll(`.${styles.timelineCard}`);
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [t]);

  const getLogo = (company: string) => {
    return companyLogos[company] || { symbol: company[0], color: '#a78bfa' };
  };

  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Career</span>
          <h2 className={styles.sectionTitle}>{t.experience.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.experience.sectionSubtitle}</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {t.experience.roles.map((role, index) => {
            const logo = getLogo(role.company);
            return (
              <div
                key={index}
                className={`${styles.timelineCard} ${index % 2 === 0 ? styles.left : styles.right}`}
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
                id={`experience-card-${index}`}
              >
                <div className={styles.timelineDot} style={{ background: logo.color }}></div>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div
                      className={styles.companyLogo}
                      style={{ background: `${logo.color}22`, border: `1px solid ${logo.color}44`, color: logo.color }}
                    >
                      {logo.symbol}
                    </div>
                    <div className={styles.cardMeta}>
                      <h3 className={styles.companyName}>{role.company}</h3>
                      <p className={styles.roleTitle}>{role.role}</p>
                    </div>
                    <div className={styles.period}>
                      <span className={styles.periodBadge}>{role.period}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{role.description}</p>
                  <div className={styles.tags}>
                    {role.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
