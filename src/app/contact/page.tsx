
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
    return (
        <>
            <h1 className="text-[16px] w-[103px] h-[21px] mt-28 ml-28">
                Home / Cart
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 mt-24">
                <div className="flex flex-col bg-slate-50 p-6 rounded-lg shadow-md w-full md:w-[500px]">
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src="/images/call-ico.png"
                            alt="call-icon"
                            width={40}
                            height={40}
                        />
                        <h2 className="text-xl font-semibold">Call To Us</h2>
                    </div>
                    <span className="text-sm text-gray-700">We are available 24/7, 7 days a week.</span>
                    <span className="text-sm text-gray-700">Phone: +8801611112222</span>

                    <div className="border-b border-gray-300 my-4"></div>

                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src="/images/mail-ico.png"
                            alt="mail-icon"
                            width={40}
                            height={40}
                        />
                        <h2 className="text-xl font-semibold">Write To US</h2>

                    </div>
                    <p className="text-sm text-gray-700">Fill out our form and we will contact you within 24 hours.</p>

                    <span className="text-sm text-gray-700">Emails: customer@exclusive.com</span>
                    <span className="text-sm text-gray-700">Emails: support@exclusive.com</span>
                </div>

                <div className="flex flex-col gap-6 w-full md:w-[600px]">
                    <div className="flex gap-6">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="bg-slate-50 p-4 w-full border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Your Email *"
                            className="bg-slate-50 p-4 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex gap-6">
                        <input
                            type="tel"
                            placeholder="Your Phone *"
                            className="bg-slate-50 p-4 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <textarea
                        placeholder="Your Message *"
                        className="bg-slate-50 p-4 w-full h-[150px] border border-gray-300 rounded-md"
                    ></textarea>

                    <button className="bg-[#DB4444] text-white p-4 rounded-md font-semibold w-full md:w-[200px] mx-auto">
                        Send Message
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContactPage
