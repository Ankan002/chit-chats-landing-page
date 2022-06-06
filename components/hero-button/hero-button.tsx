import React from 'react';
import {SiAndroid} from "react-icons/si";

type Props = {
    type: "download";
    link:  string;
} | {
    type: "info";
};

const HeroButton = (props: Props) => {
    const { type } = props;

    const onButtonClick = () => {
        location.href = `${type === "download" ? props.link : "#features"}`
    }

    return (
        <button className={`lg:px-6 md:px-5 sm:px-4 px-2 py-2 ${type === "download" ? "bg-primary-green" : "bg-primary-orange"} flex items-center justify-center rounded-md md:my-0 my-3 md:mr-4 text-secondary-dark border-2 hover:bg-secondary-dark ${type === "download" ? "hover:text-primary-green" : "hover:text-primary-orange"} ${type === "download" ? "border-primary-green" : "border-primary-orange"} transition-all ease-in-out`} onClick={onButtonClick}>
            {
                type === "download" ? "Download Now" : "More Info"
            }
            {
                type === "download" && (
                    <SiAndroid className="ml-2 text-xl" />
                )
            }
        </button>
    );
};

export default HeroButton;
