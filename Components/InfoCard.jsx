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
  // return <animated.div class={`${styles.Div} ${props.class ? props.class : ""}`} style={{...springProps, ...props.style}}>{props.children}</animated.div>;
  return <animated.div class={`${styles.Div} ${styles[props.class]}`} style={{...springProps, ...props.style}}>{props.children}</animated.div>;
};

export default Card;
