import React from 'react'
import Image from 'next/image'

const MusicSection = () => {
    return (
        <div className='bg-black h-auto mt-28 px-4 sm:px-10 lg:px-20 py-8 '>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
                {/* Left Section */}
                <div className='flex flex-col gap-6 w-full lg:w-[443px] text-center lg:text-left'>
                    <span className='text-[#00FF66] text-lg font-medium '>Categories</span>
                    <h1 className='text-[#FAFAFA] text-[32px] sm:text-[38px] lg:text-[48px] font-semibold'>
                        Enhance Your <br /> Music Experience
                    </h1>

                    <div className='flex justify-center lg:justify-start gap-4'>
                        <div>
                            <Image
                                src={"/images/23.png"}
                                alt='category-1'
                                width={62}
                                height={62}
                            />
                        </div>
                        <div>
                            <Image
                                src={"/images/five.png"}
                                alt='category-2'
                                width={62}
                                height={62}
                            />
                        </div>
                        <div>
                            <Image
                                src={"/images/59.png"}
                                alt='category-3'
                                width={62}
                                height={62}
                            />
                        </div>
                        <div>
                            <Image
                                src={"/images/35.png"}
                                alt='category-4'
                                width={62}
                                height={62}
                            />
                        </div>
                    </div>

                    <button className='w-[171px] h-[56px] bg-[#00FF66] mt-8 rounded-md self-center lg:self-start'>
                        Buy Now!
                    </button>
                </div>

                {/* Right Section (Image) */}
                <div className='w-full lg:w-auto'>
                    <Image
                        src={"/images/music.png"}
                        alt='music-image'
                        width={600}
                        height={420}
                        className='object-contain mx-auto lg:mx-0'
                    />
                </div>
            </div>
        </div>
    )
}

export default MusicSection