import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import Button from '../button'

import styles from './project.module.scss'

const ProjectItem = ({ card }) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_img}>
        <Image
          fill={true}
          src={card.img}
          alt={card.title}
        />
      </div>
      <div className={styles.project_content}>
        <h4 className={styles.project_text}>{`${card.projectType} ${card.projectName}`}</h4>
        <Link href={`/projects/${card.slug}`}>
          <Button>Подробнее</Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
