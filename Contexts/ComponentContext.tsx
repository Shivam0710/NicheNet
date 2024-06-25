import { ComponentContextType } from "@/models/ComponentContext";
import { createContext } from "react";

export const ComponentContext = createContext<ComponentContextType>({
    isCollapsed: false,
    handleClick: () => {},
    selectedCategory: "freelance",
    selectedSubCategory: '',
    handleSubcategoryClick: () => {}
})