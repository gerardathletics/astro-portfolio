import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ links, currentLocale }: { links: any[]; currentLocale: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    let ruta = '';
    if (currentLocale !== 'en') {
        ruta = `${currentLocale}/`;
    }

    // Handle scroll event to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo/Brand */}
                <a href={`/${ruta}`} className="text-white font-bold text-xl">
                    Geospatial<span className="text-primary">Dev</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {links.map((link: any) => (
                        <a
                            key={link.text}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                            href={link.url}
                        >
                            {link.text}
                        </a>
                    ))}

                    {/* Language Selector */}
                    <div className="flex ml-4 bg-white/5 rounded-full p-1">
                        <a className={`px-2 py-1 text-xs rounded-full transition-colors ${currentLocale === 'en' ? 'bg-primary text-white' : 'hover:bg-white/10'}`} href="/">
                            EN
                        </a>
                        <a className={`px-2 py-1 text-xs rounded-full transition-colors ${currentLocale === 'es' ? 'bg-primary text-white' : 'hover:bg-white/10'}`} href="/es">
                            ES
                        </a>
                        <a className={`px-2 py-1 text-xs rounded-full transition-colors ${currentLocale === 'ca' ? 'bg-primary text-white' : 'hover:bg-white/10'}`} href="/ca">
                            CA
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md"
                    aria-label="Toggle menu"
                >
                    <motion.div
                        animate={isOpen ? 'open' : 'closed'}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full">
                            <nav className="flex flex-col items-center space-y-6">
                                {links.map((link: any) => (
                                    <a
                                        key={link.text}
                                        className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                                        href={link.url}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </nav>

                            {/* Language Selector for Mobile */}
                            <div className="flex mt-8 bg-white/5 rounded-full p-1">
                                <a
                                    className={`px-3 py-1 text-sm rounded-full transition-colors ${currentLocale === 'en' ? 'bg-primary text-white' : 'hover:bg-white/10'}`}
                                    href="/"
                                >
                                    EN
                                </a>
                                <a
                                    className={`px-3 py-1 text-sm rounded-full transition-colors ${currentLocale === 'es' ? 'bg-primary text-white' : 'hover:bg-white/10'}`}
                                    href="/es"
                                >
                                    ES
                                </a>
                                <a
                                    className={`px-3 py-1 text-sm rounded-full transition-colors ${currentLocale === 'ca' ? 'bg-primary text-white' : 'hover:bg-white/10'}`}
                                    href="/ca"
                                >
                                    CA
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
