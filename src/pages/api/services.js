import hotelManagementIcon from '@/assets/img/projects.svg'
import restaurantIcon from '@/assets/img/restaurant.svg'
import hotelBuildIcon from '@/assets/img/hotel_build.svg'
import renovationIcon from '@/assets/img/renovation.svg'
import designIcon from '@/assets/img/design.svg'
import auditIcon from '@/assets/img/audit.svg'
import consaltIcon from '@/assets/img/consalt.svg'
import franchiseIcon from '@/assets/img/franchise.svg'

import service1Img1 from '@/assets/img/jpg/services/sales_marketing.jpg'
import service1Img2 from '@/assets/img/jpg/services/personal.jpg'
import service1Img3 from '@/assets/img/jpg/services/standarts.jpg'
import service1Img4 from '@/assets/img/jpg/services/tech.jpg'
import service1Img5 from '@/assets/img/jpg/services/program.jpg'
import service1Img6 from '@/assets/img/jpg/services/management.jpg'

import service2Img1 from '@/assets/img/jpg/services/restaurant.jpg'
import service2Img2 from '@/assets/img/jpg/services/rest_services.jpg'
import service2Img3 from '@/assets/img/jpg/services/rest_start.jpg'
import service2Img5 from '@/assets/img/jpg/services/rest_crew.jpg'

import service3Img1 from '@/assets/img/jpg/services/place.jpg'
import service3Img2 from '@/assets/img/jpg/services/concept.jpg'
import service3Img3 from '@/assets/img/jpg/services/plan.jpg'
import service3Img4 from '@/assets/img/jpg/services/project.jpg'
import service3Img5 from '@/assets/img/jpg/services/building.jpg'
import service3Img6 from '@/assets/img/jpg/services/take.jpg'
import service3Img7 from '@/assets/img/jpg/services/interior.jpg'
import service3Img8 from '@/assets/img/jpg/services/crew_management.jpg'

import service4Icon2 from '@/assets/img/approval.svg'
import service4Icon3 from '@/assets/img/list.svg'
import service4Icon4 from '@/assets/img/search.svg'
import service4Icon5 from '@/assets/img/escort.svg'
import service4Icon6 from '@/assets/img/take.svg'

import service6Icon1 from '@/assets/img/analisis.svg'
import service6Icon3 from '@/assets/img/recomendations.svg'

import service7Icon1 from '@/assets/img/documents.svg'
import service7Icon2 from '@/assets/img/crew.svg'
import service7Icon3 from '@/assets/img/marketing.svg'
import service7Icon4 from '@/assets/img/booking.svg'
import service7Icon5 from '@/assets/img/web.svg'
import service7Icon6 from '@/assets/img/juridical.svg'

import service8Icon1 from '@/assets/img/keep_hands.svg'
import service8Icon2 from '@/assets/img/include.svg'
import service8Icon3 from '@/assets/img/standarts.svg'
import service8Icon4 from '@/assets/img/hotel_audit.svg'
import service8Icon5 from '@/assets/img/crew_teaching.svg'
import service8Icon7 from '@/assets/img/money.svg'
import service8Icon8 from '@/assets/img/questions.svg'
import service8Icon9 from '@/assets/img/system.svg'

