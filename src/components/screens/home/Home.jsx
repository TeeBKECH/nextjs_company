import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Accordion from '@/components/ui/accordion'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import FormComponent from '@/components/ui/form'
import ProjectGroup from '@/components/ui/project-group'
import Socials from '@/components/ui/socials'
import WaitingBlock from '@/components/ui/waiting'

import stonksImg from '@/assets/img/stonks.svg'
import projectsImg from '@/assets/img/projects.svg'
import changesImg from '@/assets/img/changes.svg'
import capitalImg from '@/assets/img/capital.svg'
import safetyImg from '@/assets/img/safety.svg'

import numDecor from '@/assets/img/numDecor.svg'

import aboutImg1 from '@/assets/img/jpg/5.jpg'
import aboutImg2 from '@/assets/img/jpg/2.jpg'
import aboutImg3 from '@/assets/img/jpg/3.jpg'
import aboutImg4 from '@/assets/img/jpg/4.jpg'
import aboutImg5 from '@/assets/img/jpg/1.jpg'

import menPlaceholder from '@/assets/img/jpg/men.jpg'
import womenPlaceholder from '@/assets/img/jpg/women.jpg'

import styles from './Home.module.scss'

const Home = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const adventagesCards = [
    {
      img: '/experience.jpg',
      title: 'Опыт',
      text: 'Прирост прибыли каждый год 15%',
    },
    {
      img: '/profit.jpg',
      title: 'Выгодно',
      text: 'Увеличение капитализации объекта до 80% годовых',
    },
    {
      img: '/guests.jpg',
      title: 'База гостей',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: '/loyalty.jpg',
      title: 'Программа лояльности',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: '/audit.jpg',
      title: 'Проверка гос органами',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
    {
      img: '/standarts.jpg',
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
      img: numDecor,
      text: 'Владельцы зданий и помещений кто не знает, как использовать помещения, но хочет получать больше денег, чем от аренды.',
    },
    {
      img: numDecor,
      text: 'Владельцы существующих отелей (номерной фонд от 30 номеров), которые хотят увеличения своего дохода, но не знают, как оптимизировать процессы.',
    },
    {
      img: numDecor,
      text: 'Владельцы загородной недвижимости и земли (кроме ИЖС), кто не знает, как использовать площади.',
    },
    {
      img: numDecor,
      text: 'Кто строит отель, но не знает кто будет им управлять.',
    },
    {
      img: numDecor,
      text: 'Кто хочет вложиться в отельный бизнес и открыть отель.',
    },
    {
      img: numDecor,
      text: 'Собственник здания, помещения, который хочет повысить капитализацию объекта',
    },
    {
      img: numDecor,
      text: 'Собственник, кто сдавал в аренду помещения под отель, но арендатор ушел из этого помещения.',
    },
    {
      img: numDecor,
      text: 'Кто разрабатывает концепцию отеля или ресторана, но не специалист в этом (например, дизайнеры или архитекторы, к которым обратились или строители).',
    },
    {
      img: numDecor,
      text: 'Владельцы отелей или ресторанов, кто хочет повысить уровень сервиса.',
    },
  ]

  const workOutCards = [
    {
      img: numDecor,
      text: 'Отели менее 12 номеров',
    },
    {
      img: numDecor,
      text: 'Хостелы',
    },
    {
      img: numDecor,
      text: 'Рестораны менее 25 посадочных мест',
    },
  ]

  const weCards = [
    {
      img: stonksImg,
      text: 'Увеличим выручку отеля на 30% за 2 месяца',
      link: '',
    },
    {
      img: projectsImg,
      text: 'Мы практики – мы владеем и управляем несколькими отелями и ресторанами',
      link: '',
    },
    {
      img: changesImg,
      text: 'Открыты для изменений – мы постоянно ищем новые решения, знания и внедряем их в работу',
      link: '',
    },
    {
      img: capitalImg,
      text: 'Повышаем капитализацию объекта',
      link: '',
    },
    {
      img: safetyImg,
      text: 'Надежность – полная прозрачность в ведении бизнеса и детальные отчеты',
      link: '',
    },
  ]

  const whoCards = [
    {
      img: stonksImg,
      text: 'Инвесторам в сфере гостеприимства',
      link: '',
    },
    {
      img: projectsImg,
      text: 'Собственникам недвижимости ',
      link: '',
    },
    {
      img: changesImg,
      text: 'Владельцам отелей и ресторанов ',
      link: '',
    },
    {
      img: capitalImg,
      text: 'Желающим купить готовый отель',
      link: '',
    },
  ]

  const projectImages = [
    {
      src: aboutImg1,
      alt: '',
      link: '/1',
    },
    {
      src: aboutImg2,
      alt: '',
      link: '/2',
    },
    {
      src: aboutImg3,
      alt: '',
      link: '/3',
    },
    {
      src: aboutImg4,
      alt: '',
      link: '/4',
    },
    {
      src: aboutImg5,
      alt: '',
      link: '/5',
    },
  ]

  return (
    <Layout
      title={'Главная'}
      description={
        'FriendlyInn — это сеть бутиковых и авторских отелей, а также управляющая компания. Гостеприимство — наша миссия'
      }
    >
      <section className={styles.hero}>
        <div className={styles.bg}>
          <Image
            src='/main_bg_3.jpg'
            alt='FriendlyInn Group'
            priority={true}
            fill={true}
          />
        </div>
        <div className={styles.content}>
          <h1>
            Эффективное управление <br />
            от
            <span> FriendlyInn Group</span>
          </h1>
          <h2>
            Увеличим прибыль и капитализацию вашего отеля, ресторана, <br /> апратментов с гарантией
            результата
          </h2>
          <Button
            type={'button'}
            onClick={() => setShowModal(true)}
          >
            Заказать звонок
          </Button>
          <div className={styles.content_items}>
            <div>
              <h5>Рост прибыли</h5>
              <p>Прирост прибыли каждый год 15%</p>
            </div>
            <div>
              <h5>Рост капитализации</h5>
              <p>Увеличение капитализации объекта 10% годовых</p>
            </div>
            <div>
              <h5>Надежность и гарантии</h5>
              <p>Детальные отчеты и полнаяпрозрачность всей нашей деятельности</p>
            </div>
          </div>
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
        id='team'
        className={styles.team}
      >
        <div className={styles.team_title}>
          <TitleSec
            text={'Команда опытных профессионалов'}
            size={'small'}
          />
          <p>
            Мы — управляющая компания <span>FriendlyInn Group.</span>
            <br /> Управляем собственными отелями и ресторанами{' '}
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
        <div className={styles.adventages_title}>
          <TitleSec
            text={'Наши преимущества'}
            size={'small'}
            subTitle={
              'Помогаем выжать максимум из отеля и ресторана. Оптимизируем все процессы и наладим все цепочки взаимодействия. С нашей помощью вы станете зарабатывать больше.'
            }
          />
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
                    fill={true}
                    src={card.img}
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
        <div className={styles.cost_text}>
          <h2>Сколько стоят наши услуги?</h2>
          <p>
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
            text={'С кем мы работаем'}
            size={'small'}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
          >
            <g
              id='Слой_2'
              data-name='Слой 2'
            >
              <g
                id='Слой_1-2'
                data-name='Слой 1'
              >
                <path
                  fill='none'
                  d='M0,0H40V40H0Z'
                />
                <path
                  fill='#009640'
                  d='M20,36.67A16.67,16.67,0,1,1,36.67,20,16.67,16.67,0,0,1,20,36.67Zm0-3.34A13.33,13.33,0,1,0,6.67,20,13.33,13.33,0,0,0,20,33.33Zm-1.66-6.66-7.07-7.08,2.35-2.35L18.34,22l9.43-9.42,2.35,2.35Z'
                />
                <circle
                  fill='none'
                  stroke='#009640'
                  strokeMiterlimit='10'
                  cx='20'
                  cy='20'
                  r='19.2'
                />
              </g>
            </g>
          </svg>
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
                    width={100}
                    height={80}
                    src={card.img}
                    alt={card.text}
                  />
                  <p>{i + 1}</p>
                </div>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <ProjectGroup data={data} />

      <WaitingBlock
        setShowModal={setShowModal}
        showModal={showModal}
      />

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
