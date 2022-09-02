import {NextPage} from "next";
import Head from "next/head";
import Text, {LabelText, SubText} from "../src/components/typo/Text";
import Emoji from "../src/components/emoji";
import {useState} from "react";
import {FaAngleRight, FaRegStar, FaStar} from "react-icons/fa";

const langsDB = [
    {
        name: 'frontend',
        langs: [
            ['devicon-html5-plain', 'html'],
            ['devicon-css3-plain', 'css'],
            ['devicon-tailwindcss-plain', 'tailwind'],
            ['devicon-sass-original', 'sass'],
            ['devicon-typescript-plain', 'typescript'],
            ['devicon-react-original', 'react'],
            ['devicon-nextjs-original', 'nextjs'],
        ]
    },
    {
        name: 'backend',
        langs: [
            ['devicon-nodejs-plain', 'nodejs'],
            ['devicon-express-original', 'express'],
            ['devicon-mongodb-plain', 'mongodb'],
            ['devicon-firebase-plain', 'firebase'],
            ['devicon-nginx-original', 'nginx']
        ]
    },
    {
        name: 'web3',
        langs: [
            ['devicon-solidity-plain', 'solidity'],
            ['content:pyteal', 'pyteal'],
        ]
    },
    {
        name: 'tools',
        langs: [
            ['devicon-docker-plain', 'docker'],
            ['devicon-git-plain', 'git'],
            ['devicon-webpack-plain', 'webpack'],
            ['devicon-discordjs-plain', 'discordjs'],
        ]
    }
]

const xpsDB = [
    {
        name: 'Python',
        start: new Date(2019, 3, 3),
        icon: 'devicon-python-plain',
        description: 'Started writing python as a first non-web language. Was trying to learn hacking and needed a language for automation.' +
            ' Python introduced me to a whole new world where I realised with code I had so much power, haha. This pushed' +
            ' me to learning other languages. Hence python is my first love and I just read books on it now, well for fun and others.',
        rate: 3
    },
    {
        name: 'Nodejs',
        start: new Date(2021, 4, 6),
        icon: 'devicon-nodejs-plain',
        description: 'Started nodejs as I realized it was a great language for web servers. Also, since it\'s in js a language' +
            ' i already knew, it will be easy to learn. I wondered how an interpreted single threaded language would function on a ' +
            'web server. Well, must say it\'s pretty cool, beats python by speed 😂',
        rate: 4
    },
    {
        name: 'Rust',
        start: new Date(2022, 7, 12),
        icon: 'devicon-rust-plain',
        description: 'This is a new language for me and I\'m currently reading "The Rust book" on their web page. Rust is a pretty' +
            ' cool language that provides the execution of cpp but adds great type safety and reduces the stress cpp brings. ' +
            'Imagine no garbage collector, just ownership to manage heap memory. Cool 😎',
        rate: 2
    },
    {
        name: 'C++',
        start: new Date(2022, 4, 9),
        icon: 'devicon-cplusplus-plain',
        description: 'Well, CPP is just a fun language for me. It however exposed me to a lot of things I didn\'t know about ' +
            'programming. It\'s my first compiled language and I learnt a bunch during. Was even to go over dsa with it but ' +
            'not anymore 😉. I\'ll just go with python.',
        rate: 1
    },
]

const About: NextPage = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className='h-full mt-10'>
            <Head>
                <title>About Xpan</title>
                <meta name="description" content="Oladunjoye Victor portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className='md:px-5 h-full'>

            <div className='w-full h-full flex flex-col-reverse md:flex-row gap-10 md:gap-3'>
                <div className='md:w-1/2 h-full'>
                    <h1><LabelText>Tools and crafts <Emoji symbol={'😅'} label={'grin'} /></LabelText></h1>
                    {
                        langsDB.map((Langs, x) => {
                            return(
                                <div key={x}>
                                    <h2 className='m-2 underline underline-offset-4 decoration-2 decoration-ascent-200'><SubText>{Langs.name}</SubText></h2>
                                    <ul className='mt-4 w-fit gap-4 flex flex-row justify-between flex-wrap'>
                                        {
                                            Langs.langs.map((lang, x)=>
                                                <li className='w-fit grid place-items-center' key={x}>
                                                    <div className='w-8 h-8 grid place-items-center hover:scale-110 text-xl rounded-full bg-gradient-to-br from-ascent-200/40 shadow-md'>
                                                        <i className={`${lang[0]} colored`}></i>
                                                    </div>
                                                    <Text font='ubuntu' color='text-gray-400' weight='bold'>{lang[1]}</Text>
                                                </li>)
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='md:w-1/2 h-full'>
                    <h1><LabelText>Languages and experiences</LabelText></h1>
                    <ul className=' my-3 flex flex-row justify-between w-full text-center border-t-2 border-ascent-200/30'>
                        {
                            xpsDB.map((xp, x)=>
                                <li key={x} className={`w-full h-12 pt-3 cursor-pointer hover:bg-ascent-200/40 -mt-0.5
                                ${tab == x && 'bg-ascent-200/30 border-t-2 border-ascent-200'}`}
                                onClick={()=>setTab(x)}>
                                    <Text weight='bold' font='ubuntu' color='text-ascent-300'>{xp.name}</Text>
                                </li>)
                        }
                    </ul>
                    <article>
                        <div className='my-2 mx-auto w-14 h-14 grid place-items-center hover:scale-110 text-3xl rounded-full bg-gradient-to-br from-ascent-200/40 shadow-md'>
                            <i className={`${xpsDB[tab].icon} colored`}></i>
                        </div>
                        <h2 className='my-2 text-gray-400'><SubText>Started<FaAngleRight className='inline' /></SubText>{xpsDB[tab].start.toDateString()}</h2>
                        <div className='my-2'>
                            <SubText>Description<FaAngleRight className='inline' /></SubText><Text color='text-gray-400'>{xpsDB[tab].description}</Text>
                        </div>
                        <div className='flex flex-row gap-1 items-center'>
                            <SubText>Level<FaAngleRight className='inline' /></SubText>
                            {
                                Array.from(Array(xpsDB[tab].rate).keys()).map(i => <FaStar key={i}/>)
                            }
                            {
                                Array.from(Array(6-xpsDB[tab].rate).keys()).map(i => <FaRegStar key={i}/>)
                            }
                        </div>
                    </article>
                </div>

                <div>

                </div>
            </div>
            </section>
        </div>
    )
}

export default About;