//Cine
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Scrollbar, Autoplay } from "swiper";

// Import Swiper styles
import styles from "./cine.module.css";

// import required modules
export const Cine = () => {
  return (
    <>
      <div className="conteiner-fluid">
        <div className={styles.fondo__cine}>
          <div className={styles.box__titel}>
            <h1>Peliculas de estreno</h1>
            <div className="container ">
              <div className="row justify-content-center">
                <hr className={styles.cine__linea} />
              </div>
            </div>
          </div>
          <div className={styles.box__reco}>
            <div className="container-fluid  justify-content-center ">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                slidesPerGroup={3}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                  },

                  // when window width is >= 640px
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/961091079090888704/1048101792598212649/Un_mundo_extrano.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099684621987360848/img1.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099685034539089991/342336824_967311787604303_3166498249672412461_n.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099685280602136637/342699397_248912424326925_4191977439667212261_n.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099685325091127416/342502853_637092191582072_1351627989923625961_n.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099685815711449129/342886875_235541329063299_8245653405339150925_n.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/961091079090888704/1048101792598212649/Un_mundo_extrano.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.box__slider}>
                    <img
                      className=" mx-auto d-block"
                      src="https://cdn.discordapp.com/attachments/884663926648881183/1099685344674328666/342711146_538842011781687_5171583605730633391_n.png"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
