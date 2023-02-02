import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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
        <Marker position={[17.385, 78.4867]}>
          <Popup>
            <table className="table">
              <thead className="table--heading">
                <tr>
                  <th colSpan={2} className="">
                    Hyderabad
                  </th>
                </tr>
              </thead>
              <tbody className="table--body">
                <tr>
                  <td className="parameter-name">Country</td>
                  <td className="parameter-value">IN</td>
                </tr>
                <tr>
                  <td className="parameter-name">Temp</td>
                  <td className="parameter-value">28.2</td>
                </tr>{" "}
                <tr>
                  <td className="parameter-name">Clouds</td>
                  <td className="parameter-value">IN</td>
                </tr>{" "}
                <tr>
                  <td className="parameter-name">Country</td>
                  <td className="parameter-value">IN</td>
                </tr>{" "}
                <tr>
                  <td className="parameter-name">Country</td>
                  <td className="parameter-value">IN</td>
                </tr>
              </tbody>
            </table>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
