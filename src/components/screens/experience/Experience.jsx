import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import Layout from '@/components/layout/Layout'
import TitleSec from '@/components/ui/title'

import experineceIcon from '@/assets/img/experience-icon.svg'
import hotelsIcon from '@/assets/img/hotels-icon.svg'
import brandedIcon from '@/assets/img/branded-icon.svg'

import starsIcon4 from '@/assets/img/stars-icon-4.svg'
import starsIcon5 from '@/assets/img/stars-icon-5.svg'

import styles from './Experience.module.scss'

const Experience = () => {
  return (
    <Layout
      title={'Опыт компании'}
      description={
        'На сегодняшний день мы построили и запустили 15 отелей от 3х звезд и выше с различным номерным фондом. Все эти отели успешно работают. '
      }
      bg={true}
    >
      {/* Intro Section */}
      {/* <section className={clsx(styles.intro)}>
        <div className={styles.intro_title}>
          <TitleSec
            title={'Опыт нашей компании'}
            align='center'
          />
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <h4>
              На сегодняшний день мы построили и запустили <span>15 отелей</span> от{' '}
              <span>3х звезд</span> и выше с различным номерным фондом.
            </h4>
            <p className={styles.notice}>Все эти отели успешно работают.</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.content}>
            <p>
              Четыре отеля мы продолжаем развивать под собственным брендом сети отелей{' '}
              <span>Friendly Inn:</span>
            </p>
            <div className={styles.hotels}>
              <div className={styles.hotel}>
                <div className={styles.circle}></div>
                <Image
                  src={starsIcon4}
                  width={110}
                  height={24}
                  alt='Бутик-отель «Чайковский»'
                />
                <p>Бутик-отель</p>
                <h5>«Чайковский»</h5>
                <Link href={'#'}>Подробнее</Link>
              </div>
              <div className={styles.hotel}>
                <div className={styles.circle}></div>
                <Image
                  src={starsIcon4}
                  width={110}
                  height={24}
                  alt='Бутик-отель «Мясницкий»'
                />
                <p>Бутик-отель</p>
                <h5>«Мясницкий»</h5>
                <Link href={'#'}>Подробнее</Link>
              </div>
              <div className={styles.hotel}>
                <div className={styles.circle}></div>
                <Image
                  src={starsIcon5}
                  width={140}
                  height={24}
                  alt='Бутик-отель «Regul»'
                />
                <p>Бутик-отель</p>
                <h5>«Regul»</h5>
                <Link href={'#'}>Подробнее</Link>
              </div>

              <div className={styles.hotel}>
                <div className={styles.circle}></div>
                <Image
                  src={starsIcon5}
                  width={140}
                  height={24}
                  alt='авторский отель «Parradosso»'
                />
                <p>авторский отель</p>
                <h5>«Parradosso»</h5>
                <Link href={'#'}>Подробнее</Link>
              </div>
            </div>
            <p>
              С этими отелями мы прошли путь от поиска локации и создания концепции до запуска
              объекта и его управления.
            </p>
          </div>
        </div>
      </section> */}
      <section className={clsx(styles.hero)}>
        <div className={styles.hero_content}>
          <div className={styles.hero_title}>
            <TitleSec
              title={'Опыт'}
              align='center'
            />
          </div>
          <div className={styles.hero_cards}>
            <div className={styles.hero_card}>
              <div className={styles.hero_icon}>
                <Image
                  src={experineceIcon}
                  width={70}
                  height={70}
                  alt='8 лет на рынке'
                />
              </div>
              <h4>8 лет на рынке</h4>
            </div>
            <div className={styles.hero_card}>
              <div className={styles.hero_icon}>
                <Image
                  src={hotelsIcon}
                  width={70}
                  height={70}
                  alt='Запущены 15 отелей'
                />
              </div>
              <h4>Запущены 15 отелей</h4>
            </div>
            <div className={styles.hero_card}>
              <div className={styles.hero_icon}>
                <Image
                  src={brandedIcon}
                  width={70}
                  height={70}
                  alt='4 отеля работает под брендом Friendly Inn'
                />
              </div>
              <h4>4 отеля работает под брендом Friendly Inn</h4>
            </div>
          </div>
        </div>
      </section>
      {/* Plan */}
      {/* <section className={styles.plan}>
        <div className={styles.plan_content}>
          <div className={clsx(styles.title, styles.plan_title)}>
            <h2>Бизнес-план</h2>
            <p>
              Важнейший документ, который показывает насколько успешным будет инвестиционный проект.
            </p>
          </div>
          <div className={styles.plan_text}>
            <p>
              Мы готовим подробный бизнес-план, где высчитываем необходимый объем инвестиций,
              закладываем финансовые риски и находим возможности оптимизации затрат.
            </p>
            <p>
              Для всех наших отелей мы прописывали каждую категорию расходов: от затрат на
              строительство и доставку оборудования до коммунальные расходов и налогов, а также
              расходов на продвижение и персонал.
            </p>
            <p>
              Прогнозируемый доход указываем, опираясь на потенциал объекта, исследования спроса,
              конкурентную среду, экономическую обстановку и другие факторы, влияющие прямо или
              косвенно на финансовый результат.
            </p>
          </div>
          <div className={styles.plan_img}>
            <Image
              src={'/services/6.jpg'}
              fill={true}
              alt={`Бизнес-план`}
            />
          </div>
        </div>
      </section> */}
      {/* Location */}
      {/* <section className={styles.location}>
        <div className={styles.location_content}>
          <div className={clsx(styles.title, styles.location_title)}>
            <h2>Локация</h2>
            <p>
              При поиске локации мы рассматриваем множество факторов, в том числе минусы и плюсы
              месторасположения и самого здания, спрос, конкурентов, прогноз целевой аудитории и
              рыночные условия продажи здания или его аренды.
            </p>
          </div>
          <div className={styles.location_images}>
            <div className={styles.location_image}>
              <Image
                src={'/experience/1-before.jpg'}
                fill={true}
                alt='Before'
              />
            </div>
            <div className={styles.location_image}>
              <Image
                src={'/experience/1-after.jpg'}
                fill={true}
                alt='after'
              />
            </div>
          </div>
          <div className={styles.location_caption}>
            <p>Результатом наших поисков стали здания в районе бульварного кольца Москвы.</p>
            <p>
              Одно из этих зданий <span>отель «Parradosso» 5*</span> сейчас арендуется по программе
              мэра Москвы – <span>«Рубль за квадратный метр»</span>.
            </p>
          </div>
        </div>
      </section> */}
      {/* Concept */}
      {/* <section className={styles.concept}>
        <div className={styles.concept_container}>
          <div className={styles.concept_circle}></div>
          <div className={styles.concept_content}>
            <div className={clsx(styles.title, styles.concept_title)}>
              <h2>Концепция</h2>
              <p>
                От концепции отеля зависят категория отеля, номерной фонд, доп.услуги,
                позиционирование, ценообразование, инфраструктура.
              </p>
            </div>
            <div className={styles.concept_text}>
              <p>
                Создавая концепцию отеля, мы руководствовались многолетним опытом, который позволяет
                находить оптимальные решения для успешного гостиничного бизнеса.
              </p>
            </div>
            <div className={styles.concept_text}>
              <p>
                Отдельным важным нашим навыком считаем практические знания по грамотной планировке
                объекта с определением оптимального количества номеров, ключевых зон и подсобных
                помещения с учетом максимально возможной прибыли.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Designing */}
      <section className={styles.designing}>
        <div className={styles.designing_content}>
          <div className={clsx(styles.title, styles.designing_title)}>
            <h2>Проектирование</h2>
            <p>Все наши здания являются объектами культурного наследия.</p>
          </div>
          <div className={styles.designing_text}>
            <p>
              При проектировании мы учитывали сложность планировок и охранные обязательства. Каждую
              перепланировку согласовывали с Мосгорнаследием и подтверждали разрешительной
              документацией.
            </p>
            <p>
              В итоге наши здания сохранили исторический облик, при этом приобрели современный вид и
              вписались в городскую инфраструктуру.
            </p>
            <p>
              Благодаря грамотной планировке и взаимодействию с всеми необходимыми службами нами
              были выполнены все требования по безопасности при эксплуатации отелей.
            </p>
          </div>
          <div className={styles.designing_gallery}>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/1-before.jpg'}
                width={540}
                height={345}
                alt='Before'
              />
            </div>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/1-after.jpg'}
                width={540}
                height={345}
                alt='after'
              />
            </div>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/designing-1.jpg'}
                width={540}
                height={345}
                alt='Проектирование'
              />
            </div>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/designing-2.jpg'}
                width={540}
                height={345}
                alt='Проектирование'
              />
            </div>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/designing-3.jpg'}
                width={540}
                height={345}
                alt='Проектирование'
              />
            </div>
            <div className={styles.designing_img}>
              <Image
                src={'/experience/designing-4.jpg'}
                width={540}
                height={345}
                alt='Проектирование'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Design Project */}
      <section className={styles.designProject}>
        <div className={styles.designProject_content}>
          <div className={clsx(styles.title, styles.designProject_title)}>
            <h2>Разработка дизайн–проекта</h2>
            <p>
              Мы разрабатывали дизайн-проект с учетом преимуществ здания, его локации и целевой
              аудитории.
            </p>
          </div>
          <div className={styles.designProject_text}>
            <p>
              Дизайн-проект – это не красивая картинка, а сложная работа, где мы учитываем множество
              позиций: планировку, оснащение номеров и общих зон пользования с учетом их дальнейшей
              эксплуатации, «маршруты» персонала, освещение, электричество, будущие ремонты и
              множество других нюансов.
            </p>
          </div>
          <div className={styles.designProject_img}>
            <div className={styles.designProject_img_wrapper}>
              <Image
                src={'/experience/design-project.jpg'}
                width={540}
                height={345}
                alt={`Бизнес-план`}
              />
              <p>* На фото пример подбора концепции</p>
            </div>
            <div className={styles.designProject_img_caption}>
              <p>
                Например, <span>Бутик-отель «Чайковский» 4*</span> располагается в здании, где жил
                Петр Ильич, и мы постарались в дизайне отеля подчеркнуть романтизм и лирику
                произведений великого композитора.
              </p>
            </div>
          </div>
          <div className={styles.designProject_images}>
            <div className={styles.designProject_images_text}>
              <p>
                Перед согласованием дизайн- проекта мы делаем визуализацию, что позволяет наглядно
                увидеть будущий отель и при необходимости скорректировать дизайн с учетом его
                привлекательности для гостиничного рынка и потенциальной целевой аудитории.
              </p>
            </div>
            <div className={styles.designProject_images_items}>
              <div className={styles.designProject_images_item}>
                <Image
                  src={'/experience/design-project-before.jpg'}
                  fill={true}
                  alt='Before'
                />
              </div>
              <div className={styles.designProject_images_item}>
                <Image
                  src={'/experience/design-project-after.jpg'}
                  fill={true}
                  alt='after'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Building */}
      <section className={styles.building}>
        <div className={styles.building_content}>
          <div className={clsx(styles.title, styles.building_title)}>
            <h2>Строительство и ремонт</h2>
            {/* <p>Контролируем каждый этап строительства и ремонта. На связи с инвестором 24/7.</p> */}
          </div>
          <div className={styles.building_caption}>
            <p>
              Мы много лет сотрудничаем на договорных условиях с проверенными подрядчиками и
              строительными компаниями, имеющими лицензию и необходимый опыт. Это позволяет избегать
              ошибок, оптимизировать затраты и запускать объекты в обусловленные сроки.
            </p>
            <p>
              Мы заказываем оборудование только у надежных поставщиков и следим, чтобы товары имели
              определенный класс пожаробезопасности.
            </p>
          </div>
          <div className={styles.building_images}>
            <div className={styles.building_image}>
              <Image
                src={'/experience/2-before.jpg'}
                fill={true}
                alt='Before'
              />
            </div>
            <div className={styles.building_image}>
              <Image
                src={'/experience/2-after.jpg'}
                fill={true}
                alt='after'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Opening */}
      <section className={styles.opening}>
        <div className={styles.opening_content}>
          <div className={clsx(styles.title, styles.opening_title)}>
            <h2>Предоткрытие и открытие</h2>
          </div>
          <div className={styles.opening_text}>
            <p>
              Мы тщательно вникаем в каждый процесс, чтобы к открытию объект был полностью готов к
              эксплуатации и приему гостей: налажена операционная деятельность, готова вся
              необходимая документация, пройдена классификация, набран и обучен персонал, запущены
              рекламные активности.
            </p>
          </div>
          <div className={styles.opening_images}>
            <div className={styles.opening_image}>
              <Image
                src={'/experience/opening-1.jpg'}
                fill={true}
                alt='Открытие'
              />
            </div>
            <div className={styles.opening_image}>
              <Image
                src={'/experience/opening-2.jpg'}
                fill={true}
                alt='Открытие'
              />
            </div>
            <div className={styles.opening_image}>
              <Image
                src={'/experience/opening-3.jpg'}
                fill={true}
                alt='Открытие'
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Experience
