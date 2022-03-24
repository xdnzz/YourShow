import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Header from '../src/components/Header/index';

// const text = document.title="Your Show"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} /></>
}

export default MyApp
