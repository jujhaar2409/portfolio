import Link from 'next/link';
import React from 'react';
import styles from '../page-styles/index.module.scss';
import Head from 'next/head';

import { index, contact } from '../content/data';
import InfoCard from '../Components/InfoCard';
import Layout from '../Layouts/Layout';

const indexPageContent = index;

export default () => {
  return (
    <>
      <Head>
        <title>Jujhaar's homepage</title>
        <meta
          name="description"
          content="Jujhaar Singh's programming portfolio"
        ></meta>
      </Head>
      <Layout title="Welcome!">
        <InfoCard style={{ width: '40%' }}>
          <h3>Hey, I'm</h3>
          <h2>Jujhaar Singh</h2>
          <hr />
          <div className="cardbody">{indexPageContent}</div>

          <Link href="/projects">
            <a className="cardA">Projects</a>
          </Link>

          <Link href="/skills">
            <a className="cardA">Skills & Interests</a>
          </Link>

          <div className={styles.socialLinkContainer}>
            <a href="https://www.linkedin.com/in/jujhaar-singh-984a861b5/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/jujhaar2409">
              <i className="fab fa-github-square"></i>
            </a>
            <a href={`http://api.whatsapp.com/send?phone=${contact.phone}`}>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href={`mailto:${contact.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/_jujhaar_singh_/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <Link href="/contact">
            <a className="cardA">Send me a message!</a>
          </Link>
        </InfoCard>
      </Layout>
    </>
  );
};
