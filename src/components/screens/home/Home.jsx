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

import stonksImg from '@/assets/img/stonks.svg'
import projectsImg from '@/assets/img/projects.svg'
import changesImg from '@/assets/img/changes.svg'
import capitalImg from '@/assets/img/capital.svg'
import safetyImg from '@/assets/img/safety.svg'

import aboutImg1 from '@/assets/img/jpg/5.jpg'
import aboutImg2 from '@/assets/img/jpg/2.jpg'
import aboutImg3 from '@/assets/img/jpg/3.jpg'
import aboutImg4 from '@/assets/img/jpg/4.jpg'
import aboutImg5 from '@/assets/img/jpg/1.jpg'

import menPlaceholder from '@/assets/img/jpg/men.jpg'
import womenPlaceholder from '@/assets/img/jpg/women.jpg'

import styles from './Home.module.scss'
import Socials from '@/components/ui/socials'

const Home = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  const advCards = [
    {
      img: stonksImg,
      title: 'Рост прибыли',
      text: 'Прирост прибыли каждый год 15%',
    },
    {
      img: projectsImg,
      title: 'Рост капитализации',
      text: 'Увеличение капитализации объекта 10% годовых',
    },
    {
      img: changesImg,
      title: 'Надежность и гарантии',
      text: 'Детальные отчеты и полнаяпрозрачность всей нашей деятельности',
    },
  ]

  const adventagesCards = [
    {
      img: '/experience.jpg',
      title: 'Опыт',
      text: 'Прирост прибыли каждый год 15%',
    },
    {
      img: '/profit.jpg',
      title: 'Выгодно',
      text: 'Увеличение капитализации объекта 10% годовых',
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
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
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
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
    },
    {
      img: womenPlaceholder,
      male: 0,
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
    },
    {
      img: womenPlaceholder,
      male: 0,
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
    },
    {
      img: menPlaceholder,
      male: 0,
      name: 'Стречень Ирина',
      position: 'Исполнительный директор',
      options:
        'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
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
            Эффективное управление от <br />
            <span> FriendlyInn</span> Group
          </h1>
          <h2>
            Увеличим прибыль и капитализацию вашего отеля, ресторана, <br /> апратментов с гарантией
            результата
          </h2>
          <Button
            type={'button'}
            className={styles.callback}
            onClick={() => setShowModal(true)}
          >
            Заказать звонок
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
        <div className={styles.social}>
          <Socials
            direction={'vertical'}
            size={40}
            data={[
              {
                text: 'vk',
                link: 'https://vk.com/idfriendlyinn',
              },
              {
                text: 'wa',
                link: 'https://wa.me/+79266385055',
              },
              {
                text: 'tg',
                link: 'https://t.me/foxovskiy',
              },
            ]}
          />
        </div>
      </section>

      {/* <section className={styles.we}>
        <TitleSec text={'Почему Мы?'} />

        <div className={styles.cards}>
          {weCards.map((card) => {
            return (
              <div
                key={card.text}
                className={styles.card}
              >
                <div className={styles.img}>
                  <Image
                    width={120}
                    height={120}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section> */}

      <section className={styles.advents}>
        <div className={styles.advents_cards}>
          {advCards.map((card) => {
            return (
              <div
                key={card.text}
                className={styles.advents_card}
              >
                <div className={styles.img}>
                  <Image
                    width={100}
                    height={100}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <h5 className={styles.advents_title}>{card.title}</h5>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* <section
        id='about'
        className={styles.about}
      >
        <div className={styles.about_content}>
          <div className={styles.about_text}>
            <TitleSec
              position={'left'}
              text={'О нас'}
              subTitle='Гостеприимство — наша основная миссия!'
            />
            <p className={styles.par}>
              FriendlyInn — это сеть бутиковых и авторских отелей и управляющая компания. Отели
              находятся в зданиях являющимися памятниками архитектуры, в которых раньше
              располагались доходные дома купцов и апартаменты гениальных исторических личностей
              известных во всем мире.
            </p>
            <p className={styles.par}>
              Мы объединили для Вас историю и современный комфорт. Нам удалось сохранить дух того
              времени и по-новому взглянуть на его содержание. Многие элементы стен теперь стали
              частью интерьера номеров отеля, что делает их по-своему уникальными и дает возможность
              по-настоящему прикоснуться к истории того времени.&nbsp;
              <Link href='/about'>Читать дальше...</Link>
            </p>
          </div>
          <div className={styles.about_images}>
            {projectImages.length &&
              projectImages.map((image, i) => (
                <div
                  key={i}
                  className={styles.about_images_item}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill={true}
                    sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
                  />
                </div>
              ))}
          </div>
        </div>
      </section> */}

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

      {/* <section className={styles.who}>
        <TitleSec text={'Для кого наши услуги?'} />

        <div className={styles.who_cards}>
          {whoCards.map((card) => {
            return (
              <div
                key={card.text}
                className={styles.who_card}
              >
                <div className={styles.who_img}>
                  <Image
                    width={100}
                    height={100}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.who_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section> */}

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
            вами и все обсудим. Чем мы можем быть полезны вашему бизнесу
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
          {advCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.work_card}
              >
                <div className={styles.img}>
                  <Image
                    width={80}
                    height={80}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
          {advCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.work_card}
              >
                <div className={styles.img}>
                  <Image
                    width={80}
                    height={80}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
          {advCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.work_card}
              >
                <div className={styles.img}>
                  <Image
                    width={80}
                    height={80}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id='work'
        className={styles.work}
      >
        <div className={styles.work_title}>
          <TitleSec
            text={'С кем мы НЕ работаем'}
            size={'small'}
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 40 40'
            fill='#c11718'
          >
            <defs></defs>
            <g
              id='Слой_2'
              data-name='Слой 2'
            >
              <g
                id='Слой_1-2'
                data-name='Слой 1'
              >
                <g id='cross'>
                  <path d='M26,20,38.76,7.22a4.23,4.23,0,0,0-6-6L20,14,7.22,1.24a4.23,4.23,0,0,0-6,6L14,20,1.24,32.78a4.23,4.23,0,0,0,6,6L20,26,32.78,38.76a4.23,4.23,0,0,0,6-6Z' />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.work_cards}>
          {advCards.map((card, i) => {
            return (
              <div
                key={i}
                className={styles.work_card}
              >
                <div className={styles.img}>
                  <Image
                    width={80}
                    height={80}
                    src={card.img}
                    alt={card.text}
                  />
                </div>
                <p className={styles.advents_text}>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <ProjectGroup data={data} />

      <section
        id='wait'
        className={styles.wait}
      >
        <div className={styles.wait_title}>
          <TitleSec
            text={'Ждём вас в гости'}
            size={'small'}
          />
        </div>
        <div className={styles.wait_content}>
          <div className={styles.wait_img}>
            <Image
              src={'/main_bg_4.jpg'}
              fill={true}
              alt='Ждем вас в гости | FriendlyInn Group'
            />
          </div>
          <div className={styles.wait_actions}>
            <p>
              Приглашаем вас посетить любой из наших отелей и ресторанов, где мы в реальном времени
              покажем, как у нас все работает. Познакомим с нашей командой и ответим на ваши вопросы
            </p>
            <Button
              type={'button'}
              className={styles.callback}
              onClick={() => setShowModal(true)}
            >
              Записаться
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

      <section className={styles.accordion}>
        <TitleSec
          text={'FAQ'}
          subTitle={'Частые вопросы'}
        />
        <Accordion />
      </section>
    </Layout>
  )
}

export default Home
