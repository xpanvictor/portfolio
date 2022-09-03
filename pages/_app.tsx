import '../styles/globals.css'
import type { AppPropsWithLayout } from '../types/page_w_layout'
import Layout from "../src/Layout";
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
