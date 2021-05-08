import React from "react";
import styles from "./styles/List.module.scss"

export const ListItem = (props) => {
  return (
    <div className={styles.ItemDiv}>
      <span className={styles.ItemMarker} />
      <p className={styles.ItemText}>{props.children}</p>
    </div>
  );
};

const List = (props) => {
  return <ul className={styles.Ul}>{props.children}</ul>;
};

export default List;
