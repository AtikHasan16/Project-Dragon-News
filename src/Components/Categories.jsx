import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json()
);

const Categories = () => {
  const categories = use(categoryPromise);
//   console.log(categories);

  return (
    <div>
      <h1 className="font-bold text-xl mb-5">All Category</h1>
      <div className="grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`categories/${category.id}`}
            className={
              "font-medium text-xl text-left rounded-xl bg-white border-0 hover:bg-neutral-200 text-gray-500 py-5 px-10"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
