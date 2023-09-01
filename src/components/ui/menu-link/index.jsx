import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import MenuBlock from '../menu-block'

import styles from './menu-link.module.scss'

const MenuLink = ({ data, setToggleMenu }) => {
  const [subMenu, setSubMenu] = useState(null)

  const router = useRouter()

  const isHomePage = router.pathname === '/'

  const subMenuHandler = (menu) => {
    setSubMenu((prev) => (prev === null ? menu : null))
  }

  if (data.type === 'button') {
    return (
      <div className={clsx(styles.link, styles.link_button)}>
        <span onClick={() => subMenuHandler(data.links)}>{data.title}</span>
        {subMenu && (
          <MenuBlock
            links={data.links}
            className={styles.subMenu}
            href={data.href}
            closeHandler={() => setSubMenu(null)}
          />
        )}
      </div>
    )
  }

  if (data.type === 'link') {
    return (
      <a
        target='_blank'
        href={data.href}
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

  if (data.type === 'navLink') {
    if (data.href[0] !== '#') {
      return (
        <Link
          className={clsx(styles.link)}
          onClick={() => setToggleMenu(false)}
          href={`/${data.href}`}
        >
          {data.title}
        </Link>
      )
    } else {
      return (
        <a
          className={clsx(styles.link)}
          onClick={() => setToggleMenu(false)}
          href={`${isHomePage ? '' : '/'}${data.href}`}
        >
          {data.title}
        </a>
      )
    }
  }
}

export default MenuLink
