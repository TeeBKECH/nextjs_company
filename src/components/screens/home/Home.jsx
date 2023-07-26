import { useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'
import dynamic from 'next/dynamic'

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

// Import Swiper styles
import 'swiper/css'

import styles from './Home.module.scss'

const ShowMoreNoSSR = dynamic(() => import('@/components/ui/showMore'), {
  ssr: false,
})

const Home = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const clientsNavPrevRef = useRef(null)
  const clientsNavNextRef = useRef(null)
  const clientsPagination = useRef(null)

  const isTablet = useMediaQuery({ query: '(min-width: 577px) and (max-width: 991px)' })
  const isMobile = useMediaQuery({ query: '(min-width: 320px) and (max-width: 576px)' })

  const teamSlides = [
    [
      {
        img: '/team/team_10.jpg',
        male: 0,
        name: 'Красовский Александр',
        position: 'Генереальный директор',
        options: 'Обработка целей общества и планов по их реализации. Стратегическое управление.',
      },
      {
        img: '/team/team_9.jpg',
        male: 1,
        name: 'Стречень Ирина',
        position: 'Исполнительный директор',
        options:
          'Организация экономически обоснованной опертивной деятельности. Составление отчетности для партнеров и инвесторов',
      },
      {
        img: '/team/team_1.jpg',
        male: 0,
        name: 'Сивцев Антон',
        position: 'Управляющий отелями',
        options:
          'Контроль всех служб и персонала. Присутствует на объекте в соответствии с утвержденным графиком.',
      },
      {
        img: '/team/team_9.jpg',
        male: 1,
        name: 'Стречень Ирина',
        position: 'Revenue manager',
        options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
      },
    ],
    [
      {
        img: '/team/team_1.jpg',
        male: 0,
        name: 'Сивцев Антон',
        position: 'HR',
        options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
      },
      {
        img: '/team/team_4.jpg',
        male: 1,
        name: 'Бахитгуль',
        position: 'Супервайзер',
        options:
          'Организация службу хаускипинга. Контроль за чистотой и порядком. Присутствует на объекте в соответствии с утвержденным графиком.',
      },
      {
        img: '/team/team_9.jpg',
        male: 1,
        name: 'Стречень Ирина',
        position: 'Маркетолог',
        options: 'Организация динамического ценообразования и его контроль. Работает удаленно.',
      },
      {
        img: '/team/team_8.jpg',
        male: 0,
        name: 'Кравчук Роман',
        position: 'Технический работник',
        options:
          'Вся техника будет работать как швейцарские часы. Специалист приезжает в заранее обговоренные даты, но чаще при необходимости.',
      },
    ],
    [
      {
        img: menPlaceholder,
        male: 0,
        name: 'Хоменко Иван и Хоменко Раиса',
        position: 'Юристы',
        options: 'Консультации, работа с документами "на удаленке"',
      },
      {
        img: '/team/team_3.jpg',
        male: 0,
        name: 'Бузинов Николай',
        position: 'IT специалист',
        options:
          'Настройка и контроль оборудования и ПО "на удаленке". Возможен приезд при необходимости.',
      },
    ],
  ]

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
                alt='Рост прибыли'
              />
              <h5>Рост капитализации</h5>
              <p>Увеличение капитализации объекта 10% годовых</p>
            </div>
            <div className={styles.intro_item}>
              <Image
                src={main_3}
                width={30}
                height={30}
                alt='Рост прибыли'
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
              onClick={() => setShowModal(true)}
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
          <div className={styles.work_items}>
            <div className={styles.work_item}>
              <Image
                src={work_1}
                width={45}
                height={45}
                alt='Рост прибыли'
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
                alt='Рост прибыли'
              />
              <p>Собственник здания, помещения, который хочет повысить капитализацию объекта.</p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_3}
                width={45}
                height={45}
                alt='Рост прибыли'
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
                alt='Рост прибыли'
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
                alt='Рост прибыли'
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
                alt='Рост прибыли'
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
                alt='Рост прибыли'
              />
              <p>Кто хочет вложиться в отельный бизнес и открыть отель.</p>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_8}
                width={45}
                height={45}
                alt='Рост прибыли'
              />
              <p>Владельцы отелей или ресторанов, кто хочет повысить уровень сервиса.</p>
            </div>
          </div>
          <ShowMoreNoSSR
            text='Загрузить еще'
            className={styles.adventages_showMore}
            onClick={() => console.log(1)}
            show={isMobile}
          />
        </div>
      </section>

      {/* Work Out Section */}
      <section className={clsx(styles.work, styles.work_out)}>
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
                alt='Рост прибыли'
              />
              <h5>Отели менее 12 номеров</h5>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_out_2}
                width={45}
                height={45}
                alt='Рост прибыли'
              />
              <h5>Отели менее 12 номеров</h5>
            </div>
            <div className={styles.work_item}>
              <Image
                src={work_out_3}
                width={45}
                height={45}
                alt='Рост прибыли'
              />
              <h5>Рестораны менее 25 посадочных мест</h5>
            </div>
          </div>
        </div>
      </section>

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
          <div className={styles.adventages_items}>
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
                alt='Проверка гос органами'
              />
              <h5>Проверка гос органами</h5>
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
          <ShowMoreNoSSR
            text='Показать больше преимуществ'
            className={styles.adventages_showMore}
            onClick={() => console.log(1)}
            show={isMobile}
          />
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
              <FormComponent
                type='cta'
                title='Оставляйте заявку и мы с вами свяжемся'
                titleTag='h4'
                align='center'
                description='Стоимость наших услуг зависит от множества факторов. Обсудим, чем именно можем быть полезны вашему бизнесу'
                inputs={[{ name: 'phone' }]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id='clients'
        className={styles.clients}
      >
        <div className={styles.container}>
          <div className={styles.clients_title}>
            <TitleSec
              title='Наши клиенты'
              align='center'
            />
          </div>
          <div className={styles.clients_items}>
            <Swiper
              slidesPerView={3}
              spaceBetween={25}
              centeredSlides={false}
              watchSlidesProgress={true}
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
                setTimeout(() => {
                  swiper.params.navigation.prevEl = clientsNavPrevRef.current
                  swiper.params.navigation.nextEl = clientsNavNextRef.current
                  swiper.params.navigation.disabledClass = styles.nav_disable
                  swiper.navigation.init()
                  swiper.navigation.update()
                }, 100)
                setTimeout(() => {
                  swiper.params.pagination.el = clientsPagination.current
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
              {data.map((slide, index) => {
                return (
                  <SwiperSlide
                    className={styles.clients_item}
                    key={index}
                  >
                    <div className={styles.clients_img}>
                      <Image
                        src={slide.img}
                        fill={true}
                        alt={slide.title}
                      />
                    </div>
                    <div className={styles.clients_title}>
                      <h4>
                        {slide.projectType} {slide.projectName}
                      </h4>
                      <p>{slide.subTitle}</p>
                    </div>
                    <div className={styles.clients_actions}>
                      <Button link={`clients/${slide.slug}`}>Подробнее</Button>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div
              ref={clientsNavPrevRef}
              className={clsx(styles.nav, styles.nav_prev)}
            >
              {'<'}
            </div>
            <div
              ref={clientsNavNextRef}
              className={clsx(styles.nav, styles.nav_next)}
            >
              {'>'}
            </div>
            <div
              ref={clientsPagination}
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
              src='/come_main.jpg'
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
                onClick={() => setShowModal(true)}
              >
                Хочу в гости
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <TitleSec
            title='Ответы на вопросы'
            align='center'
          />
          <Accordion />
        </div>
      </section>

      {/* CallBack form Section */}
      <section className={styles.callBack}>
        <div className={styles.form}>
          <FormComponent
            title='Форма обратной связи'
            type='callBack'
            inputs={[{ name: 'name' }, { name: 'email' }, { name: 'message' }, { name: 'file' }]}
          />
        </div>
      </section>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <FormComponent
          type='modal'
          inputs={[{ name: 'phone' }]}
          modal={setShowModal}
        />
      </Modal>
    </Layout>
  )
}

export default Home
