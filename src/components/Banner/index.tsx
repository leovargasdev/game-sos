import styles from './styles.module.scss'

export const Banner = () => (
  <div className={styles.container}>
    <h1>SURVIVE AT ALL COSTS</h1>
    <h3>Experience new social battle royale game</h3>
    <button>
      Buy Now on Steam <span />
      $14.99
    </button>
  </div>
)
