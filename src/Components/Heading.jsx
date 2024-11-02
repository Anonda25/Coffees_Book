import React from "react";

function Heading({ title, subtitle }) {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <p className=" text-xl font-thin md:text-2xl lg:text-4xl mt-4 ">
        {title}
      </p>
      <p className="text-xs md:text-base mt-3 text-gray-600 text-center font-thin ">
        {subtitle}
      </p>
    </div>
  );
}

export default Heading;
