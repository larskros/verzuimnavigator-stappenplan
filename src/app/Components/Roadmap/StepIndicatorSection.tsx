import React from 'react';
import StepIndicatorBullet from './StepIndicatorBullet';
import stepindicatorbullet from './StepIndicator.module.css';
import StepInformation from './StepInformation';
import Styles from "./StepIndicatorSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import StepIndicatorBar from './StepIndicatorBar';

export default function StepIndicatorSection() {
  return (
    <>
    <div className={Styles.StepIndicatorSectionLineWrapper}>
      <FontAwesomeIcon className={stepindicatorbullet.ArrowIcon} icon={faArrowDown} />
      <StepIndicatorBar ClassName={"FirstStepIndicatorBar"} />
    </div>
    
    <div className={Styles.StepIndicatorSectionWrapper}>
      <StepIndicatorBullet ClassName="ActiveStep" StepName="DAG 1" />
      <StepInformation StepInfo="Standaard procedure ziekmelding"/>
    </div>

    <div className={Styles.StepIndicatorSectionLineWrapper}>
      <StepIndicatorBar ClassName={""} />
    </div>

    <div className={Styles.StepIndicatorSectionWrapper}>
      <StepIndicatorBullet ClassName="" StepName="WEEK 1" />
      <StepInformation StepInfo="Kort verzuim"/>
    </div>
    </>
  )
}
