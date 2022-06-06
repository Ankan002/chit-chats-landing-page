import React from 'react';
import Header from "../header";
import TechnologySection from "../technology-section";

const Technologies = () => {
    return (
        <div className="w-full lg:p-6 md:p-5 sm:p-4 p-3">
            <Header title="TECHNOLOGIES" />

            <div className="w-full flex flex-wrap justify-center items-center md:mt-5">
                <TechnologySection type="Frontend" revealTime={0} />
                <TechnologySection type="Backend" revealTime={0.15} />
            </div>

            <div className="w-full flex flex-wrap justify-center items-center md:mt-5">
                <TechnologySection type="Animation and Design" revealTime={0.30} />
            </div>
        </div>
    );
};

export default Technologies;
