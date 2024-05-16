import Image from "next/image";
import styles from "./page.module.css";
import navbar from "./components/navbar/navbar.module.css";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <p>
          Verzuimnavigator
        </p>
      </div>
    </main>
  );
}
