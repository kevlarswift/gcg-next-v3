import Header from "components/layout/header/Header"
import Footer from "components/layout/footer/Footer"
import { PreviewAlert } from "components/preview-alert"
import LayoutData from "data/LayoutData"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="">
        <Header data={LayoutData.header} />
        <main className="">{children}</main>
        <Footer data={LayoutData.footer} />
      </div>
    </>
  )
}
