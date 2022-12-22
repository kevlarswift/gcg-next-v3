import ParagraphBody from "./ParagraphBody";
import ParagraphBanner from "./ParagraphBanner";
import ParagraphVideo from "./ParagraphVideo";
import ParagraphImage from "./ParagraphImage";
import ParagraphCallout from "./ParagraphCallout";
import ParagraphCTA from "./ParagraphCTA";

export default function Paragraph({ content }) {
  let Component = ParagraphBody;

  if (content.type === "paragraph--video") {
    Component = ParagraphVideo;
  }
  else if (content.type === "paragraph--banner") {
    Component = ParagraphBanner;
  } 
  else if (content.type === "paragraph--image") {
    Component = ParagraphImage;
  } 
  else if (content.type === "paragraph--cta") {
    Component = ParagraphCTA;
  }
  else if (content.type === "paragraph--callout") {
    Component = ParagraphCallout;
  } 

  return <Component content={content} />;
}
