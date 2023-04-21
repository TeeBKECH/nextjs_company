import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'

import sadIcon from '@/assets/img/sad.svg'

import styles from './Dev.module.scss'

const Dev = ({ title }) => {
  return (
    <Layout title={title}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={title}
      />
      <section className={styles.dev}>
        <div className={styles.img}>
          <Image
            src={sadIcon}
            width={120}
            height={120}
          />
        </div>
        <TitleSec
          text={'Раздел в разработке!'}
          subTitle={'Но он скоро появится'}
        />
        <Link href='/'>
          <Button>Вернуться на главную</Button>
        </Link>
      </section>
    </Layout>
  )
}

export default Dev
