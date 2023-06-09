import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const metrikaHtml = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")`

  return (
    <Html lang='ru'>
      <Head>
        <meta
          name='yandex-verification'
          content='441b1a9197945299'
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              ${metrikaHtml}
              ym(93348393, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        /> */}
      </Head>
      <body id='body_id'>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}
