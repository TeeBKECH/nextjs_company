import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <Layout title={'404 | Страница не найдена!'}>
      <section className={styles.not_found}>
        <TitleSec
          tag='h1'
          title={'Ой...'}
          subTitle={'404 ошибка'}
          align='center'
        />
        <p className={styles.text}>
          Неправильно набран адрес или такой страницы на сайте больше не существует.
          <b> Вернитесь на главную страницу</b>
        </p>
        <Button link='/'>На главную</Button>
        <p className={styles.text_404}>404</p>
      </section>
    </Layout>
  )
}

export default NotFound
