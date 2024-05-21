import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbars/Navbars";
import StandardProcedure from "./Components/StandardProcedures/StandardProcedures";
import Bulletpoints from "./Components/Bulletpointss/Bulletpointss";
import FirstDayOfSickness from "./Components/SickEmployee/FirstDayOfSickness";
import { StepIndicator } from "./Components/Roadmap/StepIndicator";
import Footer from "./Components/Footers/Footers";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.ContentContainer}>
        <div className={styles.ContentSectionLeft}>
          <StandardProcedure />
          <FirstDayOfSickness />
          {/* Component for questions about 'type verzuim' and 'standaard procedure doorlopen?' */}
        </div>
        <div className={styles.ContentSectionRight}>
          <Bulletpoints />
        </div>
      </div>
      <div className="RoadmapContainer">
        <StepIndicator />
      </div>
      <Footer />

    </>
  );
}
