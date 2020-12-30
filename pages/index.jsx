import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { index, contact } from '../content/data';
import InfoCard, {
  BeforeHeading,
  CardA,
  CardContent,
  CardHeading,
  Hr,
} from '../Components/InfoCard';
import Layout from '../Layouts/Layout';

const indexPageContent = index;

const SocialLogoLink = styled.a`
  font-size: 30px;
  color: #0088ff;
  text-decoration: none;
`;

const MyDiv = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  height: fit-content;
  justify-content: space-evenly;
`;

export default () => {
  return (
    <Layout title="Welcome!">
      <InfoCard>
        <BeforeHeading>Hey, I'm</BeforeHeading>
        <CardHeading>Jujhaar Singh</CardHeading>
        <Hr />
        <CardContent>{indexPageContent}</CardContent>

        <Link href="/projects">
          <CardA>Projects</CardA>
        </Link>

        <Link href="/skills">
          <CardA>Skills & Interests</CardA>
        </Link>

        <MyDiv>
          <SocialLogoLink href="https://www.linkedin.com/in/jujhaar-singh-984a861b5/">
            <i className="fab fa-linkedin"></i>
          </SocialLogoLink>
          <SocialLogoLink href="https://github.com/jujhaar2409">
            <i className="fab fa-github-square"></i>
          </SocialLogoLink>
          <SocialLogoLink
            href={`http://api.whatsapp.com/send?phone=${contact.phone}`}
          >
            <i className="fab fa-whatsapp"></i>
          </SocialLogoLink>
          <SocialLogoLink href={`mailto:${contact.email}`}>
            <i className="fas fa-envelope"></i>
          </SocialLogoLink>
          <SocialLogoLink href="https://www.instagram.com/_jujhaar_singh_/">
            <i className="fab fa-instagram"></i>
          </SocialLogoLink>
        </MyDiv>

        <Link href="/contact">
          <CardA>Send me a message!</CardA>
        </Link>
      </InfoCard>
    </Layout>
  );
};
