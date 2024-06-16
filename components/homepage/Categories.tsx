import { categories } from '@/constants/categories'
import CategoryWithIcon from './CategoryWithIcon'
import React from 'react';

interface CategoriesProps {
    showHeading: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ showHeading }) => {
    return (
        <div className='w-1/6 py-9 border-r-[1px] border-black-50'>
            { showHeading &&
                <p className='text-[#989898] font-medium px-8'> CATEGORIES </p>
            }

            <section className='h-[calc(100vh-80px)] overflow-auto no-scrollbar peer-last:mb-[400px]'>
                { categories.map((category, index) => <CategoryWithIcon key={index} icon={category.icon} text={category.text} />)}
            </section>
        </div>
    )
}

export default Categories;