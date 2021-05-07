import React from "react";
import { animated, useSpring } from "react-spring";
import styles from "./styles/InfoCard.module.scss"

const Card = (props) => {
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
  return <animated.div className={styles.Div} style={springProps}>{props.children}</animated.div>;
};

export default Card;
