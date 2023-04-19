import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'

import styles from './Service.module.scss'
import Breadcrumbs from '@/components/ui/breadcrumbs'

const Service = ({ data }) => {
  const { list } = data
  return (
    <Layout title={data?.title}>
      <Breadcrumbs
        backLink={{ text: 'Услуги', link: '/services' }}
        currentLink={data?.title}
      />
      <section className={styles.service}>
        <TitleSec
          text={data?.title}
          subTitle={data?.subTitle}
        />

        <div className={styles.cards}>
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
        </div>
      </section>
    </Layout>
  )
}

export default Service
