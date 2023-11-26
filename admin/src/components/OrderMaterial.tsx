import SwitcherOne from "./SwitcherOne"

function OrderMaterial() {
    return (
        <div className="max-w-6xl">
            <h1 className="py-4 px-4 font-bold text-2xl text-black">Order Material</h1>
            <div className="flex flex-row">
                <div className="bg-white dark:border-strokedark dark:bg-boxdark py-4 px-4">
                    <div className="mb-3">
                        <h3 className="font-medium text-black dark:text-white">
                            Order Information
                        </h3>
                    </div>
                    <div className="flex flex-row w-[500px]">
                        <div className="bg-white dark:border-strokedark dark:bg-boxdark flex-1">
                            <form action="#" className="w-full">
                                <div className="p-6.5 w-full">
                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Material Name <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter material name"
                                            defaultValue="Beef"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mb-4.5">
                                            <label className="mb-3 block text-black dark:text-white">
                                                Quantity
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter quanity"
                                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                            />
                                        </div>
                                        <div className="mb-4.5">
                                            <label className="mb-3 block text-black dark:text-white">
                                                Unit
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter unit"
                                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Delivery Time
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter delivery time"
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Description
                                        </label>
                                        <textarea
                                            rows={6}
                                            placeholder="Enter description"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        ></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:border-strokedark dark:bg-boxdark py-4 px-6.5">
                    <div className="mb-3 flex justify-between">
                        <h3 className="font-medium text-black dark:text-white">
                            Available Supplier
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
                                placeholder="Search supplier..."
                                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='border-gray h-fit w-[600px]' style={{ borderWidth: '1px', borderTopWidth: '0' }}>
                        <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-2 flex items-center">
                                <p className="font-medium">Name</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="font-medium">Type</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="font-medium">Hotline</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                            </div>
                        </div>

                        <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-2 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        Farm A
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">Beef, chicken</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">0303467421</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-2 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        Farm B
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">Beef, chicken</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">0303467421</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-2 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        Farm C
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">Beef, chicken</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex">
                                <p className="text-sm text-black dark:text-white">0303467421</p>
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
                        Order Material
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderMaterial