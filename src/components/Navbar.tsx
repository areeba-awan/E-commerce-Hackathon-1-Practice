"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <header className="hidden sm:flex h-[50px] items-center justify-center bg-black text-white">
        <div className="flex items-center justify-between w-full max-w-[1200px] px-4">
          <span className="text-[14px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <button className="border-b border-white hover:text-gray-300 transition">
            Shop Now
          </button>
        </div>
      </header>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-md">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4">
          {/* Logo */}
          <h1 className="font-bold text-xl sm:text-2xl text-gray-800 hover:text-purple-500">Exclusive</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 text-lg font-medium">
            <li className="hover:text-[#e36450] transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#e36450] transition">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-[#e36450] transition">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#e36450] transition">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>

          {/* Search Box */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-[250px]">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm outline-none flex-grow"
            />
            <Image
              src="/images/search.svg"
              alt="search-icon"
              width={26}
              height={26}
            />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">

            <Link href={"/wishlist"}>
              <Image
                src="/images/heart.svg"
                alt="favorites-icon"
                width={32}
                height={32}
                className="cursor-pointer hover:scale-110 transition"
              />
            </Link>

            <Link href={"/cart"}>
            <Image
              src="/images/cart.svg"
              alt="cart-icon"
              width={32}
              height={32}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
            <Link href={"/account"}>
            <Image
              src="/images/user.png"
              alt="cart-icon"
              width={32}
              height={32}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/menu.svg"
                alt="menu-icon"
                width={24}
                height={24}
              />
              <Link href={"/wishlist"}>
              <Image
                src="/images/heart.svg"
                alt="favorites-icon"
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition"
              />
            </Link>

            <Link href={"/cart"}>
            <Image
              src="/images/cart.svg"
              alt="cart-icon"
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
            <Link href={"/account"}>
            <Image
              src="/images/user.png"
              alt="cart-icon"
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition"
            />
            </Link>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 flex flex-col items-center py-4">
            <Link href="/" className="py-2 text-lg text-gray-800 hover:text-[#c73232]">
              Home
            </Link>
            <Link
              href="/contact"
              className="py-2 text-lg text-gray-800 hover:text-[#c73232]"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="py-2 text-lg text-gray-800 hover:text-[#c73232]"
            >
              About
            </Link>
            <Link
              href="/sign-up"
              className="py-2 text-lg text-gray-800 hover:text-[#c73232]"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;