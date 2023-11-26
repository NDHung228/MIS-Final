import { Link } from "react-router-dom"
import MyModal from "../components/Dialog"
import MaterialOne from '../images/materials/beef.png';
import MaterialTwo from '../images/materials/broccoli.png';
import MaterialThree from '../images/materials/carrot.jpg';
import MaterialFour from '../images/materials/chicken-breasts.jpg';
import Breadcrumb from "../components/Breadcrumb"
import AddMenuMaterial from "../components/AddNewMaterial";

function Materials() {
    return (
        <>
            <Breadcrumb pageName="Materials" />
            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Material List
                        </h4>

                        <MyModal buttonContent={
                            <Link
                                to="#"
                                className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                <img src="/plusIcon.svg" alt="" />
                            </Link>
                        } content={<AddMenuMaterial />} right='right-96' />
                    </div>

                    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-2 flex items-center">
                            <p className="font-medium">Material Name</p>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="font-medium">Description</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-medium">Current Quantity</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-medium">Unit</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                        </div>
                    </div>

                    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-2 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <img src={MaterialOne} alt="Menu" className='block shadow-2xl' />
                                </div>
                                <p className="text-sm text-black dark:text-white">
                                    Beef
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">70</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">Kg</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <Link
                                to="/warehouse/materials/id"
                                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-2 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <img src={MaterialTwo} alt="Menu" />
                                </div>
                                <p className="text-sm text-black dark:text-white">Broccoli</p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">40</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">Kg</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <Link
                                to="/warehouse/materials/id"
                                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-2 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <img src={MaterialThree} alt="Menu" />
                                </div>
                                <p className="text-sm text-black dark:text-white">
                                    Carrot
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">40</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">Kg</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <Link
                                to="/manage/menu/id"
                                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4">
                        <div className="col-span-2 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <img src={MaterialFour} alt="Menu" />
                                </div>
                                <p className="text-sm text-black dark:text-white">
                                    Chicken breast
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">60</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="text-sm text-black dark:text-white">Kg</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <Link
                                to="/warehouse/materials/id"
                                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Materials