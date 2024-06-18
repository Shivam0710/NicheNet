import Link from "next/link";
import React, { ReactNode } from "react";

interface CategoryWithIconProps {
    icon: ReactNode,
    text: string,
}

const CategoryWithIconLink: React.FC<CategoryWithIconProps> = ({ icon, text }) => {
    return (
        <Link href={`/?category=${text}`} className="flex items-center gap-2 py-4 text-center w-full grow hover:bg-[#F5F5F5] cursor-pointer px-8 last:mb-[100px]">
            {icon}
            <p className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar capitalize"> {text.split("_").join(" ")} </p>
        </Link>
    )
}

export default CategoryWithIconLink