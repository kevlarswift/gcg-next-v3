import Head from "next/head";
import { drupal } from "lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import ContactLong from "/components/forms/ContactLong";
import styles from "./Landing.module.scss";

export default function LandingPage({ menus, global }) {
  return (
    <>
      <Head>
        <title>Landing | GoCoastGuard.com</title>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner
          title="Make a Difference on Land, Sea, or in the Air"
          subtitle="Nearly 42,000 men and women are actively serving in the Coast Guard to defend America's borders and protect the maritime environment."
          ctaLink="/find-recruiter"
          ctaText="Find a Recruiter"
        />
        <article className={styles.landing}>
          <Container className="container-inner">
            <div className={styles.layout}>
              <div className={styles.content}>
                <h2>Advance Through Training</h2>
                <p>
                  The Coast Guard is an elite force that values integrity and rewards excellence. Every job you perform
                  is significant and everything you do will be noticed. Those who excel are rewarded with higher pay,
                  greater responsibility, and more advanced training. In the Coast Guard, the training you receive will
                  empower you with the skills you need to make a difference.
                </p>
                <ul>
                  <li>Morbi placerat enim mollis condimentum molestie.</li>
                  <li>Duis facilisis odio in nisi convallis lobortis.</li>
                  <li>Nam consequat, metus vel semper dapibus</li>
                  <li>Lacus nisi mattis massa, sed malesuada orci leo ut lorem.</li>
                </ul>
                <p>
                  Nunc mollis, nibh eu fringilla aliquet, justo massa elementum mauris, a elementum purus leo ac nibh.
                  Nullam at ligula eros. Maecenas vel nisl quis sem faucibus mollis.
                </p>
                <h2>Who We Are</h2>
                <p>
                  Comprised of nearly 42,000 extraordinary men and women, the Coast Guard is a unique branch of the
                  military responsible for saving lives, protecting the environment, and defending America’s coastlines
                  and waterways.
                </p>
                <p>
                  All of this is done through our 11 official missions, which include Port and Waterway Security, Drug
                  Interdiction, Aids to Navigation, Search and Rescue, Living Marine Resources, Marine Safety, Defense
                  Readiness, Migrant Interdiction, Marine Environmental Protection, Ice Operations, and Law Enforcement.
                </p>
              </div>
              <div className={styles.form}>
                <div className="form-wrapper">
                  <ContactLong />
                </div>
              </div>
            </div>
          </Container>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  return {
    props: {
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "8f70fe6f-fab6-4ae3-8b16-1c86822288bd"),
    },
    revalidate: 60,
  };
}
