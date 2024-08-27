"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


const HeroSection = () => {

    const [seeMore, setSeeMore] = useState(true)
    return (
        <div className='w-full h-full px-10  lg:px-20 py-40   grid sm:grid-cols-1  md:grid-cols-12 lg:grid-cols-12 '>

            <div className=' col-span-6 md:col-span-8 lg:col-span-9'>
                <h1 className=' text-5xl sm:text-6xl md:text-6xl lg:text-7xl w-full  font-bold'>
                    <span className=' text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600'>Hello,I'M {""}</span>
                </h1>
                <div className='w-full text-5xl sm:text-6xl md:text-5xl lg:text-7xl mt-3 '>
                    <TypeAnimation
                        sequence={[
                            'Kulsum',
                            1000,
                            'Front-end Developer',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block', fontWeight: 'bold', width: "100%" }}
                        repeat={Infinity}
                       

                    />
                </div>
                <div>
                    {seeMore ? (

                    <p className=' sm:w-[60%] md:w-[80%] lg:w-[80%] py-4 text-lg lg:text-xl text-slate-200'>
                        I'm a Front end Web Developer with a passion for creating
                        interactive and responsive web applications. I have experience work with
                        HTML, CSS, Javascript, React, Redux, and Nextjs... <br />
                        <button className=' mt-3 border-b border-purple-500  text-lg italic' onClick={() => setSeeMore(false)}>More About Me...</button>
                    </p>
                    ) : (
                            <p className=' sm:w-[60%] md:w-[80%] lg:w-[80%] py-4 text-lg lg:text-xl text-slate-200'>
                                I'm a Front end Web Developer with a passion for creating
                                interactive and responsive web applications. I have experience work with
                                HTML, CSS, Javascript, React, Redux, and Nextjs.
                                I'm a quick learner and I'm always looking to expend my knowledge
                                and my skill set.I'm a team player and I'm excited to work with
                                others to cerate amazing applications.</p>  
                    )}
                   
                </div>

                <div className='  w-[100%] my-6'>
                    <button className=' px-10 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  capitalize text-white font-bold  '> HIRE ME</button>
                   
                    <Button
                        className=' mb-5 md:mb-0  ml-2 sm:ml-2 md:ml-4  lg:ml-5 mt-5 lg:mt-0 px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white font-bold '
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        
                    >
                        <span className='  px-6 py-2 bg-[#121212] hover:bg-slate-800 rounded-full  '>Download CV</span>

                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>
            </div>

            <div className=' mt-10  md:mt-0  md:ml-0 lg:ml-0 col-span-6 md:col-span-4 lg:col-span-3 '>
                <Image
                    src="/Images/hero-image.png"
                    alt='hero image'
                    width={300}
                    height={300}
                    className='  bg-slate-900 rounded-full border-4 border-e-pink-300  border-x-blue-600 border-y-purple-600  '
                />
                

            </div>
        </div>
    )
}

export default HeroSection
