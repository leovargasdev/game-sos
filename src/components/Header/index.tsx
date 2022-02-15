import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import styles from './styles.module.scss'

type Language = 'eng' | 'rus' | 'fra' | 'deu' | 'pt-br'

const LANGUAGES: Language[] = ['eng', 'rus', 'fra', 'deu', 'pt-br']

export const Header = () => {
  const [activeLanguage, setActiveLanguage] = useState<Language>('eng')
  const [toggleLanguages, setToggleLanguages] = useState<boolean>(false)

  const handleChangeLanguage = (language: Language) => {
    setActiveLanguage(language)
    setToggleLanguages(false)
  }

  return (
    <header className={styles.container}>
      <img src="logo.png" alt="Logo SOS" />

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="">MAIN</a>
          </li>
          <li>
            <a href="#section-about">about</a>
          </li>
          <li>
            <a href="#section-features">game features</a>
          </li>
          <li>
            <a href="#section-system-requirements">System requirements</a>
          </li>
          <li>
            <a href="#section-quotes">quotes</a>
          </li>
        </ul>
      </nav>

      <div className={styles['navigation-right']}>
        <div className={styles.languages}>
          <button
            type="button"
            onClick={() => setToggleLanguages(!toggleLanguages)}
          >
            {activeLanguage} <FaChevronDown />
          </button>

          <ul className={toggleLanguages ? styles.active : ''}>
            {LANGUAGES.map(language => (
              <li
                key={language}
                onClick={() => handleChangeLanguage(language)}
                className={
                  language === activeLanguage ? styles['selected-language'] : ''
                }
              >
                {language}
              </li>
            ))}
          </ul>
        </div>

        <a href="/">
          <img src="/icons/xbox.svg" alt="" />
        </a>
        <a href="/">
          <img src="/icons/steam.svg" alt="" />
        </a>
      </div>
    </header>
  )
}
