import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Order from '../components/Order'
import Coupon from '../components/Coupon'
import MyContext from '../context'
import { useContext, useEffect, useState } from 'react'
import { getDayNow } from '../utils'
import { computeTotalPay, getLunchesBrief } from '../utils/cartUtils'
import { useSearchParams } from 'react-router-dom'

function Account() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { globalState } = useContext(MyContext)
    const [curTab, setTab] = useState(searchParams.get('q'))

    useEffect(() => {
        setTab(searchParams.get('q'))
    }, [searchParams])

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
                        <div className={`p-4 text-center ${curTab === 'notification' && 'bg-primary-color'} cursor-pointer`} onClick={() => { setSearchParams({ 'q': 'notification' }) }} style={{ borderTopWidth: "1px" }}>
                            <span className={`block w-full border-gray-overlay ${curTab === 'notification' && 'text-secondary-color'}`}>
                                Notification
                            </span>
                        </div>
                        <div className={`p-4 pt-0 text-center  ${curTab === 'coupon' && 'bg-primary-color'} cursor-pointer`} onClick={() => {  setSearchParams({ 'q': 'coupon' }) }} style={{ borderTopWidth: "1px" }}>
                            <span className={`pt-4 block w-full border-gray-overlay ${curTab === 'coupon' && 'text-secondary-color'}`}>
                                Your Coupon
                            </span>
                        </div>
                        <div className='p-4 pt-0 text-center' style={{ borderTopWidth: "1px" }}>
                            <span className='pt-4 block w-full border-gray-overlay'>
                                Delivery Addresses
                            </span>
                        </div>
                        <div className={`p-4 pt-0 text-center ${curTab === 'order' && 'bg-primary-color'} cursor-pointer`} onClick={() => { setSearchParams({ 'q': 'order' }) }} style={{ borderTopWidth: "1px" }}>
                            <span className={`pt-4 block w-full border-gray-overlay ${curTab === 'order' && 'text-secondary-color'} `}>
                                Order Management
                            </span>
                        </div>
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
                        {
                            curTab === 'order' &&
                            <>
                                <div className='p-4 rounded-xl bg-secondary-color font-bold shadow-lg'>
                                    <h1>Your orders</h1>
                                </div>
                                <div className='flex-grow mt-3 p-4 rounded-xl bg-secondary-color shadow-lg'>
                                    <div className="p-4 lg space-y-4">
                                        {
                                            globalState.order.length ?
                                                <Order code='#01124'
                                                    lunches={getLunchesBrief(globalState.order)}
                                                    total={computeTotalPay(globalState.order)}
                                                    status={'Delivering...'}
                                                    date={getDayNow()} /> : ''
                                        }

                                        <Order code='#01015'
                                            lunches='PUREBOOST 23 (1)'
                                            total={200}
                                            status={'Cancelled'}
                                            date={'11/20/2023'} />

                                        <Order code='#01009'
                                            lunches='Nike Blazer Mid 77 Vintage (1)'
                                            total={100}
                                            status={'Delivery successful'}
                                            date={'10/9/2023'} />
                                    </div>
                                </div>
                            </>
                        }

                        {
                            curTab === 'notification' &&
                            <>
                                <div className='p-4 rounded-xl bg-secondary-color font-bold shadow-lg'>
                                    <h1>Notification</h1>
                                </div>
                                <div className='flex-grow mt-3 p-4 rounded-xl bg-secondary-color shadow-lg'>
                                    <div className="p-4 lg space-y-2">
                                        <div role="alert" class="alert alert-success flex justify-between">
                                            <div className='flex gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Your contact request for trade-in shoes has been accepted!</span>
                                            </div>
                                            <p>11/23/2023</p>
                                        </div>

                                        <div role="alert" class="alert alert-success flex justify-between">
                                            <div className='flex gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Account authentication successful</span>
                                            </div>
                                            <p>10/20/2023</p>
                                        </div>

                                    </div>
                                </div>
                            </>
                        }

                        {
                            curTab === 'coupon' &&
                            <>
                                <div className='p-4 rounded-xl bg-secondary-color font-bold shadow-lg'>
                                    <h1>Coupon</h1>
                                </div>
                                <div className='flex-grow mt-3 p-4 rounded-xl bg-secondary-color shadow-lg'>
                                    <div className="grid grid-cols-2 p-4">
                                        <div className='col-span-1'>
                                            <Coupon name={'VIP Specific'} value={20} expired={'12/01/2023'} bgColor={"bg-[#dc143c]"} />
                                        </div>
                                        <div className='col-span-1'>
                                            <Coupon name={'Black Friday'} value={40} expired={'11/26/2023'} bgColor={"bg-primary-color"} />
                                        </div>
                                        <div className='col-span-1 mt-3'>
                                            <Coupon name={'Monthly Gift'} value={10} expired={'11/30/2023'} bgColor={'bg-yellow'} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Account
