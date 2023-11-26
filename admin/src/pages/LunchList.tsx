import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import MyModal from '../components/Dialog';
import SwitcherOne from '../components/SwitcherOne';
import AddMenuLunch from '../components/AddNewLunch';
import UpdateLunchDetail from '../components/UpdateLunchDetail';
import { useEffect, useState } from 'react';
import shoesDataJS from '../data/shoes.json'


const filterShoes = (status: string) => {
    return shoesDataJS.filter(shoes => shoes.status === status)
}

const LunchList = () => {
    const [shoesStatus, setShoesStatus] = useState('new')
    const [shoesData, setShoesData] = useState(filterShoes(shoesStatus))

    useEffect(() => {
        setShoesData(filterShoes(shoesStatus))
    }, [shoesStatus])

    return (
        <>
            <Breadcrumb pageName="Shoes" />

            <div className="flex flex-col gap-10">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
                        <div className='flex flex-col'>
                            <h4 className="text-xl font-semibold text-black dark:text-white">
                                Shoes List
                            </h4>

                            <div className='flex gap-2 mt-4'>
                                <span onClick={() => { setShoesStatus('new') }} className={` px-4 py-2 rounded-2xl cursor-pointer w-22 text-center ${shoesStatus === 'new' ? 'bg-meta-4 text-white' : 'bg-meta-9'}`}>New</span>
                                <span onClick={() => { setShoesStatus('2hand') }} className={` px-4 py-2 rounded-2xl cursor-pointer w-22 text-center ${shoesStatus === '2hand' ? 'bg-meta-4 text-white' : 'bg-meta-9'}`}>2 Hand</span>
                            </div>
                        </div>

                        <MyModal buttonContent={
                            <Link
                                to="#"
                                className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                            >
                                <img src="/plusIcon.svg" alt="" />
                            </Link>
                        } content={<AddMenuLunch />} right='right-45' />
                    </div>


                    <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                        <div className="col-span-2 flex items-center">
                            <p className="font-medium">Shoes Name</p>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex justify-center">
                            <p className="font-medium">Status</p>
                        </div>
                        <div className="col-span-1 hidden items-center sm:flex justify-center">
                            <p className="font-medium">Brand</p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center">
                            <p className="font-medium">Total Quantity</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-medium">Unit</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-medium">Available</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                        </div>
                    </div>

                    {
                        shoesData.map(shoes =>
                            <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
                                <div className="col-span-2 flex items-center">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <div className="h-12.5 w-15 rounded-md">
                                            <img src={shoes.image} alt="Menu" className='block shadow-2xl' />
                                        </div>
                                        <p className="text-sm text-black dark:text-white">
                                            {shoes.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-1 hidden items-center sm:flex justify-center">
                                    <p className="text-sm text-black dark:text-white">{shoes.status === '2hand' ? '2 Hand' : 'New'}</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center capitalize">
                                    <p className="text-sm text-black dark:text-white">{shoes.brand}</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center capitalize">
                                    <p className="text-sm text-black dark:text-white">{shoes.quantity}</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <p className="text-sm text-black dark:text-white">{shoes.price}</p>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <SwitcherOne toggleId='toggle1' available={true} />
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <MyModal buttonContent={
                                        <Link
                                            to="#"
                                            className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
                                        >
                                            Detail
                                        </Link>
                                    } content={<UpdateLunchDetail />} right='right-20' />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default LunchList;
