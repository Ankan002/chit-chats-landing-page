import React from 'react';

interface Props{
    title: string;
}

const TechnologySectionHeader = (props: Props) => {
    const { title } = props;

    return (
        <div className="w-full flex items-center justify-center">
            <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base text-primary-green text-center">
                {title}
            </h1>
        </div>
    );
};

export default TechnologySectionHeader;
