import Link from 'next/link'
import {useRouter} from "next/router";
import Text from "../components/typo/Text";
import styles from '../../styles/Home.module.css'
import Loaders from '../../styles/Loaders.module.css'
import {FaPlay} from "react-icons/fa";
import {useState, useEffect} from "react";
import { motion } from 'framer-motion';


export const pages = ['home', 'about', 'blogs', 'projects', 'contact']

const Nav = ({showMenu}: {showMenu: boolean}) => {
    const {pathname} = useRouter()
    const active = pathname != '/' ? pathname.slice(1) : pages[0]
    const [musicPlaying, setMusicPlaying] = useState(false)
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    // eslint ignore exhaustive-deps
    useEffect(() => {
        if (!audio?.currentSrc) setAudio(new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3'))
        return (()=> {
            setAudio(null)
        })
    }, [])

    useEffect(()=>{
        if (audio) {
            if (musicPlaying) {
                audio.play()
                    .then(_ => console.log('playing'))
                    .catch(_ => {
                        alert('Network error');
                        setMusicPlaying(false);
                        audio.pause();
                    });
            } else {
                audio.pause();
            }
        }
    }, [musicPlaying])
    return (
        <nav className='bg-black/20 z-30 p-5 flex flex-row justify-between items-center h-16 w-full fixed backdrop-blur-md shadow-rose-100'>
            <Link href='/'><a>
                <motion.div initial='hidden' animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4
                        }
                    },
                }}>
                    <Text size='large' weight='black' color='bg-gradient-to-r from-ascent-200 to-bgs-200 bg-clip-text text-transparent'>
                        Xpan
                    </Text>
                </motion.div>
            </a></Link>
            <ul className='hidden md:flex flex-row justify-between w-1/4 mx-auto'>
                {pages.map((page, x) =>
                    <Link href={`/${page == pages[0] ? '': page}`} key={x}><a>
                        <li className={`${styles.navbar} relative cursor-pointer hover:bg-none p-1 px-3 hover:text-ascent-200 rounded-md hover:shadow-lg`}>
                            <Text weight='bold' font='pop' color={`${page == active ? 'text-ascent-200' : 'text-base'}`}>
                                {page}{page == active ? <span className={`${styles.blinking} text-bgs-200`}>_</span> : ''}
                            </Text></li>
                    </a></Link>
                )}
            </ul>
            <button onClick={()=>setMusicPlaying(!musicPlaying)}
                className='cursor-pointer hover:shadow-md hover:bg-gradient-to-br from-ascent-200/40 rounded-full p-3'>
                {
                    musicPlaying ?
                        <PlayingIcon />
                        :
                        <FaPlay fill='#B04828' />
                }
            </button>
            {/*mobile nav*/}
            <ul className={`${!showMenu && 'hidden'} fixed h-fit py-8 rounded-md border-2 border-ascent-200 mx-auto
             w-4/5 bg-black/80 backdrop-blur-xl top-44 z-40`}>
                {pages.map((page, x) =>
                    <Link href={`/${page == pages[0] ? '': page}`} key={x}><a>
                        <li className={`${styles.navbar} relative w-fit cursor-pointer hover:bg-none p-1 px-3 hover:text-ascent-200 rounded-md hover:shadow-lg`}>
                            <Text weight='bold' font='pop' color={`${page == active ? 'text-ascent-200' : 'text-base'}`}>
                                {page}{page == active ? <span className={`${styles.blinking} text-bgs-200`}>_</span> : ''}
                            </Text></li>
                    </a></Link>
                )}
            </ul>
        </nav>
    )
}

const PlayingIcon = () => {
    return (
        <div className={Loaders.music}>
            <span />
            <span />
            <span />
        </div>
    )

}

export default Nav