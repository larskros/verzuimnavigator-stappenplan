import React from 'react';
import styles from './StepIndicatorBullet.module.css';

const StepIndicatorBullet = (props:{ClassName: String; StepName: String;}) => {
  return (
    <>
        <div className={styles.StepIndicatorItemContainer}>
            <div className={`${styles.StepIndicatorItem} ${props.ClassName}`}>{props.StepName}</div>
            <div className={styles.BarBottom}></div>
        </div>
    </>
  )
}

export default StepIndicatorBullet