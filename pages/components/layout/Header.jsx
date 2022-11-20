import React from "react";
import Logo from "../ui/Logo";
import { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart);
  const [searchIsModal, setSearchIsModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`h-[5.5rem]  ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      } "`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-30 ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex  gap-x-7 sm:flex-row flex-col text-lg font-[600] ">
            <li className="px-[5px] py-[10px] font-sans cursor-pointer hover:text-primary ">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans cursor-pointer hover:text-primary ">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans cursor-pointer hover:text-primary ">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans cursor-pointer hover:text-primary ">
              <Link href="/booktable">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50 hover:text-primary block sm:hidden"
              onClick={() => setIsMenuModal(false)}
            >
              <AiFillCloseCircle size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-4 items-center">
          <Link href="/auth/Login">
            <FaUser className="hover:text-primary" />
          </Link>

          <Link href="/cart">
            <span className="relative">
              <HiShoppingCart className="hover:text-primary" />

              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button
            onClick={() => setSearchIsModal(true)}
            className="hover:text-primary"
          >
            <FaSearch />
          </button>
          <a href="">
            <button className="btn-primary md:block hidden">
              Order Online
            </button>
          </a>
          <button
            className="sm:hidden block hover:text-primary"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {searchIsModal && <Search setSearchIsModal={setSearchIsModal} />}
    </div>
  );
}

export default Header;
