import React from 'react';
import heroLogo from "../../assets/hero-logo.svg";
import Image from "next/image";
import HeroButton from "../hero-button";
import {motion} from "framer-motion";

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

const Hero = () => {
    return (
        <div className="w-full flex md:flex-row flex-col-reverse flex-grow lg:p-6 md:p-5 sm:p-4 p-3">
            <div className="flex-grow flex flex-col justify-center md:items-start items-center" >
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-secondary-light font-fira-code md:text-left text-center">
                    Chat with
                    <span className="md:mx-6 ml-4 text-primary-orange">
                        PRIVACY
                    </span>
                </h1>
                <p className="text-primary-light mt-5 md:text-lg text-base md:text-left text-center md:max-w-xl">
                    A realtime chatting app with friendship, performance and security at heart...
                </p>
                <motion.div className="mt-5 flex md:flex-row flex-col" initial="hidden" whileInView="visible" animate="visible" variants={variants} transition={{
                    duration: 1,
                    ease: 'easeIn',
                    type: "tween",
                    delay: 1
                }} viewport={{ once: false }} >
                    <HeroButton type="info" />
                    <HeroButton type="download" link="https://faltu-apk.s3.ap-south-1.amazonaws.com/Chit+Chats.apk" />
                </motion.div>
            </div>
            <motion.div className="lg:w-1/3 md:w-1/2 w-full flex-grow flex md:items-center items-end justify-center" initial="hidden" whileInView="visible" animate="visible" variants={variants} transition={{
                duration: 1,
                ease: 'easeIn',
                type: "tween"
            }} viewport={{ once: false }}>
                <img src={heroLogo.src} alt="Hero Image" className="w-full object-contain" />
            </motion.div>
        </div>
    );
};

export default Hero;
