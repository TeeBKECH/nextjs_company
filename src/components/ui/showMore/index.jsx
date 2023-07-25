import clsx from 'clsx'

import React from 'react'

import styles from './showMore.module.scss'

const ShowMore = ({ className, onClick, show, text }) => {
  return (
    <div className={clsx(styles.showMore, show && styles.showMore_active)}>
      <span>{text}</span>
      <div className={styles.showMore_icon}>{'>'}</div>
    </div>
  )
}

export default ShowMore
