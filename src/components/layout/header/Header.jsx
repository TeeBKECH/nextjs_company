import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import links from './header.data'
import styles from './Header.module.scss'

const Header = ({ headerRef, sticky }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

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
      )}
    >
      <div className={styles.logo}>
        <div className={styles.logo_line}></div>
        <Link href={'/'}>
          <Image
            src='/logo.svg'
            alt='FriendlyInn Group'
            width={80}
            height={70}
            priority={true}
          />
        </Link>
        <div className={styles.logo_line}></div>
      </div>
      <div className={styles.bottom}>
        <div
          onClick={burgerHandler}
          className={clsx(styles.burger, toggleMenu && styles.burger_active)}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
        <nav className={clsx(styles.menu, toggleMenu && styles.menu_active)}>
          {homeLink && (
            <Link
              href={`/`}
              className={clsx(styles.link)}
            >
              Главная
            </Link>
          )}
          {links.map((el, i) => {
            if (el.target) {
              return (
                <a
                  key={i}
                  href={el.slug}
                  target={el.target}
                  className={clsx(styles.link, styles.link_target)}
                >
                  {el.title}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 24 24'
                  >
                    <g id='Outlined'>
                      <path
                        style={{
                          fill: 'none',
                          // stroke: '#000000',
                          strokeWidth: 2,
                          strokeMiterlimit: 10,
                        }}
                        d='M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7'
                      />
                      <polyline
                        style={{
                          fill: 'none',
                          // stroke: '#000000',
                          strokeWidth: 2,
                          strokeMiterlimit: 10,
                        }}
                        points='20,10 20,4 14,4 '
                      />
                      <line
                        style={{
                          fill: 'none',
                          // stroke: '#000000',
                          strokeWidth: 2,
                          strokeMiterlimit: 10,
                        }}
                        x1='20'
                        y1='4'
                        x2='9'
                        y2='15'
                      />
                    </g>
                  </svg>
                </a>
              )
            }
            if (router.pathname === '/' && el.slug[0] === '#') {
              return (
                <a
                  key={i}
                  href={el.slug}
                >
                  {el.title}
                </a>
              )
            }
            if (router.pathname !== '/' && el.slug[0] === '#') return
            return (
              <Link
                key={el.slug}
                href={`/${el.slug}`}
                className={clsx(styles.link)}
              >
                {el.title}
              </Link>
            )
          })}
        </nav>
      </div>
      <nav className={clsx(styles.menu_mobile, toggleMenu && styles.menu_mobile_active)}>
        {homeLink && (
          <Link
            href={`/`}
            className={clsx(styles.link)}
          >
            Главная
          </Link>
        )}
        {links.map((el, i) => {
          if (el.target) {
            return (
              <a
                key={i}
                href={el.slug}
                target={el.target}
                className={clsx(styles.link, styles.link_target)}
              >
                {el.title}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  viewBox='0 0 24 24'
                >
                  <g id='Outlined'>
                    <path
                      style={{
                        fill: 'none',
                        // stroke: '#000000',
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                      }}
                      d='M20,12v7c0,0.552-0.448,1-1,1H5c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h7'
                    />
                    <polyline
                      style={{
                        fill: 'none',
                        // stroke: '#000000',
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                      }}
                      points='20,10 20,4 14,4 '
                    />
                    <line
                      style={{
                        fill: 'none',
                        // stroke: '#000000',
                        strokeWidth: 2,
                        strokeMiterlimit: 10,
                      }}
                      x1='20'
                      y1='4'
                      x2='9'
                      y2='15'
                    />
                  </g>
                </svg>
              </a>
            )
          }
          if (router.pathname === '/' && el.slug[0] === '#') {
            return (
              <a
                key={i}
                href={el.slug}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {el.title}
              </a>
            )
          }
          if (router.pathname !== '/' && el.slug[0] === '#') return
          return (
            <Link
              key={el.slug}
              href={`/${el.slug}`}
              className={clsx(styles.link)}
            >
              {el.title}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
