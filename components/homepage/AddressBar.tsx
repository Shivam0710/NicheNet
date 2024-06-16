import { GiPadlock } from "react-icons/gi"
import { ImNewTab } from "react-icons/im"

const AddressBar = () => {
    return (
        <div className="bg-[#F5F5F5] flex mx-4 py-3 px-5 h-fit rounded-full items-center gap-2 justify-between ">
            <div className="flex gap-2 items-center">
                <GiPadlock />
                <p> https://magicpin.in/ </p>
            </div>
            <ImNewTab className="cursor-pointer" />
        </div>
    )
}

export default AddressBar