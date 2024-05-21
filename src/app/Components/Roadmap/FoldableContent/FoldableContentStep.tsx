import React from 'react';
import styles from './FoldableContentStep.module.css';

const FoldableContentStep = (props: {StepNumber: String; StepText: String;}) => {
  return (
    <>
        <div className={styles.StepItemContainer}>
            <input className={styles.StepItemCheckbox} type="checkbox" name="" id="" />
            <div className={styles.StepItemNumber}>{props.StepNumber}</div>
            <div className={styles.StepItemText}>{props.StepText}</div>
        </div>
    </>
  )
}

export default FoldableContentStep