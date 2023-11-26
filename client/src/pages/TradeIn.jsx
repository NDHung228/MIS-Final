import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'

function TradeIn() {
    return (
        <>
            <Navbar />
            <div
                className={`block h-[42rem] bg-[url('/carousel-img/banner.png')] bg-cover bg-center bg-no-repeat`}
            />

            <section className="mt-16 px-10" id="about-us">
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                    Please contact us
                </h2>
                <div className="section-title-underline bg-primary-color block"></div>
                <div className='mt-10 grid grid-cols-2 w-3/4 mx-auto'>
                    <div className='col-span-1 relative'>
                        <div className='h-[40rem] bg-no-repeat bg-contain bg-center'
                            style={{
                                backgroundImage: "url('/trade-in-2.png')",
                            }}></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-8'>
                            <img src="/contact.webp" alt="" className='h-64' />
                            <h1 className='text-2xl text-center'>Via Hotline - 000 1111 222</h1>
                        </div>
                        <div className='w-full bg-gray-overlay' style={{height: '2px'}}></div>
                        <form class="max-w-sm mx-auto w-3/4 mt-8">
                            <h1 className='text-2xl text-center'>Or Leave Your Info</h1>
                            <div class="mb-5">
                                <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name <span className='text-error'>*</span></label>
                                <input type="text" id="fname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number <span className='text-error'>*</span></label>
                                <input type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>

                            <button type="submit" class="w-full text-secondary-color bg-primary-color focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center rounded-lg">SEND</button>
                        </form>
                    </div>
                </div>
            </section>

            <AboutUs />
            <FAQ />
            <Footer />
        </>

    )
}

export default TradeIn