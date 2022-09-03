import Head from "next/head";
import {FormEvent, useEffect, useState} from "react";
import {FaAngleRight} from "react-icons/fa";
import {SubText} from "../src/components/typo/Text";
import Button from "../src/components/buttons";
import Link from "next/link";
import emailjs from "@emailjs/browser"

const Contact = () => {
    useEffect(()=>{
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head?.appendChild(script);
    }, [])

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const data = {name, message}
        emailjs.send(process.env.SERVICE_ID || '',
            'template_5jwdph7', data,
            process.env.PUBLIC || '')
            .then(function(response) {
                setStatus(`Success, message sent successfully`)
            }, function(err) {
                setStatus('Error, try again later!')
                console.log('FAILED...', err);
            });
    }
    return (
        <section className='h-full md:h-screen'>
            <Head>
                <title>Contact Xpan</title>
            </Head>

            <div className='h-full w-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full'>
                    <form className='font-roboto' onSubmit={(e)=>handleSubmit(e)}>
                        <SubText><label>Email</label></SubText><br/>
                        <input type='email' name='name' placeholder='Email is better or discord' value={name} onChange={(e)=>setName(e.target.value)}
                               className='bg-transparent my-2 outline-none border-2 border-ascent-200 rounded-md p-2' />
                        <br/>
                        <textarea name='message' placeholder='Tell me, I will deliver your message' value={message} onChange={(e)=>setMessage(e.target.value)}
                                  className='bg-transparent my-2 outline-none border-2 w-full md:w-2/3 h-64 border-ascent-200 rounded-md p-2' />
                        <br/>
                        <SubText>{status}</SubText><br/>
                        <Button label='Submit' onClick={()=>{}} type='submit' />
                    </form>
                </div>
                {/*divider*/}
                <div className='w-full md:w-2 h-1 md:h-4/6 mt-5 md:mt-0 rounded-sm bg-ascent-200 grid place-items-center'>
                    <span className='bg-bgs-100 md:-translate-x-3 -translate-y-3 md:translate-y-0 grid place-items-center w-8 h-8'>OR</span>
                </div>
                {/* oths */}
                <div className='w-full h-full pt-10 relative'>
                    <div className='absolute top-1/3 left-12 underline underline-offset-4 decoration-ascent-200'>
                        <SubText><Link href='https://calendly.com/xpanvictor/30min'>
                            <a>Calendly</a>
                        </Link> </SubText><br/>
                    </div>
                    <div className="calendly-inline-widget m-0 p-0 w-full h-screen md:h-full"
                         data-url="https://calendly.com/xpanvictor/30min?hide_gdpr_banner=1" />
                </div>
                
            </div>
        </section>
    )
}


export default Contact