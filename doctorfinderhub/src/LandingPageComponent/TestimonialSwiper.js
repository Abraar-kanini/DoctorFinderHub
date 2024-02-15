import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function TestimonialSwiper() {
    return (
        <>


            <div className="w-[80vw]  m-auto">
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    //   navigation
                    pagination={{ clickable: true }}
                    //   scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>

                        <div className=" h-[40vh] w-[50vw] flex flex-col justify-center items-center m-auto space-y-3">
                            <p className="text-[#777777]">The doctors and nurses and aides were super duper helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much!</p>

                            <img className="rounded-full" src="TestimonialPic.jpg" alt="Customer Pic" />
                            <h1 className="text-[#555555]">Martha Stewart</h1>

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="h-[40vh] w-[50vw] flex flex-col justify-center items-center m-auto space-y-3">
                            <p className="text-[#777777]">All the hospital staffs were very helpful. I really really appreciate all your kindness and good care you have provide me with. Thank you so much for your dedication!</p>

                            <img className="rounded-full" src="TestimonialPic.jpg" alt="Customer Pic" />
                            <h1 className="text-[#555555]">Rachel Williams</h1>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>



        </>
    )
}
