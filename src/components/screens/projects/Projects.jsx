import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import styles from './Projects.module.scss'

const Projects = () => {
  return (
    <Layout title={'Наши проекты'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Наши проекты'}
      />
      <section className={styles.projects}>
        <TitleSec
          text={'Наши проекты'}
          subTitle={'Узнайте больше об отелях и ресторанах'}
          position={'left'}
        />
      </section>
    </Layout>
  )
}

export default Projects
