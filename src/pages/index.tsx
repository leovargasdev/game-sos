import Head from 'next/head'
import { GetStaticProps } from 'next'

import styles from 'styles/home.module.scss'

type HomeProps = {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <section style={{ background: 'blue' }}>
        <div style={{ background: 'green' }}>
          <h1>olar</h1>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const title = 'NextJS Boilerplate'
  return { props: { title } }
}
