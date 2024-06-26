import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";
import Typography from "../../../utilities/Typography";
import { useTranslation } from "react-i18next";
const Map = ({ className, position }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(selectedLocation);

  const handleMapClick = (e) => {
    setSelectedLocation(e.latlng);
  };

  const LocationMarker = () => {
    useMapEvent({
      click: handleMapClick,
    });

    return selectedLocation ? <Marker position={selectedLocation} /> : null;
  };

  const { t } = useTranslation("global");
  // const position = [33.510414, 36.278336];
  return (
    <div className={` ${className ? className : ""}  `}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="rounded-xl w-full max-h-60 sm:max-h-80 md:max-h-[40rem] z-10 "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Typography
        component="h4"
        className="sm:w-[70%] w-[15rem]  mx-auto pt-10 text-center"
      >
        {t("services_map.0")}
      </Typography>
    </div>
  );
};

export default Map;