const servicesCards = [
  {
    id: 1,
    iconImg: hotelManagementIcon,
    title: 'Управлением отелем',
    subTitle: 'Мы работаем, чтобы Вы отдыхали.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      {
        text: 'Продажи и маркетинг',
        img: service1Img1,
      },
      {
        text: 'Персонал',
        img: service1Img2,
      },
      {
        text: 'Внедрение стандартов гостиничного сервиса',
        img: service1Img3,
      },
      {
        text: 'Техническая эксплуатация',
        img: service1Img4,
      },
      {
        text: 'Подключение к партнерской программе',
        img: service1Img5,
      },
      {
        text: 'Управленческий и бухгалтерский учет',
        img: service1Img6,
      },
    ],
  },
  {
    id: 2,
    iconImg: restaurantIcon,
    title: 'Управление рестораном',
    subTitle: 'Вкусно и со вкусом.',
    text: 'Осуществляем весь цикл',
    list: [
      { text: 'Разработка концепции', img: service2Img1 },
      { text: 'Оснащение ', img: service2Img2 },
      { text: 'Запуск ресторана', img: service2Img3 },
      { text: 'Продажи и маркетинг', img: service1Img1 },
      { text: 'Персонал', img: service2Img5 },
      { text: 'Техническая эксплуатация', img: service1Img4 },
      { text: 'Управленческий и бухгалтерский учет', img: service1Img6 },
    ],
  },
  {
    id: 3,
    iconImg: hotelBuildIcon,
    title: 'Строительство отеля',
    subTitle: 'Полный цикл запуска объекта от выбора места локации до ввода здания в эксплуатацию.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      { text: 'Выбор локации', img: service3Img1 },
      { text: 'Разработка концепции', img: service3Img2 },
      { text: 'Бизнес-план', img: service3Img3 },
      { text: 'Проект объекта', img: service3Img4 },
      { text: 'Сопровождение строительства', img: service3Img5 },
      { text: 'Прием объекта у подрядчиков', img: service3Img6 },
      { text: 'Оснащение объекта', img: service3Img7 },
      { text: 'Подбор и обучение персонала', img: service3Img8 },
      { text: 'Запуск объекта', img: service2Img3 },
    ],
  },
  {
    id: 4,
    iconImg: renovationIcon,
    title: 'Реновация отеля',
    subTitle: 'Вдохнуть современность и инновации в работающий объект ',
    text: 'Состоит из нескольких этапов ',
    list: [
      { text: 'Аудит объекта', img: service1Img1 },
      { text: 'Подготовка и согласование проекта ', img: service3Img4 },
      { text: 'Построение плана работ', img: service3Img3 },
      { text: 'Подбор поставщиков для оснащения', img: service3Img8 },
      { text: 'Сопровождение работ', img: service3Img5 },
      { text: 'Приём работ у подрядчика ', img: service3Img6 },
    ],
  },
  {
    id: 5,
    iconImg: designIcon,
    title: 'Дизайн проект отеля',
    subTitle: 'Мы работаем, чтобы Вы отдыхали.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      {
        text: 'Команда наших дизайнеров создаст проект с учетом Ваших пожеланий, специфики здания.',
        img: service3Img3,
      },
      {
        text: 'Будет разработана концепция, также учтены все требования для дальнейшего прохождения классификации объекта.',
        img: service1Img3,
      },
      {
        text: 'Большой опыт проектирования позволяет учесть все нюансы – от удобства при эксплуатации объекта до эргономики в пространстве.',
        img: service3Img7,
      },
    ],
  },
  {
    id: 6,
    iconImg: auditIcon,
    title: 'Аудит',
    subTitle: 'Проверка и разработка рекомендаций по оптимизации работы.',
    text: '',
    list: [
      { text: 'Анализ работы всех служб отеля ', img: service3Img3 },
      { text: 'Проверка документации ', img: service1Img6 },
      { text: 'Разработка рекомендаций ', img: service3Img2 },
    ],
  },
  {
    id: 7,
    iconImg: consaltIcon,
    title: 'Консалтинг',
    subTitle: 'Оказание консультаций действующим отелям по различным вопросам',
    text: '',
    list: [
      { text: 'Документация', icon: service7Icon1 },
      { text: 'Персонал', icon: service7Icon2 },
      { text: 'Реклама и продвижение', icon: service7Icon3 },
      { text: 'Настройка и подключение площадок бронирования', icon: service7Icon4 },
      { text: 'Разработка сайта', icon: service7Icon5 },
      { text: 'Юридические вопросы ', icon: service7Icon6 },
      { text: 'Другое  ', icon: service4Icon3 },
    ],
  },
  {
    id: 8,
    iconImg: franchiseIcon,
    title: 'Франшиза',
    subTitle: 'Возможно, лучшая инвестиция, о которой Вы когда-либо думали.',
    text: 'Обладатель франшизы Friendly Inn получает ',
    list: [
      { text: 'Право на использование бренда Friendly Inn', icon: service8Icon1 },
      {
        text: 'Включение в пул объектов Friendly inn – размещение на сайте компании',
        icon: service8Icon2,
      },
      { text: 'Стандарты работы отеля', icon: service8Icon3 },
      { text: 'Аудит отеля и разработка рекомендаций ', icon: service8Icon4 },
      { text: 'Обучение персонала', icon: service8Icon5 },
      { text: 'Рабочие инструменты продвижения', icon: service7Icon3 },
      { text: 'Оптимизация денежных потоков', icon: service8Icon7 },
      { text: 'Консультации по работе отеля и другим вопросам', icon: service8Icon8 },
      { text: 'Систему контроля соблюдения стандартов', icon: service8Icon9 },
    ],
  },
]

const services = (req, res) => {
  const { id } = req.query
  if (!id) {
    return res.status(200).json({ servicesCards })
  }

  try {
    const data = servicesCards.find((el) => el.id.toString() === id)
    if (!data) {
      throw new Error('Не найдено')
    }
    res.status(200).json({ data })
  } catch (error) {
    res.status(404).json({ error })
  }
}

export default services
