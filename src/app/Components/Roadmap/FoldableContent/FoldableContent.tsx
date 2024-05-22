import React from 'react';
import FoldableContentStep from './FoldableContentStep';
import styles from './FoldableContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const FoldableContent = () => {
  return (
    <>
      <div className={styles.FoldableContentStepContainer}>
          <FoldableContentStep StepNumber={"1"} StepText={"Toon belangstelling en stel de juiste vragen."} />
          <FoldableContentStep StepNumber={"2"} StepText={"Maak afspraken over bereikbaarheid."} />
          <FoldableContentStep StepNumber={"3"} StepText={"Breng - voor zover mogelijk - de gevolgen van ziekte in beeld."} />
          <FoldableContentStep StepNumber={"4"} StepText={"Behoud regelmatig contact over een terugkeer (of wellicht langer ziekteverzuim)."} />
      </div>
      
      <div className={styles.StepItemText}>
          <p>Komt het regelmatig voor dat uw medewerker zich ziekmeldt? Ga over op het stappenplan voor frequent verzuim. Is dit niet het geval, maar duurt het langer dan 7 dagen? Ga dan over op het stappenplan voor langdurig verzuim.</p>
      </div>

      <div className={styles.StepItemButtons}>
        <button>Afronden <FontAwesomeIcon className={styles.ArrowIcon} icon={faArrowRight} /></button>
        <button className={styles.OutlineButton}>Frequent verzuim <FontAwesomeIcon className={styles.ArrowIcon} icon={faArrowRight} /></button>
        <button className={styles.OutlineButton}>Langdurig verzuim <FontAwesomeIcon className={styles.ArrowIcon} icon={faArrowRight} /></button>
      </div>

      <div className={styles.StepItemLink}>
        <p>Gerelateerde diensten of producten <FontAwesomeIcon className={styles.ArrowIconLink} icon={faArrowRight} /></p>
      </div>
    </>
  )
}
