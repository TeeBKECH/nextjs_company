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
          <a href='mailto:hotel@friendlyinn.ru'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              viewBox='0 0 64 64'
              xmlSpace='preserve'
            >
              <g id='Glyph_copy_2'>
                <path d='M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z' />
                <path d='M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z' />
              </g>
            </svg>
          </a>
          <a
            href='https://vk.com/idfriendlyinn'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              id='Capa_1'
              x='0px'
              y='0px'
              viewBox='0 0 548.358 548.358'
              xmlSpace='preserve'
            >
              <g>
                <path d='M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571   l-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13   c2.282-5.9,10.854-18.36,25.696-37.397c7.807-10.089,13.99-18.175,18.556-24.267c32.931-43.78,47.208-71.756,42.828-83.939   l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224,0.568   c-1.332-0.472-3.234-0.428-5.712,0.144c-2.475,0.572-3.713,0.859-3.713,0.859l-1.431,0.715l-1.136,0.859   c-0.952,0.568-1.999,1.567-3.142,2.995c-1.137,1.423-2.088,3.093-2.848,4.996c-8.952,23.031-19.13,44.444-30.553,64.238   c-7.043,11.803-13.511,22.032-19.418,30.693c-5.899,8.658-10.848,15.037-14.842,19.126c-4,4.093-7.61,7.372-10.852,9.849   c-3.237,2.478-5.708,3.525-7.419,3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995   c-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806,0.145-13.706   c0.198-5.903,0.287-9.897,0.287-11.991c0-7.234,0.141-15.085,0.424-23.555c0.288-8.47,0.521-15.181,0.716-20.125   c0.194-4.949,0.284-10.185,0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137   c-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71   c-35.401-0.38-58.148,1.906-68.236,6.855c-3.997,2.091-7.614,4.948-10.848,8.562c-3.427,4.189-3.905,6.475-1.431,6.851   c11.422,1.711,19.508,5.804,24.267,12.275l1.715,3.429c1.334,2.474,2.666,6.854,3.999,13.134c1.331,6.28,2.19,13.227,2.568,20.837   c0.95,13.897,0.95,25.793,0,35.689c-0.953,9.9-1.853,17.607-2.712,23.127c-0.859,5.52-2.143,9.993-3.855,13.418   c-1.715,3.426-2.856,5.52-3.428,6.28c-0.571,0.76-1.047,1.239-1.425,1.427c-2.474,0.948-5.047,1.431-7.71,1.431   c-2.667,0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558   c-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267   c-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427   c-2.095-0.859-4.281-1.475-6.567-1.854l-78.229,0.568c-7.994,0-13.418,1.811-16.274,5.428l-1.143,1.711   C0.288,140.146,0,141.668,0,143.763c0,2.094,0.571,4.664,1.714,7.707c11.42,26.84,23.839,52.725,37.257,77.659   c13.418,24.934,25.078,45.019,34.973,60.237c9.897,15.229,19.985,29.602,30.264,43.112c10.279,13.515,17.083,22.176,20.412,25.981   c3.333,3.812,5.951,6.662,7.854,8.565l7.139,6.851c4.568,4.569,11.276,10.041,20.127,16.416   c8.853,6.379,18.654,12.659,29.408,18.85c10.756,6.181,23.269,11.225,37.546,15.126c14.275,3.905,28.169,5.472,41.684,4.716h32.834   c6.659-0.575,11.704-2.669,15.133-6.283l1.136-1.431c0.764-1.136,1.479-2.901,2.139-5.276c0.668-2.379,1-5,1-7.851   c-0.195-8.183,0.428-15.558,1.852-22.124c1.423-6.564,3.045-11.513,4.859-14.846c1.813-3.33,3.859-6.14,6.136-8.418   c2.282-2.283,3.908-3.666,4.862-4.142c0.948-0.479,1.705-0.804,2.276-0.999c4.568-1.522,9.944-0.048,16.136,4.429   c6.187,4.473,11.99,9.996,17.418,16.56c5.425,6.57,11.943,13.941,19.555,22.124c7.617,8.186,14.277,14.271,19.985,18.274   l5.708,3.426c3.812,2.286,8.761,4.38,14.853,6.283c6.081,1.902,11.409,2.378,15.984,1.427l73.087-1.14   c7.229,0,12.854-1.197,16.844-3.572c3.998-2.379,6.373-5,7.139-7.851c0.764-2.854,0.805-6.092,0.145-9.712   C546.782,404.25,546.115,401.725,545.451,400.298z' />
              </g>
            </svg>
          </a>
          <a
            href='https://wa.me/+79266385055'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              id='Capa_1'
              x='0px'
              y='0px'
              viewBox='0 0 90 90'
              xmlSpace='preserve'
            >
              <g>
                <path
                  id='WhatsApp'
                  d='M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z'
                />
              </g>
            </svg>
          </a>
          <a
            href='https://t.me/foxovskiy'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <path d='M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z' />
            </svg>
          </a>
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
