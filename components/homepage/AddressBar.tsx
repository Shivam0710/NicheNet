import { GiPadlock } from "react-icons/gi"
import { ImNewTab } from "react-icons/im"

interface AddressBarProps {
    link: string
}

const AddressBar:React.FC<AddressBarProps> = ({ link }) => {
    return (
        <div className="bg-[#FFFFFF] flex mx-10 py-3 px-5 h-fit rounded-full items-center gap-2 justify-between ">
            <div className="flex gap-2 items-center">
                <GiPadlock />
                <p> {link} </p>
            </div>
            <a href={link} target="_blank">
                <ImNewTab className="cursor-pointer" />
            </a>
        </div>
    )
}

export default AddressBar