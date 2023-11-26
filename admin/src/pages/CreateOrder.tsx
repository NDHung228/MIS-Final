import Breadcrumb from "../components/Breadcrumb"
import MyModal from "../components/Dialog"
import CreateTradeIn from "../components/CreateTradeIn"
import CreateOrder from "../components/CreateOrder"

function CreateOrderPage() {
    return (
        <>
            <Breadcrumb pageName="Create New Order" />
            <div className="flex justify-center space-x-40 mt-30">
                <MyModal buttonContent={
                    <div className="bg-primary hover:bg-opacity-95 transition-all cursor-pointer h-70 w-70 rounded-3xl flex flex-col justify-center items-center">
                        <div className="mb-4 ring-white ring-4 p-0 h-20 w-20 rounded-full flex justify-center items-center">
                            <img src="/order-icon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-2xl text-white">Create Normal Order</h1>
                    </div>
                } content={<CreateOrder />} right='right-10' />

                <MyModal buttonContent={
                    <div className="bg-primary hover:bg-opacity-95 transition-all cursor-pointer h-70 w-70 rounded-3xl flex flex-col justify-center items-center">
                        <div className="mb-4 ring-white ring-4 p-0 h-20 w-20 rounded-full flex justify-center items-center">
                            <img src="/order-icon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-2xl text-white">Create Trade In Order</h1>
                    </div>
                } content={<CreateTradeIn />} right='right-10' />
            </div>
        </>
    )
}

export default CreateOrderPage