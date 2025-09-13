import React from "react";

const ProductCard = ({productitems}) => {
    const { name, category, image, date, description, price } = productitems || {};
  return (
    <div className="card bg-base-100 text-white w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="image"
          className="w-full h-80 object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
            </div>
            <div>
                <p className="text-2xl mb-[10px]"><span className="text-[35px]">$</span>{price}</p>
            </div>
        </div>
        <p>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="badge badge-outline">{date}</div>
          <button className="px-3 py-1.5 bg-blue-500 rounded hover:bg-blue-800 cursor-pointer text-[16px] font-semibold">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
