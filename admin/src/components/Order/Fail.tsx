import { Link } from "react-router-dom"
import MyModal from "../Dialog"
import OrderDetail from "./OrderDetail"

function Fail() {
  return (
    <>
      <div className="bg-white grid grid-cols-11 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Order ID</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Customer</p>
        </div>
        <div className="col-span-3 hidden items-center sm:flex">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <p className="font-medium">Total Price ($)</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Status</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="font-medium">Payment</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
        </div>

      </div>

      <div>
        <div className="bg-white grid grid-cols-11 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              #01009
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nguyen Nhut Huy</p>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nike Air Force 1 - New (1), Nike Court Vision Low - 2hand (1)</p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">300</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
              Cancel
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            COD
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <MyModal buttonContent={
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            } content={<OrderDetail cancel={true} />} right='right-45' />
          </div>

        </div>

        <div className="bg-white grid grid-cols-11 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              #01001
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nguyen Van A</p>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nike Blazer Mid '77 Vintage - 2hand (1)</p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">100</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
              Cancel
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            Credit
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <MyModal buttonContent={
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            } content={<OrderDetail cancel={true} />} right='right-45' />
          </div>

        </div>

        <div className="bg-white grid grid-cols-11 border-t border-stroke py-4.5 px-4 dark:border-strokedark">
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              #00998
            </p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nguyen Van A</p>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">Nike Court Vision Low - New (1)</p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">200</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
              Cancel
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            Credit
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <MyModal buttonContent={
              <Link
                to="#"
                className="inline-flex items-center justify-center rounded-full ring-primary ring-1  py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-6"
              >
                Detail
              </Link>
            } content={<OrderDetail cancel={true} />} right='right-45' />
          </div>

        </div>
      </div>
    </>
  )
}

export default Fail