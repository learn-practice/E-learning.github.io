import React from "react";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-center text-2xl font-bold font-libreBaskerville text-secondary mt-5">
        <h1>Contact Us</h1>
      </div>

      {/* Form Section */}
      <div className="w-full flex justify-center items-center mt-10 px-5">
        <form className="w-full max-w-3xl">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-primary font-black font-libreBaskerville mb-2"
              >
                First Name
              </label>
              <input
                className="w-full border-b border-secondary p-2 text-ternary font-libreBaskerville text-sm font-light focus:outline-none"
                type="text"
                id="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-primary font-black font-libreBaskerville mb-2"
              >
                Last Name
              </label>
              <input
                className="w-full border-b p-2 text-ternary font-libreBaskerville text-sm border-secondary font-light focus:outline-none"
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-primary font-black font-libreBaskerville mb-2"
            >
              Email
            </label>
            <input
              className="w-full border-b p-2 text-ternary border-secondary font-libreBaskerville text-sm font-light focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-primary font-black font-libreBaskerville mb-2"
            >
              Phone Number
            </label>
            <input
              className="w-full border-b p-2 font-light text-ternary font-libreBaskerville text-sm border-secondary focus:outline-none"
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
            />
          </div>

          {/* Message Field */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block text-primary font-black font-libreBaskerville mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter the message here..."
              className="w-full border-b border-secondary text-ternary text-sm font-light resize-none focus:outline-none h-44 font-libreBaskerville"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="border font-libreBaskerville font-bold text-primary px-5 py-2 rounded-full border-secondary hover:bg-secondary hover:border-primary hover:text-white transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="px-5 lg:px-10">
        <FAQ />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
