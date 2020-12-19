import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import Layout from '../Layouts/Layout';
import { Div, Hr } from '../Components/InfoCard';
import { contact } from '../content/data';

const ContactType = styled.h1`
  color: #0088ff;
  font-size: 25px;
  padding-left: 35px;
`;

const ContactInfo = styled.p`
  font-size: 19px;
  font-weight: bold;
  padding-left: 55px;
  padding-bottom: 40px;
`;

const SocialLogoLink = styled.a`
  font-size: 40px;
  color: #0088ff;
  text-decoration: none;
`;

const MyDiv = styled.div`
  display: flex;
  padding-top: 30px;
  height: fit-content;
  justify-content: space-evenly;
`;

const MyInfoCard = styled(animated(Div))`
  text-align: left;
`;

export default () => {
  const springProps = useSpring({
    config: {
      mass: 4,
      tension: 200,
      fricton: 40,
    },
    opacity: 1,
    transform: `translateY(0px)`,
    from: {
      opacity: 0.3,
      transform: `translateY(20px)`,
    },
  });
  return (
    <Layout title="Contact">
      <MyInfoCard style={springProps}>
        <ContactType>Email</ContactType>
        <ContactInfo>{contact.email}</ContactInfo>
        <ContactType>Phone</ContactType>
        <ContactInfo>{contact.number}</ContactInfo>
        <Hr />
        <MyDiv>
          <SocialLogoLink href="https://www.instagram.com/_jujhaar_singh_/">
            <i className="fab fa-instagram"></i>
          </SocialLogoLink>
          <SocialLogoLink href="https://www.linkedin.com/in/jujhaar-singh-984a861b5/">
            <i className="fab fa-linkedin"></i>
          </SocialLogoLink>
          <SocialLogoLink href="https://github.com/jujhaar2409">
            <i className="fab fa-github-square"></i>
          </SocialLogoLink>
        </MyDiv>
      </MyInfoCard>
    </Layout>
  );
};
