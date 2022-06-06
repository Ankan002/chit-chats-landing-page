import React from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import TechnologySectionHeader from "../technology-section-header";
import {FrontendTech, BackendTech, AnimationAndLogoTech} from "../../constants";
import TechnologySectionCard from "../technology-section-card";

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

interface Props{
    type: "Frontend" | "Backend" | "Animation and Design";
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
            <motion.div className="w-full p-4 border-2 border-primary-grey/40 rounded-md bg-secondary-dark" initial="hidden" whileInView="visible" animate={animationControl} variants={variants} transition={{
                duration: 1,
                ease: 'easeIn',
                delay: revealTime
            }} viewport={{ once: true }}>
                <TechnologySectionHeader title={`${type} Technologies`} />
                <div className="w-full flex justify-center items-center flex-wrap">
                    {
                        type === "Frontend" && (
                            <>
                                {
                                    FrontendTech.map((tech) => (
                                        <TechnologySectionCard logo={tech.logo} name={tech.name} key={tech.id} />
                                    ))
                                }
                            </>
                        )
                    }
                    {
                        type === "Backend" && (
                            <>
                                {
                                    BackendTech.map((tech) => (
                                        <TechnologySectionCard logo={tech.logo} name={tech.name} key={tech.id} />
                                    ))
                                }
                            </>
                        )
                    }
                    {
                        type === "Animation and Design" && (
                            <div className="flex w-full justify-center items-center mt-3">
                                {
                                    AnimationAndLogoTech.map((tech) => (
                                        <TechnologySectionCard logo={tech.logo} name={tech.name} key={tech.id} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

            </motion.div>
        </div>
    );
};

export default TechnologySection;
