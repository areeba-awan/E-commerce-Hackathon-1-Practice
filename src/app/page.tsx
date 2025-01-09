import Category from '@/components/Category';
import CategoryCard from '@/components/CategoryCard';
import ExploreProducts from '@/components/ExploreProducts';
import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';
import MoreProducts from '@/components/MoreProducts';
import MusicSection from '@/components/MusicSection';
import Product from '@/components/Product';
import ProductCard from '@/components/ProductCard';
import SalesCard from '@/components/SalesCard';
import Today from '@/components/Today';
import React from 'react';
import Explore from '@/components/Explore';
import Link from 'next/link'


const page = () => {
    return (
        <div>
            <HeroSection />
            <Today />
            <div className="flex flex-wrap gap-5 justify-center lg:justify-center mt-8">
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
                    image="/images/chair.png"
                    heading="S-Series Comfort Chair"
                    price="$370"
                    lowPrice="$400"
                    rating="/images/half-star.png"
                    category="(99)"
                />
            </div>
            <Link href={"/product-detailed-page"}>
                <div className="flex items-center justify-center mt-8 sm:mt-10 lg:mt-14">

                    <button className="bg-[#DB4444] text-white text-[14px] sm:text-[16px] w-[80%] max-w-[234px] h-[48px] sm:h-[56px] rounded-md hover:bg-[#d8c939] transition-all">
                        View All Products
                    </button>

                </div>
            </Link>
            <Category />
            <div className="flex flex-wrap justify-center lg:justify-center gap-6 mt-6 px-4 lg:px-0">
                <CategoryCard image="/images/mobile.png" heading="Phones" />
                <CategoryCard image="/images/computer.png" heading="Computers" />
                <CategoryCard image="/images/smartwatch.png" heading="SmartWatch" />
                <CategoryCard image="/images/camera.svg" heading="Camera" />
                <CategoryCard image="/images/headphone.png" heading="HeadPhones" />
                <CategoryCard image="/images/category-gamepad.png" heading="Gaming" />
            </div>
            <Product />
            <div className="flex flex-wrap justify-center gap-6 mt-6 px-4 lg:px-0">
                <ProductCard
                    image='/images/shirt.png'
                    heading='The north coat'
                    price='$260'
                    lowPrice='$360'
                    rating="/images/five-star.png"
                    category='(65)'
                />
                <ProductCard
                    image='/images/bag.png'
                    heading='Gucci duffle bag'
                    price='$960'
                    lowPrice='$1160'
                    rating="/images/half-star.png"
                    category='(65)'
                />
                <ProductCard
                    image='/images/cpu.png'
                    heading='RGB liquid CPU Cooler'
                    price='$160'
                    lowPrice='$170'
                    rating="/images/half-star.png"
                    category='(65)'
                />
                <ProductCard
                    image='/images/books.png'
                    heading='Small BookSelf'
                    price='$360'
                    lowPrice='$400'
                    rating="/images/five-star.png"
                    category='(65)'
                />
            </div>

            <MusicSection />
            <Explore />

            <div className='flex flex-wrap justify-center lg:justify-center  gap-4 mt-6'>
                <ExploreProducts
                    image='/images/dog.png'
                    heading='Breed Dry Dog Food'
                    price='$100'
                    rating="/images/three-star.png"
                    category='(35)'
                />
                <ExploreProducts
                    image='/images/new-camera.png'
                    heading='CANON EOS DSLR Camera'
                    price='$360'
                    rating="/images/four-star.png"
                    category='(95)'
                />
                <ExploreProducts
                    image='/images/laptop.png'
                    heading='ASUS FHD Gaming Laptop'
                    price='$700'
                    rating="/images/five-star.png"
                    category='(325)'
                />
                <ExploreProducts
                    image='/images/cream.png'
                    heading='Curology Product Set'
                    price='$700'
                    rating="/images/four-star.png"
                    category='(145)'
                />
            </div>

            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                <MoreProducts
                    image='/images/car.png'
                    heading='Kids Electric Car'
                    price='$960'
                    rating="/images/five-star.png"
                    category='(65)'
                    dot="/images/dots.png"
                />
                <MoreProducts
                    image='/images/shoes.png'
                    heading='Jr. Zoom Soccer Cleats'
                    price='$1160'
                    rating="/images/five-star.png"
                    category='(35)'
                    dot="/images/dots.png"
                />
                <MoreProducts
                    image='/images/child-game.png'
                    heading='GP11 Shooter USB Gamepad'
                    price='$660'
                    rating="/images/five-star.png"
                    category='(35)'
                    dot="/images/dots.png"
                />
                <MoreProducts
                    image='/images/jacket.png'
                    heading='Quilted Satin Jacket'
                    price='$660'
                    rating="/images/five-star.png"
                    category='(55)'
                    dot="/images/dots.png"
                />
            </div>
            <Features />

        </div>
    )
}

export default page