import React from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import TechnologySectionHeader from "../technology-section-header";

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

interface Props{
    type: "Frontend" | "Backend";
    revealTime: number
}

const TechnologySection = (props: Props) => {
    const { type, revealTime } = props;

    const {inView, ref} = useInView();
    const animationControl = useAnimation();

    if(inView){
        animationControl.start({
            opacity: 1
        })
            .catch(err => console.log(err));
    }

    return (
        <div ref={ref} className="md:w-2/5 w-full md:mx-5 md:my-0 my-5" >
            <motion.div className="w-full p-4 border-2 rounded-md bg-primary-dark hover:bg-secondary-dark cursor-pointer" initial="hidden" whileInView="visible" animate={animationControl} variants={variants} transition={{
                duration: 1,
                ease: 'easeIn',
                delay: revealTime
            }} viewport={{ once: true }}>
                <TechnologySectionHeader title={`${type} Technologies`} />
            </motion.div>
        </div>
    );
};

export default TechnologySection;
