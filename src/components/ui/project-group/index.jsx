import React, { useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'
import clsx from 'clsx'

import TitleSec from '../title'
import Button from '../button'

import ProjectItem from './project-item'

import chevrone from '@/assets/img/chevrone.png'
import chevrone2 from '@/assets/img/chevrone2.png'

import 'swiper/scss'
import styles from './project.module.scss'

const ProjectGroup = ({ data }) => {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <section
      id='projects'
      className={styles.projects}
    >
      <TitleSec
        title={'Наши'}
        subTitle='проекты'
      />
      <div className={styles.projects_cards}>
        <Swiper
          ref={sliderRef}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.swiper}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1100: {
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              spaceBetween: 10,
            },
          }}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <ProjectItem card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={handlePrev}
          className={clsx(styles.nav, styles.nav_prev)}
        >
          <Image
            width={26}
            height={26}
            src={chevrone}
            alt='chevrone'
          />
        </div>
        <div
          onClick={handleNext}
          className={clsx(styles.nav, styles.nav_next)}
        >
          <Image
            width={26}
            height={26}
            src={chevrone2}
            alt='chevrone'
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectGroup
