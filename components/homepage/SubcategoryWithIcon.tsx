"use client"

import { ComponentContext } from "@/Contexts/ComponentContext";
import { getFaviconFromLink } from "@/helper/getWebsiteFavicon";
import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import { IconsManifest } from "react-icons";
import { ImAccessibility, ImAddressBook } from "react-icons/im";

interface SubcategoryWithIconProps {
    icon: ReactNode,
    text: string,
    onClick: any,
    url: string,
}

const SubcategoryWithIconLink: React.FC<SubcategoryWithIconProps> = ({ icon, text, onClick, url }) => {
    const [error, setError] = useState(false)
    const componentContext = useContext(ComponentContext)

    // console.log(componentContext.selectedCategory, "SELECTED")
    return (
        <div onClick={() => onClick(text)} className={`flex items-center gap-2 py-4 text-center w-full grow hover:bg-[rgba(0,0,0,.1)] cursor-pointer px-6 last:mb-[100px] ${componentContext.selectedSubCategory == text ? 'bg-[rgba(0,0,0,.1)]' : ''}`}>
            { !error ?
                <img onError={() => setError(true)} className="h-4 w-4 rounded-full" src={getFaviconFromLink(url)||""} alt="" />
                :
                <ImAccessibility size={20} />
            }
            { !componentContext.isCollapsed &&
                <p className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar capitalize text-ellipsis"> {text.split("_").join(" ")} </p>
            }
        </div>
    )
}

export default SubcategoryWithIconLink