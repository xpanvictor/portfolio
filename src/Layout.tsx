import {ReactNode, useState} from "react";
import Nav from "./template/nav";
import Body from "./components/body";

const Layout = ({children}: {children: ReactNode}) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <main className='flex flex-col min-h-screen bg-bgs-100 text-ascent-300' onClickCapture={()=>setShowMenu(false)}>
            {/* Navigation */}
            <Nav showMenu={showMenu} />
            <Body showMenu={showMenu} setShowMenu={setShowMenu} className='bg-bgs-300 inline-block flex-grow p-2 md:p-5'>
              {children}
            </Body>
        </main>
    )
}

export default Layout