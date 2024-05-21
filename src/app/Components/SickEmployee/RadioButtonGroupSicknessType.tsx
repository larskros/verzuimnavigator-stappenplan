import React from 'react';
import styles from './RadioButtonGroupSicknessType.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function RadioButtonGroupSicknessType(props: any) {
  return (
    <div className={styles.RadioButtonGroup}>
        <label>
            <input type="radio" className={styles.InputField} value="RegulierVerzuim" checked={props.selectedOption === 'RegulierVerzuim'} onChange={props.handleChange} />
            Regulier verzuim
            <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
        </label>
        <label>
            <input type="radio" className={styles.InputField} value="FrequentVerzuim" checked={props.selectedOption === 'FrequentVerzuim'} onChange={props.handleChange} />
            Frequent verzuim
            <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
        </label>
        <label>
            <input type="radio" className={styles.InputField} value="LangdurigVerzuim" checked={props.selectedOption === 'LangdurigVerzuim'} onChange={props.handleChange} />
            Langdurig verzuim
            <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
        </label>
    </div>
  )
}

export default RadioButtonGroupSicknessType;