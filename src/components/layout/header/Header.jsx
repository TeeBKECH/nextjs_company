import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import Logo from '@/components/ui/logo'
import Modal from '@/components/ui/modal'
import FormComponent from '@/components/ui/form'

import links from './header.data'
import styles from './Header.module.scss'

const MenuLink = ({ data, setToggleMenu }) => {
  const router = useRouter()
  if (data.target) {
    return (
      <a
        href={data.slug}
        target={data.target}
        className={clsx(styles.link, styles.link_target)}
      >
        {data.title}
        <svg
          width='11'
          height='11'
          viewBox='0 0 11 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 5.73333V8.93333C9 9.21623 8.88762 9.48754 8.68758 9.68758C8.48754 9.88762 8.21623 10 7.93333 10H2.06667C1.78377 10 1.51246 9.88762 1.31242 9.68758C1.11238 9.48754 1 9.21623 1 8.93333V3.06667C1 2.78377 1.11238 2.51246 1.31242 2.31242C1.51246 2.11238 1.78377 2 2.06667 2H5.26667'
            stroke='#C3A962'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7 1H10V4'
            stroke='#C3A962'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5 6L10 1'
            stroke='#C3A962'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    )
  }
  if (router.pathname === '/' && data.slug[0] === '#') {
    return (
      <a
        onClick={() => setToggleMenu(false)}
        href={data.slug}
      >
        {data.title}
      </a>
    )
  }
  return (
    <Link
      href={`/${data.slug}`}
      onClick={() => setToggleMenu(false)}
      className={clsx(styles.link)}
    >
      {data.title}
    </Link>
  )
}

const Header = ({ headerRef, sticky, className }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const router = useRouter()

  const homeLink = router.pathname !== '/'

  const burgerHandler = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <header
      ref={headerRef}
      className={clsx(
        styles.header,
        sticky && styles.sticky,
        router.pathname !== '/' && styles.not_home,
        className,
      )}
    >
      <Logo className={styles.logo} />
      <nav className={clsx(styles.menu, toggleMenu && styles.menu_active)}>
        {/* {homeLink && (
          <Link
            href='/'
            className={clsx(styles.link)}
          >
            Главная
          </Link>
        )} */}
        {links.map((el, i) => (
          <MenuLink
            key={i}
            data={el}
            setToggleMenu={setToggleMenu}
          />
        ))}
      </nav>
      <div className={styles.phone}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.6667 12C22.3111 12 21.9942 11.872 21.716 11.616C21.4378 11.36 21.2773 11.0436 21.2347 10.6667C20.9458 8.6 20.0733 6.83867 18.6173 5.38267C17.1613 3.92667 15.4 3.05467 13.3333 2.76667C12.9556 2.72222 12.6387 2.56667 12.3827 2.3C12.1267 2.03333 11.9991 1.71111 12 1.33333C12 0.955556 12.1333 0.638667 12.4 0.382667C12.6667 0.126667 12.9778 0.0213333 13.3333 0.0666666C16.1333 0.377778 18.5222 1.52222 20.5 3.5C22.4778 5.47778 23.6222 7.86667 23.9333 10.6667C23.9778 11.0222 23.872 11.3333 23.616 11.6C23.36 11.8667 23.0436 12 22.6667 12ZM17.1 12C16.8111 12 16.5556 11.9 16.3333 11.7C16.1111 11.5 15.9444 11.2333 15.8333 10.9C15.6556 10.2556 15.3164 9.68311 14.816 9.18267C14.3156 8.68222 13.7436 8.34356 13.1 8.16667C12.7667 8.05556 12.5 7.88889 12.3 7.66667C12.1 7.44444 12 7.17778 12 6.86667C12 6.42222 12.1556 6.06089 12.4667 5.78267C12.7778 5.50444 13.1222 5.41022 13.5 5.5C14.7444 5.78889 15.8169 6.38356 16.7173 7.284C17.6178 8.18444 18.212 9.25644 18.5 10.5C18.5889 10.8778 18.4889 11.2222 18.2 11.5333C17.9111 11.8444 17.5444 12 17.1 12ZM22.6 24C19.7333 24 16.9387 23.3609 14.216 22.0827C11.4933 20.8044 9.08222 19.1156 6.98267 17.016C4.88311 14.9164 3.19422 12.5053 1.916 9.78267C0.637778 7.06 -0.000887962 4.26578 9.2657e-07 1.4C9.2657e-07 1 0.133334 0.666667 0.400001 0.4C0.666668 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.0999999 7.63333 0.3C7.87778 0.5 8.02222 0.755556 8.06667 1.06667L8.93333 5.73333C8.97778 6.04444 8.972 6.328 8.916 6.584C8.86 6.84 8.73244 7.06756 8.53333 7.26667L5.33333 10.5333C6.26667 12.1333 7.43333 13.6333 8.83333 15.0333C10.2333 16.4333 11.7778 17.6444 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0613 15.1836 17.384 15.084C17.7067 14.9844 18.0231 14.9564 18.3333 15L22.9333 15.9333C23.2444 16 23.5 16.1502 23.7 16.384C23.9 16.6178 24 16.8898 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z'
            fill='#A0A0A0'
          />
        </svg>
        <div className={styles.phone_actions}>
          <a
            className={styles.callPhone}
            href='tel:+79581119055'
          >
            +7 (958) 111-90-55
          </a>
          <a
            className={styles.callBack}
            onClick={() => setShowModal(true)}
          >
            Заказать звонок
          </a>
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
      </div>
      <div
        onClick={burgerHandler}
        className={clsx(styles.burger, toggleMenu && styles.burger_active)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </header>
  )
}

export default Header
