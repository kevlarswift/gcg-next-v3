import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import styles from "./ChatBtn.module.scss";

export default function ChatBtn() {
  return (
    <div className={`${styles.chat} transition-default`}>
      <div className={`${styles.btn} transition-default`}>
        <button><div id="LP_DIV_1614023441824">&nbsp;</div></button>
        <Link href="/chat-now">
          <a className={`${styles.btn} transition-default`}>
            <div className={styles.text}>Chat Now</div>
            <div className={`${styles.icon} transition-default`}>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
