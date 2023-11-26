// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { Link } from 'react-router-dom';

function HeroCarousel() {
    return (
        <div className='relative'>
            <div>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    autoplay={{ delay: 4000 }}
                >
                    <SwiperSlide>
                        <div
                            className={`block h-[44rem] bg-[url('/trade-in.png')] bg-cover bg-center bg-no-repeat`}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HeroCarousel