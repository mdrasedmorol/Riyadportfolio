'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Skills.module.css';

export default function Skills() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const softwareSkills = t.skills.items.filter((item) => item.category === 'software');
  const creativeSkills = t.skills.items.filter((item) => item.category === 'creative');

  const getBadgeClass = (name: string) => {
    if (name.includes('Illustrator')) return styles.badgeAi;
    if (name.includes('Photoshop')) return styles.badgePs;
    if (name.includes('InDesign')) return styles.badgeId;
    if (name.includes('Premiere')) return styles.badgePr;
    return styles.badgeGen;
  };

  const getShortTag = (name: string) => {
    if (name.includes('Illustrator')) return 'Ai';
    if (name.includes('Photoshop')) return 'Ps';
    if (name.includes('InDesign')) return 'Id';
    if (name.includes('Premiere')) return 'Pr';
    return '✦';
  };

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{t.skills.sectionLabel}</span>
          <h2 className={styles.sectionTitle}>{t.skills.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.skills.sectionSubtitle}</p>
        </div>

        {/* 2-Column Skills Cards */}
        <div className={styles.skillsGrid}>
          {/* Software Skills */}
          <div className={styles.skillCategoryCard}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>💻</span>
              {t.skills.softwareTitle}
            </h3>
            <div className={styles.skillBarsList}>
              {softwareSkills.map((skill, idx) => (
                <div key={idx} className={styles.skillItem} id={`software-skill-${idx}`}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>
                      <span className={`${styles.softwareBadge} ${getBadgeClass(skill.name)}`}>
                        {getShortTag(skill.name)}
                      </span>
                      {skill.name}
                    </span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={styles.fill}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${idx * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Specializations */}
          <div className={styles.skillCategoryCard}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>🎨</span>
              {t.skills.specialtiesTitle}
            </h3>
            <div className={styles.skillBarsList}>
              {creativeSkills.map((skill, idx) => (
                <div key={idx} className={styles.skillItem} id={`creative-skill-${idx}`}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>
                      <span className={`${styles.softwareBadge} ${styles.badgeGen}`}>★</span>
                      {skill.name}
                    </span>
                    <span className={styles.skillPercentage}>{skill.level}%</span>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={styles.fill}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(idx + 4) * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Platforms from CV */}
        <div className={styles.toolsCard}>
          <h3 className={styles.toolsTitle}>{t.skills.toolsTitle}</h3>
          <div className={styles.toolsGrid}>
            {t.skills.tools.map((tool, idx) => (
              <div key={idx} className={styles.toolItem} id={`tool-platform-${idx}`}>
                <div className={styles.toolIconBox}>{tool.icon}</div>
                <div className={styles.toolName}>{tool.name}</div>
                <div className={styles.toolCategory}>{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
