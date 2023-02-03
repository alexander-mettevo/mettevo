import MainLayout from "@/components/layout/MainLayout";
import {wrapper} from "@/store/store";
import {useEffect, useState} from "react";
import {Preloader} from "@/styles/assets/Preloader";
import {Provider} from "react-redux";
import localFont from '@next/font/local'
import 'swiper/css';
import '@/styles/scss/style.scss';

const MonaSans = localFont({
  src: '/fonts/mona-sans-1.0/MonaSans.woff2' ,
  variable: '--main-font',
})
const Helvetica = localFont({
  src: '/fonts/helvetica/helvetica-neue-lt-com-77-bold-condensed.woff' ,
  variable: '--helvetica-font',
})

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <Provider store={store}>
      {
        loading && <Preloader/>
      }
      <MainLayout fonts={[MonaSans.variable, Helvetica.variable]}>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default App;