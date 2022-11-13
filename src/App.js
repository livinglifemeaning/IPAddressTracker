import { useEffect, useState } from "react";
import IPTracker from "./components/IPTracker";
import Map from "./components/Map";
function App() {
  const savedLatitude = sessionStorage.getItem("lat");
  const savedLongtitude = sessionStorage.getItem("lng");
  const savedData = JSON.parse(sessionStorage.getItem("data")) 
 console.log(savedData)
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(savedData ? savedData : '');
  const [latitude, setLatitude] = useState(savedLatitude ? savedLatitude : 12);
  const [longtitude, setLongtitude] = useState(
    savedLongtitude ? savedLongtitude : 12
  );

  useEffect(() => {
    if (savedLatitude && savedLatitude !== latitude) {
      let stringData = JSON.stringify(data)
      sessionStorage.setItem("lat", latitude);
      sessionStorage.setItem("lng", longtitude);
      sessionStorage.setItem("data", stringData); 
      window.location.reload(false);
    }
  }, [latitude, longtitude]);

  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleSearch = () => {
    if (inputValue !== "") {
      fetchData();
    }
  };
  const fetchData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_7PyOg1PONBibJRzZWUbbMjjqHlWDY&ipAddress=${inputValue}`
    );

    const data = await response.json();
    const dataObject = {
      address: data.ip,
      location: `${data.location.city}, ${data.location.region} ${
        data.location.postalCode && data.location.postalCode
      }`,
      timezone: `UTC ${data.location.timezone}`,
      isp: data.isp,
    };
    setData(dataObject);
    const dataString = JSON.stringify(dataObject)
    sessionStorage.setItem("data", dataString)
    setLatitude(data.location.lat);
    sessionStorage.setItem("lat", data.location.lat);
    setLongtitude(data.location.lng);
    sessionStorage.setItem("lng", data.location.lng);
  };

  return (
    <main>
      <IPTracker
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        data={data}
        handleSearch={handleSearch}
      />
      <Map latitude={latitude} longtitude={longtitude} />
    </main>
  );
}

export default App;
