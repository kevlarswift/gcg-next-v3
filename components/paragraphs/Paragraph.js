import ParagraphBody from "./ParagraphBody";
import ParagraphBanner from "./ParagraphBanner";
import ParagraphVideo from "./ParagraphVideo";
import ParagraphImage from "./ParagraphImage";

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

  return <Component content={content} />;
}
