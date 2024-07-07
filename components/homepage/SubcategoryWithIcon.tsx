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

    return (
        <div onClick={() => onClick(text)} className={`flex items-center gap-2 py-4 text-center w-full grow hover:bg-[#EBFD01] cursor-pointer px-6 last:mb-[100px] ${componentContext.selectedSubCategory == text ? 'bg-[#EBFD01]' : ''}`}>
            { !error ?
                <img onError={() => setError(true)} className="h-4 w-4 rounded-full" src={getFaviconFromLink(url)||""} alt="" />
                :
                <img height={20} width={20} src="./icon.png" alt="" />
            }
            { !componentContext.isCollapsed &&
                <p className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar capitalize text-ellipsis"> {text.split("_").join(" ")} </p>
            }
        </div>
    )
}

export default SubcategoryWithIconLink