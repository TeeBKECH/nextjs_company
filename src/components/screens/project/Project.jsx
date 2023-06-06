import { useCallback, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import ProjectGroup from '@/components/ui/project-group'

import starIcon from '@/assets/img/star.svg'

import chevrone from '@/assets/img/chevrone.png'
import chevrone2 from '@/assets/img/chevrone2.png'

import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from './Project.module.scss'
import WaitingBlock from '@/components/ui/waiting'

const Project = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const sliderRef = useRef(null)

  const { images } = data

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <Layout
      title={`${data?.projectType} ${data?.projectName}`}
      description={data?.subTitle}
    >
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/#projects' }}
        currentLink={`${data?.projectType} ${data?.projectName}`}
      />
      <section className={styles.intro}>
        <div className={styles.intro_content}>
          <TitleSec
            title={data?.projectName}
            subTitle={data?.projectType}
            size={'small'}
          />
          {data?.text.map((p, i) => {
            return <p key={i}>{p}</p>
          })}
        </div>
        <div className={styles.intro_img}>
          <Image
            fill={true}
            alt={data?.title}
            src={data?.img}
          />
          <div className={styles.intro_title}>
            <div className={styles.logo}>
              <Image
                src={data.logo}
                width={80}
                height={80}
                alt={data.projectName}
              />
            </div>
            <h5>{data?.projectName}</h5>
            <p>{data?.projectType}</p>

            <div className={styles.intro_stars}>
              {data.stars &&
                [...new Array(data.stars)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 426.67 405.79'
                  >
                    <g
                      id='Слой_2'
                      data-name='Слой 2'
                    >
                      <path
                        d='M213.33 0l65.92 133.58L426.67 155 320 258.97l25.17 146.82-131.84-69.32-131.85 69.32 25.19-146.82L0 155l147.41-21.42L213.33 0z'
                        id='Layer_1'
                        data-name='Layer 1'
                      />
                    </g>
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.project}>
        <div className={styles.project_title}>
          <TitleSec text={'Галерея проекта'} />
        </div>
        <div className={styles.project_swiper}>
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
            breakpoints={{
              1400: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className={styles.project_swiper_img}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill={true}
                  />
                  <p>{img.alt}</p>
                </div>
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
      <WaitingBlock
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </Layout>
  )
}

export default Project
