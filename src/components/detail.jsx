import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/detail.css';
import weatherIcon from '../assets/images/weatherIcon.png';

function Detail() {
  const detail = useSelector((state) => state.detail);
  return (
    <div className="detail-container">
      {(Object.keys(detail).length > 1)
        ? (
          <div className="weather-info-container">
            <div className="img-info-div">
              <img src={weatherIcon} alt="weather icon" />
              <div className="info">
                <p>
                  Temprature:
                  {' '}
                  {detail.main.temp}
                </p>
                <p>
                  All clouds:
                  {' '}
                  {detail.clouds.all}
                </p>
                <p>
                  Wind speed:
                  {' '}
                  {detail.wind.speed}
                </p>
              </div>
            </div>
            <div className="info-div">
              <p>
                Country:
                {' '}
                {detail.sys.country}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                Base:
                {' '}
                {detail.base}
              </p>
              <p>
                Longitude:
                {' '}
                {detail.coord.lon}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                Latitude:
                {' '}
                {detail.coord.lat}
              </p>
              <p>
                Temp_min:
                {' '}
                {detail.main.temp_min}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                Temp_max:
                {' '}
                {detail.main.temp_max}
              </p>
              <p>
                Sunrise:
                {' '}
                {detail.sys.sunrise}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                Sunset:
                {' '}
                {detail.sys.sunset}
              </p>
              <p>
                wind_deg:
                {' '}
                {detail.wind.deg}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                wind_gust:
                {' '}
                {detail.wind.gust}
              </p>
              <p>
                Visibility:
                {' '}
                {detail.visibility}
              </p>
              <p style={{ background: 'rgba(0, 0, 0, 0.11)' }}>
                Timezone:
                {' '}
                {detail.timezone}
              </p>
            </div>
          </div>
        )

        : (
          <div className="weather-info-container" style={{ color: 'white' }}>
            loading....
          </div>
        ) }
    </div>
  );
}

export default Detail;
