import ListBox from "./ListBox"
import SwitcherOne from "./SwitcherOne"

function UpdateLunchDetail() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-white w-3/4">
                <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
                        <h3 className="font-medium text-black dark:text-white">
                            Shoes 01
                        </h3>

                        <div>
                            <SwitcherOne toggleId='toggleAddMenuForm' available={true} />
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <form action="#">
                                <div className="p-6.5">
                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Shoes Name <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Name of lunch"
                                            value='Nike Revolution 6'
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Price <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="Number"
                                            value={100}
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>

                                    <div className="mb-4.5 grid grid-cols-2 gap-5">
                                        <div>
                                            <label className="mb-3 block text-black dark:text-white">
                                                Brand <span className="text-meta-1">*</span>
                                            </label>
                                            <ListBox people={[
                                                { name: 'Nike' },
                                                { name: 'Adidas' },
                                                { name: 'Puma' },
                                                { name: 'Vans' },
                                                { name: 'Converse' },
                                            ]} />
                                        </div>

                                        <div>
                                            <label className="mb-3 block text-black dark:text-white">
                                                Status <span className="text-meta-1">*</span>
                                            </label>
                                            <ListBox people={[
                                                { name: 'New' },
                                                { name: '2 Hand' },
                                            ]} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="p-6.5 ps-0 flex justify-between flex-col">
                            <div className="mb-4.5">
                                <label className="mb-3 block text-black dark:text-white">
                                    Thumbnail
                                </label>
                                <input
                                    type="file"
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                />
                                <div className="mt-4.5 flex justify-center">
                                    <img src="/shoes/nike-4.webp" alt="" className="h-52" />
                                </div>
                            </div>
                        </div>

                        <div className="p-6.5 ps-0">
                            <div className="mb-6">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Size & Quantity
                                </label>
                                <div className="col-span-4">
                                    <h3 className="font-medium text-black dark:text-white pb-3">
                                        Trade
                                    </h3>
                                    <div className='border-gray h-fit' style={{ borderWidth: '1px', borderTopWidth: '0' }}>
                                        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                            <div className="col-span-3 flex items-center justify-center">
                                                <p className="font-medium">Size</p>
                                            </div>
                                            <div className="col-span-3 hidden items-center sm:flex justify-center">
                                                <p className="font-medium">Quantity</p>
                                            </div>
                                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                            <div className="col-span-3 flex items-center justify-center">
                                                <p className="font-medium">Eu 41</p>
                                            </div>
                                            <div className="col-span-3 hidden items-center sm:flex justify-center">
                                                <p className="font-medium">10</p>
                                            </div>

                                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                                <button className="hover:text-primary">
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
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                            <div className="col-span-3 flex items-center justify-center">
                                                <p className="font-medium">Eu 42</p>
                                            </div>
                                            <div className="col-span-3 hidden items-center sm:flex justify-center">
                                                <p className="font-medium">52</p>
                                            </div>

                                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                                <button className="hover:text-primary">
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
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                            <div className="col-span-3 flex items-center justify-center">
                                                <p className="font-medium">Eu 42.5</p>
                                            </div>
                                            <div className="col-span-3 hidden items-center sm:flex justify-center">
                                                <p className="font-medium">53</p>
                                            </div>

                                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                                <button className="hover:text-primary">
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
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark justify-center">
                                            <div className="col-span-3 flex items-center justify-center">
                                                <ListBox people={[
                                                    { name: 'Eu 38' },
                                                    { name: 'Eu 39' },
                                                    { name: 'Eu 40' },
                                                    { name: 'Eu 40.5' },
                                                    { name: 'Eu 41' },
                                                    { name: 'Eu 41.5' },
                                                    { name: 'Eu 42.5' },
                                                    { name: 'Eu 43' },
                                                    { name: 'Eu 43.5' },
                                                ]} />
                                            </div>
                                            <div className="col-span-3 items-center flex justify-center">
                                                <input
                                                    type="Number"
                                                    className="w-20 mt-1 rounded-md border border-stroke p-3 outline-none transition"
                                                />
                                            </div>
                                            <div className="cursor-pointer col-span-2 hidden items-center sm:flex justify-center">
                                                <img src="/plusIconDark.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 pt-0 grid grid-cols-4 gap-5">
                    <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                        Delete Shoes
                    </button>
                    <button className="flex col-span-1 w-full justify-center rounded bg-meta-6 p-3 font-medium text-gray">
                        Undo
                    </button>
                    <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Update Shoes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateLunchDetail