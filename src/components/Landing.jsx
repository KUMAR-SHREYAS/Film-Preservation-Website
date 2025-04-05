import React, { useEffect, useRef, useState } from 'react';
import Image from '../assets/shreyas_main.jpg';
import './Landing.css';

export default function Landing() {
    const landingRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (landingRef.current) {
                const rect = landingRef.current.getBoundingClientRect();
                const scrollPercentage = 1 - (rect.bottom / window.innerHeight);
                setScrollProgress(Math.max(0, Math.min(1, scrollPercentage)));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerStyle = {
        transform: `scale(${1 + scrollProgress * 0.9})`,
        opacity: 1 - scrollProgress,
    };

    const textStyle = {
        opacity: 1 - scrollProgress * 3, 
    };

    return (
        <div className="landing" ref={landingRef} style={containerStyle}>
            <img src={Image} alt="Landing Image" />
            <div className="landing-text text-bg" style={textStyle}>
                <h2>Preserving the Past, Framing the Future</h2>
                <p>Dedicated to restoring cinematic treasures on film reel and connecting them with the world through archives, museums, and timeless storytelling.</p>
            </div>
        </div>
    );
}

