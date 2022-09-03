import Link from 'next/link'
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Text, {LabelText, SubText} from "../src/components/typo/Text";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

const projectsDB = [
    {
        name: 'Infologic',
        description: 'Infologic is a CMS I built while learning backend. It has a self built texteditor and was meant to be a site for bloggers to create their domain.' +
            ' The site has a lot of potential and the frequent updates will bring out the ' +
            'beauty in it. So say this version is just the tip of the iceberg. This is just a preview version using ejs with full backend fns. ' +
            'Will be converting it to a react app soon.',
        img: 'infologic.png',
        langs: [
            ['devicon-nodejs-plain', 'nodejs'],
            ['devicon-express-original', 'express'],
            ['devicon-mongodb-plain', 'mongodb'],
            ['devicon-css3-plain', 'css'],
        ],
        git: 'https://github.com/xpanvictor/Infologic',
        web: 'https://infolog.herokuapp.com/blogs'
    },
    {
        name: 'Eclass',
        description: 'Eclass is a webRTC video calling app. Future updates will aim to add the UI and make the app a fully ' +
            'fledged e-class. It\'ll support many users and will have a ton of functionalities to bridge the teachers and students' +
            '. To face it, we are moving to a point where everything will be done on the internet, haha.',
        img: 'eclass.png',
        langs: [
            ['devicon-nodejs-plain', 'nodejs'],
            ['devicon-express-original', 'express'],
            ['devicon-javascript-plain', 'javascript'],
            ['devicon-mongodb-plain', 'mongodb'],
            ['devicon-css3-plain', 'css'],
        ],
        git: 'https://github.com/xpanvictor/eClass',
        web: 'https://eclass9.herokuapp.com'
    },
    {
        name: 'Whitelist dapp',
        description: 'Just a whitelist dapp to hold a list of presale users for an NFT. I really cannot display most of my projects ' +
            'as theyre not open source :(',
        img: 'dapp.png',
        langs: [
            ['devicon-nodejs-plain', 'nodejs'],
            ['devicon-solidity-plain', 'solidity'],
            ['devicon-nextjs-original', 'nextjs'],
            ['devicon-css3-plain', 'css'],
        ],
        git: 'https://github.com/xpanvictor/whitelist_dapp',
        web: 'https://whitelist-dapp-azure.vercel.app/'
    }
]

const Projects = () => {
    return (
        <section className='mt-12 h-fit'>
            <Head>
                <title>About Xpan</title>
                <meta name="description" content="Oladunjoye Victor portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full h-fit'>
                <h1><LabelText>Some personal projects I&apos;ve worked on</LabelText></h1>
                <article className='w-full min-h-screen flex flex-col gap-10 py-5'>
                    {
                        projectsDB.map((project, x) =>
                            <div className={`my-3 h-fit grid md:grid-cols-2`} key={x}>
                                <div className='w-full h-fit bg-black/40 backdrop-blur-md rounded-lg shadow-lg shadow-black
                                p-2 border-2 border-ascent-200 relative z-10'>
                                    <h3 className='my-3'><SubText>{project.name}</SubText></h3>
                                    <p className='my-5'><Text color='text-gray-400'>
                                        {project.description}
                                    </Text></p>
                                    <ul className='mt-4 w-fit gap-4 flex flex-row justify-between flex-wrap'>
                                        {
                                            project.langs.map((lang, x)=>
                                                <li title={lang[1]} className='w-fit grid place-items-center' key={x}>
                                                    <div className='w-8 h-8 grid place-items-center hover:scale-110 text-xl rounded-full bg-gradient-to-br from-ascent-200/40 shadow-md'>
                                                        <i className={`${lang[0]} colored`}></i>
                                                    </div>
                                                </li>)
                                        }
                                    </ul>
                                    <ul className='mt-4 w-fit gap-4 flex flex-row justify-between flex-wrap'>
                                        <Link href={project.git}><a>
                                            <FaGithub size={24} key={x} className='cursor-pointer hover:bg-gradient-to-br from-ascent-200/40
                                         rounded-md hover:text-ascent-200 text-ascent-300 p-1 w-fit h-fit hover:scale-110 transition-all duration-200' />
                                        </a></Link>
                                        <Link href={project.web}><a>
                                            <FaExternalLinkAlt size={24} key={x} className='cursor-pointer rounded-md hover:bg-gradient-to-br
                                         from-ascent-200/40 hover:text-ascent-200 text-ascent-300 p-1 w-fit h-fit hover:scale-110 transition-all duration-200' />
                                        </a></Link>
                                    </ul>
                                </div>
                                <div className='w-4/5 md:w-full h-fit rounded-md -mt-3 rotate-12 translate-y-7 md:rotate-0 md:translate-y-0
                                 md:mt-12 ml-12 md:-ml-5 border-2 border-ascent-200'>
                                    <Image className='rounded-md' src={'/images/'+project.img} alt={'infologic'} width={16} height={6} layout='responsive' />
                                </div>
                            </div>)
                    }
                </article>
            </div>
        </section>
    )
}

export default Projects