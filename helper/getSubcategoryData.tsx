import { data } from '@/db';

export const getSubcategoryData = (category: string): any[] => {
    switch (category) {
        case "freelance":
            return data.freelance;
        case "free_courses":
            return data.free_courses;
        case "free_mentorship":
            return data.free_mentorship;
        case "notion_templates":
            return data.notion_templates;
        case "stock_videos":
            return data.stock_videos;
        case "supporting_resource":
            return data.supporting_resource;
        case "stock_photos":
            return data.stock_photos;
        case "blogs":
            return data.blogs;
        case "design_system":
            return data.design_system;
        case "jobs":
            return data.jobs;
        case "illustration":
            return data.illustration;
        case "inspirations":
            return data.inspirations;
        case "gradients_and_colors":
            return data.gradients_and_colors;
        case "mockup":
            return data.mockup;
        case "ai":
            return data.ai;
        case "youtube":
            return data.youtube;
        case "no_code_builders":
            return data.no_code_builders;
        case "icons":
            return data.icons;
        case "figma_resources":
            return data.figma_resources;
        default:
            // Handle case where category doesn't match any of the defined cases
            return []; // Or throw an error, depending on your requirements
    }
}
