import React from 'react';
import standardprocedure from './StandardProcedure.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Standardprocedure() {
  return (
    <>
      <div className={standardprocedure.Container}>
        <div className={standardprocedure.Titles}>
          <h1>Zieke medewerker</h1>
          <p>Uw medewerker meldt zich ziek en verschijnt niet op het werk. Dit hoeft niet meteen iets ernstigs te betekenen, maar u moet als werkgever wel direct enkele stappen ondernemen om het goed te regelen. De volgende stappen gelden voor elk type ziekmelding en leggen de basis voor een gestructureerde opvolging en ondersteuning van de werknemer.</p>
        </div>
        {}
      </div>
    </>
  )
}
