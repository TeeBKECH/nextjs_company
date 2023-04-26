import hotelManagementImg from '@/assets/img/jpg/hotel_management.jpg'
import restaurantImg from '@/assets/img/jpg/rest_management.jpg'
import hotelBuildImg from '@/assets/img/jpg/hotel_build.jpg'
import renovationImg from '@/assets/img/jpg/renovation.jpg'
import designImg from '@/assets/img/jpg/hotel_design.jpg'
import auditImg from '@/assets/img/jpg/audit.jpg'
import consaltImg from '@/assets/img/jpg/consult.jpg'
import franchiseImg from '@/assets/img/jpg/franchise.jpg'

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

import service4Icon3 from '@/assets/img/list.svg'

import service5Img1 from '@/assets/img/jpg/services/designers.jpg'

import service7Img1 from '@/assets/img/jpg/services/docs.jpg'
import service7Img2 from '@/assets/img/jpg/services/crew1.jpg'
import service7Img3 from '@/assets/img/jpg/services/marketing.jpg'
import service7Img4 from '@/assets/img/jpg/services/settings1.jpg'
import service7Img5 from '@/assets/img/jpg/services/web_dev.jpg'
import service7Img6 from '@/assets/img/jpg/services/justice1.jpg'
import service7Img7 from '@/assets/img/jpg/services/another.jpg'

import service8Img1 from '@/assets/img/jpg/services/use_rights.jpg'
import service8Img2 from '@/assets/img/jpg/services/crew_management.jpg'
import service8Img3 from '@/assets/img/jpg/services/work_standarts.jpg'
import service8Img4 from '@/assets/img/jpg/services/audit_recomendations.jpg'
import service8Img5 from '@/assets/img/jpg/services/crew1.jpg'
import service8Img6 from '@/assets/img/jpg/services/work_things.jpg'
import service8Img7 from '@/assets/img/jpg/services/money_ways.jpg'
import service8Img8 from '@/assets/img/jpg/services/consult2.jpg'
import service8Img9 from '@/assets/img/jpg/services/controle_system.jpg'

const servicesCards = [
  {
    id: 1,
    img: hotelManagementImg,
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
    img: restaurantImg,
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
    img: hotelBuildImg,
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
    img: renovationImg,
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
    img: designImg,
    title: 'Дизайн-проект отеля',
    subTitle: 'Мы работаем, чтобы Вы отдыхали.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      {
        text: 'Команда наших дизайнеров создаст проект с учетом Ваших пожеланий, специфики здания.',
        img: service5Img1,
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
    img: auditImg,
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
    img: consaltImg,
    title: 'Консалтинг',
    subTitle: 'Оказание консультаций действующим отелям по различным вопросам',
    text: '',
    list: [
      { text: 'Документация', img: service7Img1 },
      { text: 'Персонал', img: service7Img2 },
      { text: 'Реклама и продвижение', img: service7Img3 },
      { text: 'Настройка и подключение площадок бронирования', img: service7Img4 },
      { text: 'Разработка сайта', img: service7Img5 },
      { text: 'Юридические вопросы', img: service7Img6 },
      { text: 'Другое', img: service7Img7 },
    ],
  },
  {
    id: 8,
    img: franchiseImg,
    title: 'Франшиза',
    subTitle: 'Возможно, лучшая инвестиция, о которой Вы когда-либо думали.',
    text: 'Обладатель франшизы Friendly Inn получает ',
    list: [
      { text: 'Право на использование бренда Friendly Inn', img: service8Img1 },
      {
        text: 'Включение в пулл объектов Friendly inn – размещение на сайте компании',
        img: service8Img2,
      },
      { text: 'Стандарты работы отеля', img: service8Img3 },
      { text: 'Аудит отеля и разработка рекомендаций ', img: service8Img4 },
      { text: 'Обучение персонала', img: service8Img5 },
      { text: 'Рабочие инструменты продвижения', img: service8Img6 },
      { text: 'Оптимизация денежных потоков', img: service8Img7 },
      { text: 'Консультации по работе отеля и другим вопросам', img: service8Img8 },
      { text: 'Систему контроля соблюдения стандартов', img: service8Img9 },
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
