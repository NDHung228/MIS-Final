import ShoesOne from '../../images/shoes/nike-1.webp'
import ShoesTwo from '../../images/shoes/nike-2.webp'

function OrderDetail({ waiting, delivery, success, cancel }: { waiting?: boolean, delivery?: boolean, success?: boolean, cancel?: boolean }) {
    return (
        <div className="flex flex-col max-w-4xl bg-white">
            <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
                    <h3 className="font-medium text-black dark:text-white">
                        Order #01009
                    </h3>

                    <div>
                        <>
                            {
                                waiting &&
                                <p className="animate-pulse inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                                    Waiting
                                </p>
                            }

                            {
                                delivery &&
                                <p className="animate-pulse inline-flex rounded-full bg-secondary bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-5">
                                    delivery
                                </p>
                            }

                            {
                                success &&
                                <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                    success
                                </p>
                            }

                            {
                                cancel &&
                                <p className="inline-flex rounded-full bg-meta-1 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-7">
                                    cancel
                                </p>
                            }
                        </>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <div className="grid grid-cols-2 w-full p-6.5">
                            <div className="mb-4.5 col-span-1">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Customer
                                </span>
                                <p>Nguyen Nhut Huy</p>
                            </div>

                            <div className="mb-4.5 col-span-1 text-end">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Phone number
                                </span>
                                <p>0366599225</p>
                            </div>

                            <div className="col-span-2">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Delivery Address
                                </span>
                                <p>123 Main Street Apt 4B Cityville, State 54321 United States</p>
                            </div>
                        </div>

                        <div className="m-4 mt-0">
                            <div className='border-gray h-fit' style={{ borderWidth: '1px' }}>
                                <div className={`grid ${waiting ? 'grid-cols-7' : 'grid-cols-6'} border-t border-stroke py-4.5 px-4 dark:border-strokedark`}>
                                    <div className="col-span-2 flex items-center">
                                        <p className="font-medium">Shoes</p>
                                    </div>

                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="font-medium">Status</p>
                                    </div>

                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="font-medium">Quantity</p>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="font-medium">Size</p>
                                    </div>
                                    {
                                        waiting &&
                                        <div className="col-span-1 items-center flex justify-center">
                                            <p className="font-medium">Inventory</p>
                                        </div>
                                    }
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="font-medium">unit price ($)</p>
                                    </div>
                                </div>

                                <div className={`grid ${waiting ? 'grid-cols-7' : 'grid-cols-6'} border-t border-stroke py-4.5 px-4 dark:border-strokedark`}>
                                    <div className="col-span-2 flex items-center">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                            <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                <img src={ShoesOne} alt="Menu" className='block shadow-2xl' />
                                            </div>
                                            <p className="text-sm text-black dark:text-white">
                                                Nike Air Force 1
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">New</p>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">2</p>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">Eu 42</p>
                                    </div>
                                    {
                                        waiting &&
                                        <div className="col-span-1 items-center flex justify-center">
                                            <p className="text-sm text-black dark:text-white">25</p>
                                        </div>
                                    }
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">200</p>
                                    </div>
                                </div>
                                <div className={`grid ${waiting ? 'grid-cols-7' : 'grid-cols-6'} border-t border-stroke py-4.5 px-4 dark:border-strokedark`}>
                                    <div className="col-span-2 flex items-center">
                                        <div className="flex gap-4 items-center">
                                            <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                <img src={ShoesTwo} alt="Menu" />
                                            </div>
                                            <p className="text-sm text-black dark:text-white">
                                                Nike Court Vision Low
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">2 Hand</p>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">1</p>
                                    </div>
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">Eu 42</p>
                                    </div>
                                    {
                                        waiting &&
                                        <div className="col-span-1 items-center flex justify-center">
                                            <p className="text-sm text-black dark:text-white">40</p>
                                        </div>
                                    }
                                    <div className="col-span-1 items-center flex justify-center">
                                        <p className="text-sm text-black dark:text-white">100</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 w-full p-6.5 pt-0">
                            <div className="mb-4.5 col-span-1">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Payment Method
                                </span>
                                <p>COD</p>
                            </div>

                            <div className="mb-4.5 col-span-1 text-end">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Total
                                </span>
                                <p>300$</p>
                            </div>

                            <div className="col-span-2">
                                <span className="mb-2.5 block text-black dark:text-white">
                                    Payment Status
                                </span>
                                {
                                    !success && !cancel &&
                                    <p className="animate-pulse inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                                        pending
                                    </p>
                                }
                                {
                                    success &&
                                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                        success
                                    </p>
                                }
                                {
                                    cancel &&
                                    <p className="inline-flex rounded-full bg-meta-1 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-7">
                                        cancel
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 pt-0 grid grid-cols-3 gap-5">
                {
                    delivery &&
                    <>
                        <button className="flex col-span-3 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Done
                        </button>
                    </>
                }

                {
                    waiting &&
                    <>
                        <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                            Cancel
                        </button>
                        <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Oke & Deliver
                        </button>
                    </>
                }
            </div>
        </div >
    )
}

export default OrderDetail