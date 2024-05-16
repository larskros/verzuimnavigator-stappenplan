import Image from "next/image";
import styles from "./page.module.css";
import navbar from "./components/navbar/navbar.module.css";
import Navbar from "./components/navbar/navbar";
import standardprocedure from "./components/standardprocedure/standardprocedure.module.css";
import Standardprocedure from "./components/standardprocedure/standardprocedure";
import Bulletpoints from "./components/bulletpoints/bulletpoints";
import bulletpoints from "./components/bulletpoints/bulletpoints.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Bulletpoints />
      <Standardprocedure />
      <div className={styles.description}>
        <p>
          Verzuimnavigator
        </p>
      </div>
    </main>
  );
}
