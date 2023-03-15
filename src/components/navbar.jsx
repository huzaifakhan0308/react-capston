import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import leftArrowIcon from '../assets/icons/left-chevron.png';
import micIcon from '../assets/icons/mic.png';
import settingIcon from '../assets/icons/gear.png';

function Navbar() {
  return (
    <nav>
      <Link to="/"><img className="leftArrowIcon" src={leftArrowIcon} alt="left Arrow Icon" /></Link>
      <span className="page-names">cities</span>
      <div className="mic-setting-icon-div">
        <img className="micIcon" src={micIcon} alt="mic icon" />
        <img className="settingIcon" src={settingIcon} alt="setting icon" />
      </div>
    </nav>
  );
}

export default Navbar;
