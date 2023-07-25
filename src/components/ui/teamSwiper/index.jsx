import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import clsx from 'clsx'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
})

// Import Swiper styles
import 'swiper/css'

import styles from './teamSwiper.module.scss'

const TeamSwiper = ({ teamSlides }) => {
  const teamNavPrevRef = useRef(null)
  const teamNavNextRef = useRef(null)

  return (
    <>
      <MediaQuery
        minWidth={992}
        // onChange={handleMediaQueryChange}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          watchSlidesProgress={true}
          onInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = teamNavPrevRef.current
              swiper.params.navigation.nextEl = teamNavNextRef.current
              swiper.params.navigation.disabledClass = styles.nav_disable
              swiper.navigation.init()
              swiper.navigation.update()
            }, 100)
          }}
          breakpoints={{
            991: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className={clsx(styles.mySwiper)}
        >
          {teamSlides.map((slide, index) => {
            return (
              <SwiperSlide
                className={styles.slide}
                key={index}
              >
                {slide.map((card, i) => {
                  return (
                    <div
                      className={styles.card}
                      key={i}
                    >
                      <div className={styles.card_tag}>
                        <span>{card.position}</span>
                      </div>
                      <div className={styles.card_img}>
                        <Image
                          src={card.img}
                          width={160}
                          height={160}
                          alt={card.name}
                        />
                      </div>
                      <div className={styles.card_info}>
                        <h5>{card.name}</h5>
                        <p>{card.options}</p>
                      </div>
                    </div>
                  )
                })}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </MediaQuery>
      <MediaQuery
        minWidth={320}
        maxWidth={991}
        // onChange={handleMediaQueryChange}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          watchSlidesProgress={true}
          onInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = teamNavPrevRef.current
              swiper.params.navigation.nextEl = teamNavNextRef.current
              swiper.params.navigation.disabledClass = styles.nav_disable
              swiper.navigation.init()
              swiper.navigation.update()
            }, 100)
          }}
          modules={[Navigation]}
          className={clsx(styles.mySwiper)}
        >
          {teamSlides.map((slide) =>
            slide.map((card, i) => (
              <SwiperSlide
                className={styles.slide}
                key={i}
              >
                <div className={styles.card}>
                  <div className={styles.card_tag}>
                    <span>{card.position}</span>
                  </div>
                  <div className={styles.card_img}>
                    <Image
                      src={card.img}
                      width={160}
                      height={160}
                      alt={card.name}
                    />
                  </div>
                  <div className={styles.card_info}>
                    <h5>{card.name}</h5>
                    <p>{card.options}</p>
                  </div>
                </div>
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </MediaQuery>
      <div
        ref={teamNavPrevRef}
        className={clsx(styles.nav, styles.nav_prev)}
      >
        {'<'}
      </div>
      <div
        ref={teamNavNextRef}
        className={clsx(styles.nav, styles.nav_next)}
      >
        {'>'}
      </div>
    </>
  )
}

export default TeamSwiper
