"use client";
import React from "react";
import { isMobile } from 'react-device-detect';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const githubUrl = "https://github.com/TharunBalaji2004";
    const linkedinUrl = "https://www.linkedin.com/in/tharun-balaji-appdev/";

    return (
        <section className="grid md:grid-cols-2 my-5 md:my-12 py-10 gap-4" id="contact">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="socials flex flex-row gap-2">
                    <Link href={`${githubUrl}`} target={isMobile ? "" : "_blank"}>
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href={`${linkedinUrl}`} target={isMobile ? "" : "_blank"}>
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>

            <div>
                <form className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-white block font-bold">Your Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="John Doe" />
                    
                    <label htmlFor="email" className="text-white block font-bold">Your Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="abc@example.com"/>
                    
                    <label htmlFor="message" className="text-white block font-bold">Message</label>
                    <textarea 
                        type="text" 
                        name="message" 
                        id="message" 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Hey there! I would like to connect with you"/>

                    <button
                        type="submit"
                        className="bg-purple-500 hober:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Submit</button>
                </form>
            </div>
        </section>        
    );
}

export default EmailSection;