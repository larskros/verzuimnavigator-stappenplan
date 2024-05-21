import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import FirstDayOfSickness from "./Components/SickEmployee/FirstDayOfSickness";
import { StepIndicator } from "./Components/Roadmap/StepIndicator";
import Footer from "./Components/Footer/Footer";
import StepInformation from "./Components/Roadmap/StepInformation";


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
      <div className={styles.RoadmapContainer}>
        <StepIndicator />
      </div>
      <Footer />

    </>
  );
}
