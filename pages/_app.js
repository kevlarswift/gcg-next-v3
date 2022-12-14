import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter, Router } from 'next/router'
import { syncDrupalPreviewRoutes } from "next-drupal"

import { GTM_ID, pageview } from '../lib/gtm'
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/global.scss";

Router.events.on("routeChangeStart", function (path) {
  syncDrupalPreviewRoutes(path)
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      {/* GTM */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
