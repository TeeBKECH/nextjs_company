import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import Button from '@/components/ui/button'

import styles from './Form.module.scss'

const FormComponent = () => {
  return (
    <form
      className={styles.form}
      action=''
    >
      <div className={styles.form_title}>
        <h3>Отправьте свои данные</h3>
        <p>Наш менеджер свяжется с Вами в самое ближайшее время</p>
      </div>
      <div className={styles.form_control}>
        <input
          type='text'
          placeholder='Имя*'
        />
        <span></span>
      </div>
      <div className={styles.form_control}>
        <input
          type='text'
          placeholder='Телефон*'
        />
        <span></span>
      </div>
      <div className={styles.form_control}>
        <input
          type='text'
          placeholder='Почта*'
        />
        <span></span>
      </div>
      <div className={styles.form_control}>
        <textarea placeholder='Оставьте сообщение...'></textarea>
        <span></span>
      </div>
      <div className={clsx(styles.form_control, styles.form_control_submit)}>
        <Button type={'submit'}>Отправить</Button>
        <p className={styles.privacy}>
          Нажимая <span>Отправить</span> Вы соглашаетесь с <br />
          <Link href='/privacy'>правилами обработки персональных данных</Link>
        </p>
      </div>
    </form>
  )
}

export default FormComponent
