import React, { useEffect, useState } from 'react';
import { IconChevronUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IconChevronUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
