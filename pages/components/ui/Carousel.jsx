import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Title from "../ui/Title";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplayspeed:3500,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-[calc(100vh_-_5.5rem)] container mx-auto ">
      <div className="absolute w-full h-full top-0 left-0 -z-50">
        <div className=" relative h-full w-full">
          <Image src="/images/hero-bg.jpg" alt="bg" className=" object-cover" fill />
        </div>
      </div>
        <Slider {...settings}>
          <div>
            <div className=" sm:mt-32 mt-12 text-white flex flex-col gap-y-5 items-start">
              <h1 className="font-logoFont sm:text-[56px] text-[29px] font-bold text-white">
                Fast Food Restaurant
              </h1>
              <p className="w-[40%]  text-[14px] ">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn-primary px-[45px] py-[10px] rounded-full">
                Order Now
              </button>
            </div>
          </div>
          <div>
            <div className=" sm:mt-32 mt-12 text-white flex flex-col gap-y-5 items-start">
              <h1 className="font-logoFont sm:text-[56px] text-[29px] font-bold text-white">
                Fast Food Restaurant
              </h1>
              <p className="w-[40%]  text-[14px] ">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn-primary px-[45px] py-[10px] rounded-full">
                Order Now
              </button>
            </div>
          </div>
          <div>
            <div className=" sm:mt-32 mt-12 text-white flex flex-col gap-y-5 items-start">
              <h1 className="font-logoFont sm:text-[56px] text-[29px] font-bold text-white">
                Fast Food Restaurant
              </h1>
              <p className="w-[40%]  text-[14px] ">
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </p>
              <button className="btn-primary px-[45px] py-[10px] rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
  );
}

export default Carousel;
