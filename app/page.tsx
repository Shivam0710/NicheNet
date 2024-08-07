"use client"

import Categories from "@/components/homepage/Categories";
import { data } from '@/db'
import { getSubcategoryData } from "@/helper/getSubcategoryData";
import SubcategorySelection from "@/components/homepage/SubcategorySelection";
import { useState } from "react";
import { ComponentContext } from "@/Contexts/ComponentContext";

export default function Home({ params,
  searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const categories = Object.keys(data)
  console.log(categories)
  const category: string = String (searchParams?.category || categories[0]);
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [subCategory, setSubCategory] = useState("")
  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleSubcategoryClick = (subcategory: string) => {
    setSubCategory(subcategory)
  }
  const subCategories = getSubcategoryData(category)

  return (
    <>
      <main className="">
        <div className="flex">
          <ComponentContext.Provider value={{ isCollapsed, handleClick, selectedCategory: category, selectedSubCategory: subCategory, handleSubcategoryClick  }}>
            <Categories showHeading={true} categories={categories} isMainCategoriesTab={true} handleClick={null} />
            <SubcategorySelection subCategories={subCategories} />
          </ComponentContext.Provider>
        </div>
      </main>
    </>
  );
}
