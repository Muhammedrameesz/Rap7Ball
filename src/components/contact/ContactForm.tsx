"use client";

import Image from "next/image";

export default function ContactForm() {
  const inputStyle =
    "w-full p-2  bg-white shadow-gray-400 shadow-md rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#2b318a]";
  return (
    <section className="pt-20 pb-10 bg-white  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-7 max-w-7xl items-center mx-auto">
        <div className="w-full  mx-auto h-auto ">
          <Image
            src="https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg?t=st=1744292501~exp=1744296101~hmac=1266bdcbd3a4d833ef78f043d491442fb363b0282e317dfee5a8f7ebbd56cf07&w=740"
            alt="Businessman"
            width={900}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className=" space-y-6">
          <p className="text-center text-gray-600">
            Do you have any questions? Feel free to ask us anytime!
          </p>

          <form
            action=""
            className="space-y-8 bg-white shadow-newNormal p-8 rounded "
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                placeholder="First Name"
                className={`${inputStyle}`}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`${inputStyle}`}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className={`${inputStyle}`}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={`${inputStyle}`}
            />

            <textarea
              rows={6}
              placeholder="Type your message here..."
              className="w-full p-2   bg-white shadow-gray-400 shadow-md rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[#2b318a] resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-[#2b318a] text-white font-semibold py-2 text-xl  hover:bg-blue-800 transition-colors duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
