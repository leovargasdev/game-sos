import styles from './styles.module.scss'
import systemRequirements from 'data/systemRequirements.json'

export const SystemRequirements = () => (
  <section
    className="background system-requirements"
    id="section-system-requirements"
  >
    <div className={styles.container}>
      <h3>Can My Computer Run this game?</h3>
      <h1>system requirements</h1>

      <div className={styles.requirements}>
        {systemRequirements.map(requirement => (
          <div key={requirement.name}>
            <strong>{requirement.name}:</strong>
            <p>{requirement.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
