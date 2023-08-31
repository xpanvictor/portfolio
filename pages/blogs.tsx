import Head from "next/head";
import Image from "next/image"
import Text, {LabelText, SubText} from "../src/components/typo/Text";
import {useEffect} from "react";
import {FaExternalLinkAlt} from "react-icons/fa";
import Link from "next/link";

const blogsDB = [
    {
        title: 'My personal blog site',
        img: '',
        description: 'I document my writings into my personal blog site. Content is more important thhan the extravagant styling so I keep it markdown. Welcome to my space',
        url: 'https://xpanvictor.github.io/'
    },
    {
        title: 'JS Functional OOP and reduce',
        img: '/images/blog_func.png',
        description: 'So as a developer, we interact and make use of Object Oriented practices a lot. It\'s either we are instantiating an object of a class, calling a method of a class or other things like that. The best explanation of OOP I\'ve seen is that from Steve Jobs where he described it say...',
        url: 'https//xpan.hashnode.dev/js-functional-oop-and-reduce#heading-the-reduce-method-of-arrays'
    }
]

const Blogs = () => {
    return (
        <section className='h-full'>
            <Head>
                <title>Xpan Blogs</title>
            </Head>
            <div className='w-full h-full'>
                <h1><LabelText>My blogs</LabelText></h1>
                <div className='w-full h-96 my-8'>
                    {
                        blogsDB.map((blog, index) =>
                            <div key={index} className='w-full md:h-52 grid md:grid-cols-7 md:grid-rows-4 gap-3'>
                                <div className='md:row-span-4 col-span-7 md:col-span-2 w-full'>
                                    <Image src={blog.img} alt={blog.title} height={4} width={8} layout='responsive' />
                                </div>
                                <h1 className='col-span-5'><SubText>{blog.title}</SubText></h1>
                                <p className='col-span-5 row-span-2 overflow-hidden'><Text color='text-gray-400'>
                                    {blog.description}
                                </Text></p>
                                <Link to={blog.url}>
                                    <a>
                                        <FaExternalLinkAlt size={24} className='cursor-pointer hover:bg-gradient-to-br from-ascent-200/40
                                         rounded-md hover:text-ascent-200 text-ascent-300 p-1 w-fit h-fit hover:scale-110 transition-all duration-200' />
                                    </a>
                                </Link>
                            </div>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Blogs
