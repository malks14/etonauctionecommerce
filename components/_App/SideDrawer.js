import React from 'react';

import styles from './SideDrawer.module.css';

const SideDrawer = props => {

  return <aside className={styles["side-drawer"]} onClick={props.onClick}>{props.children}</aside>
};

export default SideDrawer;