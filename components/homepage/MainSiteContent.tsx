import { ImNewTab } from "react-icons/im";

const MainSiteContent = () => {
    return (
        <div className="text-center flex flex-col gap-2">
            <h3 className="text-3xl font-bold "> Unsplash </h3>
            <p className="text-xl w-[70%] m-auto">
                Most renowned website for free stock images. This does not need any more introduction.
            </p>
            <a href="" className="bg-black inline-flex self-center text-white justify-center items-center px-5 py-2 rounded-xl gap-2 mt-4">
                <ImNewTab className="cursor-pointer" size={20} />
                <p> Open link in new tab </p>
            </a>
        </div>
    )
}

export default MainSiteContent;