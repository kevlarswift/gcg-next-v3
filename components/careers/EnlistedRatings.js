import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
//import scrollTo from "gatsby-plugin-smoothscroll";
import styles from "./Careers.module.scss";

export default function EnlistedRatings({ data }) {
  const activeButtonClass = { backgroundColor: "#005CB9", borderColor: "#005CB9", color: "#FFFFFF" };

  let categories = ["All", "Aviation",  "Business",  "STEM", "Law Enforcement", "Communications", "First Response"];

  const [allItems] = useState(data);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSelect = (event) => {
    handleCategory(Number(event.target.value));
  };

  const handleCategory = (i) => {
    setSelectedCategory(i);
    //scrollTo("#careers-anchor");
    if (i !== 0) {
      setFilteredItems(
        allItems.filter((node) => {
          return node.field_rate_cat.includes(categories[i]);
        })
      );
    } else {
      setFilteredItems(allItems);
    }
  };

  return (
    <div className={styles.careers} id="careers-anchor">
      <div className="d-md-none d-sm-block">
        <div className={styles.dropdown}>
          <Form>
            <Form.Group className="mb-3" controlId="formEnlistedCareerCategory">
              <Form.Select
                aria-label="Select an Enlisted Career Category"
                value={selectedCategory}
                onChange={handleSelect}>
                {categories.map((category, index) => (
                  <option key={index} value={index}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="spacer"></div>
      <div className={styles.buttons}>
        <div className={styles.btnRow}>
          <AnimatePresence>
            {categories.map((category, index) => {
              return (
                <motion.button
                  type="button"
                  key={index}
                  className={styles.btn}
                  onClick={() => handleCategory(index)}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={selectedCategory === index ? activeButtonClass : null}>
                  {category}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <h5>
        {categories[selectedCategory]} results: {filteredItems.length} careers
      </h5>

      <div className={styles.items}>
        {filteredItems.map((node) => (
          <Link href={node.path.alias} key={node.id}>
            <a className={styles.career}>
              <div>
                <h3>
                  {node.title} ({node.field_rate_abbr})
                </h3>

                <div className={styles.hero}>
                  {!!node.field_image_card?.image_style_uri?.card ? (
                    <Image
                      src={node.field_image_card.image_style_uri?.card}
                      width={600}
                      height={360}
                      alt={node.field_image_card.resourceIdObjMeta?.alt}
                    />
                  ) : null}
                </div>

                <div className={styles.activeReserve}>
                  {!!node.field_rate_is_active ? (
                    <div className={styles.component}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <div>ACTIVE-DUTY</div>
                    </div>
                  ) : (
                    <div className={`${styles.component} ${styles.disabled}`}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                      <div>ACTIVE-DUTY</div>
                    </div>
                  )}
                  <div className={styles.divider}>|</div>
                  {!!node.field_rate_is_reserve ? (
                    <div className={styles.component}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <div>RESERVE</div>
                    </div>
                  ) : (
                    <div className={`${styles.component} ${styles.disabled}`}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                      <div>RESERVE</div>
                    </div>
                  )}
                </div>
                <p className={styles.description}>{node.field_subtitle}</p>
              </div>
              <p className={styles.details}>DETAILS &gt;</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
