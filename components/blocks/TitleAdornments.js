import styles from "./TitleAdornments.module.scss";

export default function TitleAdornments() {
  return (
    <div className={styles.titleAdornment}>
      <div className={styles.line} />
      <div className={`${styles.slash} ${styles.royal}`} />
      <div className={`${styles.slash} ${styles.red}`} />
      <div className={styles.line} />
    </div>
  );
}
