import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import Button from '@/components/ui/button'

import styles from './Form.module.scss'

const initialInputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя*',
  },
  {
    type: 'text',
    name: 'tel',
    placeholder: 'Телефон*',
  },
  {
    type: 'text',
    name: 'mail',
    placeholder: 'Почта*',
  },
  {
    type: 'area',
    name: 'message',
    placeholder: 'Оставьте сообщение...',
  },
]

const FormComponent = ({
  direction = 'col',
  inputs = initialInputs,
  title = 'Отправьте свои данные',
  description = 'Наш менеджер свяжется с Вами в самое ближайшее время',
}) => {
  return (
    <form
      className={styles.form}
      action=''
    >
      <div className={styles.form_title}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={clsx(styles.inputs, direction === 'col' ? styles.col : styles.row)}>
        {inputs.map((el) => {
          return (
            <div
              key={el.name}
              className={styles.form_control}
            >
              {el.type === 'text' ? (
                <input
                  type='text'
                  name={el.name}
                  placeholder={el.placeholder}
                />
              ) : (
                <textarea placeholder={el.placeholder}></textarea>
              )}
            </div>
          )
        })}
        <div className={clsx(styles.form_control, styles.form_control_submit)}>
          <Button type={'submit'}>Отправить</Button>
          <p className={styles.privacy}>
            Нажимая <span>Отправить</span> Вы соглашаетесь с <br />
            <Link href='/privacy'>правилами обработки персональных данных</Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default FormComponent
