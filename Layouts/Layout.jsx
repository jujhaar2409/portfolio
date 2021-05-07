import React, { useState, useRef, useEffect } from 'react';
import styles from "./styles/Layout.module.scss"

import DropdownLogo from '../Components/DropdownLogo';
import Dropdown from '../Components/Dropdown';
import NavItems from '../Components/NavItems';

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const dropdownLogoRef = useRef();

  const onDropdownLogoClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !dropdownRef.current.contains(event.target) &&
        !dropdownLogoRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>JS</h1>
        <NavItems />
        <DropdownLogo
          dropdownLogoRef={dropdownLogoRef}
          clicked={onDropdownLogoClick}
          isOpen={isOpen}
        />
      </div>
      <Dropdown
        dropdownRef={dropdownRef}
        isOpen={isOpen}
        clicked={onDropdownLogoClick}
      />
      <h1 className={styles.pagetitle}>{props.title}</h1>
      <div className={styles.bodycontainer}>{props.children}</div>
    </>
  );
};

export default Layout;
