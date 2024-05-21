import React from 'react';
import stepindicatorbullet from './StepIndicator.module.css';
import StepIndicatorBullet from './StepIndicatorBullet';
import StepIndicatorBar from './StepIndicatorBar';
import StepIndicatorSection from './StepIndicatorSection';

export const StepIndicator = () => {
  return (
    <>
        <div className={stepindicatorbullet.StepIndicatorWrapper}>

            {/* <StepIndicatorBullet ClassName={"ActiveStep"} StepName={"DAG 1"}/> */}
            <StepIndicatorSection />
        </div>
    </>
  )
}
