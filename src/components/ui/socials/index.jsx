import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import vkIcon from '@/assets/img/vk_icon.svg'
import waIcon from '@/assets/img/wa_icon.svg'
import tgIcon from '@/assets/img/tg_icon.svg'

import styles from './socials.module.scss'

const Socials = ({ data, direction, size }) => {
  return (
    <ul className={clsx(styles.socials, direction && styles.socials_vertical)}>
      {data.length > 0 &&
        data.map((el, i) => {
          let icon
          if (el.text === 'vk') icon = vkIcon
          if (el.text === 'wa') icon = waIcon
          if (el.text === 'tg') icon = tgIcon
          return (
            <li
              key={i}
              className={styles.social}
            >
              <a
                href={el.link}
                target='_blank'
              >
                <Image
                  src={icon}
                  alt={el.text}
                  width={size ? size : 39}
                  height={size ? size : 30}
                />
              </a>
            </li>
          )
        })}
    </ul>
  )
}

export default Socials
