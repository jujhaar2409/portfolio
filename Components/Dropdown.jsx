import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles/Dropdown.module.scss"

const MyLink = (props) => {
  const [selected , setSelected] = useState(false);
  useEffect(() => {
    const split = window.location.pathname.split('/');
    if ((split.length === 2 && props.children.toLowerCase() === "home") || (split[2] === props.children.toLowerCase())) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, []);

  return (
    <Link
      href={props.children != "Home" ? "/" + props.children.toLowerCase() : "/"}
    >
      <a className={selected ? styles.selected : ""} onClick={props.clicked}>
        {props.children}
      </a>
    </Link>
  );
};

const Dropdown = (props) => {
  return (
    <div ref={props.dropdownRef} className={[styles.main, props.isOpen ? styles.open : ""].join(" ")}>
      <h1>Find Your Way Around...</h1>
      <div className={styles.linkcontainer}>
        <MyLink clicked={props.clicked}>Home</MyLink>
        <MyLink clicked={props.clicked}>Projects</MyLink>
        <MyLink clicked={props.clicked}>Skills</MyLink>
        <MyLink clicked={props.clicked}>Contact</MyLink>
      </div>
    </div>
  );
};

export default Dropdown;
