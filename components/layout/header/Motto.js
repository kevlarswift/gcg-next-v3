import { Container } from "react-bootstrap";
import styles from "./Motto.module.scss";

export default function Motto({ motto }) {
  return (
    <div className={styles.motto}>
      <Container>
        <div className={styles.inner}>{motto}</div>
      </Container>
    </div>
  );
}
