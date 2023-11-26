import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { useContext } from 'react'
import MyContext from '../context'
import { computeTotalPay } from '../utils/cartUtils'
import { Link } from 'react-router-dom'

function OrderDetail() {
    const { globalState } = useContext(MyContext)

    return (
        <>
            <Navbar />
            <section className='w-full py-16 bg-gray-bg flex justify-center items-center'>
                <div className='w-3/4 grid grid-cols-4 space-x-3'>
                    <div className='col-span-1 shadow-xl rounded-xl bg-secondary-color text-primary-color h-fit'>
                        <div className='p-4'>
                            <span className='italic'>Your Account</span>
                            <h1 className='font-bold'>Nguyen Huy</h1>
                        </div>
                        <div className='p-4 text-center' style={{ borderTopWidth: "1px" }}>
                            <span className='block w-full border-gray-overlay'>
                                Your Information
                            </span>
                        </div>
                        <Link to={'/account-manage?q=notification'}>
                            <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                                <span className='pt-4 block w-full border-gray-overlay'>
                                    Notification
                                </span>
                            </div>
                        </Link>
                        <Link to={'/account-manage?q=coupon'}>
                            <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                                <span className='pt-4 block w-full border-gray-overlay'>
                                    Your Coupon
                                </span>
                            </div>
                        </Link>

                        <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                            <span className='pt-4 block w-full border-gray-overlay'>
                                Delivery Addresses
                            </span>
                        </div>
                        <Link to={'/account-manage?q=coupon'}>
                            <div className='p-4 pt-0 text-center bg-primary-color' style={{ borderTopWidth: "1px" }}>
                                <span className='pt-4 block w-full border-gray-overlay text-secondary-color'>
                                    Order Management
                                </span>
                            </div>
                        </Link>
                        <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                            <span className='pt-4 block w-full border-gray-overlay'>
                                Payment Management
                            </span>
                        </div>
                        <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                            <span className='pt-4 block w-full border-gray-overlay'>
                                Wishlist
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col col-span-3 text-primary-color'>
                        <div className='p-4 rounded-xl bg-secondary-color shadow-lg'>
                            <span className='font-bold'>Order ID</span> <span className=''>#01124</span>
                        </div>
                        <div className='flex-grow mt-3 p-4 rounded-xl bg-secondary-color shadow-lg'>
                            <div className="p-4 lg space-y-4 ring-1 ring-gray-overlay rounded-2xl">
                                {
                                    globalState.order.map((item) => {
                                        const divStyle = (src) => ({
                                            backgroundImage: `url(${src})`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover'
                                        })

                                        return <div className='flex justify-around items-center'>
                                            <div className="col-span-4 justify-center items-center">
                                                <div className="grid grid-cols-3 me-5 space-x-5">
                                                    <div className='h-16 w-16 col-span-1 rounded-xl shadow'
                                                        style={divStyle(item.thumb)}>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="mt-2 text-lg font-bold">
                                                            <span>{item.productName}</span>
                                                        </div>
                                                        <div className='space-x-2 items-center'>
                                                            <span className='font-bold'>Quantity:  </span> <span>{item.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <span>{item.quantity * item.unitPrice}$</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className='mt-5 flex justify-between space-x-4'>
                                <div className='space-y-3 p-4 ring-1 ring-gray-overlay flex-1 rounded-2xl'>
                                    <div>
                                        <span className='font-bold'>Delivery Address: </span>
                                        <span>123 Main Street Apt 4B Cityville, State 54321 United States</span>
                                    </div>

                                    <div>
                                        <span className='font-bold'>Status: </span>
                                        <span className='animate-pulse text-yellow'>Delivering...</span>
                                    </div>
                                </div>
                                <div className='space-y-3 p-4 ring-1 ring-gray-overlay flex-1 rounded-2xl text-end'>
                                    <div>
                                        <span className='font-bold'>Total: </span>
                                        <span>{computeTotalPay(globalState.order)}$</span>
                                    </div>

                                    <div>
                                        <span className='font-bold'>Payment Method: </span>
                                        <span>COD</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default OrderDetail
