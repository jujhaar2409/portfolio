import React from 'react';
import styles from './styles/DropdownLogo.module.scss';

const DropdownLogo = (props) => {
  const { clicked, isOpen } = props;
  return (
    <div
      className={styles.main + (isOpen ? ' open' : '')}
      ref={props.dropdownLogoRef}
      onClick={clicked}
    >
      <p className={[styles.span1, (isOpen ? styles.open : '')].join(" ")}></p>
      <p className={[styles.span2, (isOpen ? styles.open : '')].join(" ")}></p>
      <p className={[styles.span3, (isOpen ? styles.open : '')].join(" ")}></p>
    </div>
  );
};

export default DropdownLogo;
