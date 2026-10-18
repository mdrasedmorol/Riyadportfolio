'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language, languageNames } from '@/lib/translations';
import styles from './Navbar.module.css';

const languages: Language[] = ['en', 'bn', 'hi', 'zh'];

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'experience', 'portfolio', 'contact'];
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollTo('home')}>
          <span className={styles.logoText}>SRH</span>
          <span className={styles.logoDot}>.</span>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {(['home', 'experience', 'portfolio', 'contact'] as const).map((section) => (
            <li key={section}>
              <button
                className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
                onClick={() => scrollTo(section)}
                id={`nav-${section}`}
              >
                {t.nav[section]}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div className={styles.langSelector}>
            <button
              className={styles.langButton}
              onClick={() => setLangOpen(!langOpen)}
              id="language-selector-btn"
              aria-expanded={langOpen}
            >
              <span className={styles.langFlag}>🌐</span>
              <span>{languageNames[language]}</span>
              <span className={`${styles.langArrow} ${langOpen ? styles.open : ''}`}>▾</span>
            </button>
            {langOpen && (
              <div className={styles.langDropdown}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className={`${styles.langOption} ${language === lang ? styles.activeLang : ''}`}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    id={`lang-option-${lang}`}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
