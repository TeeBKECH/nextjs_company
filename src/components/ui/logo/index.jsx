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
          width={85}
          height={78}
          priority={true}
        />
        <span>
          Управляющая <br /> компания <b>Friendly Inn</b>
        </span>
      </Link>
    </div>
  )
}

export default Logo
