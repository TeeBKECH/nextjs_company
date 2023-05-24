import React from 'react'
import Image from 'next/image'

import TitleSec from '../title'
import Button from '../button'
import Modal from '../modal'
import FormComponent from '../form'

import styles from './waiting.module.scss'

const WaitingBlock = ({ setShowModal, showModal }) => {
  return (
    <section
      id='wait'
      className={styles.wait}
    >
      <div className={styles.wait_title}>
        <TitleSec
          text={'Ждём вас в гости'}
          size={'small'}
        />
      </div>
      <div className={styles.wait_content}>
        <div className={styles.wait_img}>
          <Image
            src={'/main_bg_4.jpg'}
            fill={true}
            alt='Ждем вас в гости | FriendlyInn Group'
          />
        </div>
        <div className={styles.wait_actions}>
          <p>
            Приглашаем вас посетить любой из наших отелей и ресторанов, где мы в реальном времени
            покажем, как у нас все работает. Познакомим с нашей командой и ответим на ваши вопросы
          </p>
          <Button
            type={'button'}
            className={styles.callback}
            onClick={() => setShowModal(true)}
          >
            Записаться
          </Button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            <FormComponent
              direction='col'
              title='Введите свои данные'
              inputs={['name', 'phone']}
              modal={setShowModal}
            />
          </Modal>
        </div>
      </div>
    </section>
  )
}

export default WaitingBlock
