import React from "react";

import { projects } from "../content/data";
import Layout from "../Layouts/Layout";
import InfoCard, {
  BeforeHeading,
  CardHeading,
  Hr,
  CardContent,
  CardA,
} from "../Components/InfoCard";

export default () => {
  return (
    <Layout title="Projects">
      {projects.map((project) => (
        <>
          <InfoCard>
            <CardHeading>{project.name}</CardHeading>
            <Hr />
            <CardContent>{project.description}</CardContent>
            <CardA href={project.liveLocation}>Live Demo</CardA>
            <CardA href={project.codeLocation}>See the Code</CardA>
          </InfoCard>
        </>
      ))}
    </Layout>
  );
};
