import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEarthAsia, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../context'
import { useContext } from 'react'
import { computeCartQuantity } from '../utils/cartUtils'

function Navbar() {
    const { globalState } = useContext(MyContext)

    return (
        <>
            <nav className='bg-[white] text-primary-color p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-grow lg:flex-grow-0 space-x-4 items-center justify-between'>
                        <div>
                            <Link to="/">
                                <p className='font-bold text-2xl'>Shoes Store</p>
                            </Link>
                        </div>

                        <div className='hidden lg:flex space-x-4 font-bold text-primary-color'>
                            <Link to='/' className='p-2 text-primary-color'>Home</Link>
                            <Link to='/shoes/2hand' className='p-2 text-primary-color'>2Hand</Link>
                            <Link to='/shoes/new' className='p-2 '>New</Link>
                            <Link to='/shoes/trade-in' className='p-2 '>Trade In</Link>
                            <Link to='/about-us' className='p-2 '>About Us</Link>
                        </div>
                    </div>

                    <div className='hidden lg:flex space-x-4 font-bold'>
                        {
                            !globalState.authentication ?
                                <>
                                    <Link to='/login' className='p-2  flex items-center justify-between'>
                                        <FontAwesomeIcon icon={faUser} className='text-primary-color' />
                                        <span className='ms-1'>Login</span>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/cart' className='p-2  flex items-center justify-between relative'>
                                        <FontAwesomeIcon icon={faCartShopping} className='text-primary-color' />
                                        <div className='absolute top-1 -right-1 h-4 w-4 bg-[#ff0000] rounded-full flex justify-center items-center'>
                                            <span className='text-xs'>{computeCartQuantity(globalState.cart)}</span>
                                        </div>
                                    </Link>
                                    <Link to='/account-manage?q=order' className='p-2  flex items-center justify-between'>
                                        <FontAwesomeIcon icon={faUser} className='text-primary-color' />
                                        <span className='ms-1'>Nguyen Huy</span>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar