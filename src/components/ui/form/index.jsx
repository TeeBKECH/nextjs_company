import React, { useEffect, useState } from 'react'
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
    placeholder: 'Ваше имя',
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
    placeholder: 'Ваш телефон',
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
    placeholder: 'Ваш E-mail',
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
    placeholder: 'Введите ваш вопрос',
    maxLength: { value: 150, message: 'Максимум 150 символов' },
  },
  {
    type: 'file',
    name: 'file',
    placeholder: 'Прикрепить файл',
  },
]

const FormComponent = ({
  inputs,
  type,
  description = '',
  title = 'Отправьте свои данные',
  titleTag = 'h3',
  align = 'left',
  modal,
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm()
  const [file, setFile] = useState('Прикрепить файл')

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
        setFile('Прикрепить файл')
      } else {
        notify(data?.message, 'error')
      }
    } catch (error) {
      notify('Сообщение не отправлено', 'error')
    }
  }

  const uploadFile = (e) => {
    e.preventDefault()
    if (e.target.files !== null && e.target.files[0]) {
      if (e.target.files[0].size > 2097152) {
        return alert('Размер файла не должен превышать 2МБ')
      }
      setFile(() => e.target.files[0].name)
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={clsx(styles.title, styles[align])}>
        {titleTag === 'h3' ? <h3>{title}</h3> : <h4>{title}</h4>}
        {description && <p>{description}</p>}
      </div>
      <div className={clsx(styles.inputs)}>
        {type === 'cta' && (
          <>
            {inputs.map((el) => {
              const input = initialInputs.find((item) => item.name === el.name)
              if (input) {
                return (
                  <div
                    key={input.name}
                    className={clsx(
                      styles.form_control,
                      input.name === 'message' && styles.form_control_w100,
                    )}
                  >
                    {input.type === 'text' && (
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
                    )}
                    {input.type === 'area' && (
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
                    {input.type === 'file' && (
                      <>
                        <input
                          {...register(input.name, {
                            required: input.required,
                            minLength: input.minLength,
                            pattern: input.pattern,
                            maxLength: input.maxLength,
                            onChange: uploadFile,
                          })}
                          id='file'
                          type='file'
                          placeholder={input.placeholder}
                        />
                        <label htmlFor='file'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14 2V8H20'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M12 18V12'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M9 15H15'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>

                          <span>{file}</span>
                        </label>

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
                className={styles.submit_w100}
              >
                Оставить заявку
              </Button>
            </div>
            <div
              className={clsx(
                styles.form_control,
                styles.form_control_submit,
                styles.form_control_w100,
              )}
            >
              <p className={clsx(styles.privacy, styles.privacy_align)}>
                Нажимая кнопку <span>“Оставить заявку”</span> вы автоматически соглашаетесь с{' '}
                <Link href='/privacy'>Политикой конфиденциальности</Link>
              </p>
            </div>
          </>
        )}
        {type === 'callBack' && (
          <>
            {inputs.map((el) => {
              const input = initialInputs.find((item) => item.name === el.name)
              if (input) {
                return (
                  <div
                    key={input.name}
                    className={clsx(
                      styles.form_control,
                      input.name === 'message' && styles.form_control_w100,
                    )}
                  >
                    {input.type === 'text' && (
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
                    )}
                    {input.type === 'area' && (
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
                    {input.type === 'file' && (
                      <>
                        <input
                          {...register(input.name, {
                            required: input.required,
                            minLength: input.minLength,
                            pattern: input.pattern,
                            maxLength: input.maxLength,
                            onChange: uploadFile,
                          })}
                          id='file'
                          type='file'
                          placeholder={input.placeholder}
                        />
                        <label htmlFor='file'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14 2V8H20'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M12 18V12'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M9 15H15'
                              stroke='#909090'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>

                          <span>{file}</span>
                        </label>

                        {errors[input.name] && (
                          <span className={styles.error}>{errors[input.name].message}</span>
                        )}
                      </>
                    )}
                  </div>
                )
              }
            })}
            <div
              className={clsx(
                styles.form_control,
                styles.form_control_submit,
                styles.form_control_w100,
              )}
            >
              <p className={styles.privacy}>
                Нажимая кнопку <span>“Оставить заявку”</span> вы автоматически соглашаетесь с{' '}
                <Link href='/privacy'>Политикой конфиденциальности</Link>
              </p>
              <Button
                disabled={!isValid}
                loading={isSubmitting}
                type={'submit'}
              >
                Оставить заявку
              </Button>
            </div>
          </>
        )}
      </div>
    </form>
  )
}

export default FormComponent
