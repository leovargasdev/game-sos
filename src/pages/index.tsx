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
      <h1>{title}</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const title = 'NextJS Boilerplate'
  return { props: { title } }
}
