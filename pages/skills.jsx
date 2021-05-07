import React from "react";
import { useTrail } from "react-spring";

import Card from "../Components/InfoCard";
import List, { ListItem } from "../Components/List";
import { skills } from "../content/data";
import Layout from "../Layouts/Layout";

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
  return (
    <Layout title="Skills">
      {trail.map((anime, index) => {
        return (
          <Card style={anime}>
            <h2>{skills[index].title}</h2>
            <hr />
            <List>
              {skills[index].list.map((item) => (
                <ListItem key="index">{item}</ListItem>
              ))}
            </List>
          </Card>
        );
      })}
    </Layout>
  );
};
