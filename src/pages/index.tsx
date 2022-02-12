import Head from 'next/head'

import { Header } from 'components/Header'
import { Banner } from 'components/Banner'
import { About } from 'components/About'
import { Features } from 'components/Features'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOS | GAME</title>
        <meta name="title" content="SOS GAME" />
        <meta name="description" content="SURVIVE AT ALL COSTS" />
      </Head>
      <div className={styles.background}>
        <Header />
        <Banner />
      </div>

      <About />
      <Features />
    </div>
  )
}
