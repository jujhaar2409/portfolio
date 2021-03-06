import React from 'react';

import Layout from '../Layouts/Layout';
import Card from '../Components/InfoCard';

export default () => {
  const iframeStyle = {
    width: '100%',
    height: '840px',
    opacity: 0, 
    transition: "ease-in-out 0.8s all"
  };
  
  const onLoadFunc = () => {
    document.querySelector("iframe").style.opacity = 1
  }

  const seo = {
    title: "Contact Jujhaar",
    desc: "Contact Jujhaar Singh!" ,
    url: "https://jujhaar.codes/contact"
  }

  return (
    <>
      <Layout title="Contact" seo={seo}>
        <Card style={{ width: '50%' }}>
            <iframe
            style={iframeStyle}
            src="https://docs.google.com/forms/d/e/1FAIpQLSctmO9MDFO-E9RxygkTfSXDdcNVrAZDqPJ0XTkuMAAmNl0rVg/viewform?embedded=true"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            onLoad={onLoadFunc}
             />
        </Card>
      </Layout>
    </>
  );
};
