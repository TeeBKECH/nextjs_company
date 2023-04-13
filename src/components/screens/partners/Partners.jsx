import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import styles from './Partners.module.scss'

const Partners = () => {
  return (
    <Layout title={'Партнерская программа'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Партнерская программа'}
      />
      <section className={styles.partners}>
        <TitleSec
          text={'Партнерская программа'}
          subTitle={'Сотрудничество'}
          position={'left'}
        />
      </section>
    </Layout>
  )
}

export default Partners
