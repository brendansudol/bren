import "@/styles/globals.css"
import { JetBrains_Mono } from "@next/font/google"
import type { AppProps } from "next/app"

const mono = JetBrains_Mono({
  style: ["normal"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
