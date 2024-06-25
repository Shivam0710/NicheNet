"use client"

import { useContext, useEffect, useState } from "react"
import Categories from "./Categories"
import WebpageDisplay from "./WebpageDisplay"
import { SubCategoryModel } from "@/models/SubCategoryModel"
import { ComponentContext } from "@/Contexts/ComponentContext"

interface SubCategoryProps {
    subCategories: Array<any>,
}

export const SubcategorySelection: React.FC<SubCategoryProps> = ({ subCategories }) => {
    const componentContext = useContext(ComponentContext)
    const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategoryModel>()
    const [selectedCategoryName, setSelectedCategoryName] = useState("")

    useEffect(() => {
        let selected = subCategories.filter(subcategory => subcategory.name === selectedCategoryName)[0]
        setSelectedSubCategory(selected)
        componentContext.handleSubcategoryClick(selected?.name)
    }, [selectedCategoryName])

    const handleCategoryClick = (name: string) => {
        setSelectedCategoryName(name)
    }

    return (
        <>
            <Categories showHeading={false} categories={subCategories} isMainCategoriesTab={false} handleClick={handleCategoryClick} />
            { selectedSubCategory &&
                <WebpageDisplay data={selectedSubCategory} />
            }
        </>
    )
}

export default SubcategorySelection