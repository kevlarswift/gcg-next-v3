import Footer from "components/layout/footer/"
import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="">
        <header>
          <p>header</p>
        </header>
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  )
}
