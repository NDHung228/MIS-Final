import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import MyModal from "../components/Dialog"
import OrderDetail from "../components/Order/OrderDetail"

function Delivery() {
    return (
        <>
            <Breadcrumb pageName="Users" />

            <div className="flex flex-col gap-10">
                <div className="rounded-sm">
                    <>
                        <div className="bg-white grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <p className="font-medium">Customer ID</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="font-medium">Name</p>
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center">
                                <p className="font-medium">Phone number</p>
                            </div>
                            <div className="col-span-3 hidden items-center sm:flex">
                                <p className="font-medium">Address</p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <p className="font-medium">Status</p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                            </div>
                        </div>

                        <div>
                            <div className="bg-white grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        #01009
                                    </p>
                                </div>
                                <div className="col-span-2 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">Nguyen Nhut Huy</p>
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                    <p className="text-sm text-black dark:text-white">0366599225</p>
                                </div>
                                <div className="col-span-3 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">123 Main Street Apt 4B Cityville, State 54321 United States</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <p className="inline-flex rounded-full bg-meta-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                        Verify
                                    </p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <Link
                                        to="#"
                                        className="inline-flex items-center justify-center rounded-full ring-meta-1 bg-meta-1 ring-1  py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                                    >
                                        Ban
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        #01001
                                    </p>
                                </div>
                                <div className="col-span-2 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">Nguyen Van A</p>
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                    <p className="text-sm text-black dark:text-white">0967736752</p>
                                </div>
                                <div className="col-span-3 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">123 Main Street Apt 4B Cityville, State 54321 United States</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <p className="inline-flex rounded-full bg-meta-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                        Verify
                                    </p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <Link
                                        to="#"
                                        className="inline-flex items-center justify-center rounded-full ring-meta-1 bg-meta-1 ring-1  py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                                    >
                                        Ban
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        #00998
                                    </p>
                                </div>
                                <div className="col-span-2 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">Nguyen Van A</p>
                                </div>
                                <div className="col-span-2 flex items-center justify-center">
                                    <p className="text-sm text-black dark:text-white">036645675</p>
                                </div>
                                <div className="col-span-3 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">123 Main Street Apt 4B Cityville, State 54321 United States</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <p className="inline-flex rounded-full bg-meta-2 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                        Verify
                                    </p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <Link
                                        to="#"
                                        className="inline-flex items-center justify-center rounded-full ring-meta-1 bg-meta-1 ring-1  py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                                    >
                                        Ban
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}

export default Delivery