import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'

import styles from './Services.module.scss'

const Services = ({ data }) => {
  return (
    <Layout title={'Наши Услуги'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Наши Услуги'}
      />
      <section className={styles.services}>
        <TitleSec
          text={'Наши Услуги'}
          subTitle='Полный перечень услуг вы можете получить оставив заявку'
          position={'left'}
        />

        <div className={styles.cards}>
          {data.map((card) => {
            return (
              <div
                key={card.id}
                className={styles.card}
              >
                <div className={styles.img}>
                  <Image
                    width={120}
                    height={120}
                    src={card.iconImg}
                    alt={card.title}
                  />
                </div>
                <p className={styles.text}>{card.title}</p>
                <Link href={`/services/${card.id}`}>
                  <Button>Подробнее</Button>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Services
