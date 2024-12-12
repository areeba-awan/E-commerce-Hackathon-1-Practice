import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div className="h-auto ml-8 lg:ml-28 mt-16 lg:mt-36 mb-12">
        <Image
            src={"/images/products-heading.svg"}
            alt='product'
            width={100}
            height={40}
        />
        <div className="flex justify-start mt-3">
            <h1 className="text-[28px] lg:text-[38px] font-semibold w-full lg:w-[400px] text-center lg:text-left">
            Explore Our Products
            </h1>
        </div>
    </div>
  )
}

export default Explore