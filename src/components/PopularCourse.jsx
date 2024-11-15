import React from "react";
import Heading from "./Heading.jsx";
import PopularCard from "./PopularCard.jsx";
import coursedemo from "../Data/coursedemo.js";
const PopularCourse = () => {
  return (
    <div>
      <Heading heading={"Popular Course"} />
      <div className="my-5 bg-[url('/image/bubbles.png')] bg-cover bg-no-repeat p-10 textc rounded-2xl flex justify-center">
        <PopularCard data={coursedemo} />
      </div>
    </div>
  );
};

export default PopularCourse;
