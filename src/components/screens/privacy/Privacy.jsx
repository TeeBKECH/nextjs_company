import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import TitleSec from '@/components/ui/title'

import styles from './Privacy.module.scss'

const Privacy = () => {
  return (
    <Layout title={'Политика конфиденциальности и правила обработки персональных данных'}>
      <Breadcrumbs
        backLink={{ text: 'Главная', link: '/' }}
        currentLink={'Политика конфиденциальности'}
      />
      <section className={styles.privacy}>
        <TitleSec
          text={'Политика конфиденциальности'}
          subTitle={'и правила обработки персональных данных'}
        />
        <div className={styles.content}>
          <ol>
            <li>
              <b>Общие положения</b>
              <ol>
                <li>
                  Политика в отношении обработки персональных данных (далее — Политика) направлена
                  на защиту прав и свобод физических лиц, персональные данные которых обрабатывает
                  ООО "ДЕГТЯРНЫЙ"(далее — Оператор).
                </li>
                <li>
                  Политика разработана в соответствии с п. 2 ч. 1 ст. 18.1 Федерального закона от 27
                  июля 2006 г. № 152-ФЗ «О персональных данных» (далее — ФЗ «О персональных
                  данных»).
                </li>
                <li>
                  Политика содержит сведения, подлежащие раскрытию в соответствии с ч. 1 ст. 14 ФЗ
                  «О персональных данных», и является общедоступным документом.
                </li>
              </ol>
            </li>
            <li>
              <b>Сведения об операторе</b>
              <ol>
                <li>
                  Оператор ведет свою деятельность по адресу 125009, Москва г, Дегтярный пер, дом №
                  8, строение
                </li>
                <li>
                  Офис-менеджер (телефон +7 (958) 111-90-55) назначен ответственным за организацию
                  обработки персональных данных.
                </li>
                <li>
                  База данных информации, содержащей персональные данные граждан Российской
                  Федерации, находится по адресу: 125009, Москва г, Дегтярный пер, дом № 8, строение
                  2.
                </li>
              </ol>
            </li>
            <li>
              <b>Сведения об обработке персональных данных</b>
              <ol>
                <li>
                  Оператор обрабатывает персональные данные на законной и справедливой основе для
                  выполнения возложенных законодательством функций, полномочий и обязанностей,
                  осуществления прав и законных интересов Оператора, работников Оператора и третьих
                  лиц.
                </li>
                <li>
                  Оператор получает персональные данные непосредственно у субъектов персональных
                  данных.
                </li>
                <li>
                  Оператор обрабатывает персональные данные автоматизированным и
                  неавтоматизированным способами, с использованием средств вычислительной техники и
                  без использования таких средств.
                </li>
                <li>
                  Действия по обработке персональных данных включают сбор, запись, систематизацию,
                  накопление, хранение, уточнение (обновление, изменение), извлечение,
                  использование, передачу (распространение, предоставление, доступ), обезличивание,
                  блокирование, удаление и уничтожение.
                </li>
                <li>
                  Базы данных информации, содержащей персональные данные граждан Российской
                  Федерации, находятся на территории Российской Федерации.
                </li>
              </ol>
            </li>
            <li>
              <b>Обработка персональных данных работников</b>
              <ol>
                <li>
                  Оператор обрабатывает персональные данные работников Оператора в рамках
                  правоотношений, урегулированных Трудовым Кодексом Российской Федерации от 30
                  декабря 2001 г. № 197-ФЗ (далее — ТК РФ), в том числе главой 14 ТК РФ, касающейся
                  защиты персональных данных работников.
                </li>
                <li>
                  Оператор обрабатывает персональные данные работников с целью выполнения трудовых
                  договоров, соблюдения норм законодательства РФ, а также с целью: — вести кадровый
                  учёт; — вести бухгалтерский учёт; — осуществлять функции, полномочия и
                  обязанности, возложенные законодательством РФ на Оператора, в том числе по
                  предоставлению персональных данных в органы государственной власти, в Пенсионный
                  фонд РФ, в Фонд социального страхования РФ, в Федеральный фонд обязательного
                  медицинского страхования, а также в иные государственные органы; — соблюдать нормы
                  и требования по охране труда и обеспечения личной безопасности работников ООО
                  "ДЕГТЯРНЫЙ", сохранности имущества; — контролировать количество и качество
                  выполняемой работы.
                </li>
                <li>
                  Оператор не принимает решения, затрагивающие интересы работников, основываясь на
                  их персональных данных, полученных электронным образом или исключительно в
                  результате автоматизированной обработки.
                </li>
                <li>
                  Оператор защищает персональные данные работников за счет собственных средств в
                  порядке, установленном ТК РФ, ФЗ «О персональных данных» и иными федеральными
                  законами.
                </li>
                <li>
                  Оператор знакомит работников и их представителей под роспись с документами,
                  устанавливающими порядок обработки персональных данных работников, а также об их
                  правах и обязанностях в этой области.
                </li>
                <li>
                  Оператор разрешает доступ к персональным данным работников только допущенным
                  лицам, которые имеют право получать только те данные, которые необходимы для
                  выполнения их функций.
                </li>
                <li>
                  Оператор получает все персональные данные работников у них самих. Если данные
                  работника возможно получить только у третьей стороны, Оператор заранее уведомляет
                  об этом работника и получает его письменное согласие. Оператор сообщает работнику
                  о целях, источниках, способах получения, а также о характере подлежащих получению
                  данных и последствиях отказа работника дать письменное согласие на их получение.
                </li>
                <li>
                  Оператор обрабатывает персональные данные работников с их письменного согласия,
                  предоставляемого на срок действия трудового договора.
                </li>
                <li>
                  Оператор обрабатывает персональные данные работников в течение срока действия
                  трудового договора. Оператор обрабатывает персональные данные уволенных работников
                  в течение срока, установленного п. 5 ч. 3 ст. 24 части первой Налогового Кодекса
                  Российской Федерации от 31 июля 1998 г. № 146-ФЗ, ч. 1 ст. 29 Федерального закона
                  «О бухгалтерском учёте» от 6 декабря 2011 г. № 402-ФЗ и иными нормативными
                  правовыми актами.
                </li>
                <li>
                  Оператор может обрабатывать специальные категории персональных данных работников
                  (сведений о состоянии здоровья, относящихся к вопросу о возможности выполнения ими
                  трудовых функций) на основании п. 2.3 ч. 2 ст. 10 ФЗ «О персональных данных».
                </li>
                <li>Оператор не обрабатывает биометрические персональные данные работников.</li>
                <li>
                  Оператор не получает данные о членстве работников в общественных объединениях или
                  их профсоюзной деятельности, за исключением случаев, предусмотренных ТК РФ или
                  иными федеральными законами.
                </li>
                <li>
                  Оператор обрабатывает следующие персональные данные работников: — Фамилия, имя,
                  отчество; — Тип, серия и номер документа, удостоверяющего личность; — Дата выдачи
                  документа, удостоверяющего личность, и информация о выдавшем его органе; — Год
                  рождения; — Месяц рождения; — Дата рождения; — Место рождения; — Адрес; — Номер
                  контактного телефона; — Идентификационный номер налогоплательщика; — Номер
                  страхового свидетельства государственного пенсионного страхования; — Адрес
                  электронной почты.
                </li>
                <li>
                  Оператор не сообщает третьей стороне персональные данные работника без его
                  письменного согласия, кроме случаев, когда это необходимо для предупреждения
                  угрозы жизни и здоровью работника, а также в других случаях, предусмотренных ТК
                  РФ, ФЗ «О персональных данных» или иными федеральными законами.
                </li>
                <li>
                  Оператор не сообщает персональные данные работника в коммерческих целях без его
                  письменного согласия.
                </li>
                <li>
                  Оператор передаёт персональные данные работников их представителям в порядке,
                  установленном ТК РФ, ФЗ «О персональных данных» и иными федеральными законами, и
                  ограничивает эту информацию только теми данными, которые необходимы для выполнения
                  представителями их функций.
                </li>
                <li>
                  Оператор предупреждает лиц, получающих персональные данные работника, что эти
                  данные могут быть использованы только в целях, для которых они сообщены, требует
                  от этих лиц подтверждения, что это правило соблюдено.
                </li>
                <li>
                  В порядке, установленном законодательством, и в соответствии со ст. 7 ФЗ «О
                  персональных данных» для достижения целей обработки персональных данных и с
                  согласия работников Оператор предоставляет персональные данные работников или
                  поручает их обработку следующим лицам: — Государственные органы (ПФР, ФНС, ФСС и
                  др.).
                </li>
                <li>
                  Работник может получить свободный бесплатный доступ к информации о его
                  персональных данных и об обработке этих данных. Работник может получить копию
                  любой записи, содержащей его персональные данные, за исключением случаев,
                  предусмотренных федеральным законом.
                </li>
                <li>
                  Работник может получить доступ к медицинской документации, отражающей состояние
                  его здоровья, с помощью медицинского работника по его выбору.
                </li>
                <li>Работник может определить представителя для защиты его персональных данных.</li>
                <li>
                  Работник может требовать исключить или исправить свои неверные или неполные
                  персональные данные, а также данные, обработанные с нарушением требований ТК РФ,
                  ФЗ «О персональных данных» или иного федерального закона. При отказе Оператора
                  исключить или исправить персональные данные работника он может заявить в
                  письменной форме о своем несогласии и обосновать такое несогласие. Работник может
                  дополнить персональные данные оценочного характера заявлением, выражающим его
                  собственную точку зрения.
                </li>
                <li>
                  Работник может требовать известить всех лиц, которым ранее были сообщены его
                  неверные или неполные персональные данные, обо всех произведенных в них
                  исключениях, исправлениях или дополнениях.
                </li>
                <li>
                  Работник может обжаловать в суд любые неправомерные действия или бездействие
                  Оператора при обработке и защите его персональных данных.
                </li>
              </ol>
            </li>
            <li>
              <b>Сведения об обеспечении безопасности персональных данных</b>
              <ul>
                <li>
                  Оператор назначает ответственного за организацию обработки персональных данных для
                  выполнения обязанностей, предусмотренных ФЗ «О персональных данных» и принятыми в
                  соответствии с ним нормативными правовыми актами.
                </li>
                <li>
                  Оператор применяет комплекс правовых, организационных и технических мер по
                  обеспечению безопасности персональных данных для обеспечения конфиденциальности
                  персональных данных и их защиты от неправомерных действий: — обеспечивает
                  неограниченный доступ к Политике, копия которой размещена по адресу нахождения
                  Оператора, а также может быть размещена на сайте Оператора (при его наличии); — во
                  исполнение Политики утверждает и приводит в действие документ «Положение об
                  обработке персональных данных» (далее — Положение) и иные локальные акты; —
                  производит ознакомление работников с положениями законодательства о персональных
                  данных, а также с Политикой и Положением; — осуществляет допуск работников к
                  персональным данным, обрабатываемым в информационной системе Оператора, а также к
                  их материальным носителям только для выполнения трудовых обязанностей; —
                  устанавливает правила доступа к персональным данным, обрабатываемым в
                  информационной системе Оператора, а также обеспечивает регистрацию и учёт всех
                  действий с ними; — производит оценку вреда, который может быть причинен субъектам
                  персональных данных в случае нарушения ФЗ «О персональных данных»; — производит
                  определение угроз безопасности персональных данных при их обработке в
                  информационной системе Оператора; — применяет организационные и технические меры и
                  использует средства защиты информации, необходимые для достижения установленного
                  уровня защищенности персональных данных; — осуществляет обнаружение фактов
                  несанкционированного доступа к персональным данным и принимает меры по
                  реагированию, включая восстановление персональных данных, модифицированных или
                  уничтоженных вследствие несанкционированного доступа к ним; — производит оценку
                  эффективности принимаемых мер по обеспечению безопасности персональных данных до
                  ввода в эксплуатацию информационной системы Оператора; — осуществляет внутренний
                  контроль соответствия обработки персональных данных ФЗ «О персональных данных»,
                  принятым в соответствии с ним нормативным правовым актам, требованиям к защите
                  персональных данных, Политике, Положению и иным локальным актам, включающий
                  контроль за принимаемыми мерами по обеспечению безопасности персональных данных и
                  их уровня защищенности при обработке в информационной системе Оператора.
                </li>
              </ul>
            </li>
            <li>
              <b>Права субъектов персональных данных</b>
              <ol>
                <li>
                  Субъект персональных данных имеет право: — на получение персональных данных,
                  относящихся к данному субъекту, и информации, касающейся их обработки; — на
                  уточнение, блокирование или уничтожение его персональных данных в случае, если они
                  являются неполными, устаревшими, неточными, незаконно полученными или не являются
                  необходимыми для заявленной цели обработки; — на отзыв данного им согласия на
                  обработку персональных данных; — на защиту своих прав и законных интересов, в том
                  числе на возмещение убытков и компенсацию морального вреда в судебном порядке; —
                  на обжалование действий или бездействия Оператора в уполномоченный орган по защите
                  прав субъектов персональных данных или в судебном порядке.
                </li>
                <li>
                  Для реализации своих прав и законных интересов субъекты персональных данных имеют
                  право обратиться к Оператору либо направить запрос лично или с помощью
                  представителя. Запрос должен содержать сведения, указанные в ч. 3 ст. 14 ФЗ «О
                  персональных данных».
                </li>
              </ol>
            </li>
          </ol>
        </div>
        {/* <div className={styles.content}>
          <p className={styles.notice}>
            Использование сервисов сайта означает безоговорочное согласие пользователя с настоящей
            Политикой и указанными в ней условиями обработки его персональных данных;{' '}
          </p>
          <p className={styles.notice}>
            В случае несогласия с этими условиями пользователь должен воздержаться от использования
            сайта.
          </p>
          <p>
            Согласие дается, в том числе, на возможные информационные (рекламные) оповещения в том
            числе, но не ограничиваясь, на:
          </p>
          <ul>
            <li>осуществление информационных рассылок</li>
            <li>рассылок о маркетинговых мероприятиях</li>
            <li>специальных предложениях и акциях посредством SMS и e-mail</li>
            <li>осуществление информационных рассылок</li>
          </ul>
          <p>
            Пользователь подтверждает, что, давая такое согласие, действует по собственной воле и в
            своих интересах.
          </p>
          <h3>
            Персональная Информация Пользователей, Которую Получает И Обрабатывает Администрация
            Сайта
          </h3>
          <ol>
            <li>
              В рамках настоящей Политики под персональной информацией пользователя понимаются:
              <ul>
                <li>
                  Персональная информация, которую пользователь предоставляет о себе самостоятельно
                  при заполнении и отправлении интерактивных форм на сайте, в том числе, но не
                  ограничиваясь: фамилия, имя и отчество; контактный телефон и/или адрес электронной
                  почты.
                </li>
                <li>
                  Данные, которые автоматически передаются Администрации сайта в процессе их
                  использования с помощью установленного на устройстве пользователя программного
                  обеспечения, в том числе IP-адрес, информация из cookie, информация о браузере
                  пользователя (или иной программе, с помощью которой осуществляется доступ к
                  сайту), время доступа, адрес запрашиваемой страницы и т.д.
                </li>
              </ul>
            </li>
            <li>
              Настоящая Политика применима только к данному сайту. Администрация сайта не
              контролирует и не несет ответственность за сайты третьих лиц, на которые пользователь
              может перейти по ссылкам, доступным на действующем сайте.
            </li>
            <li>
              Администрация сайта в общем случае не проверяет достоверность персональной информации,
              предоставляемой пользователями, и не осуществляет контроль за их дееспособностью.
            </li>
          </ol>
          <h3>Цели Сбора И Обработки Персональной Информации Пользователей</h3>
          <ol>
            <li>
              Администрация сайта собирает и хранит только те персональные данные, которые
              необходимы для обслуживания и для улучшения качества предоставляемых услуг.
            </li>
            <li>Проведение статистических и иных исследований на основе обезличенных данных.</li>
            <li>Получение сводной информации о пользователях сайта в маркетинговых целях.</li>
          </ol>
          <h3>
            Условия Обработки Персональной Информации Пользователя И Ее Передачи Третьим Лицам
          </h3>
          <ol>
            <li>
              Администрация сайта хранит персональную информацию пользователей в соответствии с
              положениями Федерального закона от 27.07.2006 г. № 152-ФЗ «О персональных данных». В
              ходе обработки с персональными данными могут быть совершены следующие действия: сбор;
              запись; систематизация; накопление; хранение; уточнение (обновление, изменение);
              использование; обезличивание; удаление; уничтожение.
            </li>
            <li>
              В отношении персональных данных пользователя сохраняется их конфиденциальность, кроме
              случаев добровольного предоставления пользователем информации о себе для общего
              доступа неограниченному кругу лиц.
            </li>
            <li>
              Администрация сайта вправе передать персональную информацию пользователя третьим лицам
              в следующих случаях:
              <ul>
                <li>Пользователь явно выразил свое согласие на такие действия;</li>
                <li>
                  Передача необходима в рамках использования пользователем определенного сервиса
                  либо для оказания услуги пользователю. При этом обеспечивается конфиденциальность
                  персональной информации, а пользователь будет явным образом уведомлен о такой
                  передаче;
                </li>
                <li>
                  Передача предусмотрена российским или иным применимым законодательством в рамках
                  установленной законодательством процедуры;
                </li>
              </ul>
            </li>
          </ol>
          <h3>Изменение Пользователем Персональной Информации</h3>
          <ol>
            <li>
              Пользователь может направить запрос Администрации сайта на изменение или удаление
              персональной информации на электронный адрес <b>hotel@friendlyinn.ru</b> с указанием
              данных необходимых для удаления.
            </li>
          </ol>
          <h3>Меры, Применяемые Для Защиты Персональной Информации Пользователей</h3>
          <ol>
            <li>
              Администрация сайта принимает необходимые и достаточные организационные и технические
              меры для защиты персональной информации пользователя от неправомерного или случайного
              доступа, уничтожения, изменения, блокирования, копирования, распространения, а также
              от иных неправомерных действий с ней третьих лиц.
            </li>
          </ol>
          <h3>Изменение Политики Конфиденциальности. Применимое Законодательство</h3>
          <ol>
            <li>
              Администрация сайта имеет право вносить изменения в настоящую Политику
              конфиденциальности без дополнительных уведомлений. Нововведения вступают в силу с
              момента их опубликования. Пользователи могут отслеживать изменения в Политике
              конфиденциальности самостоятельно.
            </li>
            <li>
              К настоящей Политике и отношениям между пользователем и Администрацией сайта,
              возникающим в связи с применением Политики конфиденциальности, подлежит применению
              право Российской Федерации.
            </li>
          </ol>
        </div> */}
      </section>
    </Layout>
  )
}

export default Privacy
