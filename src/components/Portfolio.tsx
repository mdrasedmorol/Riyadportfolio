'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Portfolio.module.css';

const projectImages = [
  '/portfolio-branding.jpg',
  '/portfolio-app-ui.jpg',
  '/portfolio-poster.svg',
  '/portfolio-report.svg',
  '/portfolio-eco.svg',
  '/portfolio-motion.svg',
];

const categoryKeys = ['all', 'branding', 'uiux', 'print', 'motion'] as const;

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      { threshold: 0.05 }
    );
    const cards = sectionRef.current?.querySelectorAll(`.${styles.projectCard}`);
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [t, activeFilter]);

  const filteredProjects = t.portfolio.projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="portfolio" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Work</span>
          <h2 className={styles.sectionTitle}>{t.portfolio.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.portfolio.sectionSubtitle}</p>
        </div>

        <div className={styles.filters}>
          {categoryKeys.map((key) => (
            <button
              key={key}
              className={`${styles.filterBtn} ${activeFilter === key ? styles.active : ''}`}
              onClick={() => setActiveFilter(key)}
              id={`filter-${key}`}
            >
              {t.portfolio.categories[key]}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => {
            const originalIndex = t.portfolio.projects.indexOf(project);
            const imgSrc = projectImages[originalIndex] || projectImages[0];
            return (
              <div
                key={`${project.title}-${index}`}
                className={`${styles.projectCard} ${index === 0 ? styles.featured : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                id={`portfolio-card-${index}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={imgSrc}
                    alt={project.title}
                    width={800}
                    height={500}
                    className={styles.projectImage}
                    unoptimized={imgSrc.endsWith('.svg')}
                  />
                  <div className={`${styles.overlay} ${hoveredIndex === index ? styles.overlayVisible : ''}`}>
                    <div className={styles.overlayContent}>
                      <span className={styles.categoryBadge}>{project.category}</span>
                      <p className={styles.overlayDesc}>{project.description}</p>
                      <button className={styles.viewBtn} id={`view-project-${index}`}>
                        <span>{t.portfolio.viewProject}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.projectTag}>{tag}</span>
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
