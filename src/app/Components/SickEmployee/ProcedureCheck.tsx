import React from 'react';
import styles from './ProcedureCheck.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function ProcedureCheck(props: any) {
  return (
    <div className={styles.RadioButtonGroup}>
        <label>
            <input type="radio" className={styles.InputField} value="Ja" checked={props.selectedOptionProcedure === 'Ja'} onChange={props.handleChangeProcedure} />
            Ja
            <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
        </label>
        <label>
            <input type="radio" className={styles.InputField} value="Nee" checked={props.selectedOptionProcedure === 'Nee'} onChange={props.handleChangeProcedure} />
            Nee
            <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
        </label>
    </div>
  )
}

export default ProcedureCheck;