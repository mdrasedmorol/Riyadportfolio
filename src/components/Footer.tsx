'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoText}>SRH</span>
            <span className={styles.logoDot}>.</span>
          </div>
          <p className={styles.tagline}>Crafting Visual Excellence</p>
          <div className={styles.skills}>
            {['Brand Identity', 'UI/UX Design', 'Motion Graphics', 'Print Design', 'Art Direction'].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Sheikh Riad Hasan. {t.footer.rights}
          </p>
          <p className={styles.madeWith}>{t.footer.madeWith} ♥</p>
          <button className={styles.backToTop} onClick={scrollTop} id="back-to-top" aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
