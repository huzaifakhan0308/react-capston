import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLatLon } from '../redux/home/homeSlice';
import { getWeatherData } from '../redux/detail/detailSlice';
import ByDefault from './byDefault';
import searchIcon from '../assets/icons/search-icon.png';
import weatherIcon from '../assets/images/weatherIcon.png';
import nextArrow from '../assets/icons/next.png';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const home = useSelector((state) => state.home);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(home).length > 1) {
      dispatch(getWeatherData({ lat: home.lat, lon: home.lon }));
    }
  }, [home]);

  const getData = async () => {
    dispatch(getLatLon(inputValue));
    setInputValue('');
  };

  return (
    <div className="home-container">
      <div className="form-container">
        <form action="">
          <input type="text" placeholder="search your city" className="search-city-input" onChange={(e) => { setInputValue(e.target.value); }} />
          <button type="button" onClick={getData}><img src={searchIcon} alt="search icon" /></button>
        </form>
        {(Object.keys(home).length === 1) ? <span className="error-massage">{home.error}</span> : ''}
      </div>
      <Link to="/detail">
        {(Object.keys(detail).length > 1)
          ? (
            <div className="weather-info-container">
              <img src={weatherIcon} alt="" />
              <div className="weather-info-div">
                <p style={{ fontWeight: 'bolder', fontSize: '22px' }}>
                  Country:
                  {' '}
                  {detail.sys.country}
                </p>
                <p>
                  City:
                  {' '}
                  {home.name}
                </p>
                <p>
                  Latitude:
                  {' '}
                  {detail.coord.lat}
                </p>
                <p>
                  Longitude:
                  {' '}
                  {detail.coord.lon}
                </p>
                <p>
                  Timezone:
                  {' '}
                  {detail.timezone}
                </p>
              </div>
              <img className="nextArrow" src={nextArrow} alt="next arrow" />
            </div>
          )
          : (
            <div className="weather-info-container">
              <img src={weatherIcon} alt="" />
              <div className="weather-info-div">
                <p style={{ fontWeight: 'bolder', fontSize: '22px' }}>
                  Country: PK
                </p>
                <p>
                  City: Nowshera
                </p>
                <p>
                  Latitude: 34.0156
                </p>
                <p>
                  Longitude: 71.9813
                </p>
                <p>
                  Timezone: 18000
                </p>
              </div>
              <img className="nextArrow" src={nextArrow} alt="next arrow" />
            </div>
          )}
        <ByDefault />
      </Link>
    </div>
  );
};

export default Home;
