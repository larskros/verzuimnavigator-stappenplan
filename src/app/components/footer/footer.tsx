import React from 'react'
import footer from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <hr className={footer.Line}/>
    <div className={footer.FooterContent}>

      <div className={footer.FooterSection}>
        <img src="../verzuimnavigator Logo.svg" alt="" />
        <p>2024</p>
        <a href="">Privacy</a>
        <a href="">Gebruiksvoorwaarden</a>
      </div>
      <div className={footer.FooterSection}>
        <h3>Informatie</h3>
        <a href="">Over de Verzuimnavigator</a>
        <a href="">Veel gestelde vragen (FAQ)</a>
        <a href="">Contactinformatie</a>
        <a href="">Hoe te bestellen</a>
      </div>
      <div className={footer.FooterSection}>
        <h3>Verzuim Navigator</h3>
        <a href="">Ziekmelden</a>
        <a href="">Veilige werkplek</a>
        <a href="">Producten</a>
        <a href="">Vergoedingen</a>
      </div>
      <div className={footer.FooterSection}>
      <h3>Word betrokken</h3>
        <a href="">Contact</a>
        <form action="">
          <input className={footer.InputField} type="text" placeholder='Jouw e-mailadres'/>
          <hr />
          <input className={footer.InputFieldButton} type="submit" value="Subscribe"></input>
        </form>
      </div>
    </div>
    </>
  )
}
