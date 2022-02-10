import Head from 'next/head'

import { Header } from 'components/Header'
import { Banner } from 'components/Banner'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <div className={styles.background}>
        <Header />
        <Banner />
      </div>
    </div>
  )
}
