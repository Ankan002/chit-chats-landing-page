import React from 'react';
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

interface Props{
    imageUri: string;
    name: string;
    roles: Array<string>;
    github: string;
    revealTime: number;
}

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}

const ContributorCard = (props: Props) => {
    const { imageUri, name, roles, github, revealTime } = props;
    const { inView, ref } = useInView();
    const animationControl = useAnimation();

    if(inView){
        animationControl.start({
            opacity: 1
        })
            .catch(err => console.log(err));
    }

    const onRedirectClick = () => location.href = github;

    return (
        <div ref={ref} className="lg:w-64 md:w-56 w-4/5 md:mx-5 md:my-0 my-5">
            <motion.div className="w-full h-full flex flex-col justify-center items-center border-2 border-primary-grey/40 p-4 rounded-md hover:cursor-pointer hover:bg-secondary-dark transition-all ease-in-out hover:border-primary-orange/80 hover:shadow-[0_1px_12px_2px_rgba(252,90,49,0.7)]" onClick={onRedirectClick} initial="hidden" whileInView="visible" animate={animationControl} variants={variants} transition={{
                duration: 1,
                ease: 'easeIn',
                delay: revealTime
            }} viewport={{ once: true }}>
                <img src={imageUri} alt="Participant" className="w-32 mb-5 rounded-full" />
                <h3 className="text-primary-green lg:text-xl md:text-lg text-base text-center mb-2">
                    {name}
                </h3>

                {
                    roles.map((role, index) => (
                        <p key={index} className="text-center text-primary-light md:text-base text-xs">
                            {role}
                        </p>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default ContributorCard;
