import { Marker, Popup } from "react-leaflet";
export function MarkerPoint({ cityData }) {
  let position = [cityData.coord.lat, cityData.coord.lon];
  return (
    <Marker position={position}>
      <Popup>
        <section className="flex-wrapper">
          <h4>{cityData.name}</h4>
          <article className="weather-container">
            <ul>
              <li>{cityData.main.temp}</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </article>
        </section>
      </Popup>
    </Marker>
  );
}
