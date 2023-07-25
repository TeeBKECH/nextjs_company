import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import Logo from '@/components/ui/logo'

import styles from './Footer.module.scss'

const Footer = ({ className }) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.footer_top}>
        <div className={clsx(styles.footer_col, styles.footer_logo)}>
          <Logo place='footer' />
          <p className={styles.text}>
            Любая информация, представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой, определяемой положением
            ст 437 ГК РФ.
          </p>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_menu)}>
          <h3>Меню</h3>
          <ul>
            <li>
              <Link href='/about'>О нас</Link>
            </li>
            <li>
              <Link href='/services'>Услуги</Link>
            </li>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/contacts'>Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_menu)}>
          <h3>Наши соц. сети</h3>
          <ul>
            <li>
              <a
                href='https://vk.com/idfriendlyinn'
                target='_blank'
              >
                Вконтакте
              </a>
            </li>
            <li>
              <a
                href='https://wa.me/+79266385055'
                target='_blank'
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href='https://t.me/foxovskiy'
                target='_blank'
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_address)}>
          <h3>Адрес</h3>
          <ul>
            <li>Москва, Дегтярный переулок, дом 8, строение 2</li>
            <li>
              <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
            </li>
            <li>
              <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.footer_mobile)}>
          <Logo place='footer' />
          <div className={clsx(styles.footer_mobile_address)}>
            <h3>Адрес</h3>
            <ul>
              <li>Москва, Дегтярный переулок, дом 8, строение 2</li>
              <li>
                <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              </li>
              <li>
                <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
              </li>
            </ul>
          </div>
          <p>
            Любая информация, представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой, определяемой положением
            ст 437 ГК РФ.
          </p>
        </div>
      </div>
      {/* <div className={styles.footer_copy}>
        <p>&copy; 2017-{new Date().getFullYear()} Все права защищены | FriendlyInn Group</p>
      </div> */}
    </footer>
  )
}

export default Footer
