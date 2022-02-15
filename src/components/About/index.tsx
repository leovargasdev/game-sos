import { useState } from 'react'
import styles from './styles.module.scss'

export const About = () => {
  const [images, setImages] = useState<string[]>([
    'screenshots/1.png',
    'screenshots/2.png',
    'screenshots/3.png',
    'screenshots/4.png',
    'screenshots/5.png'
  ])
  const [activeImage, setActiveImage] = useState<string>('screenshot-1.png')

  const handleChangeActiveImage = () => {
    const firstImage = images.shift()
    setImages([...images, firstImage])
    setActiveImage(images[0])
  }

  return (
    <section className="background about" id="section-about">
      <div className={styles.content}>
        <div className={styles.description}>
          <h3>What is SOS?</h3>
          <h1>social battle royale game</h1>
          <p>
            Each round, you and 15 other contestants compete to escape a deadly
            island filled with monsters. The trick is: three people can survive.
            Will you run solo or form friendships with others to escape?
          </p>
          <p>
            Making the right decisions could be the difference between{' '}
            <span>life and death.</span>
          </p>
        </div>

        <div className={styles.carousel}>
          <ul>
            {images.map(image => (
              <li key={image} className={styles.image}>
                <img src={image} alt="" />
              </li>
            ))}
          </ul>

          <div className={styles['carousel-controll']}>
            <span className={activeImage.includes('1') ? styles.active : ''} />
            <span className={activeImage.includes('2') ? styles.active : ''} />
            <span className={activeImage.includes('3') ? styles.active : ''} />
            <span className={activeImage.includes('4') ? styles.active : ''} />
            <span className={activeImage.includes('5') ? styles.active : ''} />
          </div>

          <button onClick={handleChangeActiveImage}>
            <img src="/icons/switch.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}
