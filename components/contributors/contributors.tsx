import React from 'react';
import Header from "../header";
import ContributorCard from "../contributor-card";
import AnkanImage from "../../assets/participants-images/ankan.jpeg";
import AdityaImage from "../../assets/participants-images/aditya.jpg";

const Contributors = () => {
    return (
        <div className="w-full lg:p-6 md:p-5 sm:p-4 p-3">
            <Header title="CONTRIBUTORS" />
            <div className="flex w-full flex-wrap items-center justify-center md:my-5">
                <ContributorCard imageUri={AnkanImage.src} name="Ankan" roles={["FullStack Developer", "Devops Engineer"]} github="https://github.com/Ankan002" revealTime={0} />
                <ContributorCard imageUri={AdityaImage.src} name="Aditya" roles={["Frontend Developer", "UI/UX Designer"]} github="https://github.com/qwertyAditya15" revealTime={0.1} />
            </div>
        </div>
    );
};

export default Contributors;
