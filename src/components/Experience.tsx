'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';

const companyLogos: Record<string, { symbol: string; color: string }> = {
  'Shanghai Group': { symbol: 'SG', color: '#38bdf8' },
  'Shanghai Group (上海集团)': { symbol: 'SG', color: '#38bdf8' },
  'Zig Zag Bazaar': { symbol: 'ZZ', color: '#a78bfa' },
  'জিগ জ্যাগ বাজার': { symbol: 'ZZ', color: '#a78bfa' },
  'সাংহাই গ্রুপ': { symbol: 'SG', color: '#38bdf8' },
  'शंघाई ग्रुप': { symbol: 'SG', color: '#38bdf8' },
  'जिग जैग बाजार': { symbol: 'ZZ', color: '#a78bfa' },
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
    return companyLogos[company] || { symbol: company.slice(0, 2).toUpperCase(), color: '#38bdf8' };
  };

  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{t.experience.sectionLabel}</span>
          <h2 className={styles.sectionTitle}>{t.experience.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.experience.sectionSubtitle}</p>
        </div>

        {/* Work Experience Block */}
        <h3 className={styles.blockHeading}>
          <span className={styles.blockHeadingIcon}>💼</span>
          <span>{t.experience.workHeading}</span>
        </h3>

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
                      <h4 className={styles.companyName}>{role.company}</h4>
                      <p className={styles.roleTitle}>{role.role}</p>
                      <div className={styles.locationText}>
                        <span>📍</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className={styles.periodBadges}>
                      <span className={styles.periodBadge}>{role.period}</span>
                      <span className={styles.durationBadge}>{role.duration}</span>
                    </div>
                  </div>

                  {/* Bullet points from CV */}
                  <ul className={styles.pointsList}>
                    {role.points.map((point, pIdx) => (
                      <li key={pIdx} className={styles.pointItem}>
                        <span className={styles.pointBullet}>✦</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

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

        {/* Education & Training Block */}
        <div className={styles.educationWrapper}>
          <h3 className={styles.blockHeading}>
            <span className={styles.blockHeadingIcon}>🎓</span>
            <span>{t.experience.educationHeading}</span>
          </h3>

          <div className={styles.educationCard} id="education-card">
            <div className={styles.educationHeader}>
              <div className={styles.educationLogo}>🏛️</div>
              <div className={styles.educationMeta}>
                <h4 className={styles.degreeTitle}>{t.experience.education.degree}</h4>
                <p className={styles.institutionName}>{t.experience.education.institution}</p>
                <div className={styles.locationText}>
                  <span>📍</span>
                  <span>{t.experience.education.location}</span>
                </div>
              </div>
              <div className={styles.periodBadges}>
                <span className={styles.periodBadge}>{t.experience.education.period}</span>
                <span className={styles.durationBadge}>{t.experience.education.duration}</span>
              </div>
            </div>

            <p className={styles.educationDesc}>{t.experience.education.description}</p>

            <div className={styles.highlightsGrid}>
              {t.experience.education.highlights.map((h, i) => (
                <span key={i} className={styles.highlightPill}>
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
