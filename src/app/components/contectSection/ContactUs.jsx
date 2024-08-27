"use client"
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const ContactUs = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value

        }

        const JSONdata = JSON.stringify(data);
        const endpoints = "/api/send"

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSONdata,
        }

        const response = await fetch(endpoints, options);
        const resData = await response.json()
        console.log(resData);
        
        if (resData.status === 200) {
            console.log("message sent.");
            
            }
    }
    return (
        <>

            <h2 id='contact' className="text-center text-4xl lg:text-5xl font-bold  mt-20   text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                Contact Us
            </h2>
            <section  className=' grid md:grid-cols-2  py-24 gap-8 mx-10 md:mx-20'>
        
                <div>
                    <h4 className=' text-xl font-bold '>Let's Connect With Me.</h4>
                    <p className=' text-[#ADB7BE] text-lg my-5 w-[80%] '>
                        {" "}
                        I'm currently for new opportunities, may inbox is always open,
                        whether you have a question or just want to say hi, i'll
                        try my best to get back to you!
                    </p>

                    <div className=' text-3xl  socials flex flex-row gap-4'>
                        <Link href="https://github.com/kulsumparee">
                            <span className=' cursor-pointer hover:text-white '> <FaGithub /></span>
                        </Link>

                        <Link href="https://www.linkedin.com/in/kulsum-paree-b49503301/">
                            <span className=' cursor-pointer'> <FaLinkedin /></span>
                        </Link>

                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit}
                        className=' flex flex-col gap-6 mt-10 md:mt-0'>
                        <h1 className=' text-lg font-bold'> Please fill the form for more details...</h1>

                        <div>
                            <label htmlFor="name" id='name'> Your Name:</label>
                            <input type="text" name="name" id="name" className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 my-3 ' />
                        </div>
                        <div>
                            <label htmlFor="email" id='email'> Your Email:</label>
                            <input type="email" name="email" id="email" className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 my-3 ' />
                        </div>

                        <div>
                            <label htmlFor="subject" id='subject'> Subject:</label>
                            <input type="text" name="subject" id="subject" placeholder='Just say hi!' className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 my-3 ' />
                        </div>

                        <div>
                            <label htmlFor="message" id='message'> Message:</label>
                            <textarea type="text" name="message" id="message" placeholder=" Let's talk about... " className=' bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 my-3 ' />
                        </div>
                        <button
                            type='submit'
                            className=' bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full'
                        >
                            Send Message
                        </button>


                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs
