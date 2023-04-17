import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import styles from './Privacy.module.scss'

const Privacy = () => {
  return (
    <Layout title={'Политика конфиденциальности и правила обработки персональных данных'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Политика конфиденциальности'}
      />
      <section className={styles.privacy}>
        <TitleSec
          text={'Политика конфиденциальности'}
          subTitle={'и правила обработки персональных данных'}
          position={'left'}
        />
        <div className={styles.content}></div>
      </section>
    </Layout>
  )
}

export default Privacy
