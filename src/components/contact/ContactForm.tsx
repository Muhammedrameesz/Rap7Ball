"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const schema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen py-10 font-jakarta relative">
      <div className="fixed inset-0 bg-[#f0f7f9] -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-7xl mx-auto px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 md:p-10  shadow-md flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 mb-2">
            <h2 className="text-3xl font-semibold">Need Any Help?</h2>
            <p className="text-base font-medium text-gray-500">
              Please fill out the form below and we&apos;ll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">First Name</span>
              <input
                type="text"
                {...register("firstName")}
                placeholder="First Name"
                className="input input-bordered border-2 border-gray-400 focus:border-customBlue focus:outline-none w-full p-2"
              />
              <span className="text-red-500 text-sm">
                {errors.firstName?.message}
              </span>
            </label>

            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Last Name</span>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
                className="input input-bordered border-2 border-gray-400 focus:border-customBlue focus:outline-none w-full p-2 "
              />
              <span className="text-red-500 text-sm">
                {errors.lastName?.message}
              </span>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Email</span>
              <input
                type="email"
                {...register("email")}
                placeholder="Your Email"
                className="input input-bordered border-2 border-gray-400  focus:border-customBlue focus:outline-none w-full  p-2 "
              />
              <span className="text-red-500 text-sm">
                {errors.email?.message}
              </span>
            </label>

            <label className="form-control w-full md:w-1/2">
              <span className="label-text font-medium mb-2">Phone</span>
              <input
                type="text"
                {...register("phone")}
                placeholder="Your Phone"
                className="input input-bordered border-2 border-gray-400 w-full  p-2 
                    focus:border-customBlue focus:outline-none"
              />
              <span className="text-red-500 text-sm">
                {errors.phone?.message}
              </span>
            </label>
          </div>

          <label className="form-control w-full mt-3">
            <span className="label-text font-medium mb-2">Message</span>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="textarea textarea-bordered h-28 border-2 border-gray-400 w-full p-2 
                             focus:border-customBlue focus:outline-none"
            />
            <span className="text-red-500 text-sm">
              {errors.message?.message}
            </span>
          </label>

          <motion.button
            type="submit"
            className="w-full cursor-pointer relative overflow-hidden rounded-xl 
            bg-[#0e1552]  px-6 py-3 
            text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-700"
          >
            <span className="z-10 relative">Send Message</span>
          </motion.button>

          <h1 className="text-sm text-center">
            How to take our service? Visit{" "}
            <span className="text-blue-500 cursor-pointer font-medium">
              Terms & Conditions
            </span>{" "}
            page.
          </h1>
        </form>

        <div className="flex flex-col space-y-5 justify-center">
          <p className="text-red-500 font-medium">Contact Us</p>
          <h1 className="text-4xl font-semibold text-gray-900">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 font-medium text-base max-w-lg">
            We&apos;re always happy to hear from you. You can also reach us
            through the following platforms.
          </p>

          <div className="space-y-4 pt-6 ">
            <ContactDetail
              icon={
                <MdOutlineMailOutline className="icon-style text-blue-500" />
              }
              label="Email Now:"
              value="example@gmail.com"
              href="mailto:example@gmail.com"
            />
            <ContactDetail
              icon={<FaInstagram className="icon-style text-pink-500" />}
              label="Follow us:"
              value="example@instagram.com"
              href="https://instagram.com/example"
            />
            <ContactDetail
              icon={<FaTwitter className="icon-style text-black" />}
              label="Tweet us:"
              value="example@x.com"
              href="https://twitter.com/example"
            />
            <ContactDetail
              icon={<MdLocalPhone className="icon-style text-green-500" />}
              label="Call Us:"
              value="+123 456 7890"
              href="tel:+1234567890"
            />
            <ContactDetail
              icon={<CiLocationOn className="icon-style text-red-500" />}
              label="Visit Us:"
              value="123 Main Street, City, Country"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactDetailProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function ContactDetail({ icon, label, value, href }: ContactDetailProps) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <span className="text-sm font-medium">{label}</span>
      {href ? (
        <a href={href} className="text-blue-500 text-sm font-medium">
          {value}
        </a>
      ) : (
        <p className="text-blue-500 text-sm font-medium">{value}</p>
      )}
    </div>
  );
}
