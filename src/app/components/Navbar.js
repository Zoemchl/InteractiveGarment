"use client";
import styles from "./navbar.component.module.css";

export default function NavbarComponent(){
  return (
    <div className={styles.topnav}>
      <ul>
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#team">Team</a>
      </ul>
    </div>
  );
}