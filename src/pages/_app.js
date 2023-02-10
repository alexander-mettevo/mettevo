import MainLayout from "@/components/layout/MainLayout";
import {wrapper} from "@/store/store";
import {useEffect} from "react";
import {Provider} from "react-redux";
import 'swiper/css';
import '@/styles/scss/global.scss';

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);


  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default App;