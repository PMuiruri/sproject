import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../style/event.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),

  iconUrl: require("leaflet/dist/images/marker-icon.png"),

  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

type State = {
  zoom: number
};

export default class EventMap extends Component<{}, State> {
  state = {
    zoom: 16
  };

  render() {
    const position = [this.props.data.lat, this.props.data.lon];
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {this.props.data.address.street_address} <br />
              {this.props.data.address.postal_code}{" "}
              {this.props.data.address.locality} <br />
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
