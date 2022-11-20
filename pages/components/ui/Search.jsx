import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

function Search({ setSearchIsModal }) {
  return (
    <div className="after:w-screen after:h-screen after:bg-black after:absolute after:top-0 after:opacity-60 after:z-30 grid place-content-center">
      <OutsideClickHandler
        onOutsideClick={() => {
          setSearchIsModal(false);
        }}
      >
        <div className=" h-[29.5rem] md:w-[26rem] w-[19rem] bg-white border-2 pt-5 p-2 absolute top-1/2 letf-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded">
          <div className="text-center">
            <Title addClass={"text-[2.5rem]"}>Search</Title>
            <input
              type="text"
              placeholder="Serach..."
              className="w-full border mt-6"
            />
          </div>
          <ul className="mt-8">
            <li className="flex justify-between items-center hover:bg-primary transition-all px-1">
              <div className="relative h-[3rem] w-[3rem]">
                <Image src={"/images/f1.png"} fill alt=""/>
              </div>
              <span>Good pizza</span>
              <span>10$</span>
            </li>
            <li className="flex justify-between items-center hover:bg-primary transition-all px-1">
              <div className="relative h-[3rem] w-[3rem]">
                <Image src={"/images/f1.png"} fill alt=""/>
              </div>
              <span>Good pizza</span>
              <span>10$</span>
            </li>
            <li className="flex justify-between items-center hover:bg-primary transition-all px-1">
              <div className="relative h-[3rem] w-[3rem]">
                <Image src={"/images/f1.png"} fill alt=""/>
              </div>
              <span>Good pizza</span>
              <span>10$</span>
            </li>
            <li className="flex justify-between items-center hover:bg-primary transition-all px-1">
              <div className="relative h-[3rem] w-[3rem]">
                <Image src={"/images/f1.png"} fill alt=""/>
              </div>
              <span>Good pizza</span>
              <span>10$</span>
            </li>

          </ul>
          <button
            className="hover:text-primary absolute top-5 right-5 transition-all"
            onClick={() => setSearchIsModal(false)}
          >
            <AiFillCloseCircle size={25} />
          </button>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search;
