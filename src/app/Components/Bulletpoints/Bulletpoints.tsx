import React from 'react'
import styling from './Bulletpoints.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Bulletpoints() {
  return (
    <>
            <div className={styling.procedure}>
          <h1>Standaardprocedure voor ziekmelding</h1>
          <div className={styling.step}>
            <div className={styling.step_number}>1</div>
            <div className={styling.step_content}>U vult de eerste dag (datum) van ziekmelding in. Vanaf hier gaat het stappenplan lopen.</div>
          </div>
          <div className={styling.step}>
            <div className={styling.step_number}>2</div>
            <div className={styling.step_content}>De werkgever verstrekt de werknemer het nodige verzuimformulier of meldingsdocument en de werknemer vult deze in. <a href="#" className={styling.download_link}><FontAwesomeIcon icon={faFileArrowDown} className={styling.FaIcons} /> Download Verzuimformulier</a></div>
          </div>
          <div className={styling.step}>
            <div className={styling.step_number}>3</div>
            <div className={styling.step_content}>De werkgever registreert de ziekmelding in het verzuimregistratiesysteem. Indien nodig, wordt de bedrijfsarts of arbodienst geïnformeerd.</div>
          </div>
          <div className={styling.step}>
            <div className={styling.step_number}>4</div>
            <div className={styling.step_content}>De werkgever neemt contact op met de zieke werknemer om het verdere verloop van het ziekteverzuim te bespreken en eventuele vervolgstappen af te stemmen.</div>
          </div>
        </div>
    </>
  )
}
