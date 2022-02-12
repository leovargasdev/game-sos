import { useState } from 'react'
import styles from './styles.module.scss'

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>What’s so special?</h3>
          <h1>features</h1>

          <ul className={styles.features}>
            <li
              onClick={() => setActiveFeature(0)}
              className={activeFeature === 0 ? styles.active : ''}
            >
              <span />
              <strong>SURVIVE AT ALL COSTS</strong>
              <p>
                You have 30 minutes to find a relic, signal for extraction, and
                grab one of three spots on the rescue chopper.
              </p>
            </li>
            <li
              onClick={() => setActiveFeature(1)}
              className={activeFeature === 1 ? styles.active : ''}
            >
              <span />
              <strong>CREATE ALLIES AND ENEMIES</strong>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                vero quae dolorem ad iste. Totam et voluptatibus ipsam odio
                veniam, officiis dolor cum, eaque quam, sapiente quo vitae
                dolorem laboriosam?
              </p>
            </li>
            <li
              onClick={() => setActiveFeature(2)}
              className={activeFeature === 2 ? styles.active : ''}
            >
              <span />
              <strong>IMPRESS THE AUDIENCE</strong>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                aliquam modi in labore corporis voluptatem eos culpa dolorem,
                officiis facilis animi laudantium beatae obcaecati laboriosam
                tempore rem, ipsa reprehenderit fugiat.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
