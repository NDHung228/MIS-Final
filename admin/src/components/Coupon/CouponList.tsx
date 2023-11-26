import { Link } from 'react-router-dom';

import Breadcrumb from "../Breadcrumb"
import MyModal from "../Dialog"

import BrandCreate from "../BrandCreate";
import SwitcherOne from "../SwitcherOne";
import CouponCreate from './CouponCreate';

function CouponList() {
  return (
    <>
      <Breadcrumb pageName="Coupon" />

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Coupon List
            </h4>


            <MyModal buttonContent={
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                <img src="/plusIcon.svg" alt="" />
              </Link>
            } content={<CouponCreate />} right='right-70' />
          </div>

          <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Code</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Name</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Type</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Value</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Quantity</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Products</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Expired</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Available</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
            </div>
          </div>

          <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">SS#01</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Black Friday</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Percent</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">30%</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">100</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">All</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">30/12</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <SwitcherOne toggleId="coupon#1" available={true} />
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link
                to="/coupon/id"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">SS#02</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Last Month</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Percent</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">10%</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">100</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">100</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">30/11</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <SwitcherOne toggleId="coupon#1" available={true} />
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link
                to="/coupon/id"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">SS#03</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Weekend</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Fixed</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">30</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">100</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">10</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">24/12</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <SwitcherOne toggleId="coupon#3" available={true} />
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link
                to="/coupon/id"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">SS#04</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">VIP Specific</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">Percent</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">50%</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">40</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">All</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="font-medium">30/11</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <SwitcherOne toggleId="coupon#4" available={false} />
            </div>
            <div className="col-span-1 flex items-center justify-center cursor-pointer">
              <Link
                to="/coupon/id"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CouponList