import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='FriendlyInn Group'
          width={94}
          height={85}
          priority={true}
        />
        <span>
          Управляющая <br /> компания FriendlyInn
        </span>
      </Link>
    </div>
  )
}

export default Logo
