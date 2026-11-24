import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full mt-14" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-200px] h-[480px] md:top-[-340px] md:h-full w-full left-0 z-[1] object-cover"
            >
                <source src="/blackhole.webm" type="video/webm"/>
            </video>
            <HeroContent/>
        </div>
    );
};

export default Hero;
