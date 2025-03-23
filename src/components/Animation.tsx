import React from 'react';

interface AnimationProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export default function Animation({ children, delay = 0, duration = 0.5, direction = 'up', className = '' }: AnimationProps) {
    // Define transform based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case 'up':
                return 'translateY(20px)';
            case 'down':
                return 'translateY(-20px)';
            case 'left':
                return 'translateX(20px)';
            case 'right':
                return 'translateX(-20px)';
            default:
                return 'translateY(20px)';
        }
    };

    return (
        <div
            className={`animate-fade-in ${className}`}
            style={{
                opacity: 0,
                transform: getInitialTransform(),
                transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
                transitionDelay: `${delay}s`,
                animationFillMode: 'forwards',
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
