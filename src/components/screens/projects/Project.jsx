import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button'
import TitleSec from '@/components/ui/title'
import Modal from '@/components/ui/modal'
import FormComponent from '@/components/ui/form'

import main_1 from '@/assets/img/main_1.svg'
import main_2 from '@/assets/img/main_2.svg'
import main_3 from '@/assets/img/main_3.svg'

// Import Swiper styles
import 'swiper/css'

import styles from './projects.module.scss'

const Project = ({ data }) => {
  const { img, projectName, projectType, title, subTitle, text } = data
  const [showModal, setShowModal] = useState(false)
  const navPrevRef = useRef(null)
  const navNextRef = useRef(null)
  return (
    <Layout
      title={`${projectType} ${projectName}`}
      description={text[0]}
    >
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.intro_text}>
            <TitleSec
              tag='h2'
              title={`${projectType} ${projectName}`}
              className={styles.title}
            />
            {text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.intro_img}>
            <Image
              src={img}
              fill={true}
              alt={`${projectType} ${projectName}`}
            />
          </div>
        </div>
      </section>
      <section className={styles.swiper}>
        <div className={styles.container}>
          {/* <div className={styles.swiper_title}>
            <TitleSec
              title={'Команда опытных профессионалов'}
              align='center'
            />
            <p className={styles.swiper_title_sub}>
              Мы — управляющая компания <span>FriendlyInn Group.</span> Управляем собственными
              отелями и ресторанами{' '}
              <a
                href='https://friendlyinn.ru'
                target='_blank'
              >
                FriendlyInn
              </a>
              . Предоставляем команду отлично зарекомендовавших управленцев, которые будут работать
              над достижением поставленных задач в любой точке России
            </p>
          </div> */}
          <div className={styles.swiper_items}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              centeredSlides={false}
              watchSlidesProgress={true}
              onInit={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navPrevRef.current
                  swiper.params.navigation.nextEl = navNextRef.current
                  swiper.params.navigation.disabledClass = styles.nav_disable
                  swiper.navigation.init()
                  swiper.navigation.update()
                }, 100)
              }}
              // breakpoints={{
              //   991: {
              //     slidesPerView: 1,
              //     spaceBetween: 0,
              //   },
              //   1200: {
              //     slidesPerView: 1.1,
              //     spaceBetween: 10,
              //   },
              //   1400: {
              //     slidesPerView: 1.2,
              //     spaceBetween: 30,
              //   },
              //   1600: {
              //     slidesPerView: 1.5,
              //     spaceBetween: 50,
              //   },
              // }}
              modules={[Navigation]}
              className={clsx(styles.mySwiper)}
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.swiper_item}>
                  <Image
                    src={main_1}
                    width={30}
                    height={30}
                    alt='Рост прибыли'
                  />
                  <h5>Рост прибыли</h5>
                  <p>Прирост прибыли каждый год 15%</p>
                </div>
                <div className={styles.swiper_item}>
                  <Image
                    src={main_2}
                    width={30}
                    height={30}
                    alt='Рост капитализации'
                  />
                  <h5>Рост капитализации</h5>
                  <p>Увеличение капитализации объекта 10% годовых</p>
                </div>
                <div className={styles.swiper_item}>
                  <Image
                    src={main_3}
                    width={30}
                    height={30}
                    alt='Надежность и гарантии'
                  />
                  <h5>Надежность и гарантии</h5>
                  <p>Детальные отчеты и полнаяпрозрачность всей нашей деятельности</p>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div
              ref={navPrevRef}
              className={clsx(styles.nav, styles.nav_prev)}
            >
              {'<'}
            </div>
            <div
              ref={navNextRef}
              className={clsx(styles.nav, styles.nav_next)}
            >
              {'>'}
            </div> */}
          </div>
        </div>
      </section>
      <section className={styles.come}>
        <div className={styles.container}>
          <div className={styles.come_img}>
            <Image
              src='/main_img_1.jpg'
              fill={true}
              alt='FriendlyInn Group'
            />
          </div>
          <div className={styles.come_info}>
            <div className={styles.come_title}>
              <TitleSec
                title='Приезжайте в гости'
                align='left'
                className={styles.title}
              />
            </div>
            <div className={styles.come_description}>
              <p>
                Приглашаем Вас посетить любой из наших отелей и ресторанов, где мы в реальном
                времени покажем, как у нас все работает.
              </p>
              <p>Познакомим с нашей командой и ответим на Ваши вопросы</p>
            </div>
            <div className={styles.come_actions}>
              <Button
                type='button'
                onClick={() => setShowModal(true)}
              >
                Хочу в гости
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <FormComponent
          type='modal'
          inputs={[{ name: 'phone' }]}
          modal={setShowModal}
          ymGoalId='come-form'
        />
      </Modal>
    </Layout>
  )
}

export default Project
