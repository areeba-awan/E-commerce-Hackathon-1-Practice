import React from 'react'
import SalesCard from '@/components/SalesCard'
import Image from 'next/image'

const WishListPage = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-5 sm:mx-20 mt-10 sm:mt-28">
                <h1 className="text-[16px] sm:text-[20px] text-center sm:text-left">
                    Wishlist (4)
                </h1>
                <button className="border border-black w-full sm:w-[223px] h-[48px] sm:h-[56px] rounded-md">
                    Move All To Bag
                </button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-evenly mt-8">
                <SalesCard
                    image="/images/white-bag.png"
                    heading="Gucci duffle bag"
                    price="$960"
                    lowPrice="$1160"
                    rating="/images/five-star.png"
                    category="(88)"
                />
                <SalesCard
                    image="/images/colorfull-cpu.png"
                    heading="RGB liquid CPU Cooler"
                    price="$1960"
                    lowPrice="$2660"
                    rating="/images/four-star.png"
                    category="(75)"
                />
                <SalesCard
                    image="/images/black-gamepad.png"
                    heading="GP11 Shooter USB Gamepad"
                    price="$550"
                    lowPrice="$8000"
                    rating="/images/five-star.png"
                    category="(99)"
                />
                <SalesCard
                    image="/images/blue-jacket.png"
                    heading="Quilted Satin Jacket"
                    price="$960"
                    lowPrice="$1160"
                    rating="/images/half-star.png"
                    category="(99)"
                />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mx-5 sm:mx-20 mt-10 sm:mt-28">
  <Image
    src="/images/just.png"
    alt="just-for-you"
    width={120} /* Reduced for smaller screens */
    height={30}
    className="sm:w-[156px] sm:h-[40px]"
  />
  <button className="border border-black w-full sm:w-[223px] h-[48px] sm:h-[56px] rounded-md">
    Move All To Bag
  </button>
</div>


            <div className="flex flex-wrap gap-4 justify-center lg:justify-evenly mt-8">
                <SalesCard
                    image="/images/black-laptop.png"
                    heading="ASUS FHD Gaming Laptop"
                    price="$1160"
                    lowPrice="$2160"
                    rating="/images/five-star.png"
                    category="(88)"
                />
                <SalesCard
                    image="/images/red-moniter.png"
                    heading="IPS LCD Gaming Monitor"
                    price="$1160"
                    lowPrice="$2660"
                    rating="/images/four-star.png"
                    category="(75)"
                />
                <SalesCard
                    image="/images/red-gamepad.png"
                    heading="HAVIT HV-G92 Gamepad"
                    price="$560"
                    lowPrice="$800"
                    rating="/images/five-star.png"
                    category="(99)"
                />
                <SalesCard
                    image="/images/kb.png"
                    heading="AK-900 Wired Keyboard"
                    price="$200"
                    lowPrice="$300"
                    rating="/images/half-star.png"
                    category="(99)"
                />
            </div>



        </>
    )
}

export default WishListPage