import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Mapa extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyD3AAXwJ3MxND_3urIUvXx4PSX1gmmd1ns"}
          style={{ height: "500px", width: "370px" }}
          zoom={15}
          center={{
            lat: 41.387035,
            lng: 2.169902,
          }}
        />
      </div>
    );
  }
}
