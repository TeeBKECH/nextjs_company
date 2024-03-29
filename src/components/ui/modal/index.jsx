import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import styles from './Modal.module.scss'

const Modal = ({ show, onClose, children, className }) => {
  const modalOverlayRef = useRef(null)
  const router = useRouter()

  const backDropHandler = (e) => {
    if (modalOverlayRef?.current === e.target || e.keyCode === 27) {
      onClose()
    }
  }

  const handleCloseClick = (e) => {
    onClose()
  }

  useEffect(() => {
    window.addEventListener('click', backDropHandler)
    window.addEventListener('keydown', backDropHandler)

    return () => {
      window.removeEventListener('click', backDropHandler)
      window.removeEventListener('keydown', backDropHandler)
    }
  }, [])

  useEffect(() => {
    const bodyTag = document.getElementById('body_id')
    show ? bodyTag.classList.add('show_modal') : bodyTag.classList.remove('show_modal')
  }, [show])

  useEffect(() => {
    const bodyStyles = () => document.getElementById('body_id').classList.remove('show_modal')
    router.events.on('routeChangeComplete', bodyStyles)

    return () => {
      router.events.off('routeChangeComplete', bodyStyles)
    }
  }, [router.events])

  const modalContent = (
    <>
      <div
        className={styles.overlay}
        ref={modalOverlayRef}
      ></div>
      <div className={clsx(styles.modal, className)}>
        <div className={styles.close}>
          <span onClick={handleCloseClick}>&times;</span>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </>
  )

  return show ? createPortal(modalContent, document.getElementById('modal-root')) : null
}

export default Modal
