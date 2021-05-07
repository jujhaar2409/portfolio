import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./styles/NavItems.module.scss"

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
  const [classname, setClassname] = useState('');
  useEffect(() => {
    const split = window.location.pathname.split('/');
    const loc = split[split.length - 1]
    if ((loc === '' && props.children.toLowerCase() === 'home') || (loc === props.children.toLowerCase())) {
      setClassname('selected');
    } else {
      setClassname('');
    }
  }, []);

  return (
    <Link
      href={props.children != 'Home' ? '/' + props.children.toLowerCase() : '/'}
    >
      <a className={classname} onClick={props.clicked}>
        {props.children}
      </a>
    </Link>
  );
};

export default NavItems;
