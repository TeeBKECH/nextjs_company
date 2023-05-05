import project1image1 from '@/assets/img/jpg/projects/myaso.jpg'
import project2image1 from '@/assets/img/jpg/projects/regul.jpg'
import project3image1 from '@/assets/img/jpg/projects/parradosso.jpg'
import project4image1 from '@/assets/img/jpg/projects/tchaikovsky.jpg'

import project1Logo from '@/assets/img/logo-myaso.svg'
import project2Logo from '@/assets/img/logo-regul.svg'
import project3Logo from '@/assets/img/logo-parradosso.svg'
import project4Logo from '@/assets/img/logo-tchaika.svg'

import project1Before1 from '@/assets/img/jpg/projects/myaso-reseption1-3d.jpg'
import project1Before2 from '@/assets/img/jpg/projects/myaso-room1-3d.jpg'
import project1After2 from '@/assets/img/jpg/projects/myaso-room1.jpg'

const projectCards = [
  {
    slug: 'myasnitskiy',
    img: project1image1,
    logo: project1Logo,
    projectName: 'Мясницкий',
    projectType: 'Бутик-отель',
    stars: 4,
    title: 'Представляем вам Мясницкий Бутик-отель',
    subTitle: 'Новый мини-отель на самой аристократической улице столицы',
    text: 'Ниже вы найдете информацию по данному проекту',
    images: [
      {
        beforeImg: project1Before1,
        afterImg: project1image1,
        beforeText: 'Визуализация',
        afterText: 'Результат',
        text: 'Какой то текст (например название помещения)',
      },
      {
        beforeImg: project1Before2,
        afterImg: project1After2,
        beforeText: 'Визуализация',
        afterText: 'Результат',
        text: 'Какой то текст (например название помещения)',
      },
    ],
  },
  {
    slug: 'regul',
    img: project2image1,
    logo: project2Logo,
    projectName: 'Regul',
    projectType: 'Бутик-отель',
    stars: 5,
    title: 'Представляем вам REGUL Boutique-Hotel',
    subTitle: 'Отель в самом центре стоилцы',
    text: 'Ниже вы найдете информацию по данному проекту',
    // list: [
    //   {
    //     text: 'Продажи и маркетинг',
    //     img: service1Img1,
    //   },
    //   {
    //     text: 'Персонал',
    //     img: service1Img2,
    //   },
    //   {
    //     text: 'Внедрение стандартов гостиничного сервиса',
    //     img: service1Img3,
    //   },
    //   {
    //     text: 'Техническая эксплуатация',
    //     img: service1Img4,
    //   },
    //   {
    //     text: 'Подключение к партнерской программе',
    //     img: service1Img5,
    //   },
    //   {
    //     text: 'Управленческий и бухгалтерский учет',
    //     img: service1Img6,
    //   },
    // ],
  },
  {
    slug: 'parradosso',
    img: project3image1,
    logo: project3Logo,
    projectName: 'Паррадоссо',
    projectType: 'Авторский отель',
    stars: 5,
    title: 'Представляем вам Авторский отель Паррадоссо',
    subTitle: 'Отель в самом центре стоилцы',
    text: 'Ниже вы найдете информацию по данному проекту',
    // list: [
    //   {
    //     text: 'Продажи и маркетинг',
    //     img: service1Img1,
    //   },
    //   {
    //     text: 'Персонал',
    //     img: service1Img2,
    //   },
    //   {
    //     text: 'Внедрение стандартов гостиничного сервиса',
    //     img: service1Img3,
    //   },
    //   {
    //     text: 'Техническая эксплуатация',
    //     img: service1Img4,
    //   },
    //   {
    //     text: 'Подключение к партнерской программе',
    //     img: service1Img5,
    //   },
    //   {
    //     text: 'Управленческий и бухгалтерский учет',
    //     img: service1Img6,
    //   },
    // ],
  },
  {
    slug: 'tchaikovsky',
    img: project4image1,
    logo: project4Logo,
    projectName: 'Чайковский',
    projectType: 'Бутик-отель',
    stars: 4,
    title: 'Представляем вам Бутик-отель Чайковский',
    subTitle: 'Отель в самом центре стоилцы',
    text: 'Ниже вы найдете информацию по данному проекту',
    // list: [
    //   {
    //     text: 'Продажи и маркетинг',
    //     img: service1Img1,
    //   },
    //   {
    //     text: 'Персонал',
    //     img: service1Img2,
    //   },
    //   {
    //     text: 'Внедрение стандартов гостиничного сервиса',
    //     img: service1Img3,
    //   },
    //   {
    //     text: 'Техническая эксплуатация',
    //     img: service1Img4,
    //   },
    //   {
    //     text: 'Подключение к партнерской программе',
    //     img: service1Img5,
    //   },
    //   {
    //     text: 'Управленческий и бухгалтерский учет',
    //     img: service1Img6,
    //   },
    // ],
  },
]

const projects = (req, res) => {
  const { slug } = req.query
  if (!slug) {
    return res.status(200).json({ projectCards })
  }

  try {
    const data = projectCards.find((el) => el.slug === slug)
    if (!data) {
      throw new Error('Не найдено')
    }
    res.status(200).json({ data })
  } catch (error) {
    res.status(404).json({ error })
  }
}

export default projects
