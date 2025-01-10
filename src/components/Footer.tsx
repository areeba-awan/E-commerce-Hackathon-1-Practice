import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className='bg-black text-white mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-20 px-4'>
                {/* Exclusive Section */}
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='font-semibold text-[25px]  hover:text-orange-300'>Exclusive</h1>
                    <span className='text-[20px]  hover:text-yellow-400'>Subscribe</span>
                    <p className='text-[16px] text-center'>Get 10% off your first order</p>
                    <div className='border border-white w-full sm:w-[217px] h-[48px] rounded-md flex items-center justify-start pl-4 gap-4'>
                        <h3 className='text-[#FAFAFA]'>Enter your email</h3>
                        <Image
                            src={"/images/send.png"}
                            alt='send'
                            width={24}
                            height={24}
                        />
                    </div>
                </div>

                {/* Support Section */}
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='font-semibold text-[20px]  hover:text-orange-300'>Support</h1>
                    <address className='text-[16px] text-center hover:text-yellow-400'>
                        111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
                    </address>
                    <p className='text-[16px] text-center  hover:text-yellow-400'>exclusive@gmail.com</p>
                    <span className='text-[16px] text-center  hover:text-yellow-400'>+88015-88888-9999</span>
                </div>

                {/* Account Section */}
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='font-semibold text-[20px]  hover:text-orange-300'>Account</h1>
                    <ul className='list-none text-center'>
                        <li className='hover:text-yellow-400 '>My Account</li>
                        <li className='hover:text-yellow-400 '>Login / Register</li>
                        <li className='hover:text-yellow-400 '>Cart</li>
                        <li className='hover:text-yellow-400 '>Wishlist</li>
                        <li className='hover:text-yellow-400 '>Shop</li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='font-semibold text-[20px]  hover:text-orange-300'>Quick Link</h1>
                    <ul className='list-none text-center'>
                        <li className='hover:text-yellow-400'>Privacy Policy</li>
                        <li className='hover:text-yellow-400'>Terms Of Use</li>
                        <li className='hover:text-yellow-400'>FAQ</li>
                        <li className='hover:text-yellow-400'>Contact</li>
                    </ul>
                </div>

                {/* Download App Section */}
                <div className='flex flex-col items-center justify-start gap-4'>
                    <h1 className='font-semibold text-[20px] hover:text-orange-300'>Download App</h1>
                    <span className='text-[12px] text-center'>Save $3 with App New User Only</span>
                    <div className='flex items-center justify-center gap-4'>
                        <Image
                            src={"/images/code.png"}
                            alt='code'
                            width={76}
                            height={76}
                        />
                        <Image
                            src={"/images/social.png"}
                            alt='social'
                            width={110}
                            height={84}
                        />
                    </div>
                    <Image
                        src={"/images/social-links.svg"}
                        alt='social'
                        width={168}
                        height={24}
                        className='mt-5'
                    />
                </div>
            </div>

            {/* Copyright Section */}
            <div className='bg-black h-[40px] flex items-center justify-center gap-3 text-white'>
            {/* <img src="http://localhost:3000/images/copyright.svg"
             style={{ width: '20px', height: 'auto' }} 
            alt="Copyright" /> */}

                 <Image
                    src={"/images/copyright.svg"}
                    alt='social'
                    width={20}
                    height={20}
                    className='h-auto'
                /> 
                <span className='w-full text-center sm:w-[311px] h-[24px]'>
                    Copyright Rimel 2022. All right reserved
                </span>
            </div>
        </>
    )
}

export default Footer