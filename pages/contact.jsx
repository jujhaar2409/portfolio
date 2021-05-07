import React from 'react';
import { animated, useSpring } from 'react-spring';

import Layout from '../Layouts/Layout';
import Card from '../Components/InfoCard';

const MyInfoCard = animated(Card)

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
