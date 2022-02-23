import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <a className="flex flex-col items-center gap-y-2 text-center transition hover:bg-purple-100 hover:rounded-md hover:text-primary" href="#">
      <img
        className="w-12 h-12 m-4   rounded-md border border-3 border-gray-300  "
        src={image}
        alt={title}
      ></img>
      <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{title}</span>
    </a>
  );
};

export default Category;
