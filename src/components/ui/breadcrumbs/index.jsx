import React from 'react'
import Link from 'next/link'

import styles from './breadcrumbs.module.scss'

const Breadcrumbs = ({ backLink, currentLink }) => {
  return (
    <section className={styles.breadcrumbs}>
      <ul className={styles.list}>
        <li className={styles.link}>
          <Link href={`${backLink.link}`}>{backLink.text}</Link>
        </li>
        <li className={styles.devider}>&#8250;</li>
        <li className={styles.current}>
          <span>{currentLink}</span>
        </li>
      </ul>
    </section>
  )
}

export default Breadcrumbs
