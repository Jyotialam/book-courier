import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import book1 from "../assets/Black-Door.jpg";
import book2 from "../assets/Mother-of-Rome.jpg";
import book3 from "../assets/The-Kingdom.jpg";
import { Link } from 'react-router';
import BgImage1 from '../assets/banner-bg-1.png';
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {

  const slides = [
    {
      img: book1,
      title: "Black Door",
      desc: "A thrilling story that keeps you on the edge of your seat.",
    },
    {
      img: book2,
      title: "Mother of Rome",
      desc: "An epic tale of power, family, and destiny.",
    },
    {
      img: book3,
      title: "The Kingdom",
      desc: "Discover the secrets and mysteries of a lost kingdom.",
    },
  ];

  return (
    <div
      className="w-full min-h-[85vh] bg-cover bg-center p-4 sm:px-8 lg:px-16"
      style={{ backgroundImage: `url(${BgImage1})` }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        className="w-full h-[70vh] sm:h-[75vh] lg:h-[80vh]"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-6 lg:gap-12">

              {/* LEFT TEXT */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">{item.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-white">{item.desc}</p>
                <Link
                  to="/books"
                  className="bg-[#063F2D] hover:bg-green-900 text-white px-6 py-3 rounded-md w-max mx-auto lg:mx-0 text-sm sm:text-base md:text-lg transition-all duration-300 border"
                >
                  All Books
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full sm:w-[80%] lg:w-[60%] h-[50vh] sm:h-[65vh] lg:h-[75vh] object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
