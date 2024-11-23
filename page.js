import styles from "./page.module.css";
import NavbarComponent from "@/components/Navbar";
import FooterComponent from "@/components/Footer"; 

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
