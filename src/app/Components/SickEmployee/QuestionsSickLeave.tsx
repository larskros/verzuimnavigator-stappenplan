"use client";
import React, { useState } from 'react'
import styles from './QuestionsSickLeave.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import RadioButtonGroupSicknessType from './RadioButtonGroupSicknessType';
import ProcedureCheck from './ProcedureCheck';

export default function QuestionsSickLeave() {

    const [selectedOption, setSelectedOption] = useState('RegulierVerzuim');
    const [selectedOptionProcedure, setSelectedOptionProcedure] = useState('Nee');

    function handleChange(event: any) {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
    }
    function handleChangeProcedure(e: any) {
        setSelectedOptionProcedure(e.target.value);
        console.log(e.target.value);
    }

  return (
    <>
        <div className={styles.SickLeaveInputContainer}>
            <div className={styles.SicknessTypeContainer}>
                <p className={styles.SicknessTypeTitle}>Type verzuim</p>
                <RadioButtonGroupSicknessType selectedOption={selectedOption} handleChange={handleChange} />
            </div>
                
            <div className={styles.ProcedureCheckContainer}>
                <p className={styles.SicknessTypeTitle}>heb je het Standaardprocedure doorlopen?</p>
                <ProcedureCheck selectedOptionProcedure={selectedOptionProcedure} handleChangeProcedure={handleChangeProcedure}/>
            </div>
        </div>
    </>
  )
}
