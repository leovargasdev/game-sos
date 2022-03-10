import quotes from 'data/quotes.json'
import { FaTwitch } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Quotes = () => (
  <section className="background quotes" id="section-quotes">
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>What people think?</h3>
        <h1>Press quotes</h1>
        <p>
          Our goal is to create a product and service that you&apos;re satisfied
          with and use it every day. This is why we&apos;re constantly working
          on our services to make it better every day and really listen to what
          our users has to say.
        </p>

        <button>read more testimonials</button>
      </div>

      <ul className={styles.quotes}>
        {quotes.map(quote => (
          <li key={quote.username} className={styles.quote}>
            <header>
              <div className={styles['quote-user-image']}>
                <img src={quote.avatar_url} alt="" />
              </div>
              <div className={styles['quote-user-info']}>
                <strong>{quote.username}</strong>
                <span>{quote.tag}</span>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.twitch.tv/leovargasdev"
              >
                <FaTwitch />
              </a>
            </header>
            <p>{quote.text}</p>
            <time>{quote.date}</time>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
