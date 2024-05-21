import React from 'react';
import navbar from './Navbar.module.css';
import Dropdown from './Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



export default function Navbar(){
    return (
        <>
        <div className={navbar.Navbar}>
            <div className={navbar.NavbarLeft}>
                <a href=""><img src="../Verzuimnavigator Logo.svg" alt="" /></a>
                <Dropdown MenuTitle='Wat moet u weten?' MenuItem1='Voldoen aan de wet' MenuItem2='Gezondheid bevorderen' MenuItem3='Arbeidsrisico verminderen' />
            </div>
            <div className={navbar.NavbarRight}>
                <a href="">Zieke medewerker</a>
                <a href="">Veilige werkplek</a>
                <a href="">Producten</a>
                <a href="">Vergoedingen</a>
                <a href="">Contact</a>
                <a href=""><FontAwesomeIcon icon={faMagnifyingGlass} className={navbar.FaIcons} /></a>
            </div>
        </div>
            
        </>
    )
  }
