import { useState } from "react";
import { useRouter } from "next/router";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faSearch,
  faClose,
  faMapMarkerAlt,
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
            
            {/** Get Started */}
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/get-started");
                  }}>
                  Get Started <FontAwesomeIcon icon={faArrowRight} size="2xs" className={styles.icon} />
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

            {/** CAREERS */}
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/careers");
                  }}>
                  Careers <FontAwesomeIcon icon={faArrowRight} size="2xs" className={styles.icon} />
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

            {/** WHY JOIN */}
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/why-join");
                  }}>
                  Why Join <FontAwesomeIcon icon={faArrowRight} size="2xs" className={styles.icon} />
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

            {/** ABOUT */}
            <div className={styles.section}>
              <div className={styles.subtitle}>
                <div
                  onClick={() => {
                    handleOpenMenu();
                    router.push("/about");
                  }}>
                  About <FontAwesomeIcon icon={faArrowRight} size="2xs" className={styles.icon} />
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
