import Link from "next/link";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <img src="/images/header/logo-uscg.svg" className={styles.desktop} alt="Shield of the United States Coast Guard" />
        <img src="/images/header/logo-mark.svg" className={styles.mobile} alt="Shield of the United States Coast Guard" />
      </a>
    </Link>
  );
}
