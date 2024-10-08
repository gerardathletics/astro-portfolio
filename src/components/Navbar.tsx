import React, { useState } from 'react';

const Navbar = ({ links, currentLocale }: { links: any[]; currentLocale: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    let ruta = '';
    if (currentLocale !== 'en') {
        ruta = `${currentLocale}/`;
    }

    return (
        <header className="relative sticky z-10 top-0 pt-2 w-full flex justify-between md:justify-center items-center px-4">
            <p
                className={`${
                    isOpen ? 'flex absolute left-2' : 'hidden'
                } md:flex space-x-1  rounded-md px-1.5 lg:bg-black/0 mt-2 sm:mt-0 right-2 md:absolute md:top-7 md:right-5 lg:absolute lg:top-7 lg:right-5 z-[110]`}
            >
                <span className=" bg-black/10 backdrop-blur rounded-md ">
                    <a className="hover:underline px-1" href="/">
                        en
                    </a>
                </span>
                <span className="bg-black/10 backdrop-blur rounded-md">
                    <a className="px-1 hover:underline" href="/es">
                        es
                    </a>
                </span>
                <span className="bg-black/10 backdrop-blur rounded-md">
                    <a className="px-1 hover:underline" href="/ca">
                        ca
                    </a>
                </span>
            </p>
            <div className="flex flex-row-reverse justify-between w-full md:w-auto ">
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-[120] bg-black/10 backdrop-blur rounded-md p-1.5">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
                <nav
                    className={`${
                        isOpen ? 'flex' : 'hidden'
                    } flex-row md:flex md:items-center justify-center backdrop-blur rounded-md mt-2 bg-black/10 px-2 sm:px-3 md:px-4 py-1 sm:py-2 animate-fade-in animate-delay-100 md:static absolute w-full left-0 top-full md:w-auto`}
                >
                    {links.map((link: any) => (
                        <a
                            key={link.text}
                            className="rounded-md capitalize px-2 sm:px-3 md:px-4 py-1 transition-all ease-in-out hover:bg-white/10 text-sm sm:text-base md:text-lg whitespace-nowrap"
                            href={link.url}
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
