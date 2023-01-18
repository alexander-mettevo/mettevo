import MainLayout from "@/components/layout/MainLayout";
import {GlobalStyles} from "@/styles/global";
import {headerMenuSlice} from "@/store/slices/headerMenuSlice/HeaderMenuSlice";
import {wrapper} from "@/store/store";
// import localFont from "@next/font/local"
//
// const monaSans = localFont({
//   src: "./fonts/mona-sans-1.0/MonaSans.woff2",
// })

function App({Component, pageProps}) {
  return (
    <>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
    </>
  )
}

export default wrapper.withRedux(App);