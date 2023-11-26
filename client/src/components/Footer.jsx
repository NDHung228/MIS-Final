function Footer() {

    const contacts_infors = [
        {
            title: "Address",
            information: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex',
            icon: '',
        },
        {
            title: "Hotline",
            information: '000 1111 222',
            icon: '',
        },
        {
            title: "Email",
            information: 'contact@eml.vn',
            icon: '',
        }
    ]

    const footer_navigation = [
        {
            title: 'About Us',
            sections: [
                {
                    section: 'Our Story',
                    path: '/'
                },
                {
                    section: 'Article',
                    path: '/'
                },
                {
                    section: 'FAQs',
                    path: '/'
                },
            ]
        },
        {
            title: 'Language',
            sections: [
                {
                    section: 'English',
                    path: '/'
                },
            ]
        },
    ]
    return (
        <>
            <div className=' bg-primary-color px-3 py-8 xl:px-20 text-secondary-color'>
                <div className="flex flex-col items-center leading-7">
                    <h2 className="capitalize font-semibold text-center text-3xl text-grey-color">Join our newsletter</h2>
                    <form action="" className='mt-5 w-full xl:w-2/4 md:w-3/4'>
                        <div className="flex flex-grow w-100 rounded-full overflow-hidden ">
                            <input type="email" placeholder='Enter your email' className='flex-1 px-3 py-2 outline-none' />
                            <button type='submit' className="bg-gray-bg text-primary-color px-3 py-2">Đăng ký</button>
                        </div>
                    </form>
                    {/* <div></div> */}
                    <div className="flex justify-between space-x-10 text-grey-color my-10">
                        <div className="w-1/4">
                            <div className="text-4xl font-semibold mb-3">SHOES STORE</div>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo voluptas optio, quos quia maxime.</p>
                        </div>
                        <div className="col-span-9 md:col-span-4 xl:col-span-2 2xl:col-span-2">
                            <div className="text-2xl font-medium mb-4">Contact</div>
                            <div className="uppercase font-extrabold text-sm mb-2">SS company</div>
                            {
                                contacts_infors.map((contact, index) =>
                                    <div className='mb-2' key={'contact-info-' + index}>
                                        <span className='font-semibold mr-2'>{contact.title}:</span>
                                        <span>{contact.information}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <div className="flex justify-between space-x-10">
                                {
                                    footer_navigation.map((item, index) => (
                                        <div className='col-span-full md:col-span-1' key={'footer-navigation-' + index}>
                                            <div className="hidden md:block text-2xl font-medium mb-4">{item.title}</div>
                                            {
                                                item.sections.map((section, index) =>
                                                    <div className='hidden md:block mb-2'  key={'section-mobile-' + index}>
                                                        <a href={section.path} className='text-grey-color hover:text-grey-color-200'> {section.section}</a>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '0.75px' }} className='w-full bg-grey-color rounded-full'></div>
                    <div className='mt-4 text-grey-color'>
                        <p className='text-lg mb-2'>© Copyright 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer