import Link from "next/link";
import React, { ReactNode } from "react";

interface SubcategoryWithIconProps {
    icon: ReactNode,
    text: string,
    onClick: any
}

const SubcategoryWithIconLink: React.FC<SubcategoryWithIconProps> = ({ icon, text, onClick }) => {
    return (
        <div onClick={() => onClick(text)} className="flex items-center gap-2 py-4 text-center w-full grow hover:bg-[#F5F5F5] cursor-pointer px-8 last:mb-[100px]">
            {icon}
            <p className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar capitalize"> {text.split("_").join(" ")} </p>
        </div>
    )
}

export default SubcategoryWithIconLink