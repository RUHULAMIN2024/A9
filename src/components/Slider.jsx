import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default ()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/futuristic-representation-water-home-architecture_23-2151048182.jpg?w=740" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/full-shot-people-reading-book-club_23-2150062121.jpg?w=740" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/view-from-balcony-apartment_188544-12685.jpg?w=996" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/house-with-garage-fence-front-it_1340-32136.jpg?w=740" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/full-shot-girl-holding-laptop_23-2149455164.jpg?w=740" alt="image not found" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-60 md:h-[500px]' src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302626.jpg?w=740" alt="image not found" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
