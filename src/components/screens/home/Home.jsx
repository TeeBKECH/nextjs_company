import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import FormComponent from '@/components/ui/form'
import ProjectGroup from '@/components/ui/project-group'
import WaitingBlock from '@/components/ui/waiting'

import numDecor from '@/assets/img/numDecor.svg'

import adv1_1 from '@/assets/img/exp1.svg'
import adv1_2 from '@/assets/img/exp2.svg'
import adv2_1 from '@/assets/img/profit1.svg'
import adv2_2 from '@/assets/img/profit2.svg'
import adv3_1 from '@/assets/img/data1.svg'
import adv3_2 from '@/assets/img/data2.svg'
import adv4_1 from '@/assets/img/loyalty1.svg'
import adv4_2 from '@/assets/img/loyalty2.svg'
import adv5_1 from '@/assets/img/verify1.svg'
import adv5_2 from '@/assets/img/verify2.svg'
import adv6_1 from '@/assets/img/quality1.svg'
import adv6_2 from '@/assets/img/quality2.svg'

import workIcon from '@/assets/img/work_icon.svg'

import menPlaceholder from '@/assets/img/jpg/men.jpg'
import womenPlaceholder from '@/assets/img/jpg/women.jpg'

import styles from './Home.module.scss'

const Home = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const adventagesCards = [
    {
      img: adv1_1,
      img_alt: adv1_2,
      title: 'Опыт',
      text: 'Прирост прибыли каждый год 15%',
    },
    {
      img: adv2_1,
      img_alt: adv2_2,
      title: 'Выгодно',
      text: 'Увеличение капитализации объекта до 80% годовых',
    },
    {
      img: adv3_1,
      img_alt: adv3_2,
      title: 'База гостей',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: adv4_1,
      img_alt: adv4_2,
      title: 'Программа лояльности',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: adv5_1,
      img_alt: adv5_2,
      title: 'Проверка гос органами',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: adv6_1,
      img_alt: adv6_2,
      title: 'Стандарты качества',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
  ]

  const teamCards = [
    {
      img: menPlaceholder,
      male: 0,
      name: 'Красовский Александр',
      position: 'Генереальный директор',
      options: 'Обработка целей общества и планов по их реализации. Стратегическое управление.',
    },
    {
      img: womenPlaceholder,
      male: 1,
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Сивцев Антон',
      position: 'Управляющий отелями',
      options:
        'Контроль всех служб и персонала. Присутствует на объекте в соответствии с утвержденным графиком.',
    },
    {
      img: womenPlaceholder,
      male: 1,
      name: 'Стречень Ирина',
      position: 'Revenue manager',
      options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Сивцев Антон',
      position: 'HR',
      options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
    },
    {
      img: womenPlaceholder,
      male: 1,
      name: 'Бахитгуль',
      position: 'Супервайзер',
      options:
        'Организация службу хаускипинга. Контроль за чистотой и порядком. Присутствует на объекте в соответствии с утвержденным графиком.',
    },
    {
      img: womenPlaceholder,
      male: 1,
      name: 'Стречень Ирина',
      position: 'Маркетолог',
      options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Кравчук Роман',
      position: 'Технический работник',
      options:
        'Вся техника будет работать как швейцарские часы. Специалист приезжает в заранее обговоренные даты, но чаще при необходимости.',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Хоменко Иван и Хоменко Раиса',
      position: 'Юристы',
      options: 'Консультации, работа с документами "на удаленке"',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Бузинов Николай',
      position: 'IT специалист',
      options:
        'Настройка и контроль оборудования и ПО "на удаленке". Возможен приезд при необходимости.',
    },
  ]

  const workWithCards = [
    {
      img: workIcon,
      text: 'Владельцы зданий и помещений кто не знает, как использовать помещения, но хочет получать больше денег, чем от аренды.',
    },
    {
      img: workIcon,
      text: 'Владельцы существующих отелей (номерной фонд от 30 номеров), которые хотят увеличения своего дохода, но не знают, как оптимизировать процессы.',
    },
    {
      img: workIcon,
      text: 'Владельцы загородной недвижимости и земли (кроме ИЖС), кто не знает, как использовать площади.',
    },
    {
      img: workIcon,
      text: 'Кто строит отель, но не знает кто будет им управлять.',
    },
    {
      img: workIcon,
      text: 'Кто хочет вложиться в отельный бизнес и открыть отель.',
    },
    {
      img: workIcon,
      text: 'Собственник здания, помещения, который хочет повысить капитализацию объекта',
    },
    {
      img: workIcon,
      text: 'Собственник, кто сдавал в аренду помещения под отель, но арендатор ушел из этого помещения.',
    },
    {
      img: workIcon,
      text: 'Кто разрабатывает концепцию отеля или ресторана, но не специалист в этом (например, дизайнеры или архитекторы, к которым обратились или строители).',
    },
    {
      img: workIcon,
      text: 'Владельцы отелей или ресторанов, кто хочет повысить уровень сервиса.',
    },
  ]

  return (
    <Layout
      title={'Главная'}
      description={
        'FriendlyInn — это сеть бутиковых и авторских отелей, а также управляющая компания. Гостеприимство — наша миссия'
      }
    >
      <section className={styles.intro}>
        <div className={styles.content}>
          <div className={styles.intro_title}>
            <h1>
              Эффективное управление отелями <br />и ресторанами от
              <span> FriendlyInn Group</span>
            </h1>
          </div>
          <div className={styles.intro_items}>
            <div className={styles.intro_item}>
              <svg
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='document'>
                  <polyline
                    className={styles.cls_1}
                    points='25 9 25 29 7 29 7 3 16 3'
                  />
                  <line
                    className={styles.cls_1}
                    x1='16'
                    x2='25'
                    y1='3'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='16'
                    x2='16'
                    y1='3'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='25'
                    x2='16'
                    y1='9'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='11'
                    x2='16'
                    y1='17'
                    y2='17'
                  />
                  <line
                    className={styles.cls_1}
                    x1='11'
                    x2='20'
                    y1='21'
                    y2='21'
                  />
                </g>
              </svg>
              <h5>Рост прибыли</h5>
              <p>Прирост прибыли каждый год 15%</p>
            </div>
            <div className={styles.intro_item}>
              <svg
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                viewBox='0 0 334.877 334.877'
              >
                <g>
                  <path
                    d='M333.196,155.999h-16.067V82.09c0-17.719-14.415-32.134-32.134-32.134h-21.761L240.965,9.917
		C237.571,3.798,231.112,0,224.107,0c-3.265,0-6.504,0.842-9.364,2.429l-85.464,47.526H33.815
		c-17.719,0-32.134,14.415-32.134,32.134v220.653c0,17.719,14.415,32.134,32.134,32.134h251.18
		c17.719,0,32.134-14.415,32.134-32.134v-64.802h16.067V155.999z M284.995,62.809c9.897,0,17.982,7.519,19.068,17.14h-24.152
		l-9.525-17.14H284.995z M220.996,13.663c3.014-1.69,7.07-0.508,8.734,2.494l35.476,63.786H101.798L220.996,13.663z
		 M304.275,302.742c0,10.63-8.651,19.281-19.281,19.281H33.815c-10.63,0-19.281-8.651-19.281-19.281V82.09
		c0-10.63,8.651-19.281,19.281-19.281h72.353L75.345,79.95H37.832c-3.554,0-6.427,2.879-6.427,6.427s2.873,6.427,6.427,6.427h14.396
		h234.83h17.217v63.201h-46.999c-21.826,0-39.589,17.764-39.589,39.589v2.764c0,21.826,17.764,39.589,39.589,39.589h46.999V302.742z
		 M320.342,225.087h-3.213h-59.853c-14.743,0-26.736-11.992-26.736-26.736v-2.764c0-14.743,11.992-26.736,26.736-26.736h59.853
		h3.213V225.087z M276.961,197.497c0,7.841-6.35,14.19-14.19,14.19c-7.841,0-14.19-6.35-14.19-14.19s6.35-14.19,14.19-14.19
		C270.612,183.306,276.961,189.662,276.961,197.497z'
                  />
                </g>
              </svg>
              <h5>Рост капитализации</h5>
              <p>Увеличение капитализации объекта 10% годовых</p>
            </div>
            <div className={styles.intro_item}>
              <svg
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='document'>
                  <polyline
                    className={styles.cls_1}
                    points='25 9 25 29 7 29 7 3 16 3'
                  />
                  <line
                    className={styles.cls_1}
                    x1='16'
                    x2='25'
                    y1='3'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='16'
                    x2='16'
                    y1='3'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='25'
                    x2='16'
                    y1='9'
                    y2='9'
                  />
                  <line
                    className={styles.cls_1}
                    x1='11'
                    x2='16'
                    y1='17'
                    y2='17'
                  />
                  <line
                    className={styles.cls_1}
                    x1='11'
                    x2='20'
                    y1='21'
                    y2='21'
                  />
                </g>
              </svg>
              <h5>Надежность и гарантии</h5>
              <p>Детальные отчеты и полнаяпрозрачность всей нашей деятельности</p>
            </div>
          </div>
          <div className={styles.intro_img}>
            <Image
              src='/main_img.jpg'
              alt='FriendlyInn Group'
              priority={true}
              fill={true}
            />
          </div>
          <div className={styles.intro_actions}>
            <Button
              type={'button'}
              onClick={() => setShowModal(true)}
            >
              Узнать подробнее
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

      {/* <section
        id='team'
        className={styles.team}
      >
        <div className={styles.team_title}>
          <TitleSec
            title={'Команда опытных'}
            subTitle={'профессионалов'}
          />
          <p className={styles.team_title_sub}>
            Мы — управляющая компания <span>FriendlyInn Group.</span>
          </p>
          <p>
            Управляем собственными отелями и ресторанами{' '}
            <a
              href='https://friendlyinn.ru'
              target='_blank'
            >
              FriendlyInn
            </a>
          </p>
          <p>
            Предоставляем команду отлично зарекомендовавших управленцев, которые будут рабоать над
            достижением поставленных задач в любой точке России
          </p>
        </div>
        <div className={styles.team_cards}>
          {teamCards.map((el, i) => {
            return (
              <div
                key={i}
                className={styles.team_card}
              >
                <div className={styles.team_card_img}>
                  {i < 2 ? (
                    <Image
                      src={el.img}
                      width={200}
                      height={300}
                      alt={el.name}
                    />
                  ) : (
                    <Image
                      src={el.img}
                      width={100}
                      height={150}
                      alt={el.name}
                    />
                  )}
                </div>
                <div className={styles.team_card_text}>
                  <h4>{el.name}</h4>
                  <p>{el.position}</p>
                  <span>{el.options}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id='adventages'
        className={styles.adventages}
      >
        <div className={styles.decor}></div>
        <div className={styles.decor}></div>
        <div className={styles.adventages_title}>
          <TitleSec
            title={'Наши'}
            subTitle={'преимущества'}
          />
          <p className={styles.adventages_title_sub}>
            Помогаем выжать максимум из отеля и ресторана. Оптимизируем все процессы и наладим все
            цепочки взаимодействия.
          </p>
          <p>
            С нашей помощью вы станете <span>зарабатывать больше.</span>
          </p>
        </div>
        <div className={styles.adventages_cards}>
          {adventagesCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.adventages_card}
              >
                <div className={styles.adventages_card_img}>
                  <Image
                    width={288}
                    height={206}
                    src={card.img}
                    alt={card.text}
                  />
                  <Image
                    width={288}
                    height={206}
                    src={card.img_alt}
                    alt={card.text}
                  />
                </div>
                <div className={styles.adventages_card_content}>
                  <h5 className={styles.adventages_card_title}>{card.title}</h5>
                  <p className={styles.adventages_card_text}>{card.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id='cost'
        className={styles.cost}
      >
        <div className={styles.cost_title}>
          <TitleSec
            title={'Сколько стоят'}
            subTitle={'наши услуги?'}
          />
          <p className={styles.cost_title_sub}>
            Стоимость наших услуг зависит от множества факторов. Оставляйте заявку и мы свяжемся с
            вами и обсудим, чем мы можем быть полезны вашему бизнесу
          </p>
        </div>
        <div className={styles.cost_actions}>
          <Button
            type={'button'}
            className={styles.callback}
            onClick={() => setShowModal(true)}
          >
            Оставить заявку
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
      </section>

      <section
        id='work'
        className={styles.work}
      >
        <div className={styles.work_title}>
          <TitleSec
            title={'С кем мы'}
            subTitle={'работаем'}
          />
        </div>
        <div className={styles.work_cards}>
          {workWithCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.work_card}
              >
                <div className={styles.work_card_img}>
                  <Image
                    width={230}
                    height={160}
                    src={card.img}
                    alt={card.text}
                  />
                  <p>{i + 1}</p>
                </div>
                <p className={styles.work_card_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section> */}

      {/* <ProjectGroup data={data} /> */}

      {/* <WaitingBlock
        setShowModal={setShowModal}
        showModal={showModal}
      /> */}

      {/* <section className={styles.accordion}>
        <TitleSec
          text={'FAQ'}
          subTitle={'Частые вопросы'}
        />
        <Accordion />
      </section> */}
    </Layout>
  )
}

export default Home
