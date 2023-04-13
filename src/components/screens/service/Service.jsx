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
          position={'left'}
        />

        <div className={styles.cards}>
          {list.map((card) => {
            return (
              <div
                key={card.text}
                className={styles.card}
              >
                <div className={styles.img}>
                  <Image
                    width={320}
                    height={320}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <div className={styles.text}>
                  <h4>{card.text}</h4>
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
