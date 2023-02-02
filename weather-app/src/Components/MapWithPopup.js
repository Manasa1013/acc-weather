import { MapContainer, TileLayer } from "react-leaflet";
import { MarkerPoint } from "./MarkerPoint";

export function MapWithPopup({ weatherInfo }) {
  //current city location as starting point
  const position = [17.3753, 78.4744];
  return (
    <div className="map-container__wrapper">
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {weatherInfo.length > 0 &&
          weatherInfo.map((cityParameters) => {
            return (
              <MarkerPoint
                key={cityParameters.name}
                cityData={cityParameters}
              />
            );
          })}
      </MapContainer>
    </div>
  );
}
