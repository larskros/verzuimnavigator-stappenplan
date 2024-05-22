"use client"
import React, { useState } from 'react';
import styles from './StepIndicator.module.css';
import StepIndicatorBullet from './StepIndicatorBullet';
import StepIndicatorBar from './StepIndicatorBar';
import StepIndicatorSection from './StepIndicatorSection';
import StepInformation from './StepInformation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const StepIndicator = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(old => !old);
}

  return (
    <>
        <div className={styles.StepIndicatorWrapper}>

            {/* <StepIndicatorBullet ClassName={"ActiveStep"} StepName={"DAG 1"}/> */}
            {/* <StepIndicatorSection /> */}
            <div className={styles.GridContainer}>
              
              <div className={`${styles.GridBar} ${styles.GridItem}`}>
                <FontAwesomeIcon className={styles.ArrowIcon} icon={faArrowDown} />
                <StepIndicatorBar ClassName={"FirstStepIndicatorBar"} />
              </div>
              <div className={`${styles.GridBullet} ${styles.GridItem}`}>
                <StepIndicatorBullet StepName={"DAG 1"} ClassName={"ActiveStep"} />
              </div>
              <div className={`${styles.GridInformation} ${styles.GridItem}`}>
                <StepInformation StepInfo={"Standaard procedure ziekmelding"} ClassName={"HideFoldOption"} />
              </div>
            </div>
            <div className={styles.GridContainer}>
              
              <div className={`${styles.GridBar} ${styles.GridItem}`}>
                <StepIndicatorBar ClassName={""} />
              </div>
              
              <div className={`${styles.GridLine} ${styles.GridItem}`}>
                <div className={styles.HorizontalLine}></div>
              </div>
              <div className={`${styles.GridBullet} ${styles.GridItem}`}>
                <StepIndicatorBullet StepName={"WEEK 1"} ClassName={""} />
              </div>
              <div className={`${styles.GridInformation} ${styles.GridItem}`}>
                <StepInformation StepInfo={"Kort verzuim"} ClassName={""} />
              </div>
            </div>
            {/* <div className={styles.GridContainer}>
              <div className={`${styles.GridBar} ${styles.GridItem}`}>
                <StepIndicatorBar ClassName={""} />
              </div>
              <div className={`${styles.GridBullet} ${styles.GridItem}`}>
                <StepIndicatorBullet StepName={"Week 1"} ClassName={""} />
              </div>
              <div className={`${styles.GridInformation} ${styles.GridItem}`}>
                <StepInformation StepInfo={"Standaard procedure ziekmelding"} />
              </div>
            </div> */}
        </div>
    </>
  )
}
