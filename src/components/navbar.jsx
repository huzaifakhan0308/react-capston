import React, { useEffect } from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import leftArrowIcon from '../assets/icons/left-chevron.png';
import micIcon from '../assets/icons/mic.png';
import settingIcon from '../assets/icons/gear.png';
import { getWeatherData } from '../redux/detail/detailSlice';

function Navbar() {
  const home = useSelector((state) => state.home);
  const detail = useSelector((state) => state.detail);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/detail' && Object.keys(home).length > 1) {
      dispatch(getWeatherData({ lat: home.lat, lon: home.lon }));
    }
  }, [dispatch, location, home]);

  return (
    <nav>
      {(location.pathname === '/') ? <Link to="/" /> : <Link to="/"><img className="leftArrowIcon" src={leftArrowIcon} alt="left Arrow Icon" /></Link>}
      {(Object.keys(detail).length > 1) ? <span className="page-names">{home.name}</span> : <span className="page-names">cities</span>}
      <div className="mic-setting-icon-div">
        <img className="micIcon" src={micIcon} alt="mic icon" />
        <img className="settingIcon" src={settingIcon} alt="setting icon" />
      </div>
    </nav>
  );
}

export default Navbar;
