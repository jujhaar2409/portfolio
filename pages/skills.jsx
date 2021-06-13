import React from 'react';
import { useTrail } from 'react-spring';
import Card from '../Components/InfoCard';
import List, { ListItem } from '../Components/List';
import { skills } from '../content/data';
import Layout from '../Layouts/Layout';

export default () => {
  const trail = useTrail(skills.length, {
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
    title: "Jujhaar's skills",
    desc: "Some of Jujhaar's programming skills" ,
    url: "https://jujhaar.codes/skills"
  }

  return (
    <>
      <Layout title="Skills and Interests" seo={seo}>
        {trail.map((anime, index) => {
          return (
            <Card
              key={index}
              style={{ ...anime, ...{ width: '12%', minWidth: '220px' } }}
              className="noshadow"
            >
              <h2>{skills[index].title}</h2>
              <hr />
              <List>
                {skills[index].list.map((item, j) => (
                  <ListItem key={j}>{item}</ListItem>
                ))}
              </List>
            </Card>
          );
        })}
      </Layout>
    </>
  );
};
