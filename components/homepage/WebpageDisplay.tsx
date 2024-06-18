import AddressBar from './AddressBar'
import ImageScroller from './ImageScroller'
import MainSiteContent from './MainSiteContent'
import { SubCategoryModel } from "@/models/SubCategoryModel"

interface WebPageDisplayProps {
    data: SubCategoryModel
}

const WebpageDisplay: React.FC<WebPageDisplayProps> = ({ data }) => {
    const { url, name, embeddable, description } = data

    return (
        <>  
            { data?.embeddable ?
                <div className='w-4/6 flex flex-col py-4 border-[#000] border overflow-hidden gap-4'>
                    <AddressBar link={url||""} />
                    <iframe className='h-full' src={url} />
                </div>
                :
                <div className='w-4/6 flex flex-col py-4 border-[#000] border overflow-hidden gap-4 justify-between'>
                    <AddressBar link={url||""} />
                    <MainSiteContent siteName={name} description={description} link={url} />
                    <ImageScroller />
                </div>
            }
        </>
    )
}

export default WebpageDisplay