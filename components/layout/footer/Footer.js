import Benefits from "./Benefits";
import Actions from "./Actions";
import Mission from "./Mission";
import Social from "./Social";
import Credits from "./Credits";

export default function Footer({ benefitsTitle, benefitsBody, benefitsLink, benefitsLinkText, mission, facebook, instagram, youtube, author }) {
  return (
    <footer>
      <Benefits title={benefitsTitle} body={benefitsBody} link={benefitsLink} linkText={benefitsLinkText} />
      <Actions />
      <Mission mission={mission} />
      <Social facebook={facebook} instagram={instagram} youtube={youtube} />
      <Credits author={author} />
    </footer>
  );
}
