import img1 from "../Cartillas/imges/center.svg";
import img2 from "../Cartillas/imges/map.svg";
import img3 from "../Cartillas/imges/oferta.svg";
import img4 from "../Cartillas/imges/star.svg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import styles from "./cartillas.module.css";
import classNames from "classnames";

//import { Video } from "./components/Navbar/Video";
export const Cartillas = () => {
  return (
    <>
      <div className={classNames("container-fluid  p-5", styles.fondo_cart)}>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          className={styles.my__swiper}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 5,
              slidesPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.cart__viwer}>
              <img src={img1} />
              <div className="row">
                <a>comidas</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.cart__viwer}>
              <img src={img2} />
              <div className="row">
                <a>comidas</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cart__viwer}>
              <img src={img3} />
              <div className="row">
                <a>comidas</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cart__viwer}>
              <img src={img4} />
              <div className="row">
                <a>comidas</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
