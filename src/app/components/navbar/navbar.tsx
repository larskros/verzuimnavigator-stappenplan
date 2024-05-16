import React from 'react';
import navbar from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



export default function Navbar(){
    return (
        <>
            <div className="NavbarLeft">
                <a href="#"><img src="" alt="" /></a>
                <a href="#">Wat moet u weten<FontAwesomeIcon icon={faChevronDown} className={navbar.FaIcons} /></a>
            </div>
        </>
    )
  }
