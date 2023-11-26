import Breadcrumb from '../components/Breadcrumb';
import Success from '../components/TradeIn/Success';

const TradeIn = () => {

    return (
        <>
            <Breadcrumb pageName="Trade-In" />

            <div className="flex flex-col gap-10">
                <div className="rounded-sm"> 
                    <Success />
                </div>
            </div>
        </>
    );
};

export default TradeIn