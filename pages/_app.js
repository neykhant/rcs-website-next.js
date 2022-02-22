import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Real Code Solution</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/home/tab-logo.png"
        />
        <meta
          name="description"
          content="Real Code Solution Company Limited Official Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
