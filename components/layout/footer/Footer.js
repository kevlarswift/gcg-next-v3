import Benefits from "components/footer/Benefits";
import Actions from "components/footer/Actions";
import Mission from "components/footer/Mission";
import Social from "components/footer/Social";
import Credits from "components/footer/Credits";
import MenuData1 from "data/MenuData1";
import MenuData2 from "data/MenuData2";

export default function Footer({ data }) {
  return (
    <footer>
      <Benefits title={data.benefits.title} body={data.benefits.body} link={data.benefits.link} linkText={data.benefits.linkText} />
      <Actions />
      <Mission mission={data.mission} />
      <Social facebook={data.social.facebook} instagram={data.social.instagram} youtube={data.social.youtube} menu1={MenuData1} menu2={MenuData2} />
      <Credits author={data.author} />
    </footer>
  );
}
