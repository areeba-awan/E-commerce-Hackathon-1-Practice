import React from 'react'
import Image from 'next/image'

const Today = () => {
    return (
        <div className="px-4 lg:px-28 mt-16 lg:mt-36">
            {/* Today Section */}
            <div className="h-auto ml-8 lg:ml-28 mt-16 lg:mt-36 mb-12">
                <Image
                    src={"/images/today.svg"}
                    alt='product'
                    width={100}
                    height={40}
                />
                <div className="flex justify-start mt-3">
                    <h1 className="text-[28px] lg:text-[38px] font-semibold w-full lg:w-[400px] text-center lg:text-left">
                     Flash Sales
                    </h1>
                </div>
            </div>

            {/* Time Section */}
            <div className="w-full lg:w-auto flex justify-center">
                <Image
                    src="/images/time.svg"
                    alt="time"
                    width={200}
                    height={40}
                    className="lg:w-[302px] lg:h-[50px]"
                />
            </div>
        </div>
    )
}

export default Today