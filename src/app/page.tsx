import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import StandardProcedure from "./Components/StandardProcedure/StandardProcedure";
import Bulletpoints from "./Components/Bulletpoints/Bulletpoints";
import FirstDayOfSickness from "./Components/SickEmployee/FirstDayOfSickness";
import { StepIndicator } from "./Components/Roadmap/StepIndicator";
import Footer from "./Components/Footer/Footer";
import QuestionsSickLeave from "./Components/SickEmployee/QuestionsSickLeave";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.ContentContainer}>
        <div className={styles.ContentSectionLeft}>
          <StandardProcedure />
          <FirstDayOfSickness />
          <QuestionsSickLeave />
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
