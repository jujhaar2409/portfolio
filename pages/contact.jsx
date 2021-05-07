import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import Layout from '../Layouts/Layout';
import { Div } from '../Components/InfoCard';

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

  const iframeStyle = {
    width: '100%',
    height: '840px',
  };

  return (
    <Layout title="Contact">
      <MyInfoCard style={springProps}>
        <iframe
          style={iframeStyle}
          src="https://docs.google.com/forms/d/e/1FAIpQLSctmO9MDFO-E9RxygkTfSXDdcNVrAZDqPJ0XTkuMAAmNl0rVg/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </MyInfoCard>
    </Layout>
  );
};
