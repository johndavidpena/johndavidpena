import { useState } from 'react';
import Router from 'next/router'
import * as gtag from '../utils/gtag';
import Layout from '../components/Layout';
import * as Sentry from '@sentry/browser';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function MyApp({ Component, pageProps }) {
  Sentry.init({ dsn: "https://64e7d46598264eda8cb071bf927d0442@o382987.ingest.sentry.io/5212643" });

  Router.events.on('routeChangeComplete', url => gtag.pageview(url));

  const [showForm, setShowForm] = useState(true);

  return (
    <Layout content={(
      <>
        <DefaultSeo {...SEO} />

        <Component {...pageProps} showForm={showForm} setShowForm={setShowForm} />

        <style jsx global>{`
        {/* Breakpoints from https://flaviocopes.com/css-breakpoints/
        mobile portrait: less than 640px
        mobile landscape: > 640px
        tablet portrait: > 768px
        tablet landscape: > 1024px
        laptop: > 1280px
        Design for mobile-first then work up
        @media (min-width: 640px) {}
        @media (min-width: 768px) {}
        @media (min-width: 1024px) {}
        @media (min-width: 1280px) {} */}

        /* SEE...https://github.com/zeit/next.js/issues/512 */
        @font-face {
          font-family: 'Avenir Next';
          font-style: normal;
          font-weight: 400 500 900;
          {/* src: url('../public/fonts/AvenirNext.ttc') format('truetype'); */}
          src: url(../fonts/AvenirNext.ttc);
          font-display: swap;
        }

        :root {
          --text-darkest: hsl(0, 0%, 19%);
          --text-darker: hsl(0, 0%, 31%);
          --text-dark: hsl(0, 0%, 49%);
          --text-normal: hsl(0, 0%, 69%);
          --text-light: hsl(0, 0%, 81%);
          --text-lighter: hsl(0, 0%, 92%);

          --white: hsl(0, 0%, 100%);
          --off-white: hsl(0, 0%, 99%);

          --rhone-orange: #FF6822;
          --rhone-green: #3AD771;
          --blue: #228AFF;
          --light-blue: #7CC1E4;

          --buyer-green: #005D82;
          --buyer-green-light: #D5F7F7;

          --rhone-orange: #FF6822;
          --rhone-orangeText: #FFDCCC;
          --rhone-yellow: #FFC400;
          --rhone-yellowText: #FFF3CC;
          --rhone-green: #3AD771;
          --rhone-greenText: #D5F6E0;
          --rhone-darkBlue: #2B3654;
          --rhone-darkBlueText: #DDE2EE;
          --rhone-lime: #D2E12D;
          --rhone-limeText: #F5F9D2;

          --grey-050: #F7F7F7;
          --grey-100: #E1E1E1;
          --grey-200: #CFCFCF;
          --grey-300: #B1B1B1;
          --grey-400: #9E9E9E;
          --grey-500: #7E7E7E;
          --grey-600: #626262;
          --grey-700: #515151;
          --grey-800: #3B3B3B;
          --grey-900: #222222;

          --box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
          --box-shadow-less: 0 2px 3px 0 hsla(0, 0%, 0%, 0.2);
          --inset-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);

          --default-sans: 'Avenir Next', 'Avenir', 'Roboto', sans-serif;

          --font-smallest: 0.75rem;
          --font-smaller: 1rem;
          --font-size: 1.15rem;
          --font-larger: 1.3rem;
          --font-largest: 1.5rem;

          --border-radius: 5px;
          --obj-margin-mobile: 1rem auto;
          --topObj-margin-mobile: 1rem auto 0 auto;
        }

        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: inherit;
          box-sizing: inherit;
        }

        html {
          font-family: var(--default-sans);
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          overflow-x: hidden;
        }

        body {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background-color: var(--grey-900);
        }

        h1, h2, h3, h4, h5 {
          font-family: var(--default-sans);
          font-weight: 400;
          color: var(--text-normal);
        }

        p, span, a {
          font-family: var(--default-sans);
          font-size: var(--font-size);
          font-weight: 400;
          color: var(--text-light);
          padding: 8px 0;
        }

        img {
          width: 100%;
          border-radius: var(--border-radius);
        }

        a {
          text-decoration: none;
        }

        .absCentered {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }

        .textAlign {
          text-align: center;
        }

        .textNormal {
          color: var(--text-normal);
        }
        .textLight {
          color: var(--text-light);
        }
        .textDark {
          color: var(--text-dark);
        }

        .boxShadow {
          box-shadow: var(--box-shadow);
        }

        /* Below is normalize */
        main {
          display: block;
        }
        hr {
          box-sizing: content-box; /* 1 */
          height: 0; /* 1 */
          overflow: visible; /* 2 */
        }
        pre {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }
        a {
          background-color: transparent;
        }
        abbr[title] {
          border-bottom: none; /* 1 */
          text-decoration: underline; /* 2 */
          text-decoration: underline dotted; /* 2 */
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        samp {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
        }
        button,
        input { /* 1 */
          overflow: visible;
        }
        button,
        select { /* 1 */
          text-transform: none;
        }
        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          -webkit-appearance: button;
        }
        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }
        legend {
          box-sizing: border-box; /* 1 */
          color: inherit; /* 2 */
          display: table; /* 1 */
          max-width: 100%; /* 1 */
          padding: 0; /* 3 */
          white-space: normal; /* 1 */
        }
        progress {
          vertical-align: baseline;
        }
        textarea {
          overflow: auto;
        }
        [type="checkbox"],
        [type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }
        details {
          display: block;
        }
        summary {
          display: list-item;
        }
        template {
          display: none;
        }
        [hidden] {
          display: none;
        }
      `}</style>
      </>
    )} />
  );
}
