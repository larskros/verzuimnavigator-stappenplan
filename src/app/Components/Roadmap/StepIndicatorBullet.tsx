import React from 'react';
import stepindicatorbullet from './StepIndicatorBullet.module.css';

const StepIndicatorBullet = (props:{ClassName: String; StepName: String;}) => {
  return (
    <>
        <div className={stepindicatorbullet.StepIndicatorItemContainer}>
            <div className={`${stepindicatorbullet.StepIndicatorItem} ${props.ClassName}`}>{props.StepName}</div>
        </div>
    </>
  )
}

export default StepIndicatorBullet