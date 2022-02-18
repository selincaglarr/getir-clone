import React, { useEffect, useState } from "react";
import categoryData from "data/categories.json";
import Category from "components/ui/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //request
    setTimeout(() => {
      setCategories(categoryData);
    }, 2000);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10 ">
          {!categories.length && "Kategoriler Yükleniyor..."}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
