import React from 'react';
import standardprocedure from './standardprocedure.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Standardprocedure() {
  return (
    <>
      <div className={standardprocedure.container}>
        <div className={standardprocedure.titles}>
          <h1>Zieke medewerker</h1>
          <p>Uw medewerker meldt zich ziek en verschijnt niet op het werk. Dit hoeft niet meteen iets ernstigs te betekenen, maar u moet als werkgever wel direct enkele stappen ondernemen om het goed te regelen. De volgende stappen gelden voor elk type ziekmelding en leggen de basis voor een gestructureerde opvolging en ondersteuning van de werknemer.</p>
        </div>

        <div className={standardprocedure.procedure}>
          <h1>Standaardprocedure voor ziekmelding</h1>
          <div className={standardprocedure.step}>
            <div className={standardprocedure.step_number}>1</div>
            <div className={standardprocedure.step_content}>U vult de eerste dag (datum) van ziekmelding in. Vanaf hier gaat het stappenplan lopen.</div>
          </div>
          <div className={standardprocedure.step}>
            <div className={standardprocedure.step_number}>2</div>
            <div className={standardprocedure.step_content}>De werkgever verstrekt de werknemer het nodige verzuimformulier of meldingsdocument en de werknemer vult deze in. <a href="#" className={standardprocedure.download_link}><FontAwesomeIcon icon={faFileArrowDown} className={standardprocedure.FaIcons} /> Download Verzuimformulier</a></div>
          </div>
          <div className={standardprocedure.step}>
            <div className={standardprocedure.step_number}>3</div>
            <div className={standardprocedure.step_content}>De werkgever registreert de ziekmelding in het verzuimregistratiesysteem. Indien nodig, wordt de bedrijfsarts of arbodienst geïnformeerd.</div>
          </div>
          <div className={standardprocedure.step}>
            <div className={standardprocedure.step_number}>4</div>
            <div className={standardprocedure.step_content}>De werkgever neemt contact op met de zieke werknemer om het verdere verloop van het ziekteverzuim te bespreken en eventuele vervolgstappen af te stemmen.</div>
          </div>
        </div>

        {/* <div className={standardprocedure.ZiekeMedewerker}>
          <h1>Standaardprocedure voor ziekmelding</h1>
          <div className={standardprocedure.content}>
            <h1 className={standardprocedure.numbers}>1</h1>
            <p>U vult de eerste dag (datum) van ziekmelding in. Vanaf hier gaat het stappenplan lopen.</p>
          </div>
          <div className={standardprocedure.content}>
            <h1 className={standardprocedure.numbers}>2</h1>
            <p>De werkgever verstrekt de werknemer het nodige verzuimformulier of meldingsdocument en de werknemer vult deze in. <span><FontAwesomeIcon icon={faFileArrowDown} className={standardprocedure.FaIcons} />Download Verzuimformulier</span></p>

          </div>
          <div className={standardprocedure.content}>
            <h1 className={standardprocedure.numbers}>3</h1>
            <p>De werkgever registreert de ziekmelding in het verzuimregistratiesysteem. Indien nodig, wordt de bedrijfsarts of arbodienst geïnformeerd</p>
          </div>
          <div className={standardprocedure.content}>
            <h1 className={standardprocedure.numbers}>4</h1>
            <p>De werkgever neemt contact op met de zieke werknemer om het verdere verloop van het ziekteverzuim te bespreken en eventuele vervolgstappen af te stemmen.</p>

          </div>
        </div> */}
      </div>
    </>
  )
}
