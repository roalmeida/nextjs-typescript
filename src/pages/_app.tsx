import { AppProps } from 'next/app'

import '../assets/scss/styles.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
