import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./styles/NavItems.module.scss"
import useSelected from '../hooks/useSelected';

const NavItems = () => {
  return (
    <div className={styles.LinkContainer}>
      <MyLink>Home</MyLink>
      <MyLink>Projects</MyLink>
      <MyLink>Skills</MyLink>
      <MyLink>Contact</MyLink>
    </div>
  );
};

const MyLink = (props) => {
  const selected = useSelected(props.children.toLowerCase())

  return (
    <Link
      href={props.children != 'Home' ? '/' + props.children.toLowerCase() : '/'}
    >
      <a className={selected ? styles.selected : ""} onClick={props.clicked}>
        {props.children}
      </a>
    </Link>
  );
};

export default NavItems;
