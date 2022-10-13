import { PreviewAlert } from "components/preview-alert"
import ChatBtn from "components/layout/ChatBtn";
import Header from "components/layout/header/Header"
import Footer from "components/footer/Footer"
import LayoutData from "data/LayoutData"

export function Layout({ children, menus }) {
  return (
    <>
      <PreviewAlert />
      <ChatBtn />
      <Header data={LayoutData.header} menu={menus.main.tree} />
      <main className="page">{children}</main>
      <Footer data={LayoutData.footer} menus={menus} />
    </>
  )
}
