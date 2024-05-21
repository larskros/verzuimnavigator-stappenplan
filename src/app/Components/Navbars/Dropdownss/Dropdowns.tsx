"use client";
import React, { useState } from 'react'
import dropdownStyling from './Dropdowns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const dropdown = (props: { MenuTitle: string; MenuItem1: string; MenuItem2: string; MenuItem3: string; }) => {

    // Function to toggle the visibility of the dropdown menu with a hover effect
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Toggle the open state
    const toggle = () => {
        setIsOpen(old => !old);
    }

    // Change the class when IsOpen is true or false
    const transClass = isOpen
        ?
        "OpenDropdown"
        :
        "HideDropDown";

  return (
    <>
        <div className={dropdownStyling.Dropdown}>
            <a onMouseEnter={toggle} onMouseLeave={toggle} className={dropdownStyling.DropdownButton}>{props.MenuTitle}<FontAwesomeIcon icon={faChevronDown} className={dropdownStyling.FaIcons} /></a>
            <div onMouseEnter={toggle} onMouseLeave={toggle} className={dropdownStyling[`${transClass}`] }>
                <a href="#">{props.MenuItem1}</a>
                <a href="#">{props.MenuItem2}</a>
                <a href="#">{props.MenuItem3}</a>
            </div>
        </div>
    </>
  )
}

export default dropdown