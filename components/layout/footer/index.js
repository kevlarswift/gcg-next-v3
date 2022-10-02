import * as React from "react";
import Actions from "./actions";
import Credits from "./credits";
import Mission from "./mission";
import Social from "./social";

export default function Footer() {
  const author = "United States Coast Guard. All Rights Reserved.";
  const mission =
    "Our core values—honor, respect, and devotion to duty, are the guiding principles used to defend and preserve the United States of America. We protect the personal safety and security of our people; the marine transportation system and infrastructure; our natural and economic resources; and the territorial integrity of our nation—from both internal and external threats, natural and man-made. We protect these interests in U.S. ports, inland waterways, along the coasts, and on international waters.";
  const facebook = "https://www.facebook.com/GoCoastGuard";
  const instagram = "https://www.instagram.com/gocoastguard";
  const youtube = "http://www.youtube.com/user/USCGRecruiting/featured";

  return (
    <footer>
      <Actions />
      <Mission mission={mission} />
      <Social facebook={facebook} instagram={instagram} youtube={youtube} />
      <Credits author={author} />
    </footer>
  );
}
