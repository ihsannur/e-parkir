/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.scss";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence } from "framer-motion";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <div>
        <Head>
          <title>E - Parkir</title>
          <link rel="shortcut icon" href="/assets/icon/icon-pkss.png" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          ></link>
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossOrigin="anonymous"
          ></script>

          <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
          <link
            href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css"
            rel="stylesheet"
          />
        </Head>
      </div>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <NextNProgress
          color="#f45050"
          startPosition={0.3}
          stopDelayMs={200}
          height="4"
        />
        <Component {...pageProps} />
      </AnimatePresence>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>
      <script src="summernote-bs5.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaoqkOMCgJ0YcjudoqK3PeCZFt_uC0REw"></script>
    </>
  );
}

export default MyApp;
