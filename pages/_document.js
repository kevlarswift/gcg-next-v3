import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GTM_ID } from '../lib/gtm'

class MyDocument extends Document {
  render() {
    return (
      <>
        {/** LP */}
        <Script
          id="liveperson-tag"
          strategy="beforeInteractive"
          src="/public/js/le.js"
        />
        <Html lang="en">
          <Head>
            <link href="https://use.typekit.net/sxh7tqy.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
