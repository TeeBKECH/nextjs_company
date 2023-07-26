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

// Import Swiper styles
import 'swiper/css'

import styles from './clients.module.scss'

const Client = ({ data }) => {
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
          <div className={styles.swiper_title}>
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
          </div>
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
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='document'>
                      <polyline
                        className={styles.cls_1}
                        points='25 9 25 29 7 29 7 3 16 3'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='25'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='16'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='25'
                        x2='16'
                        y1='9'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='16'
                        y1='17'
                        y2='17'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='20'
                        y1='21'
                        y2='21'
                      />
                    </g>
                  </svg>
                  <h5>Рост прибыли</h5>
                  <p>Прирост прибыли каждый год 15%</p>
                </div>
                <div className={styles.swiper_item}>
                  <svg
                    version='1.1'
                    id='Capa_1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 334.877 334.877'
                  >
                    <g>
                      <path
                        d='M333.196,155.999h-16.067V82.09c0-17.719-14.415-32.134-32.134-32.134h-21.761L240.965,9.917
C237.571,3.798,231.112,0,224.107,0c-3.265,0-6.504,0.842-9.364,2.429l-85.464,47.526H33.815
c-17.719,0-32.134,14.415-32.134,32.134v220.653c0,17.719,14.415,32.134,32.134,32.134h251.18
c17.719,0,32.134-14.415,32.134-32.134v-64.802h16.067V155.999z M284.995,62.809c9.897,0,17.982,7.519,19.068,17.14h-24.152
l-9.525-17.14H284.995z M220.996,13.663c3.014-1.69,7.07-0.508,8.734,2.494l35.476,63.786H101.798L220.996,13.663z
  M304.275,302.742c0,10.63-8.651,19.281-19.281,19.281H33.815c-10.63,0-19.281-8.651-19.281-19.281V82.09
c0-10.63,8.651-19.281,19.281-19.281h72.353L75.345,79.95H37.832c-3.554,0-6.427,2.879-6.427,6.427s2.873,6.427,6.427,6.427h14.396
h234.83h17.217v63.201h-46.999c-21.826,0-39.589,17.764-39.589,39.589v2.764c0,21.826,17.764,39.589,39.589,39.589h46.999V302.742z
  M320.342,225.087h-3.213h-59.853c-14.743,0-26.736-11.992-26.736-26.736v-2.764c0-14.743,11.992-26.736,26.736-26.736h59.853
h3.213V225.087z M276.961,197.497c0,7.841-6.35,14.19-14.19,14.19c-7.841,0-14.19-6.35-14.19-14.19s6.35-14.19,14.19-14.19
C270.612,183.306,276.961,189.662,276.961,197.497z'
                      />
                    </g>
                  </svg>
                  <h5>Рост капитализации</h5>
                  <p>Увеличение капитализации объекта 10% годовых</p>
                </div>
                <div className={styles.swiper_item}>
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='document'>
                      <polyline
                        className={styles.cls_1}
                        points='25 9 25 29 7 29 7 3 16 3'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='25'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='16'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='25'
                        x2='16'
                        y1='9'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='16'
                        y1='17'
                        y2='17'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='20'
                        y1='21'
                        y2='21'
                      />
                    </g>
                  </svg>
                  <h5>Надежность и гарантии</h5>
                  <p>Детальные отчеты и полнаяпрозрачность всей нашей деятельности</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.swiper_item}>
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='document'>
                      <polyline
                        className={styles.cls_1}
                        points='25 9 25 29 7 29 7 3 16 3'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='25'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='16'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='25'
                        x2='16'
                        y1='9'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='16'
                        y1='17'
                        y2='17'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='20'
                        y1='21'
                        y2='21'
                      />
                    </g>
                  </svg>
                  <h5>Рост прибыли</h5>
                  <p>Прирост прибыли каждый год 15%</p>
                </div>
                <div className={styles.swiper_item}>
                  <svg
                    version='1.1'
                    id='Capa_1'
                    x='0px'
                    y='0px'
                    viewBox='0 0 334.877 334.877'
                  >
                    <g>
                      <path
                        d='M333.196,155.999h-16.067V82.09c0-17.719-14.415-32.134-32.134-32.134h-21.761L240.965,9.917
C237.571,3.798,231.112,0,224.107,0c-3.265,0-6.504,0.842-9.364,2.429l-85.464,47.526H33.815
c-17.719,0-32.134,14.415-32.134,32.134v220.653c0,17.719,14.415,32.134,32.134,32.134h251.18
c17.719,0,32.134-14.415,32.134-32.134v-64.802h16.067V155.999z M284.995,62.809c9.897,0,17.982,7.519,19.068,17.14h-24.152
l-9.525-17.14H284.995z M220.996,13.663c3.014-1.69,7.07-0.508,8.734,2.494l35.476,63.786H101.798L220.996,13.663z
  M304.275,302.742c0,10.63-8.651,19.281-19.281,19.281H33.815c-10.63,0-19.281-8.651-19.281-19.281V82.09
c0-10.63,8.651-19.281,19.281-19.281h72.353L75.345,79.95H37.832c-3.554,0-6.427,2.879-6.427,6.427s2.873,6.427,6.427,6.427h14.396
h234.83h17.217v63.201h-46.999c-21.826,0-39.589,17.764-39.589,39.589v2.764c0,21.826,17.764,39.589,39.589,39.589h46.999V302.742z
  M320.342,225.087h-3.213h-59.853c-14.743,0-26.736-11.992-26.736-26.736v-2.764c0-14.743,11.992-26.736,26.736-26.736h59.853
h3.213V225.087z M276.961,197.497c0,7.841-6.35,14.19-14.19,14.19c-7.841,0-14.19-6.35-14.19-14.19s6.35-14.19,14.19-14.19
C270.612,183.306,276.961,189.662,276.961,197.497z'
                      />
                    </g>
                  </svg>
                  <h5>Рост капитализации</h5>
                  <p>Увеличение капитализации объекта 10% годовых</p>
                </div>
                <div className={styles.swiper_item}>
                  <svg
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='document'>
                      <polyline
                        className={styles.cls_1}
                        points='25 9 25 29 7 29 7 3 16 3'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='25'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='16'
                        x2='16'
                        y1='3'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='25'
                        x2='16'
                        y1='9'
                        y2='9'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='16'
                        y1='17'
                        y2='17'
                      />
                      <line
                        className={styles.cls_1}
                        x1='11'
                        x2='20'
                        y1='21'
                        y2='21'
                      />
                    </g>
                  </svg>
                  <h5>Надежность и гарантии</h5>
                  <p>Детальные отчеты и полнаяпрозрачность всей нашей деятельности</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
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
            </div>
          </div>
        </div>
      </section>
      <section className={styles.come}>
        <div className={styles.container}>
          <div className={styles.come_img}>
            <Image
              src='/main_img.jpg'
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
                Приглашаем вас посетить любой из наших отелей и ресторанов, где мы в реальном
                времени покажем, как у нас все работает.
              </p>
              <p>Познакомим с нашей командой и ответим на ваши вопросы</p>
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
        />
      </Modal>
    </Layout>
  )
}

export default Client
