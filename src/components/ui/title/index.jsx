import React from 'react'
import clsx from 'clsx'

import styles from './title.module.scss'

const TitleSec = ({ title, subTitle, size }) => {
  return (
    <h2 className={clsx(styles.title, size && styles[size])}>
      {title}
      <span> {subTitle}</span>
    </h2>
  )
}

export default TitleSec
