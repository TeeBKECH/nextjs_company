import React from 'react'
import clsx from 'clsx'

import styles from './button.module.scss'

const Button = ({ type, disabled, loading, children, view = 'prime' }) => {
  return (
    <button
      className={clsx(styles.button, styles[view])}
      type={type}
      disabled={disabled}
      loading={loading}
    >
      {children}
    </button>
  )
}

export default Button
