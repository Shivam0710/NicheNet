import { ImNewTab } from "react-icons/im";

interface MainSiteContentProps {
    siteName: string,
    description: string,
    link: string
}

const MainSiteContent: React.FC<MainSiteContentProps> = ({ siteName, description, link }) => {
    return (
        <div className="text-center flex flex-col gap-2 mt-20">
            <h3 className="text-3xl font-bold "> {siteName} </h3>
            <p className="text-xl w-[70%] m-auto">
                {description}
            </p>
            <a target="_blank" href={link} className="bg-black inline-flex self-center text-white justify-center items-center px-9 py-3 rounded-xl gap-2 mt-4">
                <img src="./external-link-white.png" className="h-6 w-6" alt="" />
                <p className="text-lg"> Open link in new tab </p>
            </a>
        </div>
    )
}

export default MainSiteContent;