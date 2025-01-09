
import React from 'react'
import Image from 'next/image'

interface ProductCard {
    image: string
    heading: string
    price: string
    lowPrice: string
    rating: string
    category: string

}

const ProductCard:React.FC<ProductCard> = ({ image, heading, price, lowPrice, rating, category }) => {
    return (
        <>
            <div className='w-[2`70px] h-[350px]'>
                <Image
                    src={image}
                    alt='game-pad'
                    width={270}
                    height={250}
                    priority

                />
                <h1 className='w-[201px] h-[24px] text-[16px] mt-4 font-semibold'>{heading}</h1>
                <div className='flex items-center justify-start gap-6 my-3'>
                    <span className='text-[#DB4444]'>{price}</span>
                    <span className='text-[#000000]'>{lowPrice}</span>
                </div>
                <div className='flex items-center justify-start gap-4'>
                    <Image
                        src={rating}
                        alt='start'
                        width={100}
                        height={20}
                    />
                    <span className='text-[#000000]'>{category}</span>
                </div>
            </div>
        </>
    )
}

export default ProductCard
