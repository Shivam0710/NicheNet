import Categories from "@/components/homepage/Categories";
import { data } from '@/db'
import { getSubcategoryData } from "@/helper/getSubcategoryData";
import SubcategorySelection from "@/components/homepage/SubcategorySelection";

export default function Home({ params,
  searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  const categories = Object.keys(data)
  const category: string = String (searchParams?.category || categories[0]);

  const subCategories = getSubcategoryData(category)

  return (
    <>
      <main className="">
        <div className="flex">
          <Categories showHeading={true} categories={categories} isMainCategoriesTab={true} handleClick={null} />
          <SubcategorySelection subCategories={subCategories} />
        </div>
      </main>
    </>
  );
}
