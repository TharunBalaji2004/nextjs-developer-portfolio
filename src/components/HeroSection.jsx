"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return(
        <section className="sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hello there, I&apos;m{" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Tharun Balaji',
                        1000, 
                        'Fullstack Developer',
                        1000,
                        'App Developer',
                        1000,
                        'ML Enthusiast',
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    />
                </h1>
                    <p className="text-[#ADB7BE] text-md mb-6 md:text-lg">
                    Passionate Software Developer, creating engaging solutions. Proficient in various technologies, dedicated to crafting innovative experiences that leave a lasting impact.
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Contact Me</button>
                        <button className="px-1 py-1 rounded-full mt-4 w-full sm:w-fit hover:bg-slate-800 text-white border bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Download CV
                        </span>
                        </button>
                    </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                    src="/hero-image.png"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="hero image" 
                    width={300} 
                    height={300} />
                </div>     
            </div>
            </div> 
        </section>
    )
}

export default HeroSection;