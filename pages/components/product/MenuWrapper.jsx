import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

function MenuWrapper() {
  return (
    <div className="mb-16 container">
      <div className="w-full text-center">
        <Title addClass={"text-black text-[40px]"}>Our Menu</Title>
      </div>
      <div className="w-full flex justify-center gap-x-5">
        <button className="bg-secondary px-[25px] py-[7px] rounded-full font-[16px]">
          All
        </button>
        <button className="bg-secondary px-[25px] py-[7px] rounded-full font-[16px]">
          Burger
        </button>
        <button className="bg-secondary px-[25px] py-[7px] rounded-full font-[16px]">
          Pizza
        </button>
        <button className="bg-secondary px-[25px] py-[7px] rounded-full font-[16px]">
          Paste
        </button>
        <button className="bg-secondary px-[25px] py-[7px] rounded-full font-[16px]">
          Fries
        </button>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MenuWrapper;
