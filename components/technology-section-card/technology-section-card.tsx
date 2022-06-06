import React from 'react';
import Image from "next/image";

interface Props{
    logo: string;
    name: string;
}

const TechnologySectionCard = (props: Props) => {
    const {logo, name} = props;
    return (
        <div className="p-2 bg-primary-dark m-3 flex flex-col justify-center items-center rounded-xl border-2 border-primary-grey/40 hover:hover:border-primary-grey/80 transition-all ease-in-out relative hover:shadow-[0_1px_12px_2px_rgba(252,90,49,0.7)]">
            <Image src={logo} alt={name} height={80} width={80} />
            <div className="absolute bg-primary-dark/60 opacity-0 hover:opacity-100 w-full h-full justify-center items-center rounded-xl p-2 flex text-xs">
                <p className="text-center text-primary-light">{name}</p>
            </div>
        </div>
    );
};

export default TechnologySectionCard;
