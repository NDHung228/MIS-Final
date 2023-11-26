import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-primary-color text-secondary-color flex flex-col md:flex-row bg-[url('/offerBg.png')] h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">New Lunches & More Discount</h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
          consequatur dolor tempore explicabo.
        </p>
        <CountDown/>
        <button className="bg-secondary-color text-primary-color font-bold rounded-2xl py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <img className="mt-20" src="/offerProduct.png" alt=""/>
      </div>
    </div>
  );
};

export default Offer
