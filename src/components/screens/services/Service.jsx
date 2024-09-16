import React, { useRef, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button'
import TitleSec from '@/components/ui/title'
import Modal from '@/components/ui/modal'

import styles from './services.module.scss'
import BitrixForm from '@/components/ui/bitrix-form'

const FormComponentNoSSR = dynamic(() => import('@/components/ui/form'), {
  ssr: false,
})

const Service = ({ data }) => {
  // console.log(data)
  const { img, title, description, options, preview } = data
  // const [showModal, setShowModal] = useState(false)

  return (
    <Layout
      title={`${title} | Услуги`}
      description={description[0]}
    >
      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.text}>
            <TitleSec
              tag='h2'
              title={`${title}`}
              className={styles.title}
            />
            {description.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className={styles.preview}>
            <Image
              src={preview}
              fill={true}
              alt={`${title}`}
            />
          </div>
          <div className={styles.options}>
            {options.map((el, i) => (
              <div
                key={i}
                className={styles.options_item}
              >
                <span className={styles.options_icon}>✓</span>
                {el}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.cta_circle}></div>
          <div className={styles.cta_title}>
            <TitleSec title={'Сколько стоит эта услуга?'} />
          </div>
          <div className={styles.cta_form}>
            <div className={styles.form}>
              {/* <FormComponentNoSSR
                type='cta'
                title='Оставляйте заявку и мы с вами свяжемся'
                titleTag='h4'
                align='center'
                description='Стоимость наших услуг зависит от множества факторов. Обсудим, чем именно можем быть полезны вашему бизнесу'
                inputs={[{ name: 'phone' }]}
                ymGoalId='cta-form'
              /> */}
              <BitrixForm
                b24='inline/20/su7d9z'
                url='https://cdn-ru.bitrix24.ru/b29346204/crm/form/loader_20.js'
              />
            </div>
          </div>
        </div>
      </section>
      {/* <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <FormComponent
          type='modal'
          inputs={[{ name: 'phone' }]}
          modal={setShowModal}
          ymGoalId='come-form'
        />
      </Modal> */}
    </Layout>
  )
}

export default Service
