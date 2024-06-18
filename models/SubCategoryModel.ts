export interface SubCategoryModel {
    _id: string;
    name: string;
    category: string[];
    description: string;
    url: string;
    tags: string[];
    embeddable: boolean;
}