import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import titleDecor from '@/assets/img/title_decor.svg'
import styles from './title.module.scss'

const TitleSec = ({ text, subTitle, position, size }) => {
  return (
    <div className={clsx(styles.title, position && styles[position], size && styles[size])}>
      <h2>
        {/* <div className={styles.title_decor}>
          <Image
            alt='title decor'
            src={titleDecor}
            width={70}
            height={25}
          />
        </div> */}
        <span className={styles.title_text}>{text}</span>
        {/* <div className={styles.title_decor}>
          <Image
            alt='title decor'
            src={titleDecor}
            width={70}
            height={25}
          />
        </div> */}
      </h2>
      {subTitle && <p>{subTitle}</p>}
    </div>
  )
}

export default TitleSec
