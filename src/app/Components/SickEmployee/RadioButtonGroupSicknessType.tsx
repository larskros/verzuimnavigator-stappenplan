import React from 'react';
import styles from './RadioButtonGroupSicknessType.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

function RadioButtonGroupSicknessType(props: any) {
    const RegulierVerzuimTooltipText = "We spreken van regulier verzuim als jouw medewerker onregelmatig ziek is en binnen een week weer hersteld is.";
    const FrequentVerzuimTooltipText = "We spreken van frequent ziekteverzuim als jouw medewerker drie keer of vaker ziek is uitgevallen in de voorgaande 12 maanden.";
    const LangdurigVerzuimTooltipText = "Wanneer jouw medewerker langer dan een week ziek is en voorlopig niet in staat is om het werk te hervatten, spreken we van langdurig verzuim.";

  return (
    <div className={styles.RadioButtonGroup}>
        <label>
            <input type="radio" className={styles.InputField} value="RegulierVerzuim" checked={props.selectedOption === 'RegulierVerzuim'} onChange={props.handleChange} />
            Regulier verzuim
            <Tooltip id="RegulierVerzuimTooltip" />
            <a 
            data-tooltip-id="RegulierVerzuimTooltip" 
            data-tooltip-content={RegulierVerzuimTooltipText}
            data-tooltip-class-name={styles.Tooltip}>
                <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
            </a>
        </label>
        <label>
            <input type="radio" className={styles.InputField} value="FrequentVerzuim" checked={props.selectedOption === 'FrequentVerzuim'} onChange={props.handleChange} />
            Frequent verzuim
            <Tooltip id="FrequentVerzuimTooltip" />
            <a 
            data-tooltip-id="FrequentVerzuimTooltip" 
            data-tooltip-content={FrequentVerzuimTooltipText}
            data-tooltip-class-name={styles.Tooltip}>
                <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
            </a>
        </label>
        <label>
            <input type="radio" className={styles.InputField} value="LangdurigVerzuim" checked={props.selectedOption === 'LangdurigVerzuim'} onChange={props.handleChange} />
            Langdurig verzuim
            <Tooltip id="LangdurigVerzuimTooltip" />
            <a 
            data-tooltip-id="LangdurigVerzuimTooltip" 
            data-tooltip-content={LangdurigVerzuimTooltipText}
            data-tooltip-class-name={styles.Tooltip}>
                <FontAwesomeIcon icon={faInfoCircle} size='xs' className={styles.InfoIcon} />
            </a>
        </label>
    </div>
  )
}

export default RadioButtonGroupSicknessType;