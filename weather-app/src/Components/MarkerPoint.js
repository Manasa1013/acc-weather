import { Marker, Popup } from "react-leaflet";
export function MarkerPoint({ cityData }) {
  let position = [cityData.coord.lat, cityData.coord.lon];
  return (
    <Marker position={position}>
      <Popup>
        <table className="table">
          <thead className="table--heading">
            <tr>
              <th colSpan={2} className="">
                {cityData.name}
              </th>
            </tr>
          </thead>
          <tbody className="table--body">
            <tr>
              <td className="parameter-name">Temp</td>
              <td className="parameter-value">{cityData.main.temp}</td>
            </tr>{" "}
            <tr>
              <td className="parameter-name">Main</td>
              <td className="parameter-value">{cityData.weather[0].main}</td>
            </tr>{" "}
            <tr>
              <td className="parameter-name">[Lat,Lon]</td>
              <td className="parameter-value">
                {cityData.coord.lat},{cityData.coord.lon}
              </td>
            </tr>{" "}
            <tr>
              <td className="parameter-name">Country</td>
              <td className="parameter-value">{cityData.sys.country}</td>
            </tr>
          </tbody>
        </table>
      </Popup>
    </Marker>
  );
}
