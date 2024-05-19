import React from 'react';
import stepindicatoritem from './StepIndicatorItem.module.css';

const StepIndicatorItem = (props:{StepName: string}) => {
  return (
    <>
        <div className={stepindicatoritem.StepIndicatorItemContainer}>
            <div className={stepindicatoritem.StepIndicatorItem}>{props.StepName}</div>
        </div>
    </>
  )
}

export default StepIndicatorItem