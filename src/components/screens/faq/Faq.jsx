import Layout from '@/components/layout/Layout'
import Accordion from '@/components/ui/accordion'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import styles from './Faq.module.scss'

const Faq = () => {
  return (
    <Layout title={'FAQ'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'FAQ'}
      />
      <section className={styles.faq}>
        <TitleSec
          text={'FAQ'}
          subTitle={'Частые вопросы'}
          position={'left'}
        />
        <Accordion />
      </section>
    </Layout>
  )
}

export default Faq
