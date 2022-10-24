import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import TitleAdornments from "/components/blocks/TitleAdornments";
import styles from "./ParagraphBanner.module.scss";

export default function SubpageBanner({ content }) {

  return (
    <div className={styles.subpageBanner}>
      <div className={styles.bgImage}>
        <Image 
          src={content.field_banner_bg?.image_style_uri?.banner} 
          alt={content.field_banner_bg?.resourceIdObjMeta?.alt}
          layout="fill" 
          objectFit="cover"  
        />
      </div>
      <Container className={styles.inner}>
        <div className={styles.box}>
          <div className={styles.border}>
            <div className={styles.bg}>
              <TitleAdornments />
              <div className={styles.text}>
                <h2>{content.field_title}</h2>
                {!!content.field_subtitle ? <p>{content.field_subtitle}</p> : null}
                {!!content.field_cta_link ? (
                  <p>
                    <Link href={content.field_cta_link.uri.replace("internal:", "")}>
                      {content.field_cta_link.title}
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}