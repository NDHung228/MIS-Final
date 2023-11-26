import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import OrderItem from "../components/OrderItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import MyContext from '../context'
import { useContext, useEffect } from 'react'
import { computeTotalPay } from '../utils/cartUtils'

function Cart() {
  const { globalState, setGlobalState } = useContext(MyContext)

  const order = () => {
    setGlobalState({
      ...globalState,
      order: [
        ...globalState.order,
        ...globalState.cart
      ],
      cart: [],
    })
  }

  return (
    <>
      <Navbar />

      <section className="py-12 bg-gray-bg " id='faqs'>
        <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
          Your Cart
        </h2>
        <div className="section-title-underline bg-primary-color"></div>

        <div className="mx-auto grid grid-cols-4 w-4/5">
          <div className="col-span-3">
            <div className="my-3 grid grid-cols-12 p-4 bg-secondary-color rounded-xl shadow-xl">
              <div className="col-span-1">
                <input type="checkbox" />
              </div>
              <p className="col-span-4">
                All lunches (3)
              </p>
              <p className="col-span-2 text-center">
                Unit Price
              </p>
              <p className="col-span-2 text-center">
                Quantity
              </p>
              <p className="col-span-2 text-center">
                You Pay
              </p>
              <div className="col-span-1 text-center">
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>

            <div className="p-4 grid grid-cols-12 bg-secondary-color rounded-xl shadow-xl space-y-3">
              {
                globalState.cart.map(item =>
                  <OrderItem thumb={item.thumb}
                    name={item.productName}
                    price={item.unitPrice}
                    quantity={item.quantity} />
                )
              }
            </div>

            <div className="grid grid-cols-1 mt-4 p-4 bg-secondary-color rounded-xl shadow-xl">
              <div className='space-y-4'>
                <h3 className="text-lg font-bold">Payment Menthod</h3>
                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' defaultChecked />
                  <img src="/payment-method/cod.png" alt="" className='h-6' />
                  <span className="ms-3">Cash on delivery</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />
                  <img src="/payment-method/viettel.png" alt="" className='h-6' />
                  <span className="ms-3">Pay with Viettel Money</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />
                  <img src="/payment-method/momo.jpg" alt="" className='h-6' />
                  <span className="ms-3">Pay with Momo</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />
                  <img src="/payment-method/zalo-pay.png" alt="" className='h-6' />
                  <span className="ms-3">Pay with ZaloPay</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />
                  <img src="/payment-method/vnpay.png" alt="" className='h-6' />
                  <span className="ms-3">Pay with VNPay</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />  
                  <img src="/payment-method/credit.png" alt="" className='h-6'/>
                  <span className="ms-3">International payments with Visa, Master, PayPal</span>
                </div>

                <div className="flex items-center space-x-3">
                  <input type="radio" name='payment_method' />
                  <img src="/payment-method/atm.png" alt="" className='h-6' />
                  <div className='flex flex-col justify-start'>
                    <span>Domestic ATM card/Internet Banking (Supports Internet Banking)</span>
                    <img src="/payment-method/credit-2.jpg" className='h-6 w-fit'  alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="ms-3 my-3 p-4 bg-secondary-color rounded-xl shadow-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Delivery Information</h3>
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
              <div className="mt-3 pt-4 italic border-t-2 border-gray-overlay">
                123 Main Street Apt 4B Cityville, State 54321 United States
              </div>
            </div>

            <div className="ms-3 my-3 p-4 bg-secondary-color rounded-xl shadow-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Coupon</h3>
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
              <div className="mt-3 pt-4 italic border-t-2 border-gray-overlay">
                <div className="grid grid-cols-6 items-center p-4 rounded-2xl border-2 border-gray-overlay">
                  <p className="col-span-5">
                    Discount 20%
                  </p>
                  <button className="w-10 col-span-1 p-2 rounded-full bg-primary-color text-secondary-color">
                    1
                  </button>
                </div>
              </div>
            </div>

            <div className="ms-3 my-3 p-4 bg-secondary-color rounded-xl shadow-xl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Total</h3>
                <span>
                  {computeTotalPay(globalState.cart)}$
                </span>
              </div>
              <div className="mt-3 pt-4 italic border-t-2 border-gray-overlay">
                <Link to='/account-manage?q=order'>
                  <button onClick={order} className="w-full rounded-2xl bg-primary-color text-secondary-color font-bold py-5">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Cart
