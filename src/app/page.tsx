import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { StepIndicator } from "./Components/Roadmap/StepIndicator";


export default function Home() {
  return (
    <>
      <Navbar />
      <StepIndicator />
      {/* <div className={styles.empty}></div> */}
      <Footer />

    </>
  );
}
