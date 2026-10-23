'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{t.about.sectionLabel}</span>
          <h2 className={styles.sectionTitle}>{t.about.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.about.sectionSubtitle}</p>
        </div>

        {/* Bio Grid: Story Card + Quick Info / Download Card */}
        <div className={styles.bioGrid}>
          {/* Left: About Me & Professional Profile */}
          <div className={styles.storyCard}>
            <div className={styles.bioBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockTitleBadge}>👤</span>
                {t.about.aboutMeTitle}
              </h3>
              <p className={styles.bioParagraph}>{t.about.aboutMeText}</p>
            </div>

            <div className={styles.bioBlock}>
              <h3 className={styles.blockTitle}>
                <span className={styles.blockTitleBadge}>🎯</span>
                {t.about.profileTitle}
              </h3>
              <p className={styles.bioParagraph}>{t.about.profileText}</p>
            </div>

            <div className={styles.taglineBanner}>
              <span className={styles.taglineIcon}>✨</span>
              <span className={styles.taglineText}>&ldquo;{t.about.tagline}&rdquo;</span>
            </div>
          </div>

          {/* Right: Quick Info, Languages & CV Action Buttons */}
          <div className={styles.infoCard}>
            <div>
              <h3 className={styles.infoTitle}>Curriculum Vitae Details</h3>
              <div className={styles.infoList} style={{ marginTop: '20px' }}>
                <div className={styles.infoRow}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <div className={styles.infoLabel}>{t.about.quickInfo.locationLabel}</div>
                    <div className={styles.infoValue}>{t.about.quickInfo.locationValue}</div>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <div className={styles.infoLabel}>{t.about.quickInfo.emailLabel}</div>
                    <div className={styles.infoValue}>
                      <a href={`mailto:${t.contact.emailValue}`} className={styles.infoLink}>
                        {t.contact.emailValue}
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <div className={styles.infoLabel}>{t.about.quickInfo.phoneLabel}</div>
                    <div className={styles.infoValue}>
                      <a href={`tel:${t.contact.phoneValue.replace(/[^0-9+]/g, '')}`} className={styles.infoLink}>
                        {t.contact.phoneValue}
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.infoIcon}>🎓</div>
                  <div>
                    <div className={styles.infoLabel}>{t.about.quickInfo.educationLabel}</div>
                    <div className={styles.infoValue}>{t.about.quickInfo.educationValue}</div>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.infoIcon}>⚡</div>
                  <div>
                    <div className={styles.infoLabel}>{t.about.quickInfo.statusLabel}</div>
                    <div className={styles.infoValue} style={{ color: '#38bdf8' }}>
                      {t.about.quickInfo.statusValue}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className={styles.langBlock}>
                <div className={styles.langTitle}>{t.about.languagesTitle}</div>
                <div className={styles.langBadges}>
                  {t.about.languages.map((lang, idx) => (
                    <div key={idx} className={styles.langBadge}>
                      <span className={styles.langName}>{lang.name}</span>
                      <span className={styles.langLevel}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CV Download & Preview Buttons */}
            <div className={styles.cvActions}>
              <a
                href="/Sheikh-Riyad-Hassan-CV.pdf"
                download="Sheikh-Riyad-Hassan-CV.pdf"
                className={styles.downloadCvBtn}
                id="about-download-cv-pdf"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>{t.about.downloadCvBtn}</span>
              </a>

              <button
                type="button"
                className={styles.previewCvBtn}
                onClick={() => setIsModalOpen(true)}
                id="about-preview-cv-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>{t.about.previewCvBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Personal Strengths Section from CV */}
        <div className={styles.strengthsHeader}>
          <h3 className={styles.strengthsTitle}>{t.about.strengthsTitle}</h3>
          <p className={styles.strengthsSubtitle}>{t.about.strengthsSubtitle}</p>
        </div>

        <div className={styles.strengthsGrid}>
          {t.about.strengths.map((item, idx) => (
            <div key={idx} className={styles.strengthCard} id={`strength-card-${idx}`}>
              <div className={styles.strengthIconWrap}>{item.icon}</div>
              <h4 className={styles.strengthName}>{item.title}</h4>
              <p className={styles.strengthDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CV Preview Modal */}
      {isModalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <h3 className={styles.modalTitle}>{t.cvModal.title}</h3>
                <span className={styles.modalSubtitle}>{t.cvModal.subtitle}</span>
              </div>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setIsModalOpen(false)}
                aria-label={t.cvModal.close}
                id="cv-modal-close-btn"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <Image
                src="/Sheikh-Riyad-Hassan-CV.jpg"
                alt="Sheikh Riyad Hassan CV"
                width={683}
                height={1024}
                className={styles.cvPreviewImage}
                priority
              />
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.modalBtnSecondary}
                onClick={() => setIsModalOpen(false)}
              >
                {t.cvModal.close}
              </button>

              <a
                href="/Sheikh-Riyad-Hassan-CV.jpg"
                download="Sheikh-Riyad-Hassan-CV.jpg"
                className={styles.modalBtnSecondary}
                id="modal-download-jpg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>{t.cvModal.downloadJpg}</span>
              </a>

              <a
                href="/Sheikh-Riyad-Hassan-CV.pdf"
                download="Sheikh-Riyad-Hassan-CV.pdf"
                className={styles.modalBtnPrimary}
                id="modal-download-pdf"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>{t.cvModal.downloadPdf}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
