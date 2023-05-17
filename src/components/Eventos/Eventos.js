import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./eventos.module.css";

// import required modules
import { Scrollbar, Autoplay } from "swiper";

export const Eventos = () => {
  return (
    <>
      <div className={styles.eventos__fondo}>
        <div className="container-fluid">
          <div className="container-fluid text-center ">
            <div className="container-fluid">
              <h2 className={styles.eventos__cartel}>
              Promciones
              </h2>
            </div>
          </div>
          <div className="row justify-content-center ">
            <hr className={styles.eventos__linea} size="20" />
          </div>
          <div className="row">
            <Swiper
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
              }}
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar, Autoplay]}
              className="mySwiper"
            >
              <div className="container mt-5 ">
                <SwiperSlide>
                  <div className={styles.eventos__slider}>
                    <div class="container-fuil">
                      <div class="row g-0">
                        <div class="col">
                          <div class="p-3 ">
                            <img src="https://cdn.discordapp.com/attachments/884663926648881183/1099929055182196807/img1.jpg" />
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3 ">
                            <div className="col b g-0">
                              <h2>Show Infantil: Mario Bross!</h2>
                            </div>
                            <div className="c g-0  ">
                              <p>
                                Ven y disfruta con tu famila Tener alguna
                                condición buena, física o moral, o gozar de
                                comodidad, regalo o conveniencia.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.eventos__slider}>
                    <div class="container-fuil">
                      <div class="row g-0">
                        <div class="col">
                          <div class="p-3 ">
                            <img src="https://cdn.discordapp.com/attachments/884663926648881183/1100202069748633651/343041625_249394320804153_3977175351963866624_n.png" />
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3 ">
                            <div className="col b g-0">
                              <h2>Show Infantil: Mario Bross!</h2>
                            </div>
                            <div className="c g-0  ">
                              <p>
                                Ven y disfruta con tu famila Tener alguna
                                condición buena, física o moral, o gozar de
                                comodidad, regalo o conveniencia.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.eventos__slider}>
                    <div class="container-fuil">
                      <div class="row g-0">
                        <div class="col">
                          <div class="p-3 ">
                            <img src="https://cdn.discordapp.com/attachments/884663926648881183/1100577841055277066/342998240_3051517248488928_9090229113209465350_n.png" />
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3 ">
                            <div className="col b g-0">
                              <h2>Show Infantil: Mario Bross!</h2>
                            </div>
                            <div className="c g-0  ">
                              <p>
                                Ven y disfruta con tu famila Tener alguna
                                condición buena, física o moral, o gozar de
                                comodidad, regalo o conveniencia.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
