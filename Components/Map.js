import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.387397, lng: 2.16949 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
