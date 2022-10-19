import { PreviewAlert } from "components/preview-alert"
import ChatBtn from "components/layout/ChatBtn";
import Header from "components/layout/header/Header"
import Footer from "components/layout/footer/Footer"

export function Layout({ children, menus, global }) {
  return (
    <>
      <PreviewAlert />
      <ChatBtn />
      <Header menu={menus.main.tree} motto={global[0].field_motto.processed} />
      <main className="page">{children}</main>
      <Footer 
        facebook={global[0].field_social_facebook} 
        instagram={global[0].field_social_instagram} 
        youtube={global[0].field_social_youtube} 
        benefitsTitle={global[0].field_benefits_title.processed} 
        benefitsBody={global[0].field_benefits_body.processed} 
        benefitsLink={global[0].field_benefits_link} 
        author={global[0].field_author.processed} 
        mission={global[0].field_mission.processed} 
        menus={menus} 
      />
    </>
  )
}
