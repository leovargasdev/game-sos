import styles from './styles.module.scss'

type SystemRequirementProps = {
  name: string
  description: string
}

const SYSTEM_REQUIREMENTS: SystemRequirementProps[] = [
  {
    name: 'OS:',
    description: 'Windows 7 64-bit only (No OSX support at this time)'
  },
  {
    name: 'pROCESSOR:',
    description: 'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ'
  },
  {
    name: 'mEMORY:',
    description: '8 GB RAM'
  },
  {
    name: 'storage:',
    description: '8 GB available space'
  },
  {
    name: 'GRAPHICS:',
    description:
      'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)'
  }
]

export const SystemRequirements = () => (
  <section
    className="background system-requirements"
    id="section-system-requirements"
  >
    <div className={styles.container}>
      <h3>Can My Computer Run this game?</h3>
      <h1>system requirements</h1>

      <div className={styles.requirements}>
        {SYSTEM_REQUIREMENTS.map(requirement => (
          <div key={requirement.name}>
            <strong>{requirement.name}</strong>
            <p>{requirement.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
