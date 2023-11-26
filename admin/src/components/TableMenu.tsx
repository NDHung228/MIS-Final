import { Link } from 'react-router-dom';
import BrandOne from '../images/brand/nike-logo.png';
import BrandTwo from '../images/brand/adidas-logo.png';
import BrandThree from '../images/brand/puma-logo.png';
import BrandFour from '../images/brand/vans-logo.png';
import BrandFive from '../images/brand/converse-logo.png';
import MyModal from './Dialog';
import BrandDetail from './BrandDetail';
import BrandCreate from './BrandCreate';

const TableMenu = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Brand List
        </h4>


        <MyModal buttonContent={
          <Link
            to="#"
            className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
          >
            <img src="/plusIcon.svg" alt="" />
          </Link>
        } content={<BrandCreate />} right='right-96' />
      </div>

      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Brand Name</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">New's Quantity</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">2Hand's Quantity</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
        </div>
      </div>

      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md flex justify-center items-center">
              <img src={BrandOne} alt="Menu" className='block shadow-2xl h-7 w-7' />
            </div>
            <p className="text-sm text-black dark:text-white">
              Nike
            </p>
          </div>
        </div>
        <div className="col-span-1 hidden items-center sm:flex justify-center">
          <p className="text-sm text-black dark:text-white">20</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">30</p>
        </div>
        <div className="col-span-1 flex items-center justify-center cursor-pointer">
          <MyModal buttonContent={
            <div
              className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
            >
              Detail
            </div>
          } content={<BrandDetail />} right='right-96' />
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md flex justify-center items-center">
              <img src={BrandTwo} alt="Menu" className='h-7 w-7' />
            </div>
            <p className="text-sm text-black dark:text-white">Adidas</p>
          </div>
        </div>
        <div className="col-span-1 hidden items-center sm:flex justify-center">
          <p className="text-sm text-black dark:text-white">20</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">30</p>
        </div>
        <div className="col-span-1 flex items-center justify-center cursor-pointer">
          <MyModal buttonContent={
            <div
              className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
            >
              Detail
            </div>
          } content={<BrandDetail />} right='right-96' />
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md flex justify-center items-center">
              <img src={BrandThree} alt="Menu" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Puma
            </p>
          </div>
        </div>
        <div className="col-span-1 hidden items-center sm:flex justify-center">
          <p className="text-sm text-black dark:text-white">24</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">32</p>
        </div>
        <div className="col-span-1 flex items-center justify-center cursor-pointer">
          <MyModal buttonContent={
            <div
              className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
            >
              Detail
            </div>
          } content={<BrandDetail />} right='right-96' />
        </div>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md flex justify-center items-center">
              <img src={BrandFour} alt="Menu" />
            </div>
            <p className="text-sm text-black dark:text-white">
              Vans
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">33</p>
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">22</p>
        </div>

        <div className="col-span-1 flex items-center justify-center cursor-pointer">
          <MyModal buttonContent={
            <div
              className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
            >
              Detail
            </div>
          } content={<BrandDetail />} right='right-96' />
        </div>

      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center justify-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md flex justify-center items-center">
              <img src={BrandFive} alt="Menu" className='h-7 w-7' />
            </div>
            <p className="text-sm text-black dark:text-white">
              Converse
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">21</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm text-black dark:text-white">15</p>
        </div>
        <div className="col-span-1 flex items-center justify-center cursor-pointer">
          <MyModal buttonContent={
            <div
              className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
            >
              Detail
            </div>
          } content={<BrandDetail />} right='right-96' />
        </div>
      </div>
    </div>
  );
};

export default TableMenu;
