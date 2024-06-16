import AddressBar from './AddressBar'
import ImageScroller from './ImageScroller'
import MainSiteContent from './MainSiteContent'

const WebpageDisplay = () => {
    return (
        <div className="w-4/6 flex flex-col py-4 border-[#000] border overflow-hidden justify-between">
            <AddressBar />
            <MainSiteContent />
            <ImageScroller />
        </div>
    )
}

export default WebpageDisplay