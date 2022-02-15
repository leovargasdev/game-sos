import styles from './styles.module.scss'

export const Newsletter = () => (
  <section>
    <div className={styles.container} id="section-newsletter">
      <img src="toten.png" alt="" />

      <div className={styles.content}>
        <h3>Want to stay in touch?</h3>
        <h1>newsletter SUBSCRIBE </h1>

        <p>
          In order to start receiving our news, all you have to do is enter your
          email address. Everything else will be taken care of by us. We will
          send you emails containing information about game. We don&apos;t spam.
        </p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="">Your email address</label>
            <input type="email" placeholder="Your email" />
          </div>
          <button type="submit">Subscribe now</button>
        </form>
      </div>
    </div>
  </section>
)
