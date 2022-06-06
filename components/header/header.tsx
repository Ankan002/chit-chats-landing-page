import React from 'react';

interface Props{
    title: string;
}

const Header = (props: Props) => {
    const { title } = props;

    return (
        <div className="w-full py-2 flex justify-center items-center">
            <h1 className="lg:text-5xl md:text-4xl sm:text3xl text-2xl text-primary-orange text-center">
                {title}
            </h1>
        </div>
    );
};

export default Header;
