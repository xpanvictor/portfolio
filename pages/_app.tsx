import '../styles/globals.css'
import type { AppPropsWithLayout } from '../types/page_w_layout'
import Layout from "../src/Layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
