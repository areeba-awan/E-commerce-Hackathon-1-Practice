
import React from 'react'
import Image from 'next/image'

interface ExploreProducts {
    image: string
    heading: string
    price: string
    rating: string
    category: string
}

const ExploreProducts: React.FC<ExploreProducts> = ({ image, heading, price, rating, category }) => {
    return (
        <div className='mt-8 w-[270px] h-auto sm:w-[300px] lg:w-[330px]'>
            <Image
                src={image}
                alt='product-image'
                width={270}
                height={250}
                className='object-contain'
            />
            <h1 className='w-[210px] h-[24px] text-[16px] mt-4 font-semibold text-center sm:text-left'>{heading}</h1>
            <div className='flex items-center justify-start gap-6 my-3'>
                <span className='text-[#DB4444]'>{price}</span>
                <Image
                    src={rating}
                    alt='rating'
                    width={100}
                    height={20}
                />
                <span className='text-[#000000]'>{category}</span>
            </div>
        </div>
    )
}

export default ExploreProducts