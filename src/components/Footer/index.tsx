import Link from 'next/link'
import { FaFacebookF, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.links}>
      <img src="logo.png" alt="" />
      <ul>
        <li>MAIN</li>
        <li>about</li>
        <li>game features</li>
        <li>System requirements</li>
        <li>quotes</li>
      </ul>

      <div className={styles['social-media']}>
        <Link href="https://github.com/leovargasdev">
          <a target="_blank">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="https://twitter.com/leovargasdev">
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://instagram.com/leuvargas">
          <a target="_blank">
            <FaYoutube />
          </a>
        </Link>
        <Link href="https://twitch.com/leovargasdev">
          <a target="_blank">
            <FaTwitch />
          </a>
        </Link>
      </div>
    </div>
    <div className={styles.content}>
      <h6> © 2018 Outpost Games, Inc. All Rights Reserved</h6>

      <ul>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms of Services</a>
        </li>
        <li>
          <a href="/">Code of Conduct </a>
        </li>
      </ul>
    </div>
  </footer>
)
