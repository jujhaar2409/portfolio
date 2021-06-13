import React from 'react';
import { projects } from '../content/data';
import { useTrail } from 'react-spring';
import Layout from '../Layouts/Layout';
import InfoCard from '../Components/InfoCard';

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

  const seo = {
    title: "Jujhaar's projects",
    desc: "Jujhaar's tech projects" ,
    url: "https://jujhaar.codes/projects"
  }

  return (
    <>
      <Layout title="Projects" seo={seo}>
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <InfoCard style={trail[i]}>
              <h2>{project.name}</h2>
              <hr />
              <div className="cardbody">{project.description}</div>
              {project.liveLocation ? (
                <a className={`cardA`} href={project.liveLocation}>
                  Open Site
                </a>
              ) : (
                ''
              )}
              {project.codeLocation ? (
                <a className={`cardA`} href={project.codeLocation}>
                  See the Code
                </a>
              ) : (
                ''
              )}
            </InfoCard>
          </React.Fragment>
        ))}
      </Layout>
    </>
  );
};
