import React from 'react';
import { useDispatch } from 'react-redux';
import weatherIcon from '../assets/images/weatherIcon.png';
import nextArrow from '../assets/icons/next.png';
import { getLatLon } from '../redux/home/homeSlice';

function ByDefault() {
  const dispatch = useDispatch();

  const getData = (e) => {
    dispatch(getLatLon(e));
  };

  return (
    <div className="byDefault-container">
      <div className="byDefault-cities-container">
        <div
          role="button"
          tabIndex={0}
          onClick={() => getData('paris')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
          className="byDefault-cities"
          style={{ background: 'rgba(0, 0, 0, 0.11)' }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: FR,</p>
            <p>City: Paris</p>
            <p>Timezone: 3600</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
        <div
          className="byDefault-cities"
          role="button"
          tabIndex={0}
          onClick={() => getData('new york')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: US</p>
            <p>
              City: New York
            </p>
            <p>Timezone: -14400</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
      </div>
      <div className="byDefault-cities-container">
        <div
          className="byDefault-cities"
          role="button"
          tabIndex={0}
          onClick={() => getData('moscow')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: RU</p>
            <p>City: Moscow</p>
            <p>Timezone: 10800</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
        <div
          className="byDefault-cities"
          role="button"
          tabIndex={0}
          onClick={() => getData('beijing')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
          style={{ background: 'rgba(0, 0, 0, 0.11)' }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: CN</p>
            <p>City: Beijing</p>
            <p>Timezone: 28800</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
      </div>
      <div className="byDefault-cities-container">
        <div
          className="byDefault-cities"
          role="button"
          tabIndex={0}
          onClick={() => getData('dubai')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
          style={{ background: 'rgba(0, 0, 0, 0.11)' }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: AE</p>
            <p>City: Dubai</p>
            <p>Timezone: 14400</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
        <div
          className="byDefault-cities"
          role="button"
          tabIndex={0}
          onClick={() => getData('istanbul')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              getData();
            }
          }}
        >
          <img className="default-weatherIcon" src={weatherIcon} alt="weather-icon" />
          <div className="">
            <p style={{ fontWeight: 'bolder', fontSize: '19px' }}>Country: TR</p>
            <p>City: Istanbul</p>
            <p>Timezone: 10800</p>
          </div>
          <img className="default-nextArrow" src={nextArrow} alt="next arrow icon" />
        </div>
      </div>
    </div>
  );
}

export default ByDefault;
