import React, { useEffect } from 'react';
import setPageTitle from '../../utils/setPageTitle';
import './style/Error404.css';

export default function Error404() {
  useEffect(() => {
    setPageTitle('Page Not Found - Felipe Seabra');
  }, []);

  return (
    <div className="background-color-grey">
      <div className="stars">

        <div className="central-body">
          <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404" />
          <a href="/" className="btn-go-home">GO HOME</a>
        </div>
        <div className="objects">
          <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="Rocket" />
          <div className="earth-moon">
            <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="Terra" />
            <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="Lua" />
          </div>
          <div className="box_astronaut">
            <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="Astronalta" />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  );
}
