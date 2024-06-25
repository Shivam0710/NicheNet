import { ComponentContext } from "@/Contexts/ComponentContext";
import Link from "next/link";
import React, { ReactNode, useContext } from "react";

interface CategoryWithIconProps {
    icon: ReactNode,
    text: string,
}

const CategoryWithIconLink: React.FC<CategoryWithIconProps> = ({ icon, text }) => {
    const componentContext = useContext(ComponentContext)
    const selectedCategory = componentContext.selectedCategory

    return (
        <Link href={`/?category=${text}`} className={`flex items-center gap-2 py-4 text-center w-full grow hover:bg-[rgba(0,0,0,.1)] cursor-pointer px-6 last:mb-[100px] ${text === selectedCategory ? 'bg-[rgba(0,0,0,.1)]' : ''}`}>
            {icon}
            { !componentContext.isCollapsed &&
                <p title={text.split("_").join(" ")} className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar capitalize text-ellipsis"> {text.split("_").join(" ")} </p>
            }
            
        </Link>
    )
}

export default CategoryWithIconLink