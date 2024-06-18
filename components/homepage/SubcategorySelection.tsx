"use client"

import { useEffect, useState } from "react"
import Categories from "./Categories"
import WebpageDisplay from "./WebpageDisplay"
import { SubCategoryModel } from "@/models/SubCategoryModel"

interface SubCategoryProps {
    subCategories: Array<any>
}

export const SubcategorySelection: React.FC<SubCategoryProps> = ({ subCategories }) => {
    const subCategoryNames = subCategories?.map(category => (category.name))
    const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategoryModel>()
    const [selectedCategoryName, setSelectedCategoryName] = useState("")

    useEffect(() => {
        let selected = subCategories.filter(subcategory => subcategory.name === selectedCategoryName)[0]
        setSelectedSubCategory(selected)
    }, [selectedCategoryName])

    const handleCategoryClick = (name: string) => {
        setSelectedCategoryName(name)
    }

    return (
        <>
            <Categories showHeading={false} categories={subCategoryNames} isMainCategoriesTab={false} handleClick={handleCategoryClick} />
            { selectedSubCategory &&
                <WebpageDisplay data={selectedSubCategory} />
            }
        </>
    )
}

export default SubcategorySelection