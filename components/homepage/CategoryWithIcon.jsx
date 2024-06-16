function CategoryWithIcon({ icon, text }) {
    return (
        <div className="flex items-center gap-2 py-4 text-center w-full grow hover:bg-[#F5F5F5] cursor-pointer px-8 last:mb-[100px]">
            {icon}
            <p className="w-[80%] text-left overflow-auto whitespace-nowrap no-scrollbar"> {text} </p>
        </div>
    )
}

export default CategoryWithIcon