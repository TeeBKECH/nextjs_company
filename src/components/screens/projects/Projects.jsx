import Image from 'next/image'
import Link from 'next/link'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'
import FormComponent from '@/components/ui/form'

import styles from './Projects.module.scss'

const Projects = ({ data }) => {
  return (
    <Layout title={'Наши проекты'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Наши проекты'}
      />
      <section className={styles.projects}>
        <TitleSec
          text={'Наши проекты'}
          subTitle='Здесь вы найдете полный список наших проектов'
        />
        <div className={styles.cards}>
          {data.map((card) => {
            return (
              <div
                key={card.slug}
                className={styles.card}
              >
                <div className={styles.img}>
                  <Image
                    fill={true}
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.text}>{`${card.projectType} ${card.projectName}`}</h4>
                  <Link href={`/projects/${card.slug}`}>
                    <Button>Подробнее</Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.form}>
          <FormComponent
            direction='row'
            title='Получить подробную информацию'
            description='По любому из наших проектов'
            inputs={['name', 'email']}
          />
        </div>
      </section>
    </Layout>
  )
}

export default Projects
