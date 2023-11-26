import ListBox from "../ListBox"

function CouponCreate() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="w-full py-6 px-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="relative flex justify-between items-center px-6.5">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Create Coupon
                    </h4>
                </div>

                <div>
                    <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                        <form action="#">
                            <div className="grid grid-cols-2">
                                <div className="p-6.5 pb-0 col-span-1">
                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Code <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter coupon's code"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Type <span className="text-meta-1">*</span>
                                        </label>

                                        <ListBox people={[{name: "Percent"}, {name: "Fixed"}]}/>
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-4 block text-black dark:text-white">
                                            Quantity <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter quantity"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="p-6.5 pb-0 col-span-1">
                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Name <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter coupon's name"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Value <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="Number"
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-4 block text-black dark:text-white">
                                            Expired day <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-5 px-6.5'>
                    <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                        Undo
                    </button>
                    <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Create Coupon
                    </button>
                </div>
            </div >
        </div >
    )
}

export default CouponCreate