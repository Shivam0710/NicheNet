'use client'

import ImageBg from '@/public/image_bg.jpeg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const ImageScroller = () => {
    return (
        // <div className='gap-5 w-full marquee whitespace-nowrap flex'>
        <Marquee speed={100} className=''>
            <p className='w-[400px] h-[300px] inline-block border-[.5px] border-white rounded-lg mr-5'>
                <Image className='inline-block w-full h-full object-cover border-4 border-black rounded-lg' src={ImageBg} alt='some image' />
            </p>
            <p className='w-[350px] h-[200px] inline-block border-[.5px] border-white rounded-lg mr-5'>
                <Image className='inline-block w-full h-full object-cover border-4 border-black rounded-lg' src={ImageBg} alt='some image' />
            </p>
            <p className='w-[250px] h-[250px] inline-block border-[.5px] border-white rounded-lg mr-5'>
                <Image className='inline-block w-full h-full object-cover border-4 border-black rounded-lg' src={ImageBg} alt='some image' />
            </p>
            <p className='w-[250px] h-[200px] inline-block border-[.5px] border-white rounded-lg mr-5'>
                <Image className='inline-block w-full h-full object-cover border-4 border-black rounded-lg' src={ImageBg} alt='some image' />
            </p>
            <p className='w-[200px] h-[300px] inline-block border-[.5px] border-white rounded-lg mr-5'>
                <Image className='inline-block w-full h-full object-cover border-4 border-black rounded-lg' src={ImageBg} alt='some image' />
            </p>
        </Marquee>
    )
}

export default ImageScroller