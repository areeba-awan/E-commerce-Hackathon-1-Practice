import React from 'react'
import Image from 'next/image'

const Category = () => {
    return (
        <div className="mt-16 mb-10 px-6 lg:px-28">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
{/* 
            <img src="/images/category-img.png" 
            style={{ width: '150px', 
                
            height: 'auto' }} 
            alt="Category" /> */}

                
                 <Image
                    src="/images/category-img.png"
                    alt="category"
                    width={130}
                    height={0}
                    //layout="intrinsic"                  
                    // objectFit="cover"  
                   className="auto"
                   // layout="intrinsic"
                   /> 
            </div>

            {/* Heading Section */}
            <div className="flex justify-center lg:justify-start mt-4">
                <h1 className="text-[24px] lg:text-[38px] font-semibold text-center lg:text-left">
                    Browse By Category
                </h1>
            </div>
        </div>
    )
}

export default Category