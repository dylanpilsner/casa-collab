import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document({ test }: any) {
  return (
    <Html lang="en">
      <Head />
      <link rel="shortcut icon" href="/logotipo.png" />
      <link rel="stylesheet" href="/base.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Poppins:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
