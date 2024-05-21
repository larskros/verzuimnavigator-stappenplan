import React from 'react'
import styles from "./StepInformation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FoldableContent } from './FoldableContent/FoldableContent';

const  StepInformation = (props:{ StepInfo: String;}) => {
  return (
    <div className={styles.StepInformationWrapper}>
    
      
      <div className={styles.Info}>
        <div className={styles.Info}><h3>{props.StepInfo}</h3 ><FontAwesomeIcon className={styles.Info} icon={faInfoCircle} /></div>
      </div>
      
      <div className={styles.Info}>
        <p>Te ondernemen stappen</p>
        <a className={styles.FoldButton} href=""><FontAwesomeIcon className={styles.FoldButtonDetail} icon={faChevronDown} /></a>
      </div>
      

    </ div>


  )
}

export default StepInformation
