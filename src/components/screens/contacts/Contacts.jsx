import Link from 'next/link'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'

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
            <form
              className={styles.form}
              action=''
            >
              <div className={styles.form_title}>
                <h3>Отправьте свои данные</h3>
                <p>
                  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Наш там букв пор предложения, по всей решила злых дал?
                </p>
              </div>
              <div className={styles.form_control}>
                <input
                  type='text'
                  placeholder='Имя*'
                />
                <span></span>
              </div>
              <div className={styles.form_control}>
                <input
                  type='text'
                  placeholder='Телефон*'
                />
                <span></span>
              </div>
              <div className={styles.form_control}>
                <input
                  type='text'
                  placeholder='Почта*'
                />
                <span></span>
              </div>
              <div className={styles.form_control}>
                <textarea placeholder='Оставьте сообщение...'></textarea>
                <span></span>
              </div>
              <div className={clsx(styles.form_control, styles.form_control_submit)}>
                <Button type={'submit'}>Отправить</Button>
                <p>
                  Нажимая <span>Отправить</span> Вы соглашаетесь с <br />
                  <Link href='#'>правилами обработки персональных данных</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacts
