import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './button.module.scss'

const Button = ({
  link,
  icon = false,
  type = 'button',
  onClick,
  disabled,
  loading,
  children,
  view = 'prime',
}) => {
  return (
    <>
      {link ? (
        <Link
          className={clsx(styles.button, styles[view], loading && styles.loading)}
          href={link}
        >
          {children}
        </Link>
      ) : (
        <button
          className={clsx(styles.button, styles[view], loading && styles.loading)}
          type={type}
          disabled={loading || disabled}
          onClick={onClick}
        >
          {children}
          {icon && (
            <svg
              width='46'
              height='46'
              viewBox='0 0 46 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='46'
                height='46'
                rx='8'
                fill='#D6BD7B'
              />
              <path
                d='M33.0004 27.9201V30.9201C33.0016 31.1986 32.9445 31.4743 32.8329 31.7294C32.7214 31.9846 32.5577 32.2137 32.3525 32.402C32.1473 32.5902 31.905 32.7336 31.6412 32.8228C31.3773 32.912 31.0978 32.9452 30.8204 32.9201C27.7433 32.5857 24.7874 31.5342 22.1904 29.8501C19.7742 28.3148 17.7258 26.2663 16.1904 23.8501C14.5004 21.2413 13.4487 18.2711 13.1204 15.1801C13.0954 14.9036 13.1283 14.6249 13.2169 14.3617C13.3055 14.0986 13.448 13.8568 13.6352 13.6517C13.8224 13.4466 14.0502 13.2828 14.3042 13.1706C14.5582 13.0584 14.8328 13.0004 15.1104 13.0001H18.1104C18.5957 12.9953 19.0662 13.1672 19.4342 13.4836C19.8022 13.8001 20.0425 14.2395 20.1104 14.7201C20.237 15.6802 20.4719 16.6228 20.8104 17.5301C20.945 17.888 20.9741 18.277 20.8943 18.651C20.8146 19.0249 20.6293 19.3682 20.3604 19.6401L19.0904 20.9101C20.514 23.4136 22.5869 25.4865 25.0904 26.9101L26.3604 25.6401C26.6323 25.3712 26.9756 25.1859 27.3495 25.1062C27.7235 25.0264 28.1125 25.0556 28.4704 25.1901C29.3777 25.5286 30.3204 25.7635 31.2804 25.8901C31.7662 25.9586 32.2098 26.2033 32.527 26.5776C32.8441 26.9519 33.0126 27.4297 33.0004 27.9201Z'
                fill='white'
              />
            </svg>
          )}
          {loading && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='24px'
              height='24px'
              viewBox='0 0 100 100'
              preserveAspectRatio='xMidYMid'
            >
              <circle
                cx='50'
                cy='50'
                fill='none'
                stroke='#d3af53'
                strokeWidth='11'
                r='23'
                strokeDasharray='108.38494654884786 38.12831551628262'
              >
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  repeatCount='indefinite'
                  dur='2.8571428571428568s'
                  values='0 50 50;360 50 50'
                  keyTimes='0;1'
                ></animateTransform>
              </circle>
            </svg>
          )}
        </button>
      )}
    </>
  )
}

export default Button
