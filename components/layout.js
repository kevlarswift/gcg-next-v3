import { PreviewAlert } from "/components/preview-alert"
import ChatBtn from "/components/layout/ChatBtn";
import Header from "/components/layout/header/Header"
import Footer from "/components/layout/footer/Footer"

export function Layout({ children, menus, global }) {
  return (
    <>
      <PreviewAlert />
      <ChatBtn />
      <Header menu={menus.main.tree} motto={global.field_motto.processed} />
      <main className="page">{children}</main>
      <div style={{ backgroundColor: 'red'}}><div id="LP_DIV_1614023441824"></div></div>
      <Footer 
        facebook={global.field_social_facebook} 
        instagram={global.field_social_instagram} 
        youtube={global.field_social_youtube} 
        benefitsTitle={global.field_benefits_title.processed} 
        benefitsBody={global.field_benefits_body.processed} 
        benefitsLink={global.field_benefits_link} 
        actionsBody={global.field_actions_body.processed}
        author={global.field_author.processed} 
        mission={global.field_mission.processed} 
        menus={menus} 
      /> 
    </>
  )
}
