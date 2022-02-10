import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Header = () => {
  const [activeLanguages, setActiveLanguages] = useState<boolean>(false)

  return (
    <header className={styles.container}>
      <img src="logo.png" alt="Logo SOS" />

      <nav className={styles.navigation}>
        <ul>
          <li>MAIN</li>
          <li>about</li>
          <li>game features</li>
          <li>System requirements</li>
          <li>quotes</li>
        </ul>
      </nav>

      <div className={styles['navigation-right']}>
        <div className={styles.languages}>
          <button
            type="button"
            onClick={() => setActiveLanguages(!activeLanguages)}
          >
            ENG <FaChevronDown />
          </button>

          <ul className={activeLanguages ? styles.active : ''}>
            <li>RUS</li>
            <li>FRA</li>
            <li>DEU</li>
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
