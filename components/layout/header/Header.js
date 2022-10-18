import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faSearch,
  faClose,
  faMapMarkerAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import Motto from "./Motto";
import Logo from "./Logo";
import styles from "./Header.module.scss";

export default function Header({ menu, motto }) {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleShowSearch = () => {
    router.push("/search");
  };

  return (
    <header className={styles.header}>
      <Motto motto={motto} />
      <nav>
        <div className={styles.menuChat}>
          <button
            onClick={() => handleOpenMenu()}
            aria-controls="collapse-menu"
            aria-expanded={openMenu}
            className={styles.navigate}>
            <div className={styles.iconBorder}>
              {openMenu ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <span className={styles.iconText}>Navigate</span>
          </button>
          <div className={styles.divider} />
          <button onClick={() => router.push("/chat-now")} className={styles.mobileChat}>
            <div className={styles.iconBorder}>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </button>
        </div>
        <Logo />
        <div className={styles.connectSearch}>
          <button className={styles.connect} onClick={() => router.push("/find-recruiter")}>
            <div className={styles.iconBorder}>
              <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
            </div>
            <span className={styles.iconText}>Connect</span>
          </button>
          <div className={styles.divider} />
          <button className={styles.search} onClick={handleShowSearch} aria-label="Search">
            <div className={styles.iconBorder}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </button>
        </div>
      </nav>

      <Collapse in={openMenu}>
        <div id="collapse-menu">
          <div className={styles.megaMenu}>
            <div className={styles.section}>
              <div
                className={styles.imageWrapper}
                onClick={() => {
                  handleOpenMenu();
                  router.push("/why-join");
                }}>
                <Image src="/images/header/menu/why-join.jpg" className={styles.image} width={"100%"} alt="Why Join" />
              </div>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/why-join");
                  }}>
                  <FontAwesomeIcon icon={faArrowRight} className={`${styles.icon} ${styles.white}`} />
                  Why Join <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </div>
              </div>

              {menu[0].items.map((item) => {
                return (
                  <div
                    className={styles.subpageLink}
                    key={item.id}
                    onClick={() => {
                      handleOpenMenu();
                      router.push(item.url);
                    }}>
                    {item.title}
                  </div>
                );
              })}

            </div>

            <div className={styles.section}>
              <div
                className={styles.imageWrapper}
                onClick={() => {
                  handleOpenMenu();
                  router.push("/careers");
                }}>
                <Image src="/images/header/menu/serve.jpg" className={styles.image} width={'100%'} alt="Serve" />
              </div>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/careers");
                  }}>
                  <FontAwesomeIcon icon={faArrowRight} className={`${styles.icon} ${styles.white}`} />
                  Careers <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </div>
              </div>  
              {menu[1].items.map((item) => {
                return (
                  <div
                    className={styles.subpageLink}
                    key={item.id}
                    onClick={() => {
                      handleOpenMenu();
                      router.push(item.url);
                    }}>
                    {item.title}
                  </div>
                );
              })}
            </div>

            <div className={styles.section}>
              <div
                className={styles.imageWrapper}
                onClick={() => {
                  handleOpenMenu();
                  router.push("/about");
                }}>
                <Image src="/images/header/menu/about.jpg" className={styles.image} width={"100%"} alt="About" />
              </div>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/about");
                  }}>
                  <FontAwesomeIcon icon={faArrowRight} className={`${styles.icon} ${styles.white}`} />
                  About <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </div>
              </div>
              {menu[2].items.map((item) => {
                return (
                  <div
                    className={styles.subpageLink}
                    key={item.id}
                    onClick={() => {
                      handleOpenMenu();
                      router.push(item.url);
                    }}>
                    {item.title}
                  </div>
                );
              })}
            </div>

            <div className={styles.section}>
              <div
                className={styles.imageWrapper}
                onClick={() => {
                  handleOpenMenu();
                  router.push("/joining");
                }}>
                <Image src="/images/header/menu/joining.jpg" className={styles.image} width={"100%"} alt="Joining" />
              </div>

              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/joining");
                  }}>
                  <FontAwesomeIcon icon={faArrowRight} className={`${styles.icon} ${styles.white}`} />
                  Joining <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </div>
              </div>
              {menu[3].items.map((item) => {
                return (
                  <div
                    className={styles.subpageLink}
                    key={item.id}
                    onClick={() => {
                      handleOpenMenu();
                      router.push(item.url);
                    }}>
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Collapse>
    </header>
  );
}
