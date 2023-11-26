import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function OrderItem({ thumb, name, price, quantity }) {
    return (
        <>
            <div className="col-span-1 flex justify-start items-center">
                <input type="checkbox" />
            </div>
            <div className="col-span-4 justify-center items-center">
                <div className="grid grid-cols-3 me-5 space-x-5">
                    <div className='h-full col-span-1 rounded-xl shadow'
                        style={{
                            backgroundImage: `url(${thumb})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                    </div>
                    <div className="col-span-2">
                        <div className="mt-2 text-xl font-bold">
                            <span>{name}</span>
                        </div>
                        <div className='space-x-2 items-center'>
                            <span className='font-bold'>Description:  </span>
                            <span className='italic'>Sed ut doloremque laudantium illo inventore veritatis...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 text-center flex justify-center items-center">
                <span>
                    {price}$
                </span>
            </div>
            <div className="col-span-2 flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="h-5 w-5 p-2 flex justify-center items-center border-2 border-gray-overlay rounded">
                        <span>+</span>
                    </div>
                    <input className="h-5 w-7 p-2" value={quantity} />
                    <div className="h-5 w-5 p-2 flex justify-center items-center border-2 border-gray-overlay rounded">
                        <span>-</span>
                    </div>
                </div>
            </div>
            <div className="col-span-2 text-center flex justify-center items-center">
                <span>
                    {quantity*price}$
                </span>
            </div>
            <div className="col-span-1  text-center flex justify-center items-center">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </>
    )
}

export default OrderItem
