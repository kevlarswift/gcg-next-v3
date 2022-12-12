import Benefits from "./Benefits";
import Mission from "./Mission";
import Social from "./Social";
import Credits from "./Credits";

export default function Footer({
  facebook,
  instagram,
  youtube,
  benefitsTitle,
  benefitsBody,
  benefitsLink,

  menus,
  author,
  mission
}) {
  return (
    <footer>
      <Benefits
        title={benefitsTitle}
        body={benefitsBody}
        link={benefitsLink.uri}
        linkText={benefitsLink.title}
      />
      <Mission
        mission={mission}
      />
      <Social
        facebook={facebook.uri}
        instagram={instagram.uri}
        youtube={youtube.uri}
        menu1={menus.footer1.tree}
        menu2={menus.footer2.tree}
      />
      <Credits
        author={author}
      />
    </footer>
  );
}
