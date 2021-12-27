import { useState, useEffect } from "react";

const ParalaxLogic = () => {
    const [offsetY, setOffsetY] = useState(0);

    const scrollHandler = () => {
        let scrollCheck = window.scrollY;
        setOffsetY(scrollCheck);
    };

    useEffect (() => {
        window.addEventListener('scroll', scrollHandler);
        
        return () => window.removeEventListener('scroll', scrollHandler);
    });

    return { offsetY };
}

export default ParalaxLogic;