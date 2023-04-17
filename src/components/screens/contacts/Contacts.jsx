import Link from 'next/link'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import FormComponent from '@/components/ui/form'

import styles from './Contacts.module.scss'

const Contacts = () => {
  return (
    <Layout title={'Контакты'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Контакты'}
      />
      <section className={styles.contacts}>
        <TitleSec
          text={'Контакты'}
          subTitle={'Сязаться с нами'}
          position={'left'}
        />
        <div className={styles.content}>
          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A61d9dbb06680d9cbc2c37c0c25b04f7a9654588b4876f75e000131605cc8c120&amp;source=constructor'
              width='100%'
              height='500'
              frameBorder='0'
            ></iframe>
          </div>
          <div className={styles.content_form}>
            <FormComponent />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacts
