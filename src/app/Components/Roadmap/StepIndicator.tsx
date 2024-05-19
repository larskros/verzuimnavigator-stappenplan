import React from 'react';
import stepindicatoritem from './StepIndicator.module.css';
import StepIndicatorItem from './StepIndicatorItem';
import StepIndicatorBar from './StepIndicatorBar';

export const StepIndicator = () => {
  return (
    <>
        <div className={stepindicatoritem.StepIndicatorWrapper}>
            <StepIndicatorBar />
            <StepIndicatorItem StepName={"DAG 1"}/>
            <StepIndicatorBar />
            <StepIndicatorItem StepName={"WEEK 1"}/>
        </div>
    </>
  )
}
