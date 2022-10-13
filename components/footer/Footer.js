import Benefits from "./Benefits";
import Actions from "./Actions";
import Mission from "./Mission";
import Social from "./Social";
import Credits from "./Credits";
import MenuData2 from "/data/MenuData2";

export default function Footer({ data, menu }) {
  return (
    <footer>
      <Benefits title={data.benefits.title} body={data.benefits.body} link={data.benefits.link} linkText={data.benefits.linkText} />
      <Actions />
      <Mission mission={data.mission} />
      <Social facebook={data.social.facebook} instagram={data.social.instagram} youtube={data.social.youtube} menu2={MenuData2} menu={menu} />
      <Credits author={data.author} />
    </footer>
  );
}
