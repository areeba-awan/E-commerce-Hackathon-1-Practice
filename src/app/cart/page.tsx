import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartPage = () => {
    return (
        <>
            <h1 className="text-[16px] w-[103px] h-[21px] mt-28 ml-28">
                Home / Cart
            </h1>
            <div className="mt-28 px-4 lg:px-20">
                {/* Table Headers */}
                <div className="hidden lg:flex items-center justify-between text-gray-600 mb-8 font-semibold">
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Product</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Price</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Quantity</h1>
                    <h1 className="text-sm lg:text-base w-1/4 text-center">Subtotal</h1>
                </div>

                {/* Product Row 1 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 mb-6 border-b pb-4">
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/moniter-icon.png"
                            alt="pc-icon"
                            width={54}
                            height={54}
                            className="w-12 h-12"
                        />
                        <span className="text-sm lg:text-base">LCD Monitor</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/quantity1.png"
                            alt="quantity-icon"
                            width={72}
                            height={44}
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                </div>

                {/* Product Row 2 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 mb-6 border-b pb-4">
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/gamepad-icon.png"
                            alt="gamepad-icon"
                            width={54}
                            height={54}
                            className="w-12 h-12"
                        />
                        <span className="text-sm lg:text-base">H1 Gamepad</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$650</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <Image
                            src="/images/quantity2.png"
                            alt="quantity-icon"
                            width={72}
                            height={44}
                            className="w-16 h-auto"
                        />
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <span className="text-sm lg:text-base">$1100</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 lg:gap-8 mt-6 justify-between">
                    <button className="w-[218px] h-[58px] border border-black rounded-md text-sm lg:text-base">
                        Return To Shop
                    </button>
                    <button className="w-[195px] h-[56px] border border-black rounded-md text-sm lg:text-base">
                        Update Cart
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-16 px-4 md:px-20 gap-6">

                {/* Coupon Section */}
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-[450px]">
                    <button className="w-full h-[56px] border border-black rounded-md mb-4 md:mb-0">Coupon Code</button>
                    <button className="w-full md:w-[211px] h-[56px] bg-[#DB4444] text-[#FAFAFA] rounded-md">Apply Coupon</button>
                </div>

                {/* Cart Total Section */}
                <div className="w-full md:w-[470px] h-auto border border-black rounded-md p-6">
                    <h1 className="font-semibold text-lg mb-6">Cart Total</h1>

                    {/* Subtotal Row */}
                    <div className="flex items-center justify-between text-sm mb-4">
                        <h3 className="text-gray-700">Subtotal</h3>
                        <span className="font-semibold text-gray-900">$1750</span>
                    </div>

                    {/* Shipping Row */}
                    <div className="flex items-center justify-between text-sm mb-4">
                        <h3 className="text-gray-700">Shipping</h3>
                        <span className="font-semibold text-gray-900">Free</span>
                    </div>

                    {/* Total Row */}
                    <div className="flex items-center justify-between text-sm mb-6">
                        <h3 className="text-gray-700">Total</h3>
                        <span className="font-semibold text-gray-900">$1750</span>
                    </div>

                    {/* Checkout Button */}
                    <div className="flex items-center justify-center">
                        <Link href={"/checkout"}>
                            <button className="w-full md:w-[260px] h-[56px] py-3 bg-[#DB4444] text-[#FAFAFA] rounded-md font-semibold">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>

            </div>



        </>
    )
}

export default CartPage