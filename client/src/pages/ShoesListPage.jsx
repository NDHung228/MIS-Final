import Navbar from '../components/Navbar'
import ShoesList from "../components/ShoesList"
import Footer from "../components/Footer"
import Filter from '../components/Filter'
import { useLocation } from 'react-router-dom'

function ShoesListPage() {
  const path = useLocation()

  return (
    <>
      <Navbar />

      <div className='w-[85%] mx-auto my-12'>
        {
          path.pathname === '/shoes/2hand' ?
            <div>
              <span>Home / </span>
              <span>Shoes / </span>
              <span>2hand</span>
            </div>
            :
            <div>
              <span>Home / </span>
              <span>Shoes / </span>
              <span>New</span>
            </div>
        }

        <div className='grid grid-cols-5'>
          <div className='col-span-1'>
            <Filter />
          </div>
          <div className='col-span-4'>
            <div className='flex justify-between'>
              {
                path.pathname === '/shoes/2hand' ?
                  <h1 className='font-bold text-2xl'>SECOND HAND</h1>
                  :
                  <h1 className='font-bold text-2xl'>NEW SHOES</h1>
              }

              <div className='flex gap-3 items-center'>
                <span>Sort: </span>
                <div className='py-1 px-3 bg-gray-bg rounded-2xl'>
                  <select className='bg-gray-bg'>
                    <option defaultChecked>Default</option>
                    <option>A → Z</option>
                    <option>A → Z</option>
                    <option>price asc</option>
                    <option>price desc</option>
                  </select>
                </div>
              </div>
            </div>
            <ShoesList path={path.pathname}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShoesListPage
