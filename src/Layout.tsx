import {ReactNode} from "react";
import Nav from "./template/nav";

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <main className='flex flex-col min-h-screen bg-gray-200'>
            {/* Navigation */}
            <Nav />
            <span className='bg-bgs-300 inline-block flex-grow mt-16'>
              {children}
            </span>
        </main>
    )
}

export default Layout