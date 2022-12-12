import Link from "next/link";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faPhone, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import MapOfficeWrapper from "/components/recruiters/MapOfficeWrapper";
import Banner from "/components/blocks/banner";
import styles from "./Recruiter.module.scss";

export function NodeRecruiter({ node, ...props }) {
  return (
    <div {...props}>
      <Banner
        title={node.title}
        subtitle="U.S. Coast Guard Recruiting Office"
        bgImage={null}
        bgImageAlt={null}
        ctaLink={null}
        ctaText={null}
        short={false}
      />
      <Container className="content-wrapper">
        <article className={`${styles.office} page-content`}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>{node.title}</h3>

              {!!node.field_address ? (
                <p>
                  Address:
                  <br />
                  {!!node.field_address.organization ? (
                    <span>
                      {node.field_address.organization}
                      <br />
                    </span>
                  ) : null}
                  {!!node.field_address.address_line1 ? (
                    <span>
                      {node.field_address.address_line1}
                      <br />
                    </span>
                  ) : null}
                  {!!node.field_address.address_line2 ? (
                    <span>
                      {node.field_address.address_line2}
                      <br />
                    </span>
                  ) : null}
                  {!!node.field_address.locality ? (
                    <span>
                      {node.field_address.locality}, {node.field_address.administrative_area}{" "}
                      {node.field_address.postal_code} <FontAwesomeIcon icon={faLocationArrow} className="ml-2" />
                      <br />
                    </span>
                  ) : null}
                </p>
              ) : null}

              {!!node.field_phone ? (
                <p>
                  Telephone:
                  <br />
                  <a href={`tel:+{node.field_phone}`}>
                    {node.field_phone}
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                </p>
              ) : null}

              {!!node.field_email ? (
                <p>
                  Email:
                  <br />
                  <a href={`mailto: ${node.field_email}`}>
                    {node.field_email}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </p>
              ) : null}
              {/**
              <p>
                vCard:
                <br />
                <a href={`#`} className={styles.vcard}>
                  Download vCard
                  <FontAwesomeIcon icon={faAddressCard} />
                </a>
              </p>
 */}
            </div>

            <MapOfficeWrapper
              office={node}
              center={{ lat: node.field_geolocation.lat, lng: node.field_geolocation.lng }}
              zoom={10}
            />
          </div>

          <div className="page-ctas">
            <Link href="/connect">
              <a className="btn-cta">Connect</a>
            </Link>
            {/**
            <span className="divider">OR</span>
            <Link href="/chat-now">
              <a className="btn-cta">Chat Now</a>
            </Link>
             */}
          </div>
        </article>
      </Container>
    </div>
  );
}
