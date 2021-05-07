import React from "react";
import styles from "./styles/List.module.scss"

export const ListItem = (props) => {
  return (
    <div>
      <span class={styles.ItemMarker} />
      <p class={styles.ItemText}>{props.children}</p>
    </div>
  );
};

const List = (props) => {
  return <ul class={styles.Ul}>{props.children}</ul>;
};

export default List;
