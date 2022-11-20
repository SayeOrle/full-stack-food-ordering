import Image from "next/image";
import React, { useState } from "react";
import Title from "../ui/Title";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

function MenuItem() { {/*h-[24rem] w-[15rem]*/}
const [onHover,setOnHover]=useState(false)

  return (
    <div>
      <Link href="/product">
    <div onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=> setOnHover(false)} className="bg-secondary text-silver rounded-2xl mt-12  h-[25rem] w-[17rem] lg:w-[20rem] lg:h-[28rem]"> 
      <div className="bg-silver h-1/2 w-full rounded-xl rounded-br-none rounded-bl-[45px] grid place-content-center">
        <div className={`relative w-32 h-32 transition-all ${ onHover &&  "scale-110" }`}>
          <Image src="/images/f1.png" alt="" fill />
        </div>
      </div>
      <div className="p-[1rem] lg:p-[1.5rem] px-[1rem] h-1/2 flex flex-col gap-y-3 lg:gap-y-5">
        <Title addClass={"text-xl  lg:text-[30px]"}>Delicious Pizza</Title>
        <p className="text-[14px] font-mono ]  ">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between">
          <span>$20</span>
          <button className="w-8 h-8 rounded-full bg-primary grid place-content-center">
            <HiShoppingCart />
          </button>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
}

export default MenuItem;
