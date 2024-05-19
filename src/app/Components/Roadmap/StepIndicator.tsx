import React from 'react';
import stepindicatoritem from './StepIndicator.module.css';
import StepIndicatorItem from './StepIndicatorItem';
import StepIndicatorBar from './StepIndicatorBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const StepIndicator = () => {
  return (
    <>
        <div className={stepindicatoritem.StepIndicatorWrapper}>
            <FontAwesomeIcon className={stepindicatoritem.ArrowIcon} icon={faArrowDown} />
            <StepIndicatorBar ClassName={"FirstStepIndicatorBar"} />
            <StepIndicatorItem ClassName={"ActiveStep"} StepName={"DAG 1"}/>
            <StepIndicatorBar ClassName={""} />
            <StepIndicatorItem ClassName={""} StepName={"WEEK 1"}/>
        </div>
    </>
  )
}
