import { useState } from 'react'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import FormComponent from '@/components/ui/form'
import Socials from '@/components/ui/socials'

import styles from './Contacts.module.scss'

const Contacts = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Layout
      title={'Контакты'}
      description={
        'Связаться с нами можете по телефону +7... Или оставьте заяввку и мы вам перезвоним!'
      }
    >
      <section className={styles.contacts}>
        <div className={styles.content}>
          <div className={styles.info}>
            <TitleSec
              tag='h1'
              title={'Контакты'}
              className={styles.title}
            />
            <ul>
              <li>
                <p>Москва, Дегтярный переулок, дом 8, строение 2</p>
              </li>
              <li>
                <a href='tel:+74992869554'>+7 (499) 286-95-54</a>
              </li>
              <li>
                <a href='tel:+79266385055'>+7 (926) 638-50-55</a>
              </li>
              <li>
                <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
              </li>
              <li>
                <p>Режим работы: Пн-Пт с 09-18, Сб-Вск выходные</p>
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
            {/* <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              <FormComponent
                direction='col'
                title='Введите свои данные'
                inputs={['name', 'phone']}
                modal={setShowModal}
              />
            </Modal> */}
          </div>
          <div className={styles.map}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A61d9dbb06680d9cbc2c37c0c25b04f7a9654588b4876f75e000131605cc8c120&amp;source=constructor'
              frameBorder='0'
            ></iframe>
          </div>
        </div>
        <div className={styles.form}>
          <FormComponent
            title='Форма обратной связи'
            type='callBack'
            inputs={[{ name: 'name' }, { name: 'email' }, { name: 'message' }, { name: 'file' }]}
            ymGoalId='callback-form'
          />
        </div>
      </section>
    </Layout>
  )
}

export default Contacts
