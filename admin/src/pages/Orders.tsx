import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';
import Waiting from '../components/Order/Waiting';
import Success from '../components/Order/Success';
import Fail from '../components/Order/Fail';
import Delivering from '../components/Order/Delivering';

const Orders = () => {
    const [orderStatus, setOrderStatus] = useState('Waiting')

    return (
        <>
            <Breadcrumb pageName="Orders" />

            <div className="flex flex-col gap-10">
                <div className="rounded-sm">
                    <div className="py-6 flex gap-5 items-center">
                        <button className={`text-xl font-semibold text-meta-6 ${orderStatus === 'Waiting' ? 'bg-graydark' : 'bg-white'} p-4 rounded-lg w-30`}
                            onClick={() => setOrderStatus('Waiting')}>
                            Waiting
                        </button>
                        <button className={`text-xl font-semibold text-meta-5 ${orderStatus === 'Delivering' ? 'bg-graydark' : 'bg-white'} p-4 rounded-lg w-30`}
                            onClick={() => setOrderStatus('Delivering')}>
                            Delivering
                        </button>
                        <button className={`text-xl font-semibold text-meta-3 ${orderStatus === 'Success' ? 'bg-graydark' : 'bg-white'} p-4 rounded-lg w-30`}
                            onClick={() => setOrderStatus('Success')}>
                            Success
                        </button>
                        <button className={`text-xl font-semibold text-meta-1 ${orderStatus === 'Fail' ? 'bg-graydark' : 'bg-white'} p-4 rounded-lg w-30`}
                            onClick={() => setOrderStatus('Fail')}>
                            Cancel
                        </button>
                    </div>
                    
                    {orderStatus === 'Waiting' && <Waiting />} 
                    {orderStatus === 'Success' && <Success />} 
                    {orderStatus === 'Delivering' && <Delivering />} 
                    {orderStatus === 'Fail' && <Fail />} 

                </div>
            </div>
        </>
    );
};

export default Orders
