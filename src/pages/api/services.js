import stonksImg from '@/assets/img/stonks.svg'
import projectsImg from '@/assets/img/projects.svg'
import changesImg from '@/assets/img/changes.svg'
import capitalImg from '@/assets/img/capital.svg'
import safetyImg from '@/assets/img/safety.svg'

const servicesCards = [
  {
    id: 1,
    iconImg: projectsImg,
    title: 'Управлением отелем',
    subTitle: 'Мы работаем, чтобы Вы отдыхали.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      {
        text: 'Продажи и маркетинг',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/set.jpg',
      },
      {
        text: 'Персонал',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/it-solutions-p-500.jpeg',
      },
      {
        text: 'Внедрение стандартов гостиничного сервиса',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/personal-p-500.jpeg',
      },
      {
        text: 'Техническая эксплуатация',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/marketing-p-500.jpeg',
      },
      {
        text: 'Подключение к партнерской программе',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/accounting-2.jpg',
      },
      {
        text: 'Управленческий и бухгалтерский учет',
        img: 'https://sateengroup.ru/local/templates/main/assets/images/standarts-p-500.jpeg',
      },
    ],
  },
  {
    id: 2,
    iconImg: stonksImg,
    title: 'Управление рестораном',
    subTitle: 'Вкусно и со вкусом.',
    text: 'Осуществляем весь цикл',
    list: [
      { text: 'разработка концепции', img: '' },
      { text: 'оснащение ', img: '' },
      { text: 'запуск ресторана', img: '' },
      { text: 'продажи и маркетинг', img: '' },
      { text: 'персонал', img: '' },
      { text: 'техническая эксплуатация', img: '' },
      { text: 'управленческий и бухгалтерский учет', img: '' },
    ],
  },
  {
    id: 3,
    iconImg: capitalImg,
    title: 'Строительство отеля',
    subTitle: 'Полный цикл запуска объекта от выбора места локации до ввода здания в эксплуатацию.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      { text: 'Выбор локации', img: '' },
      { text: 'Разработка концепции', img: '' },
      { text: 'Бизнес-план', img: '' },
      { text: 'Проект объекта', img: '' },
      { text: 'Сопровождение строительства', img: '' },
      { text: 'Прием объекта у подрядчиков', img: '' },
      { text: 'Оснащение объекта', img: '' },
      { text: 'Подбор и обучение персонала', img: '' },
      { text: 'Запуск объекта', img: '' },
    ],
  },
  {
    id: 4,
    iconImg: safetyImg,
    title: 'Реновация отеля',
    subTitle: 'Вдохнуть современность и инновации в работающий объект ',
    text: 'Состоит из нескольких этапов ',
    list: [
      { text: 'Аудит объекта', img: '' },
      { text: 'Подготовка и согласование проекта ', img: '' },
      { text: 'Построение плана работ', img: '' },
      { text: 'Подбор поставщиков для оснащения', img: '' },
      { text: 'Сопровождение работ', img: '' },
      { text: 'Приме работ у подрядчика ', img: '' },
    ],
  },
  {
    id: 5,
    iconImg: projectsImg,
    title: 'Дизайн проект отеля',
    subTitle: 'Мы работаем, чтобы Вы отдыхали.',
    text: 'Наша компания осуществляет полное управление отелем, это включает',
    list: [
      {
        text: 'Команда наших дизайнеров создаст проект с учетом Ваших пожеланий, специфики здания. ',
        img: '',
      },
      {
        text: 'Будет разработана концепция, также учтены все требования для дальнейшего прохождения классификации объекта.',
        img: '',
      },
      {
        text: 'Большой опыт проектирования позволяет учесть все нюансы – от удобства при эксплуатации объекта до эргономики в пространстве.',
        img: '',
      },
    ],
  },
  {
    id: 6,
    iconImg: changesImg,
    title: 'Аудит',
    subTitle: 'Проверка и разработка рекомендаций по оптимизации работы.',
    text: '',
    list: [
      { text: 'Анализ работы всех служб отеля ', img: '' },
      { text: 'Проверка документации ', img: '' },
      { text: 'Разработка рекомендаций ', img: '' },
    ],
  },
  {
    id: 7,
    iconImg: projectsImg,
    title: 'Консалтинг',
    subTitle: 'Оказание консультаций действующим отелям по различным вопросам',
    text: '',
    list: [
      { text: 'документация', img: '' },
      { text: 'персонал', img: '' },
      { text: 'реклама и продвижение', img: '' },
      { text: 'настройка и подключение площадок бронирования', img: '' },
      { text: 'разработка сайта', img: '' },
      { text: 'юридические вопросы ', img: '' },
      { text: 'другое  ', img: '' },
    ],
  },
  {
    id: 8,
    iconImg: capitalImg,
    title: 'Франшиза',
    subTitle: 'Возможно, лучшая инвестиция, о которой Вы когда-либо думали.',
    text: 'Обладатель франшизы Friendly Inn получает ',
    list: [
      { text: 'право на использование бренда Friendly Inn', img: '' },
      { text: 'включение в пул объектов Friendly inn – размещение на сайте компании', img: '' },
      { text: 'стандарты работы отеля', img: '' },
      { text: 'аудит отеля и разработка рекомендаций ', img: '' },
      { text: 'обучение персонала', img: '' },
      { text: 'рабочие инструменты продвижения', img: '' },
      { text: 'оптимизация денежных потоков', img: '' },
      { text: 'консультации по работе отеля и другим вопросам', img: '' },
      { text: 'систему контроля соблюдения стандартов', img: '' },
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
