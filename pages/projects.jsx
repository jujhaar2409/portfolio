import React from "react";
import Head from "next/head"
import { projects } from "../content/data";
import { useTrail } from "react-spring";
import Layout from "../Layouts/Layout";
import InfoCard from "../Components/InfoCard";

export default () => {
  const trail = useTrail(projects.length, {
    config: {
      mass: 2,
      tension: 300,
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
    <>
    <Head>
    <title>Jujhaar's programming projects</title>
    <meta name="description" content="Jujhaar Singh's programming projects"></meta>
  </Head>
    <Layout title="Projects">
      {projects.map((project, i) => (
        <>
          <InfoCard style={trail[i]}>
            <h2>{project.name}</h2>
            <hr />
            <div className="cardbody">{project.description}</div>
            <a className={`cardA`} href={project.liveLocation}>Open Site</a>
            <a className={`cardA`} href={project.codeLocation}>See the Code</a>
          </InfoCard>
        </>
      ))}
    </Layout>
    </>
  );
};
