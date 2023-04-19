import React, { useState } from 'react'
import {
  Accordion as AccordionContainer,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import FormComponent from '@/components/ui/form'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
import styles from './accordion.module.scss'
import clsx from 'clsx'

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
              Управляющая компания или Сотрудник-Управляющий?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>Преимущества управляющей компании:</p>
            <ol>
              <li>
                Команда Управляющая компания – это команда специалистов, профессионалов в своей
                области:
                <ul>
                  <li>Управляющий отелем</li>
                  <li>Revenue manager</li>
                  <li>Супервайзер</li>
                  <li>HR</li>
                  <li>Менеджер по продажам</li>
                  <li>Маркетолог</li>
                  <li>Технический работник</li>
                  <li>Юристы</li>
                  <li>Бухгалтер</li>
                  <li>IT специалист и пр.</li>
                </ul>
              </li>
              <li>
                Специальные условия у контрагентов. цены, условия у поставщиков будут гораздо
                привлекательнее – управляющая компания за счет объема на несколько объектов имеет
                лучшие условия.
              </li>
              <li>
                Размещение групповых бронирований Возможность привлекать групповые бронирования
                недоступные для объектов с малым номерным фондом.
              </li>
              <li>Наличие существующей базы гостей.</li>
              <li>Включение в действующую программу лояльности и партнерскую программу.</li>
              <li>
                Опыт - опыт практикующей управляющей компании не сопоставим с опыт одного
                специалиста.
              </li>
              <li>
                Отсутствие зависимости от одного человека человек может заболеть и «работа встанет»,
                в случае управляющей компании такой вариант исключен.
              </li>
              <li>
                База сотрудников наличие базы квалифицированных кадров в сфере ресторанного и
                отельного бизнеса.
              </li>
            </ol>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              Сколько стоят услуги?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>Оставьте свои контакты и напишите какая услуга Вас интересует</p>
            <FormComponent
              direction='row'
              title='Оставьте заявку'
              inputs={[
                {
                  type: 'text',
                  name: 'name',
                  placeholder: 'Имя*',
                },
                {
                  type: 'text',
                  name: 'mail',
                  placeholder: 'Почта*',
                },
              ]}
            />
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className={clsx(`accordion__button`, styles.accordion_button)}>
              Мне нужна помощь во взаимодействии с проверяющими органами
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={clsx(`accordion__panel`, styles.accordion_panel)}>
            <p>
              Управляющая компания имеет большой опыт в прохождении проверок, подготовке к ним.
              Такие услуги мы также оказываем.
            </p>
            <FormComponent
              direction='row'
              title='Оставьте заявку'
              inputs={[
                {
                  type: 'text',
                  name: 'name',
                  placeholder: 'Имя*',
                },
                {
                  type: 'text',
                  name: 'mail',
                  placeholder: 'Почта*',
                },
              ]}
            />
          </AccordionItemPanel>
        </AccordionItem>
      </AccordionContainer>
    </div>
  )
}

export default Accordion
