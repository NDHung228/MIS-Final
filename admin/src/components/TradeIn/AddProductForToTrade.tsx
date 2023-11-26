import ListBox from '../ListBox'

function AddProductForToTrade() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-2/3 bg-white py-4'>
                <div className="bg-white dark:border-strokedark dark:bg-boxdark py-4 px-6.5 pt-0">
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

                    <div className='border-gray h-fit' style={{ borderWidth: '1px', borderTopWidth: '0' }}>
                        <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-2 flex items-center">
                                <p className="font-medium">Shoes</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <p className="font-medium">Status</p>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <p className="font-medium">Size</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="font-medium">Inventory</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="font-medium">Unit</p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                            </div>
                        </div>

                        <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 hidden items-center sm:flex p-4">
                                <div
                                    className="h-18 w-18"
                                    style={{
                                        backgroundImage: "url('/src/images/shoes/nike-3.webp')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        Nike Air Max 97 SE
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div>
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'New' },
                                        { name: '2hand' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div className="w-full">
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'Eu 38' },
                                        { name: 'Eu 39' },
                                        { name: 'Eu 40' },
                                        { name: 'Eu 41.5' },
                                        { name: 'Eu 42' },
                                        { name: 'Eu 43' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    30
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    Null
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 hidden items-center sm:flex p-4">
                                <div
                                    className="h-18 w-18"
                                    style={{
                                        backgroundImage: "url('/src/images/shoes/nike-4.webp')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">Nike Revolution 6</p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div>
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'New' },
                                        { name: '2hand' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div className="w-full">
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'Eu 38' },
                                        { name: 'Eu 39' },
                                        { name: 'Eu 40' },
                                        { name: 'Eu 41.5' },
                                        { name: 'Eu 42' },
                                        { name: 'Eu 43' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    35
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    Null
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 hidden items-center sm:flex p-4">
                                <div
                                    className="h-18 w-18"
                                    style={{
                                        backgroundImage: "url('/src/images/shoes/adidas-1.avif')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        SAMBA DECON
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div>
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'New' },
                                        { name: '2hand' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div className="w-full">
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'Eu 38' },
                                        { name: 'Eu 39' },
                                        { name: 'Eu 40' },
                                        { name: 'Eu 41.5' },
                                        { name: 'Eu 42' },
                                        { name: 'Eu 43' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    35
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    null
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>
                        <div className="grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                            <div className="col-span-1 hidden items-center sm:flex p-4">
                                <div
                                    className="h-18 w-18"
                                    style={{
                                        backgroundImage: "url('/src/images/shoes/adidas-3.avif')",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center">
                                <div className="flex gap-4 items-center">
                                    <p className="text-sm text-black dark:text-white">
                                        ENGLEWOOD SPZL
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div>
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'New' },
                                        { name: '2hand' },

                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-2 hidden items-center sm:flex justify-center">
                                <div className="w-full">
                                    <ListBox people={[
                                        { name: 'All' },
                                        { name: 'Eu 38' },
                                        { name: 'Eu 39' },
                                        { name: 'Eu 40' },
                                        { name: 'Eu 41.5' },
                                        { name: 'Eu 42' },
                                        { name: 'Eu 43' },
                                    ]} />
                                </div>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    45
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <p className="text-sm text-black dark:text-white">
                                    Null
                                </p>
                            </div>
                            <div className="col-span-1 hidden items-center sm:flex justify-center">
                                <img src="/plusIconDark.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductForToTrade