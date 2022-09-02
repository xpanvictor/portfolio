import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Text, {SubText, LabelText} from "../src/components/typo/Text";
import Emoji from "../src/components/emoji";
import {useState} from "react";
import Button from "../src/components/buttons";

const Home: NextPage = () => {
  return (
    <div className='h-full'>
      <Head>
        <title>Xpan</title>
        <meta name="description" content="Oladunjoye Victor portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='md:px-5 h-full'>

          <div className='h-full w-full'>
              <div className='bg-bgs-200/30 rounded-md w-fit h-fit p-2 drop-shadow-lg'>
                  <Text weight='bold'><Emoji symbol={'👋'} label={'waving hand'} />Welcome, I&apos;ve been waiting for you</Text>
              </div>

              <div className='md:w-4/5 h-4/5 mx-auto mt-8 p-3'>
                  <h3><SubText>Hey, my name is</SubText></h3>
                  <h1 className='mt-6'><LabelText>Oladunjoye Victor Surprise<span className={styles.blinking}>.</span></LabelText></h1>
                  <h1 className='mt-4'><LabelText color='text-gray-400' size='large'>
                      A fullstack developer going rusty <StyledName label={':)'} />
                  </LabelText></h1>
                  <p className='mt-4'><Text font='inter' color='text-gray-400'>
                      I have been writing code for a while now: generally more than (shush, tell no one!) 4 years, but I
                      only started writing officially for 2 years ago. Yh, officially as writing with frameworks, for projects and
                      not just some curiosity based fun code. <br />
                      Curiosity begot coding
                      (seriously said that <Emoji symbol={'😅'} label={'grin'} />)
                  </Text></p>
                  <p className='mt-6 hidden md:block'><Text color='text-gray-400'>
                      I am on a journey of exploring Science, Technology, Engineering and Maths. I am a lover of
                      &nbsp;<span className='bg-bgs-200/90 rounded-md w-fit h-fit p-2 drop-shadow-lg'><StyledName label={'STEM'}/></span>
                  </Text></p>

                  <p className='mt-4'>
                      <Button label='Resume' onClick={()=>alert('yes')} />
                  </p>
              </div>


              {/*<div className='mt-8 rounded-md w-3/4 h-fit p-2'>
                  <p>
                      I&apos;m <Text size='big' weight='bold'><StyledName label={'Oladunjoye Victor Surprise'} /></Text>
                  </p>
                  <p>
                      <Text>(Oops, an handful <Emoji symbol={'🙂'} label={'smile'} />).</Text>
                  </p>
                  <p><Text>
                      I am just trying to figure out what the universe truly is. <br />
                      Curiosity begot coding
                      (seriously said that <Emoji symbol={'😅'} label={'grin'} />)
                  </Text></p>
                  <p><Text>
                      I really have some weird opinions of the universe and at times, I simply just can&apos;t ignore them.
                      So, I admit myself into my own world and explore madam universe.
                  </Text></p>
              </div>

              <ul className='bg-white rounded-md text-right w-fit h-fit m-10 p-2 px-6 drop-shadow-lg font-sans font-bold'>
                  <li>Full stack web developer</li>
                  <li>Web3 enthusiast</li>
                  <li>Lover of science</li>
                  <li>First love is python <StyledName label={':)'} /></li>
                  <li>Now going rusty <StyledName label={'(a RUSTacean)'} /></li>
              </ul>*/}
          </div>
      </section>
    </div>
  )
}

const StyledName = ({label}: {label: string}) =>
    <span className='font-black bg-gradient-to-r from-ascent-200 to-black bg-clip-text text-transparent'>
        {label}
    </span>

export default Home
