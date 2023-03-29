import '@/styles/globals.css'
import "react-multi-carousel/lib/styles.css";
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import {useRouter} from "next/router";
import { analytics, app, isSupported, logPageEvent } from '../utils/firebase';

export default function App({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements' as any)).default;
    };
    use();
  }, []);

  useEffect(() => {
    if (process.env.ENV === 'production') {
      isSupported().then((supported) => {
        !supported && analytics(app);
      })

      routers.events.on('routeChangeComplete', logPageEvent);
      logPageEvent(document.title, window.location.pathname);
    }
      return () => {
        routers.events.off('routeChangeComplete', logPageEvent);
      };
  }, [])

  return <Component {...pageProps} />
}
