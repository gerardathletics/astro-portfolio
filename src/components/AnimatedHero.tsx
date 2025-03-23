import { useEffect, useRef } from 'react';

interface AnimatedHeroProps {
    title: string;
    subtitle: string;
}

export default function AnimatedHero({ title, subtitle }: AnimatedHeroProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Skip animations during SSR
        if (typeof window === 'undefined') return;

        // Make sure refs are available
        if (!titleRef.current || !subtitleRef.current) return;

        // Animate the title and subtitle
        const chars = titleRef.current.querySelectorAll('.char');

        chars.forEach((char, index) => {
            if (char instanceof HTMLElement) {
                char.style.opacity = '0';
                char.style.transform = 'translateY(40px)';
                char.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
                char.style.transitionDelay = `${0.1 + index * 0.04}s`;

                // Force reflow
                void char.offsetWidth;

                // Trigger animation
                setTimeout(() => {
                    char.style.opacity = '1';
                    char.style.transform = 'translateY(0)';
                }, 10);
            }
        });

        // Animate subtitle
        if (subtitleRef.current) {
            subtitleRef.current.style.opacity = '0';
            subtitleRef.current.style.transform = 'translateY(20px)';
            subtitleRef.current.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            subtitleRef.current.style.transitionDelay = '0.5s';

            // Force reflow
            void subtitleRef.current.offsetWidth;

            // Trigger animation
            setTimeout(() => {
                subtitleRef.current!.style.opacity = '1';
                subtitleRef.current!.style.transform = 'translateY(0)';
            }, 10);
        }
    }, []);

    // Split the title into characters for animation
    const titleChars = title.split('').map((char, index) => (
        <span key={index} className="char inline-block overflow-hidden">
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return (
        <div className="py-8 px-4 text-center relative overflow-hidden">
            <div className="gradient-bg"></div>

            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {titleChars}
            </h1>

            <p ref={subtitleRef} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
}
