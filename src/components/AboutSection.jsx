"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-4'>
                <li>NodeJS</li>
                <li>ExpressJS </li>
                <li>SQL </li>
                <li>Java </li>
                <li>JavaScript </li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Chennai Institute of Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Android App Development</li>
                <li>Google Android Associate</li>
            </ul>
        )
    }  
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white' id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-6 sm:py-16 xl-16">
                <Image src='/about-image.png' alt='About' width={500} height={500} />
                <div className='mt-4 flex flex-col h-full'>
                    <h2 className='text-white mb-4 text-4xl lg:text-4xl font-bold text-center sm:text-start'>About Me</h2>
                    <p className='text-base md:text-lg'>
                    I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
                            Skills
                        </TabButton>

                        <TabButton active={tab === 'education'} selectTab={() => handleTabChange('education')}>
                            Education
                        </TabButton>

                        <TabButton active={tab === 'certifications'} selectTab={() => handleTabChange('certifications')}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {
                            tabData.find((data) => data.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;