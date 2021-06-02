import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Victor Dias | Front-end Developer</title>
        <meta
          name="description"
          content="Este é um simples portfólio para uma breve apresentação sobre mim, Victor Dias, como desenvolvedor."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
