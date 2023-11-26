import { Link } from 'react-router-dom';
import LunchOne from '../images/lunches/lunch-1.webp';
import LunchTwo from '../images/lunches/lunch-2.webp';
import LunchThree from '../images/lunches/lunch-3.webp';
import LunchFour from '../images/lunches/lunch-4.webp';
import Beef from '../images/materials/Beef.png';
import MyModal from '../components/Dialog';
import UpdateLunchMenu from '../components/UpdateLunchMenu';
import OrderMaterial from '../components/OrderMaterial';

const MaterialDetail = () => {
    return (
        <>
            <div className="mb-6 flex flex-col gap-3 justify-end">
                <nav>
                    <ol className="flex items-center justify-end gap-2">
                        <li>
                            <Link to="/">Dashboard /</Link>
                        </li>
                        <li>
                            <Link to="/warehouse/materials">Material /</Link>
                        </li>
                        <li className="text-primary">01</li>
                    </ol>
                </nav>
            </div>

            <div className="flex flex-col gap-10">
                <div className="py-6 px-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative flex justify-between items-center">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Material O1
                        </h4>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div className='col-span-1'>
                            <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                                <form action="#">
                                    <div className="p-6.5">
                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Material Name <span className="text-meta-1">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={'Beef'}
                                                placeholder="Enter your email address"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>



                                        <div className="mb-6">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Description <span className="text-meta-1">*</span>
                                            </label>
                                            <textarea
                                                rows={6}
                                                placeholder="Type your message"
                                                value='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                                '
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            ></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between col-span-1 '>
                            <div className="mb-4.5">
                                <label className="mb-3 block text-black dark:text-white">
                                    Thumbnail <span className="text-meta-1">*</span>
                                </label>
                                <div className='flex justify-center items-center mb-3'>
                                    <img src={Beef} className='w-80' alt="" />
                                </div>
                                <input
                                    type="file"
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='border-gray h-fit' style={{ borderWidth: '1px' }}>
                            <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <p className="font-medium">Supplier</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="font-medium">Order quantity (Kg)</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="font-medium">Delivery quantity (Kg)</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="font-medium">Time</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="font-medium">Status</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <p className="text-sm text-black dark:text-white">
                                            Farm A
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    50
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="animate-pulse inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                                        Pending
                                    </p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">08/11/2023</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="animate-pulse inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                                        Waiting
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-1 flex items-center">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <p className="text-sm text-black dark:text-white">
                                            Farm A
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    50
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    50
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="text-sm text-black dark:text-white">05/11/2023</p>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex">
                                    <p className="inline-flex rounded-full bg-meta-3 bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-3">
                                        Success
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className='grid grid-cols-3 gap-5 mt-4'>
                            <div className='col-span-1'>
                                <button className="flex w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                                    Delete Material
                                </button>
                            </div>
                            <div className='col-span-1'>
                                <MyModal buttonContent={
                                    <button className="flex w-full justify-center rounded bg-meta-6 p-3 py-3.5 font-medium text-gray">
                                        Order Material
                                    </button>
                                } content={<OrderMaterial />} right='right-8' />
                            </div>
                            <div className='col-span-1'>
                                <button className="flex col-span-1 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Update Material
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default MaterialDetail
