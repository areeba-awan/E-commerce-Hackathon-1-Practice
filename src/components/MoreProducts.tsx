import React from 'react'
import Image from 'next/image'

interface MoreProducts {
    image: string
    heading: string
    price: string
    rating: string
    category: string
    dot: string
}

const MoreProducts: React.FC<MoreProducts> = ({ image, heading, price, rating, category, dot }) => {
    return (
        <div className='mt-8 w-[270px] h-auto sm:w-[300px] lg:w-[330px]'>
            <Image
                src={image}
                alt='product-image'
                width={270}
                height={250}
                className='object-contain'
            />
            <h1 className='text-[16px] mt-4 font-semibold text-center sm:text-left'>{heading}</h1>
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
            <Image
                src={dot}
                width={20}
                height={20}
                alt='dot'
                className='ml-auto'
            />
        </div>
    )
}

export default MoreProducts