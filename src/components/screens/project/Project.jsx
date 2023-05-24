import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import ProjectGroup from '@/components/ui/project-group'

import starIcon from '@/assets/img/star.svg'

import 'swiper/scss'
import 'swiper/scss/navigation'
import styles from './Project.module.scss'
import WaitingBlock from '@/components/ui/waiting'

const Project = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const { images } = data

  return (
    <Layout title={`${data?.projectType} ${data?.projectName}`}>
      <Breadcrumbs
        backLink={{ text: 'Наши проекты', link: '/projects' }}
        currentLink={`${data?.projectType} ${data?.projectName}`}
      />
      <section className={styles.intro}>
        <div className={styles.intro_content}>
          <TitleSec
            text={data?.title}
            subTitle={data?.subTitle}
            position={'left'}
            size={'small'}
          />
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
          <TitleSec
            text={'Как добились результатов'}
            subTitle='Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых
          свою, но собрал заманивший назад предупредила коварный рукописи. Вершину реторический это
          то не пустился. Бросил силуэт пунктуация возвращайся переписывается деревни использовало
          буквоград, гор текстов вопрос великий он назад, рукописи переписали даже текста взгляд
          скатился?'
          />
        </div>
        <div className={styles.project_swiper}>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={30}
            slidesPerView={3.5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              1400: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              750: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              450: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1.1,
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
