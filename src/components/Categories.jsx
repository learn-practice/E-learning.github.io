import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const Categories = () => {
  return (
    <div className="px-2 md:text-left text-center">
      <Heading heading={"categories"}/>
      <Card/>
    </div>
  );
};

export default Categories;
