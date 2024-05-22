"use client"
import React, { useState } from 'react'
import styles from "./StepInformation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FoldableContent } from './FoldableContent/FoldableContent';

const  StepInformation = (props:{ StepInfo: String; ClassName: String; }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const HandleClick = () => {
    setIsOpen(old => !old);
    console.log("test");
  }

  const transClass = isOpen ? "ShowContent" : "HideContent";
  const RotateChevron = isOpen ? "ChevronOpened" : "ChevronClosed";
  

  return (
    <div className={styles.StepInformationWrapper}>
    
      <div className={styles.StepInformationHeader}>
        <div className={styles.Info}>
          <div className={styles.Info}><h3>{props.StepInfo}<p className={styles[`${transClass}`]}>&nbsp;(0/4)</p></h3 ><FontAwesomeIcon className={styles.InfoIcon} icon={faInfoCircle} /></div>
        </div>
        
        <div onClick={HandleClick} className={`${styles.Info} ${styles.FoldButtonContainer} ${props.ClassName}`}>
          <p>Te ondernemen stappen</p>
          <div className={styles.FoldButton} ><FontAwesomeIcon className={`${styles.FoldButtonDetail} ${styles[`${RotateChevron}`]}`} icon={faChevronDown} /></div>
        </div>
      </div>
      <div className={styles[`${transClass}`]}>
        <FoldableContent />
      </div>
      
      

    </ div>


  )
}

export default StepInformation
