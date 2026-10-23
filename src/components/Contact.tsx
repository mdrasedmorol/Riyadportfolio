'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t.contact.emailLabel,
      value: t.contact.emailValue,
      href: `mailto:${t.contact.emailValue}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t.contact.phoneLabel,
      value: t.contact.phoneValue,
      href: `tel:${t.contact.phoneValue.replace(/[^0-9+]/g, '')}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t.contact.locationLabel,
      value: t.contact.locationValue,
      href: 'https://maps.google.com/?q=Khulna,+Bangladesh',
    },
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bgAccent}></div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{t.contact.sectionLabel}</span>
          <h2 className={styles.sectionTitle}>{t.contact.sectionTitle}</h2>
          <p className={styles.sectionSubtitle}>{t.contact.sectionSubtitle}</p>
        </div>

        <div className={styles.content}>
          {/* Left – Real Contact info & CV Download card */}
          <div className={styles.infoPanel}>
            <div className={styles.contactItems}>
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={styles.contactItem}
                  id={`contact-item-${i}`}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume / CV Card */}
            <div className={styles.cvCard}>
              <div className={styles.cvCardTitle}>
                <span>📄</span>
                <span>Curriculum Vitae</span>
              </div>
              <p className={styles.cvCardText}>{t.contact.downloadCvText}</p>
              <a
                href="/Sheikh-Riyad-Hassan-CV.pdf"
                download="Sheikh-Riyad-Hassan-CV.pdf"
                className={styles.cvCardDownloadBtn}
                id="contact-download-cv-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                <span>Download CV (PDF)</span>
              </a>
            </div>

            <div className={styles.availability}>
              <div className={styles.availabilityDot}></div>
              <span>{t.contact.availabilityText}</span>
            </div>
          </div>

          {/* Right – Form */}
          <div className={styles.formPanel}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <p>{t.contact.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    id="contact-name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    id="contact-email"
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    id="contact-message"
                  />
                </div>
                <button
                  type="submit"
                  className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
                  disabled={loading}
                  id="contact-submit"
                >
                  {loading ? (
                    <span className={styles.spinner}></span>
                  ) : (
                    <>
                      <span>{t.contact.sendButton}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
