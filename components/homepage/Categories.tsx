import CategoryWithIconLink from './CategoryWithIconLink'
import React, { useContext } from 'react';
import { ImAccessibility } from 'react-icons/im';
import SubcategoryWithIconLink from './SubcategoryWithIcon';
import { BsBookFill, BsBoundingBox, BsBox } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { ComponentContext } from '@/Contexts/ComponentContext';

interface CategoriesProps {
    showHeading: boolean;
    categories: Array<any>;
    isMainCategoriesTab: Boolean,
    handleClick: any,
}

const Categories: React.FC<CategoriesProps> = ({ showHeading, categories, isMainCategoriesTab, handleClick }) => {
    const componentContext = useContext(ComponentContext)
    const isCollapsed = componentContext.isCollapsed
    return (
        <div className={`transition-all duration-500 ease-in-out ${isCollapsed ? 'w-[69px]' : 'w-[216px]'} py-9 border-r-[1px] border-black-50 relative shadow-sm curved-top`}>
            { showHeading && !isCollapsed &&
                <p className='text-[#989898] text-sm px-6'> CATEGORIES </p>
            }

            { isMainCategoriesTab ?
                <section className='h-[calc(100vh-80px)] overflow-auto no-scrollbar peer-last:mb-[400px]'>
                    { categories.map((category, index) => <CategoryWithIconLink key={index} icon={<BsBoundingBox size={16} />} text={category} />)}
                </section>
                :
                <section className='h-[calc(100vh-80px)] overflow-auto no-scrollbar peer-last:mb-[400px]'>
                    { categories.map((category, index) => <SubcategoryWithIconLink url={category.url} key={index} icon={<BsBox size={16} />} text={category.name} onClick={handleClick} />)}
                </section>
            }

            { !isMainCategoriesTab &&
                <div onClick={() => componentContext.handleClick()} className='absolute top-[50%] right-[-26px] shadow-lg border border-black-50 py-3 rounded-tr-lg rounded-br-lg cursor-pointer bg-white border-l-0'>
                    <img src="/arrow.png" className={`h-6 w-6 arrow transition-transform timing-500 ${isCollapsed ? '' : 'rotate-180'}`} alt="" />
                </div>
            }
        </div>
    )
}

export default Categories;