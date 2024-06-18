import CategoryWithIconLink from './CategoryWithIconLink'
import React from 'react';
import { ImAccessibility } from 'react-icons/im';
import SubcategoryWithIconLink from './SubcategoryWithIcon';
import { BsBookFill, BsBoundingBox, BsBox } from 'react-icons/bs';

interface CategoriesProps {
    showHeading: boolean;
    categories: Array<any>;
    isMainCategoriesTab: Boolean,
    handleClick: any
}

const Categories: React.FC<CategoriesProps> = ({ showHeading, categories, isMainCategoriesTab, handleClick }) => {
    return (
        <div className='w-1/6 py-9 border-r-[1px] border-black-50'>
            { showHeading &&
                <p className='text-[#989898] font-medium px-8'> CATEGORIES </p>
            }

            { isMainCategoriesTab ?
                <section className='h-[calc(100vh-80px)] overflow-auto no-scrollbar peer-last:mb-[400px]'>
                    { categories.map((category, index) => <CategoryWithIconLink key={index} icon={<BsBoundingBox size={20} />} text={category} />)}
                </section>
                :
                <section className='h-[calc(100vh-80px)] overflow-auto no-scrollbar peer-last:mb-[400px]'>
                    { categories.map((category, index) => <SubcategoryWithIconLink key={index} icon={<BsBox size={20} />} text={category} onClick={handleClick} />)}
                </section>
            }
        </div>
    )
}

export default Categories;