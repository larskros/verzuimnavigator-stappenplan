import Image from "next/image";
import styles from "./page.module.css";
import navbar from "./components/navbar/navbar.module.css";
import Navbar from "./Components/Navbar/Navbar";
import standardprocedure from "./components/StandardProcedure/StandardProcedure.module.css";
import Standardprocedure from "./Components/StandardProcedure/StandardProcedure";
import Bulletpoints from "./Components/BulletPoints/BulletPoints";
import bulletpoints from "./components/BulletPoints/BulletPoints.module.css";

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
