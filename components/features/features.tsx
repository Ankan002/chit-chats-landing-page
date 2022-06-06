import React from 'react';
import Header from "../header";
import FeatureCard from "../feature-card";
import {useInView} from "react-intersection-observer";

const Features = () => {
    const { inView, ref } = useInView();

    return (
        <div id="features" className="w-full lg:p-6 md:p-5 sm:p-4 p-3">
            <Header title="FEATURES" />
            <div className="flex w-full mt-5 flex-wrap items-center justify-center">
                <FeatureCard iconType="performance" featureName="High Performance" revealTime={0} inView={inView} reference={ref} />
                <FeatureCard iconType="scalable" featureName="Highly Scalable" revealTime={0.25} inView={inView} reference={ref} />
                <FeatureCard iconType="security" featureName="Secured" revealTime={0.50} inView={inView} reference={ref} />
                <FeatureCard iconType="real-time" featureName="Realtime Messaging" revealTime={0.75} inView={inView} reference={ref} />
            </div>
        </div>
    );
};

export default Features;
