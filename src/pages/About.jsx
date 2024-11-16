import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center text-left p-5 md:p-20 gap-5">
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src="/image/person3.jpg"
            alt="teacher pic"
            className="rounded-lg w-full max-w-[400px] md:max-w-none"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-secondary mb-3 font-semibold font-libreBaskerville text-2xl md:text-3xl">
            Ram Sharma
          </h1>
          <p className="text-base md:text-lg text-primary font-notoSansJP font-normal leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            modi ipsum facilis voluptatum quidem fugit eius! Deleniti laboriosam
            asperiores iure harum maiores odio labore nihil libero voluptates
            accusantium expedita, dolores magni consequuntur earum esse,
            ratione, aliquid alias porro cum consectetur?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
