import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './logo.module.scss'

const Logo = ({ className, place = 'header' }) => {
  return (
    <div className={clsx(styles.logo, className, place === 'footer' && styles.logo_footer)}>
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='FriendlyInn Group'
          width={94}
          height={85}
          priority={true}
        />
        <span>
          Управляющая <br /> компания <b>FriendlyInn</b>
        </span>
      </Link>
    </div>
  )
}

export default Logo
