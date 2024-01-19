import { servicesCards } from '@/pages/api/services'

const links = servicesCards.map((el) => {
  return {
    href: el.id,
    title: el.title,
    icon: el.icon,
  }
})

export default [
  {
    type: 'button',
    href: 'services',
    title: 'Услуги',
    links,
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
