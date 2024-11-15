import React from 'react';
import Heading from './Heading';

const Testimonial = () => {
  return (
    <div className="p-4">
      <Heading heading={"Testimonial"} />
      <p className="text-primary text-lg font-bold font-libreBaskerville py-4 text-center md:text-left">
        See what our students say about us.
      </p>
      
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
        
        <div className="flex flex-col items-center w-full max-w-xs text-center border border-secondary rounded-lg p-5 shadow-lg md:w-1/4">
          <div className="flex justify-center">
            <img
              src="/image/person1.jpg"
              alt="Lalita Kadam"
              className="rounded-full w-32 h-32 border border-primary"
            />
          </div>
          <p className="text-lg text-secondary font-libreBaskerville font-bold mt-4">
            Lalita Kadam
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum, laudantium.
          </p>
        </div>
        
        <div className="flex flex-col items-center w-full max-w-xs text-center border border-secondary rounded-lg p-5 shadow-lg md:w-1/4">
          <div className="flex justify-center">
            <img
              src="/image/person3.jpg"
              alt="John Doe"
              className="rounded-full w-32 h-32 border border-primary"
            />
          </div>
          <p className="text-lg text-secondary font-libreBaskerville font-bold mt-4">
            John Doe
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum, laudantium.
          </p>
        </div>
        
        <div className="flex flex-col items-center w-full max-w-xs text-center border border-secondary rounded-lg p-5 shadow-lg md:w-1/4">
          <div className="flex justify-center">
            <img
              src="/image/person4.jpg"
              alt="Ram Shankar"
              className="rounded-full w-32 h-32 border border-primary"
            />
          </div>
          <p className="text-lg text-secondary font-libreBaskerville font-bold mt-4">
            Ram Shankar
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum, laudantium.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
