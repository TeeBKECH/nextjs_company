import React from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/button'

import styles from './Form.module.scss'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

const initialInputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя*',
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон*',
  },
  {
    type: 'text',
    name: 'email',
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
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
    },
  })
  const onSubmit = async (fieldsData) => {
    console.log(fieldsData)
    try {
      const res = await fetch(`${API_URL}/mailer`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fieldsData),
      })
      const data = await res.json()
      reset()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
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
                  {...register(el.name)}
                  type='text'
                  placeholder={el.placeholder}
                />
              ) : (
                <textarea
                  {...register(el.name)}
                  placeholder={el.placeholder}
                ></textarea>
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
