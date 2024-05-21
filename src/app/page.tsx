import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/navbar";
import standardprocedure from "./components/StandardProcedure/StandardProcedure.module.css";
import Standardprocedure from "./Components/StandardProcedure/StandardProcedure";
import Bulletpoints from "./Components/BulletPoints/BulletPoints";
import bulletpoints from "./components/BulletPoints/BulletPoints.module.css";
import FirstDayOfSickness from "./Components/SickEmployee/FirstDayOfSickness";
import { StepIndicator } from "./Components/Roadmap/StepIndicator";
import Footer from "./Components/footer/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.ContentContainer}>
        <div className={styles.ContentSectionLeft}>
          {/* Component for page title and explanation */}
          <FirstDayOfSickness />
          {/* Component for questions about 'type verzuim' and 'standaard procedure doorlopen?' */}
        </div>
        <div className={styles.ContentSectionRight}>
          {/* Component for the standard procedure text */}
        </div>
      </div>
      <div className="RoadmapContainer">
        <StepIndicator />
      </div>
      <Footer />

    </>
  );
}
