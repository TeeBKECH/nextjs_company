import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <Layout title={'404 | Страница не найдена!'}>
      <section className={styles.not_found}>
        <TitleSec
          text={'404'}
          subTitle={'Страница не найдена!'}
        />
      </section>
    </Layout>
  )
}

export default NotFound
