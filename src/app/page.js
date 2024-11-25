import FooterComponent from "./components/Footer";
import NavbarComponent from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavbarComponent/>
      <main className={styles.main}>
      </main>
      <FooterComponent/>
    </div>
  );
}