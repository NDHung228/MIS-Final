import { Link } from 'react-router-dom';
import LunchOne from '../images/lunches/lunch-1.webp';
import LunchTwo from '../images/lunches/lunch-2.webp';
import LunchThree from '../images/lunches/lunch-3.webp';
import LunchFour from '../images/lunches/lunch-4.webp';
import MenuTwo from '../images/menu/m2.jpg';
import SwitcherOne from '../components/SwitcherOne';
import MyModal from '../components/Dialog';
import UpdateLunchMenu from '../components/UpdateLunchMenu';

const MenuDetail = () => {
    return (
        <>
            <div className="mb-6 flex flex-col gap-3 justify-end">
                <nav>
                    <ol className="flex items-center justify-end gap-2">
                        <li>
                            <Link to="/">Dashboard /</Link>
                        </li>
                        <li>
                            <Link to="/manage/menu">Menu /</Link>
                        </li>
                        <li className="text-primary">02</li>
                    </ol>
                </nav>
            </div>

            <div className="flex flex-col gap-10">
                <div className="py-6 px-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative flex justify-between items-center">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Menu 02
                        </h4>
                        <div className='absolute left-[480px]'>
                            <SwitcherOne toggleId='toggleDetail' available={true} />
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div className='col-span-1'>
                            <div className="bg-white dark:border-strokedark dark:bg-boxdark">
                                <form action="#">
                                    <div className="p-6.5">
                                        <div className="mb-4.5">
                                            <label className="mb-2.5 block text-black dark:text-white">
                                                Menu Name <span className="text-meta-1">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={'Heathy Lunches'}
                                                placeholder="Enter your email address"
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            />
                                        </div>

                                        <div className="mb-4.5">
                                            <label className="mb-3 block text-black dark:text-white">
                                                Thumbnail <span className="text-meta-1">*</span>
                                            </label>
                                            <div className='flex justify-center items-center mb-3'>
                                                <img src={MenuTwo} className='w-80' alt="" />
                                            </div>
                                            <input
                                                type="file"
                                                className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
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
                            <div>
                                <div className='border-gray h-fit' style={{ borderWidth: '1px' }}>
                                    <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                        <div className="col-span-1 flex items-center">
                                            <p className="font-medium">Lunch</p>
                                        </div>
                                        <div className="col-span-1 hidden items-center sm:flex">
                                            <p className="font-medium">Description</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                        <div className="col-span-1 flex items-center">
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                    <img src={LunchOne} alt="Menu" className='block shadow-2xl' />
                                                </div>
                                                <p className="text-sm text-black dark:text-white">
                                                    Salad
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 hidden items-center sm:flex">
                                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                        <div className="col-span-1 flex items-center">
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                    <img src={LunchTwo} alt="Menu" />
                                                </div>
                                                <p className="text-sm text-black dark:text-white">Cheese sandwick</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 hidden items-center sm:flex">
                                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                        <div className="col-span-1 flex items-center">
                                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                                <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                    <img src={LunchThree} alt="Menu" />
                                                </div>
                                                <p className="text-sm text-black dark:text-white">
                                                    Vegetable noodles
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 hidden items-center sm:flex">
                                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                        <div className="col-span-1 flex items-center">
                                            <div className="flex gap-4 items-center">
                                                <div className="h-12.5 w-15 rounded-md flex justify-center items-center">
                                                    <img src={LunchFour} alt="Menu" />
                                                </div>
                                                <p className="text-sm text-black dark:text-white">
                                                    Vegetable noodles
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 hidden items-center sm:flex">
                                            <p className="text-sm text-black dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                        </div>
                                    </div>
                                </div>

                                <MyModal buttonContent={
                                    <button className="mt-4 flex w-full justify-center rounded bg-meta-6 p-3 font-medium text-gray">
                                        Update Lunches
                                    </button>
                                } content={<UpdateLunchMenu />} right='right-8' />
                            </div>


                            <div className='grid grid-cols-3 gap-5'>
                                <button className="flex col-span-1 w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                                    Delete Menu
                                </button>
                                <button className="flex col-span-2 w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                    Update Menu
                                </button>
                            </div>


                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default MenuDetail
