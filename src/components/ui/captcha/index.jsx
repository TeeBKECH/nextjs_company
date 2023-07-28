import { useState } from 'react'
import { SmartCaptcha } from '@yandex/smart-captcha'
import getConfig from 'next/config'
import clsx from 'clsx'

const { publicRuntimeConfig } = getConfig()
const { CAPTCHA_CLIENT_KEY } = publicRuntimeConfig

import styles from './captcha.module.scss'

const Captcha = ({ className, setToken }) => {
  return (
    <div className={clsx(className, styles.captcha)}>
      <SmartCaptcha
        sitekey={CAPTCHA_CLIENT_KEY}
        onSuccess={setToken}
      />
    </div>
  )
}

export default Captcha
