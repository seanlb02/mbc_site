import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>MBC</title>
        <link rel="icon" type="image/x-icon" href="/mbc_small.png"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-4.7.0.min.css" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
