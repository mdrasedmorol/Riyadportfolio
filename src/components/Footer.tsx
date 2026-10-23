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
          <p className={styles.tagline}>“{t.footer.tagline}”</p>
          <div className={styles.skills}>
            {[
              'Brand Identity & Logo Design',
              'Social Media Design',
              'Print Design',
              'Motion Graphics & Video Editing',
              'Typography & Layout',
              'Color Grading',
            ].map((s) => (
              <span key={s} className={styles.skill}>{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Sheikh Riyad Hassan. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="/Sheikh-Riyad-Hassan-CV.pdf"
              download="Sheikh-Riyad-Hassan-CV.pdf"
              style={{
                color: '#38bdf8',
                fontSize: '0.85rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              id="footer-download-cv"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>Download CV</span>
            </a>
            <p className={styles.madeWith}>{t.footer.madeWith} ♥</p>
          </div>
          <button className={styles.backToTop} onClick={scrollTop} id="back-to-top" aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
