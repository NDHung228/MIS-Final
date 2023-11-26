"use client";

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../context";

const Price = ({ price, id, options }) => {
  const [total, setTotal] = useState(price);
  const [unitPrice, setUnitPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);
  const { globalState, setGlobalState } = useContext(MyContext)
  const navigator = useNavigate()

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price]);

  useEffect(() => {
    setUnitPrice(options ? price + options[selected].additionalPrice : price)
  }, [selected])


  const order = () => {
    setGlobalState({
      ...globalState,
      cart: [
        {
          "code": "#01016",
          "productId": 2,
          "productName": "Nike Air Force 1",
          "thumb": "/shoes/nike-1.webp",
          "unitPrice": 100,
          "quantity": 1
        },
        ...globalState.cart
      ]
    })
    navigator('/')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(globalState.cart))
  }, [globalState.cart])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <h3 className="text-xl font-bold">Choose Your Size</h3>
      {/* OPTIONS CONTAINER */}
      <div className="grid grid-cols-4 gap-4 w-3/4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className={`col-span-1 min-w-[6rem] p-2 ring-1 rounded-md ring-primary-color ${option.disabled ? 'opacity-50 pointer-events-none' : ''}`}
            style={{
              background: selected === index ? "black" : "white",
              color: selected === index ? "white" : "black",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between items-center w-fit p-3 space-x-5 ring-1 ring-primary-color rounded-2xl">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              className="text-secondary-color bg-primary-color rounded-full p-1 px-2 flex justify-center items-center"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <span>{"<"}</span>
            </button>
            <span>{quantity}</span>
            <button
              className="text-secondary-color bg-primary-color rounded-full p-1 px-2 flex justify-center items-center"
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <Link to='/cart'>
          <button onClick={order} className="uppercase w-56 bg-primary-color rounded-2xl text-secondary-color p-3 ring-1">
            Add to Cart
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Price;
