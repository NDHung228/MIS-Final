function AboutUs() {
    return (
        <>
            <section className="mt-16 px-10" id="about-us">
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3 ">
                    About Us
                </h2>
                <div className="section-title-underline bg-primary-color block"></div>
                <div className="flex space-x-8 py-10 px-10">
                    <div className="italic pe-10 py-12 space-y-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi dolor ipsam repellendus perspiciatis debitis! Praesentium, libero. Sequi, iure.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi dolor ipsam repellendus perspiciatis debitis! Praesentium, libero. Sequi, iure.
                        </p>
                        <p className="font-bold">
                            YOU ARE WELLCOME!
                        </p>
                    </div>
                    
                    <div>
                        <img className="h-auto rounded-xl" src="/about-us.jpg"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs