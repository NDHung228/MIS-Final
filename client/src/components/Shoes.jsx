
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Shoes({ thumb, name, old, price }) {
    return (
        <div className='rounded-2xl h-full flex flex-col shadow-md'>
            <div className='group h-72 relative rounded-t-2xl overflow-hidden'>
                <div className='h-72'
                    style={{
                        backgroundImage: `url(${thumb})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                </div>
                <div className='justify-center items-center bg-gray-overlay absolute top-0 h-72 w-full hidden group-hover:flex'>
                    <div className='flex flex-col gap-3'>
                        <button className='rounded-2xl px-10 py-3 bg-yellow font-bold'>Buy Now</button>
                        <button className='rounded-2xl px-10 py-3 bg-primary-color text-secondary-color font-bold'>View Detail</button>
                    </div>

                </div>
            </div>

            <div className="flex flex-col flex-auto justify-between px-3 bg-[white] rounded-b-2xl">
                <div className='py-3 relative flex justify-between items-center'>
                    <div className='text-xl font-bold'>
                        {name}
                    </div>

                    {
                        old ?
                            <div className="flex space-x-2 items-center bg-gray-bg text-primary-color w-fit p-2 rounded-2xl text-xs">
                                <FontAwesomeIcon icon={faCertificate} />
                                <span className='font-bold'>2 hand</span>
                            </div> :  
                            <div className="flex space-x-2 items-center bg-gray-bg text-primary-color w-fit p-2 rounded-2xl text-xs">
                                <FontAwesomeIcon icon={faCertificate} />
                                <span className='font-bold'>New</span>
                            </div>
                    }
                </div>

                <div className='mb-2' style={{ fontSize: '12px' }}>
                    <div className="mt-2 text-2xl text-right text-primary-color">
                        <div>

                        </div>
                        <div>
                            <strong>
                                {price} <span className='px-1 text-xl font-normal'>$</span>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoes