import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import clsx from 'clsx'

import TitleSec from '../title'

import ProjectItem from './project-item'

import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from './project.module.scss'

const ProjectGroup = ({ data }) => {
  return (
    <section className={styles.projects}>
      <TitleSec
        text={'Наши проекты'}
        subTitle='Здесь вы найдете полный список наших проектов'
      />
      <div className={styles.projects_cards}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={50}
          slidesPerView={3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            1400: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            750: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1.1,
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
      </div>
    </section>
  )
}

export default ProjectGroup
