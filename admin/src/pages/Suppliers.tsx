import { Link } from "react-router-dom"
import MyModal from "../components/Dialog"
import Breadcrumb from "../components/Breadcrumb"
import AddNewSupplier from "../components/AddNewSupplier";
import UpdateSupplier from "../components/UpdateSupplier";

function Suppliers() {
    return (
        <>
            <Breadcrumb pageName="Suppliers" />
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Supplier List
                        </h4>

                        <MyModal buttonContent={
                            <Link
                                to="#"
                                className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                <img src="/plusIcon.svg" alt="" />
                            </Link>
                        } content={<AddNewSupplier />} right='right-96' />
                    </div>

                    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-1 flex items-center">
                            <p className="font-medium">Supplier Name</p>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex">
                            <p className="font-medium">Type</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="font-medium">Hotline</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <p className="font-medium">Address</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-medium"></p>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-1 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="text-sm text-black dark:text-white">
                                    Farm A
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Beef, Pork</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">0303467421</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <p className="text-sm text-black dark:text-white">Chu Ngoc H. So 4, ngo 12, pho H.H, Dong Da, Hanoi.</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <MyModal buttonContent={
                                <Link
                                    to="#"
                                    className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                                >
                                    Detail
                                </Link>
                            } content={<UpdateSupplier />} right='right-96' />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-1 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="text-sm text-black dark:text-white">
                                    Farm B
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Carrot, potato</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">0303467421</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <p className="text-sm text-black dark:text-white">Chu Ngoc H. So 4, ngo 12, pho H.H, Dong Da, Hanoi.</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <MyModal buttonContent={
                                <Link
                                    to="#"
                                    className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                                >
                                    Detail
                                </Link>
                            } content={<UpdateSupplier />} right='right-96' />
                        </div>
                    </div>

                    <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-1 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <p className="text-sm text-black dark:text-white">
                                    Farm C
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Chicken</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">0303467421</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                            <p className="text-sm text-black dark:text-white">Chu Ngoc H. So 4, ngo 12, pho H.H, Dong Da, Hanoi.</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <MyModal buttonContent={
                                <Link
                                    to="#"
                                    className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                                >
                                    Detail
                                </Link>
                            } content={<UpdateSupplier />} right='right-96' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suppliers