import React from 'react'
import Image from 'next/image'
import SalesCard from '@/components/SalesCard'

const ProductDetailPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 lg:px-12">
                <h1 className="text-sm lg:text-base mt-10 lg:mt-28">
                    Home / Gaming / Havic HV G-92 Gamepad
                </h1>

                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-evenly mt-8 lg:mt-16 gap-8">
                    {/* Sidebar Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num}>
                                <Image
                                    src={`/images/game${num}.png`}
                                    alt={`game-${num}`}
                                    width={170}
                                    height={138}
                                    className="rounded-md"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div>
                        <Image
                            src="/images/big-game.png"
                            alt="game-big"
                            width={500}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="max-w-md">
                        <h1 className="text-xl lg:text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
                        <div className="flex items-center gap-3 my-4">
                            <Image
                                src="/images/four-star.png"
                                alt="rating"
                                width={100}
                                height={20}
                            />
                            <span className="text-sm">(150 Reviews)</span>
                            <span className="hidden lg:block border-l border-gray-300 h-5"></span>
                            <span className="text-green-500 text-sm">In Stock</span>
                        </div>
                        <p className="text-lg font-semibold">$192.00</p>
                        <p className="mt-4 text-sm lg:text-base">
                            PlayStation 5 Controller Skin High-quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal Pressure sensitive.
                        </p>
                        <div className="border-b my-4"></div>

                        {/* Colors and Sizes */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span>Colours:</span>
                                <Image
                                    src="/images/two-dot.png"
                                    alt="two-dot"
                                    width={48}
                                    height={20}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Size:</span>
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <div
                                        key={size}
                                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white"
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-4 mt-6">
                            <button className="bg-red-500 text-white px-6 py-2 rounded">
                                Buy Now
                            </button>
                            <div className="w-8 h-8 border flex items-center justify-center rounded">
                                <Image
                                    src="/images/heart.svg"
                                    alt="wishlist"
                                    width={20}
                                    height={18}
                                />
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="border rounded-md mt-6 p-4 space-y-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/delivery.png"
                                    alt="delivery"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h2 className="font-semibold">Free Delivery</h2>
                                    <p className="text-sm">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="border-b"></div>
                            <div className="flex items-center gap-4 mt-4">
                                <Image
                                    src="/images/load.png"
                                    alt="return"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h2 className="font-semibold">Return Delivery</h2>
                                    <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-36 ml-28'>
                <Image
                    src={"/images/item-img.png"}
                    width={140}
                    height={40}
                    alt='item-img'
                />
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-evenly mt-8">
                <SalesCard
                    image="/images/gamepad.png"
                    heading="HAVIT HV-G92 Gamepad"
                    price="$120"
                    lowPrice="$160"
                    rating="/images/five-star.png"
                    category="(88)"
                />
                <SalesCard
                    image="/images/keyboard.png"
                    heading="AK-900 Wired Keyboard"
                    price="$960"
                    lowPrice="$1160"
                    rating="/images/four-star.png"
                    category="(75)"
                />
                <SalesCard
                    image="/images/moniter.png"
                    heading="IPS LCD Gaming Monitor"
                    price="$370"
                    lowPrice="$400"
                    rating="/images/five-star.png"
                    category="(99)"
                />
                <SalesCard
                    image="/images/technology.png"
                    heading="RGB liquid CPU Cooler"
                    price="$160"
                    lowPrice="$170"
                    rating="/images/half-star.png"
                    category="(65)"
                />
            </div>
        </>
    )
}

export default ProductDetailPage