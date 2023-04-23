import React, { useEffect } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import { notify } from '@/utils/notify'

import Button from '@/components/ui/button'

import styles from './Form.module.scss'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

const initialInputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Имя*',
    required: {
      value: true,
      message: 'Укажите свое имя',
    },
    minLength: { value: 2, message: 'Минимум 2 символа' },
    maxLength: { value: 30, message: 'Максимум 20 символов' },
    pattern: { value: /^[А-Яа-яA-Za-z\s]+$/i, message: 'Только буквы' },
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Телефон*',
    required: {
      value: true,
      message: 'Укажите свой телефон',
    },
    minLength: { value: 9, message: 'Минимум 9 символов' },
    maxLength: { value: 15, message: 'Максимум 15 символов' },
    pattern: { value: /^\d+$/, message: 'Только цифры' },
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Почта*',
    required: {
      value: true,
      message: 'Укажите свою почту',
    },
    minLength: { value: 5, message: 'Минимум 5 символов' },
    maxLength: { value: 30, message: 'Максимум 30 символов' },
    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Некорректная почта' },
  },
  {
    type: 'area',
    name: 'message',
    placeholder: 'Оставьте сообщение...',
    maxLength: { value: 150, message: 'Максимум 150 символов' },
  },
]

const FormComponent = ({
  direction = 'col',
  inputs,
  title = 'Отправьте свои данные',
  description = 'Наш менеджер свяжется с Вами в самое ближайшее время',
  modal,
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm()

  const onSubmit = async (fieldsData) => {
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
      if (data?.code === 200) {
        reset()
        notify(data?.message, 'success')
        modal && modal(false)
      } else {
        notify(data?.message, 'error')
      }
    } catch (error) {
      notify('Сообщение не отправлено', 'error')
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
          const input = initialInputs.find((item) => item.name === el)
          if (input) {
            return (
              <div
                key={input.name}
                className={styles.form_control}
              >
                {input.type === 'text' ? (
                  <>
                    <input
                      {...register(input.name, {
                        required: input.required,
                        minLength: input.minLength,
                        pattern: input.pattern,
                        maxLength: input.maxLength,
                      })}
                      type='text'
                      placeholder={input.placeholder}
                    />
                    {errors[input.name] && (
                      <span className={styles.error}>{errors[input.name].message}</span>
                    )}
                  </>
                ) : (
                  <>
                    <textarea
                      {...register(input.name, {
                        maxLength: input.maxLength,
                      })}
                      placeholder={input.placeholder}
                    ></textarea>
                    {errors[input.name] && (
                      <span className={styles.error}>{errors[input.name].message}</span>
                    )}
                  </>
                )}
              </div>
            )
          }
        })}
        <div className={clsx(styles.form_control, styles.form_control_submit)}>
          <Button
            disabled={!isValid}
            loading={isSubmitting}
            type={'submit'}
          >
            Отправить
          </Button>
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
