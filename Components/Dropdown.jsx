import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles/Dropdown.module.scss"
import useSelected from "../hooks/useSelected"

const MyLink = (props) => {
  const selected = useSelected(props.children.toLowerCase())

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
