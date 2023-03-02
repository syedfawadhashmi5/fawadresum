import React, { useEffect, useState } from 'react';

function Index() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 12,
          };
          const map = new window.google.maps.Map(
            document.getElementById('map'),
            mapOptions
          );
          setMap(map);
        },
        (error) => console.error(error)
      );
    }
  }, []);

  const dataType = ['array', 'object', 'number', 'string', 'boolean', 'emoji'];

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }} />
      <div>
        <p>JavaScript data types:</p>
        {dataType.map((type, index) => (
          <div key={index}>
            <h1>{type}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
