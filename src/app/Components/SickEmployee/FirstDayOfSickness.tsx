"use client";
import React, { useState, useRef } from 'react';
import styles from './FirstDayOfSickness.module.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


export default function FirstDayOfSickness() {

  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div>
      <p className={styles.DateInputLabel}>Wat is de eerste ziektedag?</p>
      <div className={styles.DateInput}>
        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Kies een dag" />
        <div className={styles.CalendarIcon}>
          <FontAwesomeIcon icon={faCalendar} />
        </div>
      </div>
    </div>
  )
}
