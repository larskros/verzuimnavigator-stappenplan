import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className={styles.empty}></div> */}
      <Footer />

    </>
  );
}
