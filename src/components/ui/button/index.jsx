import React from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

const Button = ({ type, onClick, disabled, loading, children, view = 'prime' }) => {
  return (
    <button
      className={clsx(styles.button, styles[view], loading && styles.loading)}
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {children}
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
  )
}

export default Button
