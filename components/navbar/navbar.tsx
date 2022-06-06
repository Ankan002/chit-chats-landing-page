import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full lg:px-5 md:px-4 px-3 lg:py-3 md:py-3 py-2  md:bg-secondary-dark flex items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="flex h-full items-center justify-center">
                <Image src={logo.src} alt="logo" width={"30%"} height={"30%"} className="w-8" />
                <Link href="/">
                    <a className="font-fira-code md:font-semibold font-regular lg:text-xl md:text-lg sm:text-lg text-base ml-3 tracking-wide">
                        <span className="text-primary-orange ml-1 tracking-wide">
                            Chit
                        </span>
                        <span className="text-primary-green ml-1 tracking-wide">
                            Chats
                        </span>
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
