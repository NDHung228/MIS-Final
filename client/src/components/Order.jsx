import { Link } from "react-router-dom"

function Order({ code, status, lunches, total, date }) {
    return (
        <div className={`p-4 bg-gray-bg shadow-lg rounded-2xl ${status === 'Delivering...' ? 'animate-pulse' : ''}`}>
            <div className="flex justify-between items-center border-gray-overlay pb-3"
                style={{ borderBottomWidth: '1px' }}>
                <div className="space-x-2">
                    <span className="font-bold">Order ID</span> <span className="italic">{code}</span>
                </div>
                <div>
                    {
                        status === 'Delivery successful' && <span className="text-[#65a30d]">{status}</span>
                    }
                    {
                        status === 'Cancelled' && <span className="text-[#dc2626]">{status}</span>
                    }
                    {
                        status === 'Delivering...' && <span className="text-[#facc15]">{status}</span>
                    }
                </div>
            </div>
            <div className="py-3 border-gray-overlay"
                style={{ borderBottomWidth: '1px' }}>
                {lunches}
            </div>
            <div className="flex justify-end">
                <div className="space-x-2 py-3">
                    <span className="font-bold">Total: </span> <span>{total}$</span>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="space-x-2 py-3">
                    <span className="font-bold">Order Date: </span> <span>{date}</span>
                </div>
                <div className="space-x-3">
                    <Link to='/account-manage/your-order/id'>
                        <button className="bg-primary-color text-secondary-color py-2 px-4 rounded-2xl">Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Order