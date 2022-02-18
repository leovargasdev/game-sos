import Link from 'next/link'
import { FaTwitch } from 'react-icons/fa'

import styles from './styles.module.scss'

const QUOTES_USERS = [
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/4248081?s=80&v=4',
    username: 'Evan Lahti',
    tag: 'PC Gamer',
    text: '"One of my gaming highlights of the year."',
    date: 'October 18, 2018'
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/11177716?s=80&v=4',
    username: 'Jada Griffin',
    tag: 'Nerdreactor',
    text: '“The next big thing in the world of streaming and survival games.”',
    date: 'December 21, 2018'
  },
  {
    avatar_url: 'https://avatars.githubusercontent.com/u/3390598?s=80&v=4',
    username: 'Aaron Williams',
    tag: 'Uproxx',
    text: '“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”',
    date: 'December 24, 2018'
  }
]

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
        {QUOTES_USERS.map(quote => (
          <li key={quote.username} className={styles.quote}>
            <header>
              <div className={styles['quote-user-image']}>
                <img src={quote.avatar_url} alt="" />
              </div>
              <div className={styles['quote-user-info']}>
                <strong>{quote.username}</strong>
                <span>{quote.tag}</span>
              </div>
              <Link href="/">
                <a>
                  <FaTwitch />
                </a>
              </Link>
            </header>
            <p>{quote.text}</p>
            <time>{quote.date}</time>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
