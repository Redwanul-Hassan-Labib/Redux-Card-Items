import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToCard } from "../redux/feature/product/productSlice";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addToCard(data))
    reset()
  }
  return (
    <div>
      <h3 className="badge badge-outline px-4 py-5 text-[18px] font-semibold">
        Add New Product
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[10px] px-3 py-2 border rounded space-y-3"
      >
        <div className="flex flex-col">
          <label className="font-semibold">Product Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            placeholder="Enter Prodect Name"
            className="focus:outline-none border py-2 px-4 rounded border-blue-600 mt-[8px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Product Description:</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            placeholder="Enter Product Description"
            className="focus:outline-none border py-2 px-4 rounded border-blue-600 mt-[8px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Product Image URL:</label>
          <input
            type="text"
            id="URL"
            {...register("image", { required: true })}
            placeholder="https://"
            className="focus:outline-none border py-2 px-4 rounded border-blue-600 mt-[8px]"
          />
        </div>
        <select
          name="category"
          id="category"
          {...register("category", { required: true })}
          className="w-full focus:outline-none border py-2 px-4 rounded border-blue-600 mt-[8px]"
        >
          <option value="Enter Product Category">Choose a category</option>
          <option value="Feshion">Feshion</option>
          <option value="Eletonics">Eletonics</option>
          <option value="Gadget">Gadget</option>
        </select>
        <div className="flex items-center gap-2 ">
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price $100"
            className="w-full focus:outline-none border py-2 px-4 rounded border-blue-600"
          />
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full focus:outline-none border py-2 px-2 rounded border-blue-600"
          />
        </div>
        <button
          type="submit"
          className="text-center w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-800 text-white rounded font-semibold cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
