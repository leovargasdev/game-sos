import Head from 'next/head'

import { Header } from 'components/Header'
import { Banner } from 'components/Banner'
import { About } from 'components/About'
import { Features } from 'components/Features'
import { SystemRequirements } from 'components/SystemRequirements'
import { Quotes } from 'components/Quotes'
import { Newsletter } from 'components/Newsletter'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SOS | GAME</title>
        <meta name="title" content="SOS GAME" />
        <meta name="description" content="SURVIVE AT ALL COSTS" />
      </Head>
      <div className={'background banner '.concat(styles.background)}>
        <Header />
        <Banner />
      </div>

      <About />
      <Features />
      <SystemRequirements />
      <Quotes />
      <Newsletter />

      <Footer />
    </div>
  )
}
