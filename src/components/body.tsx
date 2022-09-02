import {ReactNode} from "react";
import {FaLongArrowAltUp, FaLongArrowAltDown, FaGithub, FaTwitter, FaWhatsapp, FaDiscord, FaBars} from "react-icons/fa";
import {IconType} from "react-icons";
import Text from "./typo/Text";

const navigators: IconType[] = [FaLongArrowAltUp, FaLongArrowAltDown]
const socials: IconType[] = [FaGithub, FaTwitter, FaDiscord, FaWhatsapp]

const Body = ({children, className}: {children: ReactNode, className: string}) => {
    return (
        <menu className={`${className} h-full w-full gap-4 md:gap-0 flex flex-col-reverse md:flex-row py-32 items-center`}>
            {/*right nav*/}
            <section className='w-fit h-fit top-0 flex flex-row md:flex-col justify-between'>
                {
                    navigators.map((Icon, x) =>
                    <Icon size={32} key={x} className='cursor-pointer -rotate-90 md:rotate-0 hover:bg-gradient-to-br from-ascent-200/40
                    rounded-full hover:text-ascent-200 text-ascent-300 p-2 w-fit h-fit hover:scale-150 transition-all duration-200' />)
                }
            </section>
            <article className='h-5/6 w-full'>
                {children}
            </article>
            {/*left social*/}
            <section className='w-fit h-fit top-0 flex md:flex-col'>
                {
                    socials.map((Icon, x) =>
                        <Icon size={24} key={x} className='cursor-pointer hover:bg-gradient-to-br from-ascent-200/40 h-fit w-fit
                        rounded-full hover:text-ascent-200 text-ascent-300 p-2 hover:scale-150 transition-all duration-200' />)
                }
            </section>
            {/*bottom nav*/}
            <section className='bg-black/20 z-30 md:p-5 grid place-items-center h-16 w-full
            fixed left-0 bottom-0 backdrop-blur-md shadow-rose-100'>
                <div className='flex flex-col md:flex-row justify-between md:w-4/5' onClick={()=>alert('todo: copy fn')}>
                    <Text className='cursor-copy mx-auto' weight='black' color='text-ascent-200'>&lt;!-- Introduction --&gt;</Text>
                    <Text weight='black' color='text-ascent-200'>&copy;xpanvictor 2022</Text>
                </div>
                <FaBars size={22} className='md:hidden absolute top-1/3 right-10' />
            </section>
        </menu>
    )
}

export default Body