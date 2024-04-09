import React, { useState } from 'react';

const Navbar = ({ links, currentLocale }: { links: any[]; currentLocale: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    let ruta = '';
    if (currentLocale !== 'en') {
        ruta = `${currentLocale}/`;
    }

    return (
        <header className="relative sticky z-10 top-0 pt-4 w-full flex justify-between md:justify-center items-center px-4">
            <div className="flex flex-row-reverse justify-between w-full md:w-auto ">
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden bg-black/10 backdrop-blur rounded-md p-1.5">
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            // Close icon when menu is open
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            // Hamburger icon when menu is closed
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
                <nav
                    className={`${
                        isOpen ? 'flex' : 'hidden'
                    } flex-row md:flex-row md:flex space-x-0 md:space-x-1 backdrop-blur items-center rounded-md mt-2 bg-black/10 px-2 py-1 animate-fade-in animate-delay-100 md:static absolute w-full left-0 top-full md:w-auto md:relative`}
                >
                    {links.map((link: any) => (
                        <a key={link.text} className="rounded-md capitalize px-3 py-0.5 transition-all ease-in-out hover:bg-white/10 text-sm sm:text-base block" href={link.url}>
                            {link.text}
                        </a>
                    ))}
                </nav>
            </div>
            <p
                className={`${
                    isOpen ? 'flex' : 'hidden'
                } md:flex bg-black/10 backdrop-blur rounded-md px-1.5 lg:bg-black/0 mt-2 divide-x sm:mt-0 top-4 left-2 lg:block absolute lg:top-5 lg:right-5`}
            >
                <a className="me-1 hover:underline" href="/">
                    en
                </a>
                <a className="px-1.5 hover:underline" href="/es">
                    es
                </a>
                {/* <a className="px-1.5 hover:underline" href="/ca">
                    ca
                </a>
                <a className="px-1.5 hover:underline" href="/nl">
                    nl
                </a> */}
            </p>
        </header>
    );
};

export default Navbar;
