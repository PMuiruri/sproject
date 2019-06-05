import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../style/event.css';
import 'leaflet/dist/leaflet.css';

type State = {
  zoom: number,
}

export default class EventMap extends Component<{}, State> {
  state = {
    zoom: 10,
  }

  render() {
    const position = [this.props.data.lat, this.props.data.lon]
    return (
      <div>
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      </div>
    )
  }
}
