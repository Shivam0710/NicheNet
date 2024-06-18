import { useEffect, useState } from "react";

export const isMobileHook = () => {
    const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 800);

    useEffect(() => {
        function checkIsMobile() {
            console.log(window.innerWidth < 800)
            setIsMobileDevice(window.innerWidth < 800);
        }

        // Initial check
        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return { isMobileDevice };
};
