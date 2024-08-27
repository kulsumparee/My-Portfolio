"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../projectSection/projectCard";
import ProjectTag from "../projectSection/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "HTML, CSS Portfolio Website",
        description: "Project 1 description",
        image: "/images/image1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kulsumparee/Tailwindcss/tree/first",
        previewUrl: "http://127.0.0.1:5501/weekndwork/index.html",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/image5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kulsumparee/clinic-website",
        previewUrl: "http://localhost:3000/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/image6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kulsumparee/E-Commerce-Website/tree/master",
        previewUrl: "http://localhost:5173/",
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/images/image4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/image2.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects" className="  mt-20 mx-20 lg:pb-20">
            <h2 className="text-center text-4xl lg:text-5xl font-bold  mt-4 mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;