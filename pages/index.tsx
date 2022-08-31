import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Text from "../src/components/typo/Text";

const Home: NextPage = () => {
  return (
    <div className='mt-2'>
      <Head>
        <title>Xpan</title>
        <meta name="description" content="Oladunjoye Victor portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='px-5'>
        <div className='bg-white rounded-md w-36 p-2 text-right'>
            Hello, I'm <Text size='big' weight='bold' color='bg-gradient-to-r from-ascent-200 to-black bg-clip-text text-transparent'>Victor</Text>
        </div>
      </section>
    </div>
  )
}

export default Home
