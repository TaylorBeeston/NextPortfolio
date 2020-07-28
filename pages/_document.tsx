import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="application-name" content="Taylor Beeston Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Taylor Beeston Portfolio"
          />
          <meta name="description" content="Taylor Beeston's Portfolio" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#90cdf4" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#90cdf4" />

          <meta
            name="viewport"
            content="minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

          <meta name="theme-color" content="#90cdf4" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://taylorbeeston.dev" />
          <meta name="twitter:title" content="Taylor Beeston" />
          <meta
            name="twitter:description"
            content="Taylor Beeston's Portfolio Website"
          />
          <meta
            name="twitter:image"
            content="https://taylorbeeston.dev/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@AshleysBrother" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Taylor Beeston Portfolio" />
          <meta
            property="og:description"
            content="Taylor Beeston's Portfolio"
          />
          <meta property="og:site_name" content="Taylor Beeston Portfolio" />
          <meta property="og:url" content="https://taylorbeeston.dev" />
          <meta
            property="og:image"
            content="https://taylorbeeston.dev/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
