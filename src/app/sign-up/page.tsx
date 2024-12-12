
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-16 w-full max-w-[1305px] mx-auto min-h-screen p-6 lg:p-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <Image
          src="/images/signup.png"
          alt="sign-up"
          width={805}
          height={781}
          className="w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[805px]"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold mb-4 text-center lg:text-left">
          Create an account
        </h1>
        <span className="text-[14px] sm:text-[16px] text-gray-500 mb-8 text-center lg:text-left">
          Enter your details below
        </span>

        {/* Name Input */}
        <div className="w-full max-w-[370px]">
          <label className="text-sm font-medium text-gray-600">Name</label>
          <div className="border-b border-black w-full pb-2 mb-6"></div>
        </div>

        {/* Password Input */}
        <div className="w-full max-w-[370px]">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <div className="border-b border-gray-600 w-full pb-2 mb-6"></div>
        </div>

        {/* Create Account Button */}
        <button className="w-full max-w-[370px] h-[56px] bg-[#DB4444] text-white rounded-md mb-4 shadow-md hover:bg-[#1f665f] transition">
          Create Account
        </button>

        {/* Google Sign Up Button */}
        <button className="w-full max-w-[370px] h-[56px] border border-gray-600 flex items-center justify-center gap-4 rounded-md mb-6 hover:shadow-lg transition">
          <Image
            src="/images/google.png"
            width={24}
            height={24}
            alt="google-icon"
          />
          <span className='hover:text-gray-800'>Sign up with Google</span>
        </button>

        {/* Login Option */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span className='hover:cursor-pointer hover:underline underline-offset-2'>Already have an account?</span>
          <Link href={"/login"}>
          <span className="border-b border-black pb-1 cursor-pointer hover:text-orange-700">
            Log in
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;