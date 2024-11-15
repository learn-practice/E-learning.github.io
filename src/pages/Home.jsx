import React from "react";
import Categories from "../components/Categories";
import PopularCourse from "../components/PopularCourse";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full h-auto px-5 md:px-10 pt-20">
        {" "}
        {/* Added pt-20 for padding-top */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:min-h-[80vh] text-center md:mb-20 mb-10">
          {/* Image Section - displays first on small screens */}
          <div className="w-full md:w-[40%] h-auto overflow-hidden order-1 md:order-2 mb-5 md:mb-0">
            <img
              src="/image/sideimage.webp"
              alt="girl learning"
              className="w-full h-auto object-cover max-h-[300px] md:max-h-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[60%] text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl md:text-5xl tracking-wide text-primary font-archivoBlack font-extrabold leading-tight">
              Your Journey to Knowledge Starts Here, Unlock Your Potential:{" "}
              <span className="text-secondary font-libreBaskerville">
                Learn, Grow, Succeed
              </span>
            </h1>
          </div>
        </div>
        {/* Categories Component */}
        <Categories />
        {/* popular course component */}
        <PopularCourse />
        {/* testimonial of student component */}
        <Testimonial />
        {/* FAQ component */}
        <FAQ />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
