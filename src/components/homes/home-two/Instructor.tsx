"use client";
import testimonial_data from '@/data/home-data/TestimonialData';
import InjectableSvg from '@/hooks/InjectableSvg';
import BtnArrow from '@/svg/BtnArrow';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import instructor_nav_5 from "@/assets/img/instructor/h2_instructor05.png";
import shape_1 from "@/assets/img/instructor/h2_instructor_shape.png";
import av1 from "@/assets/img/instructor/av1.jpg";
import av2 from "@/assets/img/instructor/av2.jpg";

const instructor_nav_data: StaticImageData[] = [
  av1,
  av2,
  av1,
  av2,
  av1,
  av2,
  av1,
];

const Instructor = () => {

   const [isLoop, setIsLoop] = useState(false);
   useEffect(() => {
      setIsLoop(true);
   }, []);

   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

   return (
      <section className="instructor__area-three instructor__bg" style={{backgroundImage:`url(/assets/img/bg/instructor_bg.jpg)`}}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section__title text-center mb-40">
                     <span className="sub-title">Testimonials</span>
                     <h2 className="title">What Our Students Say</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-xl-8">
                  <Swiper
                     modules={[Thumbs, Navigation]}
                     spaceBetween={0}
                     thumbs={{ swiper: thumbsSwiper }}
                     className="instructor-active"
                  >
                     {testimonial_data.filter((items) => items.page === "home_2").map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="instructor__item-three">
                              <div className="instructor__thumb-three">
                                 <Image src={item.avatar} alt="img" />
                                 <div className="shape-one">
                                    <InjectableSvg src="/assets/img/instructor/h2_instructor_img_shape01.svg" alt="img" className="injectable" />
                                 </div>
                              </div>
                              <div className="instructor__content-three">
                                 <div className="ratting-wrap">
                                    <div className="ratting">
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                       <i className="fas fa-star"></i>
                                    </div>
                                    <span>{item.rating}</span>
                                 </div>
                                 <h2 className="title">{item.title}</h2>
                                 <span className="designation">{item.designation}</span>
                                 <p>{item.desc}</p>
                                 <div className="instructor__social">
                                    <ul className="list-wrap">
                                       <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                                       <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                 </div>
                                 <div className="tg-button-wrap">
                                    <Link href="/instructor-details" className="btn arrow-btn">Join My Class <BtnArrow /></Link>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-xl-9">
                  <div className="instructor-slider-dot">
                     <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={0}
                        slidesPerView={6}
                        navigation={{
                           nextEl: ".instructor-button-next",
                           prevEl: ".instructor-button-prev",
                        }}
                        modules={[Navigation]}
                        className="instructor-nav"
                     >
                        {instructor_nav_data.map((nav, i) => (
                           <SwiperSlide key={i}>
                              <button><Image src={nav} alt="img" /></button>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                     <div className="instructor__nav-two">
                        <div className="instructor-button-prev"><i className="flaticon-arrow-right"></i></div>
                        <div className="instructor-button-next"><i className="flaticon-arrow-right"></i></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="instructor__shape">
            <Image src={shape_1} alt="img" className="alltuchtopdown" />
         </div>
      </section>
   );
};

export default Instructor;
