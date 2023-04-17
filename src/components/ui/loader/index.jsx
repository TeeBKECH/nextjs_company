import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from './Loader.module.scss'

const LOADER_THRESHOLD = 250

const NavigationLoader = (props) => {
  const { text = 'Загрузка...' } = props
  const [isLoading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let timer

    const start = () => (timer = setTimeout(() => setLoading(true), LOADER_THRESHOLD))

    const end = () => {
      if (timer) {
        clearTimeout(timer)
      }
      setLoading(false)
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)

      if (timer) {
        clearTimeout(timer.current)
      }
    }
  }, [router.events])

  if (!isLoading) return null

  return <div className={styles.loader}>{text}</div>
}

export default NavigationLoader
