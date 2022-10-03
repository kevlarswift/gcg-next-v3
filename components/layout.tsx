import Header from "components/layout/header/Header"
import Footer from "components/layout/footer/Footer"
import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  const motto = "SEMPER PARATUS - ALWAYS READY";
  const author = "United States Coast Guard. All Rights Reserved.";
  const mission =
    "Our core values—honor, respect, and devotion to duty, are the guiding principles used to defend and preserve the United States of America. We protect the personal safety and security of our people; the marine transportation system and infrastructure; our natural and economic resources; and the territorial integrity of our nation—from both internal and external threats, natural and man-made. We protect these interests in U.S. ports, inland waterways, along the coasts, and on international waters.";
  const facebook = "https://www.facebook.com/GoCoastGuard";
  const instagram = "https://www.instagram.com/gocoastguard";
  const youtube = "http://www.youtube.com/user/USCGRecruiting/featured";
  const benefitsTitle = "Launch your career. Earn great benefits.";
  const benefitsBody = "The Coast Guard offers you the chance to learn, lead, and launch a great career. You’ll get specialized training in fields like law enforcement, environmental science, engineering, healthcare, and more—plus benefits like tuition assistance, 30 days of paid vacation annually, and medical, dental, and vision care.";
  const benefitsLink = "/why-join/pay-benefits";
  const benefitsLinkText = "Learn about Pay and Benefits";

  return (
    <>
      <PreviewAlert />
      <div className="">
        <Header motto={motto} />
        <main className="">{children}</main>
        <Footer 
          benefitsTitle={benefitsTitle} 
          benefitsBody={benefitsBody} 
          benefitsLink={benefitsLink} 
          benefitsLinkText={benefitsLinkText} 
          mission={mission} 
          facebook={facebook} 
          instagram={instagram} 
          youtube={youtube} 
          author={author}
        />
      </div>
    </>
  )
}
