import ReactPlayer from "react-player";
import styles from "./Player.module.scss"

export default function Player({ input }) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer className={styles.player} url={input} width="100%" height="100%" controls />
    </div>
  );
}
