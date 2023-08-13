import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function App({ Component, pageProps }: AppProps) {
  return (
   

      <div className=" flex ">
      <Sidebar/>
      <div className="flex-col">
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
     
  )
}
