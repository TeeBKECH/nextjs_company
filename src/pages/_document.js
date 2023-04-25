import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ru'>
      <Head />
      <body id='body_id'>
        <Main />
        <NextScript />
        <div id='modal-root'></div>
      </body>
    </Html>
  )
}
