import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Breadcrumbs from '@/components/ui/breadcrumbs'

import starIcon from '@/assets/img/star.svg'

import styles from './Project.module.scss'

const Project = ({ data }) => {
  console.log(data)
  // const { list } = data

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
                height={70}
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
        <TitleSec
          text={'До/После'}
          subTitle='Сравните представление дизайнера с конечным результатом'
          position={'left'}
        />
        {/* <div className={styles.cards}>
          {list.map((card) => {
            const { text, img, icon } = card
            return (
              <div
                key={text}
                className={styles.card}
              >
                {img && (
                  <div className={styles.img}>
                    <Image
                      width={320}
                      height={280}
                      src={img}
                      alt={text}
                      placeholder='blur'
                    />
                  </div>
                )}
                {icon && (
                  <div className={styles.icon}>
                    <Image
                      width={120}
                      height={120}
                      src={icon}
                      alt={text}
                    />
                  </div>
                )}
                <div className={styles.text}>
                  <h4>{text}</h4>
                </div>
              </div>
            )
          })}
        </div> */}
      </section>
    </Layout>
  )
}

export default Project
