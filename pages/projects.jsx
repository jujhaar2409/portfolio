import React from "react";
import Head from "next/head"
import { projects } from "../content/data";
import Layout from "../Layouts/Layout";
import InfoCard from "../Components/InfoCard";

export default () => {
  return (
    <>
    <Head>
    <title>Jujhaar's programming projects</title>
    <meta name="description" content="Jujhaar Singh's programming projects"></meta>
  </Head>
    <Layout title="Projects">
      {projects.map((project) => (
        <>
          <InfoCard>
            <h2>{project.name}</h2>
            <hr />
            <div className="cardbody">{project.description}</div>
            <a className="cardA" href={project.liveLocation}>Live Demo</a>
            <a className="cardA" href={project.codeLocation}>See the Code</a>
          </InfoCard>
        </>
      ))}
    </Layout>
    </>
  );
};
