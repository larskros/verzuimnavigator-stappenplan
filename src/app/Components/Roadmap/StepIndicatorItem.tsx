import React from 'react';
import stepindicatoritem from './StepIndicatorItem.module.css';

const StepIndicatorItem = (props:{ClassName: String; StepName: String;}) => {
  return (
    <>
        <div className={stepindicatoritem.StepIndicatorItemContainer}>
            <div className={`${stepindicatoritem.StepIndicatorItem} ${props.ClassName}`}>{props.StepName}</div>
        </div>
    </>
  )
}

export default StepIndicatorItem