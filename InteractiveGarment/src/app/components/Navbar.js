"use client";
import styles from "./navbar.component.module.css";
export default function NavbarComponent(){

  return (
    <div className={styles.topnav}>
      <ul>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#threed">3D Visualization</a>
      </ul>
    </div>
  );
}