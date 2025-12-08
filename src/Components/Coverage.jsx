import React, { useRef, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FiSearch } from "react-icons/fi";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const mapRef = useRef(null);
  const [serviceAreas, setServiceAreas] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("/serviceAreas.json")
      .then((res) => res.json())
      .then((data) => setServiceAreas(data))
      .catch((err) => console.error("Failed to load service areas:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceAreas.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13);
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10">
        We are available in 64 districts
      </h2>

      {/* Styled Search Input */}
      <div className="my-10 w-full max-w-md mx-auto">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="search"
            name="location"
            placeholder="Enter Your District Here"
            className="grow w-full py-3 px-4 pr-14 rounded-full bg-black/30 text-white placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="btn absolute right-1 top-1/2 -translate-y-1/2 bg-[#063F2D] hover:bg-green-900 border p-3 rounded-r-full text-white"
          >
            <FiSearch size={18} />
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="border w-full h-[300px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[300px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceAreas.map((serviceArea, index) => (
            <Marker
              key={index}
              position={[serviceArea.latitude, serviceArea.longitude]}
            >
              <Popup>
                <strong>{serviceArea.district}</strong> <br /> Service area:{" "}
                {serviceArea.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
