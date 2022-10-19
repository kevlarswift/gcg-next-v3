import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.scss";
import logoDesktop from "/public/images/header/logo-uscg.svg";
import logoMobile from "/public/images/header/logo-mark.svg";

export default function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <div className={styles.desktop}>
          <Image src={logoDesktop} width={350} height={44} alt="Shield of the United States Coast Guard" />
        </div>
        <div className={styles.mobile}>
          <Image src={logoMobile} width={85} height={52} alt="Shield of the United States Coast Guard" />
        </div>
      </a>
    </Link>
  );
}
