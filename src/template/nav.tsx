import Text from "../components/typo/Text";
import styles from '../../styles/Home.module.css'

const pages = ['home', 'about', 'blogs', 'contact']

const Nav = () => {
    const active = 'home'
    return (
        <nav className='bg-gray-100/20 p-5 flex flex-row justify-between items-center h-16 w-full fixed backdrop-blur-md shadow-rose-100'>
            <Text size='large' weight='black' color='bg-gradient-to-r from-ascent-200 to-black bg-clip-text text-transparent'>
                Xpan
            </Text>
            <ul className='hidden md:flex flex-row justify-between w-1/4 mx-auto'>
                {pages.map((page, x) =>
                    <li className={`${styles.navbar} relative cursor-pointer hover:bg-none p-1 px-3 rounded-md hover:shadow-lg`}
                        key={x}><Text weight='bold' font='roboto' color='text-ascent-200'>
                        {page}{page == active ? <span className={styles.blinking}>_</span> : ''}
                    </Text></li>)}
            </ul>
        </nav>
    )
}

export default Nav