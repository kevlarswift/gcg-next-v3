import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Careers.module.scss";

export default function OfficerCareers({ data }) {
  const activeButtonClass = { backgroundColor: "#005CB9", borderColor: "#005CB9", color: "#FFFFFF" };

  let categories = ["All", "Aviation",  "Business",  "STEM", "Law Enforcement", "Communications", "First Response"];

  const [allItems] = useState(data);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [selectedCategory, setSelectedCategory] = useState(0);

  

  return (
    <div className={styles.careers} id="careers-anchor">
      <div className={styles.items}>
        {data.map((node) => (
          <Link href={node.path.alias} key={node.id}>
            <a className={styles.career}>
              <div>
                <h3>
                  {node.title}
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
