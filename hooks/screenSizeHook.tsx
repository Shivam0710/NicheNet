import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect'

export const screenSizeHook = () => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        function getUpdatedScreenSize() {
            let updatedScreenSize: any = {}
            updatedScreenSize.height = window.innerHeight;
            updatedScreenSize.width = window.innerWidth
            setScreenSize(updatedScreenSize)
        }

        window.addEventListener('resize', getUpdatedScreenSize)

        return () => {
            window.removeEventListener('resize', getUpdatedScreenSize)
        }
    }, [])

    return { screenSize }
}
