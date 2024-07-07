import Image from "next/image"

function Header() {
    return (
        <>
            <article className="flex border-b-[1px] border-black-50 p-3 px-6 justify-between">
                <div className="flex items-center gap-2 text-2xl font-bold">
                    <Image src={'/website-logo.png'} alt="logo" width={50} height={50} />
                    <p> Kunji </p>
                </div>
                <div className="flex gap-2 items-center">
                    <input placeholder="Search..." type="text" className="bg-[#F0F0F0] h-[40px] rounded-full w-[316px] px-5 py-4"/>
                    <p className="rounded-full bg-black text-white w-[40px] h-[40px] items-center justify-center flex text-center"> Js </p>
                </div>
            </article>
        </>
    )
}

export default Header