import Image from 'next/image'
import TitleSec from '../title'
import Button from '../button'

import styles from './come.module.scss'
import Script from 'next/script'

const ComeSection = () => {
  return (
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
              Приглашаем Вас посетить любой из наших отелей и ресторанов, где мы в реальном времени
              покажем, как у нас все работает.
            </p>
            <p>Познакомим с нашей командой и ответим на Ваши вопросы</p>
          </div>
          <div className={styles.come_actions}>
            <Script strategy='afterInteractive'>
              {`(function(w,d,u){
              var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
              var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
              })(window,document,'https://cdn-ru.bitrix24.ru/b29346204/crm/form/loader_18.js');`}
            </Script>
            <script
              data-b24-form='click/18/tj6irf'
              data-skip-moving='true'
            />
            <Button
              type='button'
              // onClick={comeButtonHandler}
            >
              Хочу в гости
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ComeSection
