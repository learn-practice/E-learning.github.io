import React from "react";
import Button from "./Button";

const PopularCard = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
      {data.map((entry, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] rounded-lg p-5 bg-white shadow-md transform transition-transform duration-300 hover:scale-105 h-auto"
        >
          <img
            src={entry.image}
            alt={entry.tittle}
            className="rounded-sm w-full h-[200px] object-cover"
          />
          <p className="text-left font-bold font-libreBaskerville text-primary py-2 text-xl sm:text-2xl">
            {entry.tittle}
          </p>

          <p className="text-sm font-notoSansJP font-semibold text-ternary pb-5">
            {entry.description}
          </p>
          <div className="text-right flex justify-between items-center">
            <p className="text-secondary font-archivoBlack text-lg sm:text-xl">
              {entry.price} <span className="font-bold">₹</span>
            </p>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCard;
