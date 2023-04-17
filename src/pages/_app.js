import NavigationLoader from '@/components/ui/loader'

import '@/assets/styles/globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavigationLoader />
      <Component {...pageProps} />
    </>
  )
}

export default App
