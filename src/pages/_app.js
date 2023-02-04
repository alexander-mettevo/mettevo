import MainLayout from "@/components/layout/MainLayout";
import {wrapper} from "@/store/store";
import {useEffect, useState} from "react";
import {Preloader} from "@/styles/assets/Preloader";
import {Provider} from "react-redux";
import localFont from '@next/font/local'
import 'swiper/css';
import '@/styles/scss/style.scss';

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
      <MainLayout>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default App;