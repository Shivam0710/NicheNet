import { ComponentContextType } from "@/models/ComponentContext";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

export const ComponentContext = createContext<ComponentContextType>({
    isCollapsed: false
})