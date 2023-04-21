import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_col}>
          <Link href={'/'}>
            <Image
              src='/logo.svg'
              alt='FriendlyInn Group'
              width={120}
              height={110}
              priority={true}
            />
          </Link>
          <div className={styles.footer_about}>
            <p>
              Любая информация, представленная на данном сайте, носит исключительно информационный
              характер и ни при каких условиях не является публичной офертой, определяемой
              положением ст 437 ГК РФ.
            </p>
          </div>
        </div>
        <div className={styles.footer_col}>
          <div className={styles.footer_links}>
            <h2>Меню</h2>
            <ul className={styles.footer_links_list}>
              <li>
                <Link href='/about'>&#187; О нас</Link>
              </li>
              <li>
                <Link href='/services'>&#187; Услуги</Link>
              </li>
              <li>
                <Link href='/faq'>&#187; FAQ</Link>
              </li>
              <li>
                <Link href='/contacts'>&#187; Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_col}>
          <div className={styles.footer_social}>
            <h2>Наши соц. сети</h2>
            <ul className={styles.footer_social_list}>
              <li>
                <Link href='#'>Вконтакте</Link>
              </li>
              <li>
                <Link href='#'>WhatsApp</Link>
              </li>
              <li>
                <Link href='#'>Telegram</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_col}>
          <div className={styles.footer_address}>
            <h2>Адрес</h2>
            <ul className={styles.footer_address_links}>
              <li>Москва, Дегтярный переулок, дом 8, строение 2</li>
              <li>
                <a href='tel:+79581119055'>+7 (958) 111-90-55</a>
              </li>
              <li>
                <a href='mailto:hotel@friendlyinn.ru'>hotel@friendlyinn.ru</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_copy}>
        <p>&copy; 2017-{new Date().getFullYear()} Все права защищены | FriendlyInn Group</p>
      </div>
    </footer>
  )
}

export default Footer
