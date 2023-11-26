import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Price from '../components/Price';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const SINGLE_SHOES = {
  id: 1,
  title: "Nike Air Force 1",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis aliquam quos fuga a laboriosam, rerum cumque accusamus. Dolor, dicta sequi.",
  img: "/shoes/nike-1.webp",
  price: 100,
  options: [
    {
      title: "Eu 38.5",
      additionalPrice: 0,
    },
    {
      title: "Eu 39",
      additionalPrice: 0,
    },
    {
      title: "Eu 40",
      additionalPrice: 0,
      disabled: true,
    },
    {
      title: "Eu 40.5",
      additionalPrice: 0,
    },
    {
      title: "Eu 41",
      additionalPrice: 0,
    },
    {
      title: "Eu 42",
      additionalPrice: 0,
    },
    {
      title: "Eu 42.5",
      additionalPrice: 0,
      disabled: true,
    },
    {
      title: "Eu 43",
      additionalPrice: 0,
    },
    {
      title: "Eu 44",
      additionalPrice: 0,
    },
    {
      title: "Eu 44.5",
      additionalPrice: 0,
      disabled: true,
    },
    {
      title: "Eu 45",
      additionalPrice: 0,
    },
    {
      title: "Eu 45.5",
      additionalPrice: 0,
    },
    {
      title: "Eu 46",
      additionalPrice: 0,
    },
    {
      title: "Eu 47",
      additionalPrice: 0,
    },
    {
      title: "Eu 47.5",
      additionalPrice: 0,
    },
  ],
};

function ShoesDetail() {
  return (
    <>
      <Navbar />
      <div className="p-4 lg:px-20 xl:px-40 h-screen w-full justify-around text-red-500 flex-row gap-8 items-center grid grid-cols-2">
        {/* IMAGE CONTAINER */}
        {SINGLE_SHOES.img && (
          <div className="relative h-fit col-span-1">
            <img
              className='rounded-2xl h-96 w-[28rem]'
              src={SINGLE_SHOES.img}
              alt=""
            />
          </div>
        )}
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8 col-span-1">
          <div className='flex items-center justify-between'>
            <h1 className="text-3xl font-bold uppercase xl:text-5xl">{SINGLE_SHOES.title}</h1>
            <div className="flex space-x-2 items-center bg-gray-bg text-primary-color w-fit p-2 rounded-2xl text-xs">
              <FontAwesomeIcon icon={faCertificate} />
              <span className='font-bold'>2 hand</span>
            </div>
          </div>

          <p>{SINGLE_SHOES.desc}</p>
          <Price price={SINGLE_SHOES.price} id={SINGLE_SHOES.id} options={SINGLE_SHOES.options} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShoesDetail
