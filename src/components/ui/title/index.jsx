import React from 'react'
import clsx from 'clsx'

import styles from './title.module.scss'

const TitleSec = ({ tag = 'h2', title, subTitle, align = 'left', className }) => {
  return (
    <>
      {tag === 'h1' ? (
        <h1 className={clsx(styles.title, styles[align], className)}>
          {title}
          <span> {subTitle}</span>
        </h1>
      ) : (
        <h2 className={clsx(styles.title, styles[align], className)}>
          {title}
          <span> {subTitle}</span>
        </h2>
      )}
    </>
  )
}

export default TitleSec
