import React from 'react';
import { MdSpeed } from "react-icons/md";
import {AiFillDatabase} from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import {BsFillLightningChargeFill} from "react-icons/bs";
import {useInView, InView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

interface Props{
    iconType: "performance" | "scalable" | "real-time" | "security";
    featureName: string;
    revealTime: number;
    inView: boolean;
    reference: (node?: (Element | null | undefined)) => void;
}

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

const FeatureCard = (props: Props) => {
    const {iconType, featureName, revealTime, inView, reference} = props;
    const animationControl = useAnimation();

    if(inView){
        animationControl.start({
            opacity: 1
        })
            .catch((err) => console.log(err));
    }

    return (
        <div ref={reference}>
        <motion.div className="md:w-60 md:h-60 w-52 h-52 bg-primary-dark rounded-lg border-2 border-primary-grey mx-5 my-3 hover:cursor-pointer hover:bg-secondary-dark transition-all ease-in-out flex flex-col lg:p-4 md:p-3 p-2 hover:shadow-[0_1px_12px_2px_rgba(252,90,49,0.7)]" initial="hidden" whileInView="visible" animate={animationControl} variants={variants} transition={{
            duration: 1,
            ease: 'easeIn',
            delay: revealTime
        }} viewport={{ once: true }}>
            <div className="flex-grow w-full flex items-center justify-center text-primary-light">
                {
                    iconType === "performance" && (
                        <BsFillLightningChargeFill size={100} />
                    )
                }
                {
                    iconType === "scalable" && (
                        <AiFillDatabase size={100} />
                    )
                }
                {
                    iconType === "security" && (
                        <FiLock size={100} />
                    )
                }
                {
                    iconType === "real-time" && (
                        <MdSpeed size={100} />
                    )
                }
            </div>

            <h2 className="lg:text-2xl md:text-xl sm:text-lg text-base text-primary-light w-full text-center">
                {featureName}
            </h2>
        </motion.div>
        </div>
    );
};

export default FeatureCard;
