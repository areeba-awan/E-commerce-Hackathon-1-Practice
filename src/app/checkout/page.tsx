import React from 'react';
import Image from 'next/image';

const CheckOutPage = () => {
    return (
        <>
            <h1 className="text-[16px] mt-28 ml-8 md:ml-28">
                Account / My Account / Product / View Cart / CheckOut
            </h1>
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between mt-12 px-6 lg:px-24 gap-12">
                {/* Billing Details Section */}
                <div className="w-full lg:w-1/2">
                    <h1 className="font-semibold text-[28px] lg:text-[35px] mb-10">Billing Details</h1>
                    <div className="space-y-6">
                        {[
                            { label: 'First Name*', placeholder: 'Enter your first name' },
                            { label: 'Company Name', placeholder: 'Enter your company name' },
                            { label: 'Street Address*', placeholder: 'Enter your street address' },
                            { label: 'Apartment, floor, etc. (optional)', placeholder: 'Enter additional address info' },
                            { label: 'Town/City*', placeholder: 'Enter your city' },
                            { label: 'Phone Number*', placeholder: 'Enter your phone number' },
                            { label: 'Email Address*', placeholder: 'Enter your email address' },
                        ].map((input, index) => (
                            <div key={index}>
                                <label className="block mb-2 text-sm font-medium">{input.label}</label>
                                <input
                                    type="text"
                                    placeholder={input.placeholder}
                                    className="bg-[#F5F5F5] p-4 w-full h-[50px] rounded-md focus:outline-none"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-6 gap-4">
                        <Image
                            src="/images/checkbox.png"
                            width={24}
                            height={24}
                            alt="checkbox-img"
                        />
                        <span>Save this information for faster check-out next time</span>
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-md">
                    <h2 className="text-[28px] lg:text-[35px] font-semibold mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        {[
                            { image: '/images/moniter-icon.png', name: 'LCD Monitor', price: '$650' },
                            { image: '/images/gamepad-icon.png', name: 'H1 Gamepad', price: '$650' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={54}
                                        height={54}
                                    />
                                    <h3 className="text-base">{item.name}</h3>
                                </div>
                                <span className="text-base font-semibold">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 space-y-4 text-sm">
                        <div className="flex justify-between">
                            <h3>Subtotal:</h3>
                            <span>$1750</span>
                        </div>
                        <div className="flex justify-between">
                            <h3>Shipping:</h3>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-4">
                            <h3>Total:</h3>
                            <span className="font-semibold text-lg">$1750</span>
                        </div>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-[24px] h-[24px] border border-black rounded-full"></div>
                            <span>Bank</span>
                            <Image
                                src="/images/logos.png"
                                alt="logos"
                                width={192}
                                height={28}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-[24px] h-[24px] border border-black rounded-full"></div>
                            <span>Cash On Delivery</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 h-[56px] border border-black rounded-md">
                                Coupon Code
                            </button>
                            <button className="w-1/2 h-[56px] bg-[#DB4444] text-white rounded-md">
                                Apply Coupon
                            </button>
                        </div>
                        <button className="w-[190px] h-[56px] bg-[#DB4444] text-white rounded-md">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutPage;