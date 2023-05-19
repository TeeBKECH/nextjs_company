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
        <div className={styles.img}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 478.2 478.2'
            xmlSpace='preserve'
          >
            <g>
              <path d='M153,210.4c-10.5,0-19.1-8.6-19.1-19.1s8.6-19.1,19.1-19.1s19.1,8.6,19.1,19.1S163.5,210.4,153,210.4z M239.1,306   c-66.899,0-86.1,57.4-86.1,57.4s28.7-19.101,86.1-19.101c57.4,0,86.101,19.101,86.101,19.101S306,306,239.1,306z M160.3,114.1   l-63.4,42.8l10.7,15.8l63.4-42.8L160.3,114.1z M478.2,239.1C478.2,371.1,371.1,478.2,239.1,478.2C107.1,478.2,0,371.1,0,239.1   C0,107.1,107.1,0,239.1,0C371,0,478.2,107.1,478.2,239.1z M459,239.1C459,116.7,361.5,19.2,239.1,19.2   C116.7,19.2,19.2,116.7,19.2,239.1C19.2,361.5,116.7,459,239.1,459C361.5,459,459,361.5,459,239.1z M325.1,172.2   c-10.5,0-19.1,8.6-19.1,19.1s8.6,19.1,19.1,19.1s19.101-8.6,19.101-19.1S335.6,172.2,325.1,172.2z M307.2,130l63.399,42.8   l10.7-15.8L317.9,114.2L307.2,130z' />
            </g>
          </svg>
        </div>
        <div className={styles.text}>
          <TitleSec
            text={'Ой...404 Ошибка!'}
            subTitle={
              'Неправильно набран адрес или такой страницы на сайте больше не существует. Вернитесь на главную страницу.'
            }
            position={'left'}
          />
          <Link href={'/'}>
            <Button>На главную</Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
