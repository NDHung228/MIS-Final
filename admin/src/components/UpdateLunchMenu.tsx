import ShoesOne from "../images/shoes/nike-1.webp"
import ShoesTwo from "../images/shoes/nike-2.webp"
import ShoesThree from "../images/shoes/nike-3.webp"
import Shoes4 from "../images/shoes/nike-4.webp"
import Shoes5 from "../images/shoes/nike-5.webp"
import Shoes6 from "../images/shoes/nike-6.webp"
import Shoes7 from "../images/shoes/adidas-1.avif"

function UpdateLunchMenu() {
    return (
        <div className="max-w-6xl bg-white">
            <h1 className="py-4 px-4 font-bold text-2xl text-black">Coupon SS#01</h1>
            <div className="flex flex-row">
                <div className="bg-white dark:border-strokedark dark:bg-boxdark py-4 px-4">
                    <div className="mb-3">
                        <h3 className="font-medium text-black dark:text-white">
                            Current Shoes
                        </h3>
                    </div>
                    <div className='border-gray h-fit' style={{ borderWidth: '1px' }}>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <p className="font-medium">Shoes</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={ShoesOne} alt="Menu" className='block shadow-2xl' />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">
                                        Nike Air Force 1
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden sm:flex justify-center items-center">
                                <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                        fill=""
                                    />
                                    <path
                                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                        fill=""
                                    />
                                    <path
                                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                        fill=""
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={ShoesTwo} alt="Menu" />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">Nike Court Vision Low</p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                        fill=""
                                    />
                                    <path
                                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                        fill=""
                                    />
                                    <path
                                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                        fill=""
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={ShoesThree} alt="Menu" />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">
                                        Nike Air Max 97 SE
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                                        fill=""
                                    />
                                    <path
                                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                                        fill=""
                                    />
                                    <path
                                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                                        fill=""
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white dark:border-strokedark dark:bg-boxdark py-4 px-6.5">
                    <div className="mb-3 flex justify-between">
                        <h3 className="font-medium text-black dark:text-white">
                            Available Shoes
                        </h3>

                        <div className="relative">
                            <button className="absolute top-1/2 left-0 -translate-y-1/2">
                                <svg
                                    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                        fill=""
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                        fill=""
                                    />
                                </svg>
                            </button>

                            <input
                                type="text"
                                placeholder="Search shoes..."
                                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className='border-gray h-fit' style={{ borderWidth: '1px' }}>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <p className="font-medium">Shoes</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                            </div>
                        </div>

                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={Shoes4} alt="Menu" className='block shadow-2xl' />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">
                                        Nike Revolution 6
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden sm:flex justify-center items-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={Shoes5} alt="Menu" />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">Nike Blazer Mid '77 Vintage</p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />

                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={Shoes6} alt="Menu" />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">
                                        Nike Court Vision Low
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                        <img src={Shoes7} alt="Menu" />
                                    </div>
                                    <p className="text-sm text-black dark:text-white">
                                    SAMBA DECON
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end  py-4 px-4 pt-0">
                <div className="w-1/2 grid grid-cols-3 gap-5">
                    <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                        Undo
                    </button>
                    <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Update Coupon
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateLunchMenu