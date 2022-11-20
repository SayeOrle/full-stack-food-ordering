import Image from "next/image";
import Title from "./Title";
import { HiShoppingCart } from "react-icons/hi";

const CompaignsItem = () => {
  return (
    <div className="sm:h-[20rem] sm:flex-col sm:flex-none sm:px-14 sm:py-4 sm:gap-y-4 md:flex-1 md:flex-row md:h-auto md:w-auto md:py-10 md:gap-x-5 lg:flex-1 text-[12px] bg-secondary flex items-center px-8 py-6 rounded-md text-white gap-x-4">
      <div className="relative w-32 h-32 lg:w-40 lg:h-40  rounded-full border-primary border-[5px] overflow-hidden">
        <Image src="/images/o1.jpg" alt="" fill className="transition-all hover:scale-110" />
      </div>
      <div>
        <Title addClass={"text-[18px] lg:text-[24px]"}>Tasty Thursdays</Title>
        <div className="font-logoFont">
            <span className="text-[35px]">20%</span>
            <span>off</span>
        </div>
        <button className="bg-primary py-[4px] px-[16px] lg:py-[6px] lg:px-[18px] rounded-full flex items-center gap-x-2 ">Order Now <HiShoppingCart fontSize={"20px"}/></button>
      </div>
    </div>
  );
};

function Compaigns() {
  return (
    <div className="sm:flex-row flex flex-col justify-between container mx-auto py-[6.5rem] gap-10">
      <CompaignsItem />
      <CompaignsItem />
    </div>
  );
}

export default Compaigns;
