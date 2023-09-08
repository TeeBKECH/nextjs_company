'use client'

import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './menu-block.module.scss'

const MenuBlock = ({ links, className, href, closeHandler }) => {
  const ref = useRef(null)

  const outsideClickListener = (e) => {
    if (window.innerWidth > 990) {
      if (e.target != ref.current) {
        closeHandler()
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('click', outsideClickListener)
    }, 0)

    return () => {
      window.removeEventListener('click', outsideClickListener)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={clsx(styles.menuBlock, className)}
    >
      {links.map((link, i) => (
        <Link
          key={i}
          className={styles.link}
          href={`/${href}/${link.href}`}
          onClick={closeHandler}
        >
          <Image
            src={link.icon}
            width={20}
            height={20}
            alt='link icon'
          />
          {link.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuBlock
