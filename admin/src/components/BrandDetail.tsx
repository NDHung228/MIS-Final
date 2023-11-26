import BrandOne from '../images/brand/nike-logo.png';

const BrandDetail = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="py-6 px-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative flex justify-between items-center">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Brand 01
                        </h4>
                    </div>

                    <div>
                        <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                            <form action="#">
                                <div className="p-6.5 pb-0">
                                    <div className="mb-4.5">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Brand Name <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={'Nike'}
                                            placeholder="Enter your email address"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-4.5">
                                        <label className="mb-3 block text-black dark:text-white">
                                            Thumbnail <span className="text-meta-1">*</span>
                                        </label>
                                        <div className='flex justify-center items-center mb-3'>
                                            <img src={BrandOne} className='w-20' alt="" />
                                        </div>
                                        <input
                                            type="file"
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="mb-4 block text-black dark:text-white">
                                            Size List <span className="text-meta-1">*</span>
                                        </label>
                                        <div className='grid grid-cols-5 gap-2 items-center'>
                                            <div className='text-sm mt-0'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 38
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 39
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 40
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 40.5
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 41
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 40.5
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 41
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 41.5
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 42
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 42.5
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 43
                                                </div>
                                            </div>
                                            <div className='text-sm h-fit'>
                                                <div className='text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9'>
                                                    Eu 43.5
                                                </div>
                                            </div>
                                            <div className='cursor-pointer'>
                                                <div className='w-full text-center p-3 rounded-2xl ring-1 ring-gray-2 bg-meta-9  flex justify-center items-center'>
                                                    <img src="/plusIconDark.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 px-6.5'>
                        <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                            Delete Brand
                        </button>
                        <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Update Brand
                        </button>
                    </div>
                </div >
            </div >
        </>
    );
};

export default BrandDetail
