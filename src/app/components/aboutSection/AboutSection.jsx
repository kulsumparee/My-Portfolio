"use client"

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
           < ul >
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>NextJs</li>
        </ ul >
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            < ul >
               
                
            </ ul >
        )
    },
    {
        title: "Experience",
        id: "Experience",
        content: (
            < ul >
               

            </ ul >
        )
    }
]
const AboutSection = () => {

    const [tab, setTabs] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(() => {
            setTabs(id);
        }
        )
    }
    return (
        <section className=' mx-10 lg:mx-20 text-white'>
            <div className=' grid md:grid-cols-2  py-8 px-4 md:gap-10 xl:gap-16 xl:py-16 '>
                <Image src="/images/about-image.png" width={400} height={400} />
                <div>


                    <h1 className=' mt-10 md:mt-0 lg:mt-0 text-5xl font-bold mb-4  text-transparent bg-clip-text  bg-gradient-to-br to-blue-500 from-purple-500 via-pink-500'>About Me</h1>
                    <p className=' text-base lg:text-lg '>I'm a Front end Web Developer with a passion for creating
                        interactive and responsive web applications. I have experience work with
                        HTML, CSS, Javascript, React, Redux, and Nextjs.
                        I'm a quick learner and I'm alwas loking to expend my knowledge
                        and my skill set.I'm a team player and I;m excited to work with
                        others to cerate amazing applications.

                    </p>
                    <div className=' text-xl flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("Experience")} active={tab === "Experience"}>Experience</TabButton>

                    </div>
                    <div className=' mt-8'> {TAB_DATA.find((t) => t.id === tab).content}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
