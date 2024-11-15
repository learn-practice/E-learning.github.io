import React from "react";
import categories from "../Data/categories";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 my-10">
      {categories.map((categorie) => (
        <div
          key={categorie.title}
          className="flex flex-col md:flex-row items-start p-6 w-full md:w-[360px] h-auto rounded-lg  text-left bg-white shadow-sm shadow-emerald-900 transform transition-transform duration-300 hover:scale-105 "
        >
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <div className="text-4xl">{categorie.icon}</div>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-notoSansJP text-secondary text-shadow-md">{categorie.title}</h3>
            <p className=" text-sm  font-libreBaskerville text-primary md:text-base">{categorie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
