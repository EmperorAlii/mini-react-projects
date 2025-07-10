import React from "react";
import picture from "../assets/myPicture.jpg";

const Description = () => {
  return (
    <>
      <div>
        <img src={picture} alt="card picture" />
        <h1 className="mx-2 text-2xl font-bold text-center">Ali Imam</h1>
        <p className="mx-2 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          tempore, accusamus atque vitae numquam enim at, accusantium labore,
          quisquam odit doloremque minus porro explicabo quod ab aperiam ex!
          Cum, doloremque.
        </p>
      </div>
    </>
  );
};

export default Description;
