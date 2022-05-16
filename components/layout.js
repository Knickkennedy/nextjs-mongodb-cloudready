import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import {useEffect, useState} from 'react';

export const siteTitle = 'Plan your next get away'

export default function Layout({children, home}) {
  const isInitiallyVisible = false
  const [isKeyboardVisible, setKeyboardVisible] = useState(isInitiallyVisible);

  useEffect(() => {

    // toggle isKeyboardVisible on event listener triggered
    window.visualViewport.addEventListener('resize', () => {
      setKeyboardVisible(!isKeyboardVisible)
      console.log('yup')
    });
  }, [isKeyboardVisible])

  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Maybe we can build an entire app here"
        />
        <meta
          property="og:image"
          content={ `https://og-image.vercel.app/${ encodeURI(
            siteTitle
          ) }.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg` }
        />
        <meta name="og:title" content={ siteTitle }/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <main className={ `min-w-[50%] mb-8 ${ isKeyboardVisible ? 'max-h-1/2' : 'max-h-full' }` }>
        { children }
      </main>
      { !home && (
        <div className={ styles.backToHome }>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      ) }
    </div>
  )
}