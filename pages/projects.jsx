import React from "react";

import { projects } from "../content/data";
import Layout from "../Layouts/Layout";
import InfoCard from "../Components/InfoCard";

export default () => {
  return (
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
  );
};
