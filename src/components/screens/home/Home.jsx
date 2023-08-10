import { useRef, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import FormComponent from '@/components/ui/form'
import Accordion from '@/components/ui/accordion'
import TeamSwiper from '@/components/ui/teamSwiper'

import main_1 from '@/assets/img/main_1.svg'
import main_2 from '@/assets/img/main_2.svg'
import main_3 from '@/assets/img/main_3.svg'

import work_1 from '@/assets/img/work_1.svg'
import work_2 from '@/assets/img/work_2.svg'
import work_3 from '@/assets/img/work_3.svg'
import work_4 from '@/assets/img/work_4.svg'
import work_5 from '@/assets/img/work_5.svg'
import work_6 from '@/assets/img/work_6.svg'
import work_7 from '@/assets/img/work_7.svg'
import work_8 from '@/assets/img/work_8.svg'

import work_out_1 from '@/assets/img/work_out_1.svg'
import work_out_2 from '@/assets/img/work_out_2.svg'
import work_out_3 from '@/assets/img/work_out_3.svg'

import adv_1 from '@/assets/img/adv_1.svg'
import adv_2 from '@/assets/img/adv_2.svg'
import adv_3 from '@/assets/img/adv_3.svg'
import adv_4 from '@/assets/img/adv_4.svg'
import adv_5 from '@/assets/img/adv_5.svg'
import adv_6 from '@/assets/img/adv_6.svg'

import menPlaceholder from '@/assets/img/jpg/men.jpg'
import womenPlaceholder from '@/assets/img/jpg/women.jpg'

import leftNav from '@/assets/img/arrow_right.svg'
import rightNav from '@/assets/img/arrow_left.svg'

// Import Swiper styles
import 'swiper/css'

import styles from './Home.module.scss'

const ShowMoreNoSSR = dynamic(() => import('@/components/ui/showMore'), {
  ssr: false,
})

const FormComponentNoSSR = dynamic(() => import('@/components/ui/form'), {
  ssr: false,
})

const Home = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalFormGoal, setModalFormGoal] = useState('')
  const [workWithShowAll, setWorkWithShowAll] = useState(true)
  const [adventagesShowAll, setAdventagesShowAll] = useState(true)

  const projectsNavPrevRef = useRef(null)
  const projectsNavNextRef = useRef(null)
  const projectsPagination = useRef(null)

  const isTablet = useMediaQuery({ query: '(min-width: 701px) and (max-width: 991px)' })
  const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 700px)' })

  const teamSlides = [
    [
      {
        img: '/team/team_10.jpg',
        male: 0,
        name: 'Красовский Александр',
        position: 'Генереальный директор',
        options: [
          'Руководство компанией',
          'Разработка целей общества и планов по их реализации',
          'Стратегическое управление',
          'Представление интересов компании',
          'Обеспечение законности ведения финансово-хозяйственной деятельности общества',
          'Контроль за соблюдением стандартов Friendly Inn',
          'Определение организационный структуры компании и внесение изменений в нее',
        ],
      },
      {
        img: '/team/team_9.jpg',
        male: 1,
        name: 'Стречень Ирина',
        position: 'Исполнительный директор',
        options: [
          'Организация экономически обоснованной операционной деятельности',
          'Управление денежными потоками компании',
          'Планирование бюджета доходов и расходов, контроль за исполнением',
          'Контроль за соблюдением финансовой дисциплины',
          'Контроль за соблюдением стандартов Friendly Inn',
          'Разработка ценовой политики',
          'Запуск и внедрение новых проектов',
          'Организация ведения бухгалтерского, налогового и кадрового учета',
          'Составление отчетности для партнеров и инвесторов',
          'Запуск и внедрение новых проектов',
        ],
      },
      {
        img: '/team/team_1.jpg',
        male: 0,
        name: 'Сивцев Антон',
        position: 'Управляющий отелями',
        options: [
          'Оперативное управление отелями',
          'Организация работы отеля по стандартам Friendly inn',
          'Обеспечение уровня клиентского сервиса',
          'Набор и руководство персоналом отеля',
          'Обеспечение взаимодействия структурных подразделений компании и постановка им задач - старшим администраторам, супервайзеру, главному инженеру',
          'Контроль соблюдения работниками трудовой и производственной дисциплины, правил и норм охраны труда, техники безопасности, требований производственной санитарии и гигиены',
          'Расчет и выдача заработной платы персоналу',
          'Обеспечение ведения и своевременное представление высшему руководству гостиницы отчетности о деятельности гостиницы',
          'Подготовка информации, документов по запросу руководства',
        ],
      },
      {
        img: '/team/team_6.jpg',
        male: 1,
        name: 'Сухинина Анна',
        position: 'Менеджер ресторана',
        options: [
          'Оперативное управление Рестораном Сезоны',
          'Организация питания гостей отеля Сезоны и доставки в другие отели',
          'Организация работы ресторана по стандартам Friendly inn',
          'Обеспечение уровня клиентского сервиса для гостей ресторана ',
          'Обеспечение законности ведения финансово-хозяйственной деятельности общества',
          'Продажа и организация мероприятий в Ресторане',
          'Цены Ресторана Сезоны, акции, скидки, специальные предложения',
          'Контроль финансовой дисциплины Ресторана',
          'Расчет и выплата заработной платы сотрудникам Ресторана',
          'Обеспечение полиграфией Ресторана (меню, купоны и прочее)',
          'Подготовка информации, документов по запросу руководства',
        ],
      },
    ],
    [
      {
        img: '/team/team_4.jpg',
        male: 1,
        name: 'Дикамбаева Бактыгуль',
        position: 'Супервайзер',
        options: [
          'Хаускипинг',
          'Организация работы по стандартам Friendly inn',
          'Набор и руководство персоналом Отдела',
          'Контроль и учет материально-технической базы отеля',
          'Подготовка информации, документов по запросу руководства',
        ],
      },
      {
        img: '/team/team_2.jpg',
        male: 0,
        name: 'Белоусов Дмитрий',
        position: 'Шеф-повар',
        options: [
          'Организация работы кухни Ресторана Сезоны',
          'Разработка меню и ценовой политики',
          'Работа с поставщиками продуктов',
          'Обеспечение качества еды Ресторана согласно стандартам',
          'Расчет и выдача заработной платы персоналу',
          'Подготовка информации, документов по запросу руководства',
        ],
      },
      // {
      //   img: womenPlaceholder,
      //   male: 1,
      //   name: 'Дарханова Елена',
      //   position: 'Менеджер по продажам',
      //   options: [
      //     'Формирование тарифной политики и реализация ее через каналы продвижения',
      //     'Разработка акций и специальных предложений',
      //     'Привлечение В2В партнеров к сотрудничеству (организации и агентства)',
      //     'Е-commerce ',
      //     'Анализ финансовых показателей с целью определения наиболее эффективных инструментов продаж',
      //     'Продвижение отелей компании на онлайн-ресурсах',
      //     'Разработка маркетинговая стратегии для стимулирования продаж и поддержания имиджа отеля на рынке',
      //     'Сайт отеля: наполнение сайта, написание ТЗ для IT службы',
      //     'Социальные сети: ведение профиля компании во ВКонтакте',
      //     'Кросс маркетинг',
      //     'Программа лояльности ',
      //     'Обработка запросов - размещение групп, запросы о сотрудничестве со стороны агентств, бизнеса ',
      //     'Социальные сети: ведение профиля компании во ВКонтакте',
      //   ],
      // },
      {
        img: '/team/team_7.jpg',
        male: 1,
        name: 'Гречанюк Инна',
        position: 'Старший администратор',
        options: [
          'Подбор и оформление персонала',
          'Обучение новых сотрудников',
          'Контроль соблюдения сервисных стандартов Friendly inn ',
          'Контроль кассовой дисциплины',
          'Проверка корректность работы с сервисами онлайн бронирований, итоговые сверки с ними',
          'Взаимодействие с другими службами компании ',
          'Сверки с поставщиками в рамках своих полномочий',
          'Контроль документации Отеля',
          'Прочие поручения Управляющего отелем',
        ],
      },
      {
        img: womenPlaceholder,
        male: 1,
        name: 'Головина Екатерина',
        position: 'Старший администратор',
        options: [
          'Заказ товаров для обеспечения хозяйственной деятельности отеля и по запросам других служб',
          'Взаимодействие с поставщиками',
          'Контроль соблюдения сервисных стандартов Friendly inn ',
          'Контроль кассовой дисциплины',
          'Проверка корректность работы с сервисами онлайн бронирований, итоговые сверки с ними',
          'Обучение новых сотрудников',
          'Взаимодействие с другими службами компании ',
          'Сверки с поставщиками в рамках своих полномочий',
          'Контроль документации Отеля',
          'Прочие поручения Управляющего отелем',
        ],
      },
    ],
    [
      {
        img: '/team/team_3.jpg',
        male: 0,
        name: 'Бузинов Николай',
        position: 'WEB-Разработчик, IT-специалист',
        options: [
          'Поддержание и обслуживание сайтов компании',
          'Технические вопросы, связанные с работой сайтов',
          'Вопросы связанные с доменной почтой компании',
          'Добавление новых доменных почтовых ящиков',
          'Яндекс Директ (настройка и ведение рекламных компаний в Яндекс Директ)',
          'Яндекс Бизнес (Вопросы связанные с подпиской Яндекс Бизнес на картах яндекса для карточек организации отелей и ресторанов)',
        ],
      },
    ],
  ]

  const introButtonHandler = () => {
    setModalFormGoal('Intro-form')
    setShowModal(true)
  }
  const comeButtonHandler = () => {
    setModalFormGoal('come-form')
    setShowModal(true)
  }

  return (
    <Layout
      title={'Главная'}
      description={
        'FriendlyInn — это сеть бутиковых и авторских отелей, а также управляющая компания. Гостеприимство — наша миссия'
      }
    >
      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.intro_title}>
            <h1>
              Эффективное управление отелями <br />и ресторанами от
              <span> FriendlyInn Group</span>
            </h1>
          </div>
          <div className={styles.intro_items}>
            <div className={styles.intro_item}>
              <Image
                src={main_1}
                width={30}
                height={30}
                alt='Рост прибыли'
              />
              <h5>Рост прибыли</h5>
              <p>Прирост прибыли каждый год 15%</p>
            </div>
            <div className={styles.intro_item}>
              <Image
                src={main_2}
                width={30}
                height={30}
                alt='Рост капитализации'
              />
              <h5>Рост капитализации</h5>
              <p>Увеличение капитализации объекта 10% годовых</p>
            </div>
            <div className={styles.intro_item}>
              <Image
                src={main_3}
                width={30}
                height={30}
                alt='Надежность и гарантии'
              />
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
              icon={true}
              onClick={introButtonHandler}
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Work With Section */}
      <section className={styles.work}>
        <div className={styles.container}>
          <div className={styles.work_title}>
            <TitleSec
              title={'С кем мы работаем'}
              align='center'
            />
          </div>
          <div className={clsx(styles.work_items, !workWithShowAll && styles.work_items_all)}>
            <div className={styles.work_item}>
              <Image
                src={work_1}
                width={45}
                height={45}
                alt='Владельцы зданий и помещений'
              />
              <p>
                Владельцы зданий и помещений, кто не знает, как использовать помещения, но хочет
                получать больше денег, чем от аренды.
              </p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_2}
                width={45}
                height={45}
                alt='Собственник здания'
              />
              <p>Собственник здания, помещения, который хочет повысить капитализацию объекта.</p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_3}
                width={45}
                height={45}
                alt='Владельцы существующих отелей'
              />
              <p>
                Владельцы существующих отелей (номерной фонд от 30 номеров), которые хотят
                увеличения своего дохода, но не знают, как оптимизировать процессы.
              </p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_4}
                width={45}
                height={45}
                alt='Собственник, кто сдавал в аренду помещения под отель'
              />
              <p>
                Собственник, кто сдавал в аренду помещения под отель, но арендатор ушел из этого
                помещения.
              </p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_5}
                width={45}
                height={45}
                alt='Владельцы загородной недвижимости и земли'
              />
              <p>
                Владельцы загородной недвижимости и земли (кроме ИЖС), кто не знает, как
                использовать площади.
              </p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_6}
                width={45}
                height={45}
                alt='Кто разрабатывает концепцию отеля ипи ресторана'
              />
              <p>
                Кто разрабатывает концепцию отеля ипи ресторана, но не специалист в этом (например.
                дизайнеры ипи архитекторы, к которым обратились или строители).
              </p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_7}
                width={45}
                height={45}
                alt='Кто хочет вложиться в отельный бизнес и открыть отель'
              />
              <p>Кто хочет вложиться в отельный бизнес и открыть отель.</p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_8}
                width={45}
                height={45}
                alt='Владельцы отелей или ресторанов'
              />
              <p>Владельцы отелей или ресторанов, кто хочет повысить уровень сервиса.</p>
            </div>
          </div>
          {workWithShowAll && (
            <ShowMoreNoSSR
              text='Загрузить еще'
              className={styles.adventages_showMore}
              onClick={setWorkWithShowAll}
            />
          )}
        </div>
      </section>

      {/* Work Out Section */}
      {/* <section className={clsx(styles.work, styles.work_out)}>
        <div className={styles.container}>
          <div className={styles.work_title}>
            <TitleSec
              title={'С кем мы не работаем'}
              align='center'
            />
          </div>
          <div className={clsx(styles.work_items, styles.work_out_items)}>
            <div className={styles.work_item}>
              <Image
                src={work_out_1}
                width={45}
                height={45}
                alt='Отели менее 12 номеров'
              />
              <h5>Отели менее 12 номеров</h5>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_out_2}
                width={45}
                height={45}
                alt='Хостелы'
              />
              <h5>Хостелы</h5>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_out_3}
                width={45}
                height={45}
                alt='Рестораны менее 25 посадочных мест'
              />
              <h5>Рестораны менее 25 посадочных мест</h5>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section
        id='team'
        className={styles.team}
      >
        <div className={styles.team_title}>
          <TitleSec
            title={'Команда опытных профессионалов'}
            align='center'
          />
          <p className={styles.team_title_sub}>
            Мы — управляющая компания <span>FriendlyInn Group.</span> Управляем собственными отелями
            и ресторанами{' '}
            <a
              href='https://friendlyinn.ru'
              target='_blank'
            >
              FriendlyInn
            </a>
            . Предоставляем команду отлично зарекомендовавших управленцев, которые будут работать
            над достижением поставленных задач в любой точке России
          </p>
        </div>
        <div className={clsx(styles.team_cards)}>
          <TeamSwiper teamSlides={teamSlides} />
        </div>
      </section>

      {/* Adventages Section */}
      <section
        id='adventages'
        className={styles.adventages}
      >
        <div className={styles.container}>
          <div className={styles.adventages_title}>
            <TitleSec
              title='Изучите наши преимущества'
              align='left'
            />
            <p className={styles.adventages_title_sub}>
              Помогаем выжать максимум из отеля и ресторана. <br />
              Оптимизируем все процессы и наладим все цепочки взаимодействия. С нашей помощью вы
              станете зарабатывать больше.
            </p>
          </div>
          <div
            className={clsx(
              styles.adventages_items,
              !adventagesShowAll && styles.adventages_items_all,
            )}
          >
            <div className={styles.adventages_item}>
              <Image
                src={adv_1}
                width={45}
                height={45}
                alt='Опыт'
              />
              <h5>Опыт</h5>
              <p>Мы занимаемся отельным и ресторанным бизнесом с 2015 года</p>
            </div>
            <div className={styles.adventages_item}>
              <Image
                src={adv_2}
                width={45}
                height={45}
                alt='Выгодно'
              />
              <h5>Выгодно</h5>
              <p>Специальные цены у контрагентов и поставщиков</p>
            </div>
            <div className={styles.adventages_item}>
              <Image
                src={adv_3}
                width={45}
                height={45}
                alt='База гостей'
              />
              <h5>База гостей</h5>
              <p>Привлечение постоянных клиентов</p>
            </div>
            <div className={styles.adventages_item}>
              <Image
                src={adv_4}
                width={45}
                height={45}
                alt='Программа лояльности'
              />
              <h5>Программа лояльности</h5>
              <p>Включение в действующую партнерскую и программу лояльности</p>
            </div>
            <div className={styles.adventages_item}>
              <Image
                src={adv_5}
                width={45}
                height={45}
                alt='Проверка государственными органами'
              />
              <h5>Проверка государственными органами</h5>
              <p>Подготовка и прохождение любых проверок</p>
            </div>
            <div className={styles.adventages_item}>
              <Image
                src={adv_6}
                width={45}
                height={45}
                alt='Стандарты качества'
              />
              <h5>Стандарты качества</h5>
              <p>Работаем по стандартным премиум сегмента</p>
            </div>
          </div>
          {adventagesShowAll && (
            <ShowMoreNoSSR
              text='Показать больше преимуществ'
              className={styles.adventages_showMore}
              onClick={setAdventagesShowAll}
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.cta_circle}></div>
          <div className={styles.cta_title}>
            <TitleSec title={'Сколько стоят наши услуги?'} />
          </div>
          <div className={styles.cta_form}>
            <div className={styles.form}>
              <FormComponentNoSSR
                type='cta'
                title='Оставляйте заявку и мы с вами свяжемся'
                titleTag='h4'
                align='center'
                description='Стоимость наших услуг зависит от множества факторов. Обсудим, чем именно можем быть полезны вашему бизнесу'
                inputs={[{ name: 'phone' }]}
                ymGoalId='cta-form'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className={styles.projects}
      >
        <div className={styles.container}>
          <div className={styles.projects_title}>
            <TitleSec
              title='Наши Проекты'
              align='center'
            />
          </div>
          <div className={styles.projects_items}>
            <Swiper
              slidesPerView={3}
              spaceBetween={25}
              centeredSlides={false}
              watchSlidesProgress={true}
              onSlideChange={(swiper) => {
                let minus = isMobile ? 2 : isTablet ? 3 : 4
                if (swiper.activeIndex === 0) {
                  swiper.slideTo(swiper.slides.length - minus)
                }
                if (swiper.activeIndex === swiper.slides.length - minus + 1) {
                  swiper.slideTo(1)
                }
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
              onInit={(swiper) => {
                if (swiper.isBeginning) {
                  swiper.slideTo(1)
                }
                setTimeout(() => {
                  swiper.params.navigation.prevEl = projectsNavPrevRef.current
                  swiper.params.navigation.nextEl = projectsNavNextRef.current
                  swiper.params.navigation.disabledClass = styles.nav_disable
                  swiper.navigation.init()
                  swiper.navigation.update()
                }, 100)
                setTimeout(() => {
                  swiper.params.pagination.el = projectsPagination.current
                  swiper.params.pagination.type = 'bullets'
                  swiper.params.pagination.clickable = true
                  swiper.params.pagination.renderBullet = (_, className) => {
                    return `<span class="${clsx(styles.pagination_bullet, className)}"></span>`
                  }
                  swiper.pagination.init()
                  swiper.pagination.render()
                  swiper.pagination.update()
                }, 200)
              }}
              modules={[Pagination, Navigation]}
              className={clsx(styles.mySwiper)}
            >
              <SwiperSlide></SwiperSlide>
              {data.map((slide, index) => {
                return (
                  <SwiperSlide
                    className={styles.projects_item}
                    key={index}
                  >
                    <div className={styles.projects_img}>
                      <Image
                        src={slide.img}
                        fill={true}
                        alt={slide.title}
                      />
                    </div>
                    <div className={styles.projects_title}>
                      <h4>
                        {slide.projectType} {slide.projectName}
                      </h4>
                      <p>{slide.subTitle}</p>
                    </div>
                    <div className={styles.projects_actions}>
                      <Button link={`projects/${slide.slug}`}>Подробнее</Button>
                    </div>
                  </SwiperSlide>
                )
              })}
              <SwiperSlide></SwiperSlide>
            </Swiper>
            <div
              ref={projectsNavPrevRef}
              className={clsx(styles.nav, styles.nav_prev)}
            >
              <Image
                src={leftNav}
                width={10}
                height={21}
                alt='arrow left'
              />
            </div>
            <div
              ref={projectsNavNextRef}
              className={clsx(styles.nav, styles.nav_next)}
            >
              <Image
                src={rightNav}
                width={10}
                height={21}
                alt='arrow right'
              />
            </div>
            <div
              ref={projectsPagination}
              className={styles.pagination}
            ></div>
          </div>
        </div>
      </section>

      {/* Come Section */}
      <section className={styles.come}>
        <div className={styles.container}>
          <div className={styles.come_img}>
            <Image
              src='/main_img_1.jpg'
              fill={true}
              alt='FriendlyInn Group'
            />
          </div>
          <div className={styles.come_info}>
            <div className={styles.come_title}>
              <TitleSec
                title='Приезжайте в гости'
                align='left'
              />
            </div>
            <div className={styles.come_description}>
              <p>
                Приглашаем вас посетить любой из наших отелей и ресторанов, где мы в реальном
                времени покажем, как у нас все работает.
              </p>
              <p>Познакомим с нашей командой и ответим на ваши вопросы</p>
            </div>
            <div className={styles.come_actions}>
              <Button
                type='button'
                onClick={comeButtonHandler}
              >
                Хочу в гости
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className={styles.faq}>
        <div className={styles.container}>
          <TitleSec
            title='Ответы на вопросы'
            align='center'
          />
          <Accordion />
        </div>
      </section> */}

      {/* CallBack form Section */}
      <section className={styles.callBack}>
        <div className={styles.form}>
          <FormComponent
            title='Форма обратной связи'
            type='callBack'
            inputs={[{ name: 'name' }, { name: 'email' }, { name: 'message' }, { name: 'file' }]}
            ymGoalId='callback-form'
          />
        </div>
      </section>
      {/* <FormComponent
        type='callBack'
        inputs={[{ name: 'file' }]}
      /> */}

      {/* Modal Section */}
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <FormComponent
          type='modal'
          inputs={[{ name: 'phone' }]}
          modal={setShowModal}
          ymGoalId={modalFormGoal}
        />
      </Modal>
    </Layout>
  )
}

export default Home
