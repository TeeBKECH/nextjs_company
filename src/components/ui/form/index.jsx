import React, { useCallback, useEffect, useRef, useState } from 'react'
import getConfig from 'next/config'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import { notify } from '@/utils/notify'
import { ymGoal } from '@/utils/ymGoal'

import Button from '@/components/ui/button'

import fileIcon from '@/assets/img/file-plus.svg'

import styles from './Form.module.scss'
import Image from 'next/image'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig
const CaptchaBlock = dynamic(() => import('@/components/ui/captcha'), {
  ssr: false,
})

const initialInputs = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Ваше имя',
    // required: {
    //   value: true,
    //   message: 'Укажите свое имя',
    // },
    // minLength: { value: 2, message: 'Минимум 2 символа' },
    // maxLength: { value: 30, message: 'Максимум 20 символов' },
    // pattern: { value: /^[А-Яа-яA-Za-z\s]+$/i, message: 'Только буквы' },
  },
  {
    type: 'text',
    name: 'phone',
    placeholder: 'Ваш телефон',
    // required: {
    //   value: true,
    //   message: 'Укажите свой телефон',
    // },
    // minLength: { value: 9, message: 'Минимум 9 символов' },
    // maxLength: { value: 15, message: 'Максимум 15 символов' },
    // pattern: { value: /^\d+$/, message: 'Только цифры' },
  },
  {
    type: 'text',
    name: 'email',
    placeholder: 'Ваш E-mail',
    // required: {
    //   value: true,
    //   message: 'Укажите свою почту',
    // },
    // minLength: { value: 5, message: 'Минимум 5 символов' },
    // maxLength: { value: 30, message: 'Максимум 30 символов' },
    // pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Некорректная почта' },
  },
  {
    type: 'area',
    name: 'message',
    placeholder: 'Введите ваш вопрос',
    // maxLength: { value: 150, message: 'Максимум 150 символов' },
  },
  {
    type: 'file',
    name: 'file',
  },
]

const FormComponent = ({
  inputs,
  type,
  description = '',
  title = '',
  titleTag = 'h3',
  align = 'left',
  modal,
  ymGoalId,
}) => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm()

  const [file, setFile] = useState(null)
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const refForm = useRef(null)

  const handleChallengeHidden = useCallback(() => {
    console.log('задание закончилось')
    setIsLoading(false)
    setVisible(false)
  }, [])

  const checkSuccessCaptcha = async (tkn) => {
    if (!tkn) {
      return
    }
    try {
      const resCaptchaCheck = await fetch(`${API_URL}/captcha`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ captchaToken: tkn }),
      })
      const data = await resCaptchaCheck.json()

      if (data?.code === 200) {
        const fieldsData = getValues()
        let formData = new FormData()
        for (let key in fieldsData) {
          if (fieldsData.hasOwnProperty(key) && key !== 'file') {
            formData.append(key, fieldsData[key])
          }
        }
        file && formData.append('file', file)

        const res = await fetch(`${API_URL}/mailer`, {
          method: 'POST',
          body: formData,
        })
        const sendData = await res.json()
        if (sendData?.code === 200) {
          reset()
          notify(sendData?.message, 'success')
          ymGoal(ymGoalId)
          modal && modal(false)
          setFile(null)
        } else {
          notify(sendData?.message, 'error')
        }
      } else {
        notify(data?.message, 'error')
      }
      setIsLoading(false)
      setVisible(false)
    } catch (error) {
      notify('Сообщение не отправлено', 'error')
      setIsLoading(false)
      setVisible(false)
    }
  }

  const onSubmit = async (fieldsData, e) => {
    if (!refForm.current.elements['smart-token'].value) {
      setIsLoading(true)
      setVisible(true)
    }
  }

  const uploadFile = (e) => {
    e.preventDefault()
    if (e.target.files !== null && e.target.files[0]) {
      if (e.target.files[0].size > 2097152) {
        return alert('Размер файла не должен превышать 2МБ')
      }
      setFile(() => e.target.files[0])
      console.log(e.target.files[0])
    }
  }

  return (
    <form
      className={clsx(styles.form, styles[type])}
      onSubmit={handleSubmit(onSubmit)}
      ref={refForm}
    >
      <CaptchaBlock
        setToken={checkSuccessCaptcha}
        visible={visible}
        onChallengeHidden={handleChallengeHidden}
      />
      {title && (
        <div className={clsx(styles.title, styles[align])}>
          {titleTag === 'h3' ? <h3>{title}</h3> : <h4>{title}</h4>}
          {description && <p>{description}</p>}
        </div>
      )}
      <div className={clsx(styles.inputs)}>
        {(type === 'cta' || type === 'modal') && (
          <>
            {inputs.map((el) => {
              const input = initialInputs.find((item) => item.name === el.name)
              if (input) {
                return (
                  <div
                    key={input.name}
                    className={clsx(styles.form_control)}
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
                  </div>
                )
              }
            })}

            <div className={clsx(styles.form_control, styles.form_control_submit)}>
              <Button
                disabled={false}
                loading={isLoading}
                type={'submit'}
                className={styles.submit_w100}
                // onClick={handleSubmitButton}
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
                      (input.name === 'message' || input.name === 'file') &&
                        styles.form_control_w100,
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
                            onChange: uploadFile,
                          })}
                          id='file'
                          type='file'
                          accept='.jpeg, .jpg, .pdf, .docx, .xlsx, .txt'
                        />
                        <label htmlFor='file'>
                          <Image
                            src={fileIcon}
                            width={24}
                            height={24}
                            alt='file icon'
                          />
                          <span>{file && file.name ? file.name : 'Прикрепить файл'}</span>
                        </label>
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
                disabled={false}
                loading={isLoading}
                type={'submit'}
                className={styles.submit}
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
