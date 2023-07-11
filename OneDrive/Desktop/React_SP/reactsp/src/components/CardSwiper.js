import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 



// import required modules
import { Pagination } from 'swiper/modules';


export default function CardSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://th.bing.com/th/id/R.60234024dd9f572cd0ee039cbec703ff?rik=nkBnig0CjItYtg&riu=http%3a%2f%2fwww.juvesalonspa.com%2fwp-content%2fuploads%2f2021%2f02%2fOLAPLEX-600x600.png&ehk=u%2bZdFUzLKWOY2lUaHEbUsRolBu3sf8NwkZScN%2b0XEyQ%3d&risl=&pid=ImgRaw&r=0" /></SwiperSlide>
        <SwiperSlide><img src="https://plazavea.vteximg.com.br/arquivos/ids/217379-1000-1000/20171566.jpg?v=636922661505730000"/></SwiperSlide>
        <SwiperSlide><img src="https://cdn1.productnation.co/stg/sites/1/62c296730160f.jpeg" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/R.ea2444c1829730be48f346c993f926d9?rik=QaEb14qze4ABcw&pid=ImgRaw&r=0" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.ByMAnrLA9qZ-totZJe5aigHaHa?pid=ImgDet&rs=1" /></SwiperSlide>
        <SwiperSlide><img src="https://boholonlinestore.com/wp-content/uploads/2017/01/21021076_dove_deodorant_stick_original_40g_4800888166791_1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.R7nXJYFT5kYm_5UW5uS78QHaHa?pid=ImgDet&w=1000&h=1000&rs=1" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.kCKA5mZ-DvviF_nPBCXpjAHaGW?pid=ImgDet&rs=1" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}


