import { useEffect, useState } from 'react'
import AddressBar from './AddressBar'
import ImageScroller from './ImageScroller'
import MainSiteContent from './MainSiteContent'
import { SubCategoryModel } from "@/models/SubCategoryModel"
import { IoCafe } from 'react-icons/io5'
import Lottie from 'react-lottie'
import AnimationData from '@/public/loading.json'

interface WebPageDisplayProps {
    data: SubCategoryModel
}

const WebpageDisplay: React.FC<WebPageDisplayProps> = ({ data }) => {
    const { url, name, embeddable, description } = data
    const [loading, setLoading] = useState(true)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>  
            { embeddable ?
                <div className='w-[90%] flex flex-col py-4 bg-[#F6F6F6] border overflow-hidden gap-4 border-l-0'>
                    <AddressBar link={url||""} />
                    { loading &&
                        <Lottie 
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    }
                    <iframe className='h-full mx-10 rounded-2xl' src={url} onLoad={() => setLoading(false)} />
                </div>
                :
                <div className='w-[90%] border-l-0 flex flex-col py-4 bg-[#F6F6F6] border overflow-hidden gap-4 justify-between'>
                    <AddressBar link={url||""} />
                    <MainSiteContent siteName={name} description={description} link={url} />
                    <ImageScroller />
                </div>
            }
        </>
    )
}

export default WebpageDisplay