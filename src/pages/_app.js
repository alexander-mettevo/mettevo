import MainLayout from "@/components/layout/MainLayout";
import {GlobalStyles} from "@/styles/global";
import {menuSlice} from "@/store/slices/menuSlice/MenuSlice";
import {wrapper} from "@/store/store";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Preloader} from "@/styles/assets/Preloader";
// import localFont from "@next/font/local"
//
// const monaSans = localFont({
//   src: "./fonts/mona-sans-1.0/MonaSans.woff2",
// })

function App({Component, pageProps}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);

  return (
    <>
      {
        loading && <Preloader/>
      }
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default wrapper.withRedux(App);