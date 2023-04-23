import { ToastContainer } from 'react-toastify'
import NavigationLoader from '@/components/ui/loader'

import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavigationLoader />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default App
