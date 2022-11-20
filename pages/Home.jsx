import Head from "next/head";
import MenuWrapper from "./components/product/MenuWrapper";
import Reservation from "./components/Reservation";
import About from "./components/ui/About";
import Carousel from "./components/ui/Carousel";
import Compaigns from "./components/ui/Compaigns";
import React from "react";
import Customers from "./components/customers/Customers";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Carousel/>
      <Compaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
      <Customers/>
    </React.Fragment>
  );
}