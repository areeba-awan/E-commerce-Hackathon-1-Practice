import React from 'react';
import Image from 'next/image';

const Features = () => {
    return (
        <div className="px-4 lg:px-28">
            {/* Section for the New Arrival header */}
            <div className="ml-8 mt-36 sm:ml-0 sm:mt-16 sm:text-center">
                <Image
                    src="/images/features.png"
                    alt="features-icon"
                    width={100}
                    height={40}
                />
                <h1 className="text-[38px] font-semibold mt-6 sm:text-[28px] text-start">
                    New Arrival
                </h1>
            </div>

            {/* Section for images of the new arrivals */}
            <div className='flex items-center justify-around mt-14'>
                <div>
                <Image
                        src="/images/img1.png"
                        alt="img-1"
                        width={570}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg sm:max-w-[344px] sm:mx-auto"
                    />
                </div>
                <div>
                <Image
                        src="/images/img2.png"
                        alt="img-2"
                        width={570}
                        height={600}
                        className="w-full h-auto object-cover rounded-lg sm:max-w-[344px] sm:mx-auto"
                    />
                </div>
            </div>


            <div className="grid grid-cols-1 gap-10 mt-28 lg:grid-cols-3 lg:gap-20 sm:px-4">
                <div className="flex flex-col items-center justify-center text-center lg:text-center lg:items-center">
                    <Image
                        src="/images/logo1.png"
                        width={80}
                        height={80}
                        alt="logo-1"
                    />
                    <h1 className="mt-6 text-[20px] font-semibold lg:text-[24px]">
                        FREE AND FAST DELIVERY
                    </h1>
                    <p className="text-[14px] lg:text-[16px]">
                        Free delivery for all orders over $140
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center lg:text-center lg:items-center">
                    <Image
                        src="/images/logo2.png"
                        width={80}
                        height={80}
                        alt="logo-2"
                    />
                    <h1 className="mt-6 text-[20px] font-semibold lg:text-[24px]">
                        24/7 CUSTOMER SERVICE
                    </h1>
                    <p className="text-[14px] lg:text-[16px]">
                        Friendly 24/7 customer support
                    </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="flex flex-col items-center justify-center text-center lg:text-center lg:items-center">
                    <Image
                        src="/images/logo3.png"
                        width={80}
                        height={80}
                        alt="logo-3"
                    />
                    <h1 className="mt-6 text-[20px] font-semibold lg:text-[24px]">
                        MONEY BACK GUARANTEE
                    </h1>
                    <p className="text-[14px] lg:text-[16px]">
                        We return money within 30 days
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;