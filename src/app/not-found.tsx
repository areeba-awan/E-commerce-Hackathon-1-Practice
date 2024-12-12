import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-sm lg:text-base w-full lg:w-auto mt-8 lg:mt-28 ml-8 lg:ml-28">
        Home / 404 Error
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 mt-12 lg:mt-24 px-4 text-center">
        <h1 className="font-bold text-[60px] lg:text-[110px] leading-tight">
          404 Not Found
        </h1>
        <p className="text-sm lg:text-base max-w-md">
          The page you visited could not be found. You may return to the home page.
        </p>
        <Link href="/">
          <button className="w-full max-w-[250px] h-12 lg:h-[56px] lg:w-[250px] p-4 rounded-md bg-[#DB4444] text-white mt-8">
            Back to Home Page
          </button>
        </Link>
      </div>
    </>
  )
}

export default ErrorPage