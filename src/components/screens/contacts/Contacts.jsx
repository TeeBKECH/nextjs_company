import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'
import FormComponent from '@/components/ui/form'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import Socials from '@/components/ui/socials'

import styles from './Contacts.module.scss'

const Contacts = () => {
  const [showModal, setShowModal] = useState(false)
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
          <div className={styles.content_info}>
            <p>Москва, Дегтярный переулок, дом 8, строение 2</p>
            <ul>
              <li>
                <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              </li>
              <li>
                <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
              </li>
            </ul>
            <Socials
              data={[
                {
                  text: 'vk',
                  link: 'https://vk.com/idfriendlyinn',
                },
                {
                  text: 'wa',
                  link: 'https://wa.me/+79266385055',
                },
                {
                  text: 'tg',
                  link: 'https://t.me/foxovskiy',
                },
              ]}
            />
            <Button
              type={'button'}
              className={styles.callback}
              onClick={() => setShowModal(true)}
            >
              Заказать звонок
            </Button>
            <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              <FormComponent
                direction='col'
                title='Введите свои данные'
                inputs={['name', 'phone']}
                modal={setShowModal}
              />
            </Modal>
          </div>
          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A61d9dbb06680d9cbc2c37c0c25b04f7a9654588b4876f75e000131605cc8c120&amp;source=constructor'
              width='100%'
              height='500'
              frameBorder='0'
            ></iframe>
          </div>
          <div className={styles.content_form}>
            <FormComponent inputs={['name', 'phone', 'email', 'message']} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacts
