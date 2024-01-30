import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function SwiperSection() {
  return (
    <>
    <div className="w-[80vw]  m-auto">
    <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade,Autoplay]}
       spaceBetween={50}
       effect="fade"
       slidesPerView={1}
       autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
       navigation
       
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
<SwiperSlide>
  <div className="w-[100%]  h-[70vh] object-contain">
    <img className="w-full h-full object-fill  aspect-video" src="DoctorPic6.jpg" alt="alternative_text"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div className="w-[100%]  h-[70vh] object-fill">
    <img className="w-full h-full object-cover aspect-video" src="DoctorPic8.jpg" alt="alternative_text"/>
  </div>
</SwiperSlide>
<SwiperSlide>
<div className="w-[100%]  h-[70vh] object-fill">
    <img className="w-full h-full object-cover aspect-video" src="DoctorPic3.jpg" alt="alternative_text"/>
  </div>
  
</SwiperSlide>
<SwiperSlide>
<div className="w-[100%]  h-[70vh] object-fill">
    <img className="w-full h-full object-cover aspect-video" src="DoctorPic4.jpg" alt="alternative_text"/>
  </div>
</SwiperSlide>

    </Swiper>
    </div>
    
    </>
  )
}
