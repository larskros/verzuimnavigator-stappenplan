import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className={styles.empty}></div> */}
      <Footer />

    </>
  );
}
