import { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from './footer/Footer'
import Header from './header/Header'

import styles from './Layout.module.scss'

const getTitle = (title) => `${title} | FriendlyInn Group`

const Layout = ({ children, title, description }) => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
  const headerRef = useRef(null)
  const { pathname } = useRouter()

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight })
    } else {
      setSticky({ isSticky: false, offset: 0 })
    }
  }

  // add/remove scroll event listener
  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect()
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <link
          rel='icon'
          href='/favicon.svg'
          type='image/svg+xml'
        />
        {description ? (
          <>
            <meta
              name='description'
              content={description}
            />
            <meta
              name='og:title'
              content={getTitle(title)}
            />
            <meta
              name='og:description'
              content={description}
            />
          </>
        ) : (
          <>
            <meta
              name='robots'
              content='noindex, nofolow'
            />
          </>
        )}

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>
      <Header
        headerRef={headerRef}
        sticky={sticky.isSticky}
        pathname={pathname}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
