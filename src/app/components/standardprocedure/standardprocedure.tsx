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
      
      <div className={standardprocedure.ZiekeMedewerker}>
        <h1>Standaardprocedure voor ziekmelding</h1>
        <p>U vult de eerste dag (datum) van ziekmelding in. Vanaf hier gaat het stappenplan lopen.</p>
        <p>De werkgever verstrekt de werknemer het nodige verzuimformulier of meldingsdocument en de werknemer vult deze in. <span><FontAwesomeIcon icon={faFileArrowDown} className={standardprocedure.FaIcons} />Download Verzuimformulier</span></p>
        <p>De werkgever registreert de ziekmelding in het verzuimregistratiesysteem. Indien nodig, wordt de bedrijfsarts of arbodienst geïnformeerd</p> 
        <p>De werkgever neemt contact op met de zieke werknemer om het verdere verloop van het ziekteverzuim te bespreken en eventuele vervolgstappen af te stemmen.</p>
      </div>
    </div>  
    </>
  )
}
