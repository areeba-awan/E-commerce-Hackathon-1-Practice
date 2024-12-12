import React from 'react'
import Image from 'next/image'

interface CategoryCardProps {
    image: string
    heading: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, heading }) => {
    return (
        <div className="w-[40%] max-w-[170px] h-[120px] lg:w-[170px] lg:h-[145px] border border-[#7D8184] flex items-center justify-center flex-col rounded-md shadow-sm hover:shadow-lg transition-all bg-white hover:bg-[#36c962] hover:text-[#FAFAFA] hover:border-none">
        <Image
            src={image}
            alt={heading}
            width={56}
            height={56}
            className="h-auto transition-all group-hover:brightness-0 group-hover:inver"
        />
        <h3 className="mt-3 lg:mt-5 text-[14px] lg:text-[16px] font-medium text-center transition-all group-hover:text-white">
            {heading}
        </h3>
    </div>
    

    )
}

export default CategoryCard