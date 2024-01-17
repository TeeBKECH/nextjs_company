import serviceIcon_1 from '@/assets/img/service1.svg'
import serviceIcon_2 from '@/assets/img/service2.svg'
import serviceIcon_3 from '@/assets/img/service3.svg'
import serviceIcon_4 from '@/assets/img/service4.svg'
import serviceIcon_5 from '@/assets/img/service5.svg'
import serviceIcon_6 from '@/assets/img/service6.svg'
import serviceIcon_7 from '@/assets/img/service7.svg'
import serviceIcon_8 from '@/assets/img/service8.svg'

export default [
  {
    type: 'button',
    href: 'services',
    title: 'Услуги',
    links: [
      {
        href: '1',
        title: 'Управление отелем',
        icon: serviceIcon_1,
      },
      {
        href: '2',
        title: 'Управление рестораном',
        icon: serviceIcon_2,
      },
      {
        href: '3',
        title: 'Строительство отеля',
        icon: serviceIcon_3,
      },
      {
        href: '4',
        title: 'Реновация объекта',
        icon: serviceIcon_4,
      },
      {
        href: '5',
        title: 'Дизайн-проект отеля',
        icon: serviceIcon_5,
      },
      {
        href: '6',
        title: 'Аудит',
        icon: serviceIcon_6,
      },
      {
        href: '7',
        title: 'Консалтинг',
        icon: serviceIcon_7,
      },
      {
        href: '8',
        title: 'Франшиза',
        icon: serviceIcon_8,
      },
    ],
  },
  {
    type: 'navLink',
    href: '#adventages',
    title: 'Преимущества',
  },
  {
    type: 'navLink',
    href: '#projects',
    title: 'Проекты',
  },
  {
    type: 'navLink',
    href: '#team',
    title: 'Команда',
  },
  {
    type: 'navLink',
    href: 'experience',
    title: 'Наш опыт',
  },
  {
    type: 'navLink',
    href: 'contacts',
    title: 'Контакты',
  },
  {
    type: 'link',
    href: 'https://friendlyinn.club',
    title: 'Франшиза',
  },
]
