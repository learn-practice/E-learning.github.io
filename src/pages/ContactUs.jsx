import React from "react";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="text-center text-2xl font-bold font-libreBaskerville text-secondary mt-5">
          <h1 >Contact Us</h1>
        </div>
      <div className="w-full flex justify-center items-center mt-10">
        
        <form action="" className="md:w-[70%] lg:w-[50%] sm:w-[80%] ">
          <div className="flex sm:flex-col md:flex-row w-full gap-5 mb-3">
            <div className="w-[50%]">
              <label htmlFor="firstName" className="text-ternary font-black font-libreBaskerville">First Name</label>
              <input
                className="w-[100%] border-b border-secondary p-2 text-ternary font-libreBaskerville text-sm font-light  focus:outline-none"
                type="text"
                placeholder="EnterFirst Name"
              />
            </div>
            <div className="w-[50%]">
              <label htmlFor="lastName"className="text-primary font-black font-libreBaskerville ">Last Name</label>
              <input
                className="w-[100%] border-b p-2 text-ternary font-libreBaskerville text-sm border-secondary font-light focus:outline-none "
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="text-primary font-black font-libreBaskerville">Email</label>
            <input
              className="w-[100%] border-b p-2 text-ternary border-secondary  font-libreBaskerville text-sm font-light focus:outline-none "
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PhoneNo" className="text-primary font-black font-libreBaskerville">Phone Number</label>
            <input
              className="w-[100%] border-secondary  border-b p-2 font-light text-ternary font-libreBaskerville text-sm focus:outline-none"
              type="text"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="text-primary font-black font-libreBaskerville">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter the message here..."
              className="border-b border-secondary text-ternary text-sm font-light resize-none focus:outline-none w-full h-44 font-libreBaskerville"
            
            ></textarea>
          </div>
          <div className="text-right">
            <input className="text-right border font-libreBaskerville font-bold text-primary px-5 py-2 rounded-full border-secondary hover:bg-secondary hover:border-primary hover:text-white" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <div className="px-10">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
