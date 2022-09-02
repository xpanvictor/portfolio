import {ReactNode} from "react";
import Nav from "./template/nav";
import Body from "./components/body";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <main className='flex flex-col min-h-screen bg-bgs-100 text-ascent-300'>
            {/* Navigation */}
            <Nav />
            <Body className='bg-bgs-300 inline-block flex-grow p-2 md:p-5'>
              {children}
            </Body>
        </main>
    )
}

export default Layout