import { ToastContainer } from 'react-toastify'

import NavigationLoader from '@/components/ui/loader'

import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className='decor'></div>
      <div className='decor'></div>
      <NavigationLoader />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default App
