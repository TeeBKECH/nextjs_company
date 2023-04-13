import Image from 'next/image'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import teamImg1 from '@/assets/img/jpg/team1.jpg'
import teamImg2 from '@/assets/img/jpg/team2.jpg'
import teamImg3 from '@/assets/img/jpg/team3.jpg'

import styles from './Team.module.scss'

const Team = () => {
  return (
    <Layout title={'Наша Команда'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Наша Команда'}
      />
      <section className={styles.team}>
        <TitleSec
          text={'Наша Команда'}
          subTitle={'Специалисты своего дела'}
          position={'left'}
        />
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image
                width={340}
                height={420}
                src={teamImg2}
                alt={'Сотрудник 1'}
              />
            </div>
            <div className={styles.card_body}>
              <h4>Алексей Алексеев</h4>
              <p>Директор</p>
            </div>
            <div className={styles.card_links}>
              <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image
                width={320}
                height={450}
                src={teamImg2}
                alt={'Сотрудник 1'}
              />
            </div>
            <div className={styles.card_body}>
              <h4>Алексей Алексеев</h4>
              <p>Директор</p>
            </div>
            <div className={styles.card_links}>
              <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image
                width={320}
                height={450}
                src={teamImg2}
                alt={'Сотрудник 1'}
              />
            </div>
            <div className={styles.card_body}>
              <h4>Алексей Алексеев</h4>
              <p>Директор</p>
            </div>
            <div className={styles.card_links}>
              <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Team
