import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default MyApp
