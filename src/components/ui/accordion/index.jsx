import React, { useState } from 'react'
import {
  Accordion as AccordionContainer,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import clsx from 'clsx'

import FormComponent from '@/components/ui/form'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
import styles from './accordion.module.scss'

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <AccordionContainer
        allowZeroExpanded
        preExpanded={['a']}
      >
        <AccordionItem uuid={'a'}>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              <p>Управляющая компания или Сотрудник-Управляющий?</p>
              <AccordionItemState>
                {({ expanded }) => {
                  return expanded ? (
                    <div className={styles.accordion_icon}>&times;</div>
                  ) : (
                    <div className={styles.accordion_icon}>{'>'}</div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
              привлекательнее – управляющая компания за счет объема на несколько объектов имеет
              лучшие условия.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              <p>Управляющая компания или Сотрудник-Управляющий?</p>
              <AccordionItemState>
                {({ expanded }) => {
                  return expanded ? (
                    <div className={styles.accordion_icon}>&times;</div>
                  ) : (
                    <div className={styles.accordion_icon}>{'>'}</div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
              привлекательнее – управляющая компания за счет объема на несколько объектов имеет
              лучшие условия.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              <p>Управляющая компания или Сотрудник-Управляющий?</p>
              <AccordionItemState>
                {({ expanded }) => {
                  return expanded ? (
                    <div className={styles.accordion_icon}>&times;</div>
                  ) : (
                    <div className={styles.accordion_icon}>{'>'}</div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
              привлекательнее – управляющая компания за счет объема на несколько объектов имеет
              лучшие условия.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              <p>Управляющая компания или Сотрудник-Управляющий?</p>
              <AccordionItemState>
                {({ expanded }) => {
                  return expanded ? (
                    <div className={styles.accordion_icon}>&times;</div>
                  ) : (
                    <div className={styles.accordion_icon}>{'>'}</div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
              привлекательнее – управляющая компания за счет объема на несколько объектов имеет
              лучшие условия.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              <p>Управляющая компания или Сотрудник-Управляющий?</p>
              <AccordionItemState>
                {({ expanded }) => {
                  return expanded ? (
                    <div className={styles.accordion_icon}>&times;</div>
                  ) : (
                    <div className={styles.accordion_icon}>{'>'}</div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
              привлекательнее – управляющая компания за счет объема на несколько объектов имеет
              лучшие условия.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </AccordionContainer>
    </div>
  )
}

export default Accordion
