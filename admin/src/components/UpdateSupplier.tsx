function UpdateSupplier() {
    return (
        <div className="flex flex-row">
            <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark flex items-center justify-between">
                    <h3 className="font-medium text-black dark:text-white">
                        Supplier 01
                    </h3>
                </div>
                <form action="#">
                    <div className="p-6.5">
                        <div className="flex gap-5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Supplier Name
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter supplier name"
                                    defaultValue='Farm A'
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Hotline
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter supplier hotline"
                                    defaultValue='0303467421'
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Address
                            </label>
                            <input
                                type="email"
                                defaultValue="Chu Ngoc H. So 4, ngo 12, pho H.H, Dong Da, Hanoi."
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>


                        <div className="mb-4.5">
                            <label className="mb-3 block text-black dark:text-white">
                                Type
                            </label>
                            <input
                                type="Text"
                                placeholder="Beef, Pork"
                                defaultValue="Beef, Pork"
                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-5">
                            <button className="col-span-1 flex w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                                Undo
                            </button>
                            <button className="col-span-2 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Update Supplier
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateSupplier