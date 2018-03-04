import React, { PureComponent } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import { data, markers, mapConfig } from './map-config';

import styles from './map.module.css';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

class ReactMap extends PureComponent {
  // Get the style for your polygons from GeoJSON, it can be dependable on a parameter you want.
  // For example, you can use different style for different density of the location
  getStyle(feature) {
    return {
      fillColor: '#ece7f2',
      weight: 2,
      opacity: 1,
      color: 'blue',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  render() {
    // create an array with marker components
    const LeafletMarkers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.name}</span>
        </Popup>
      </Marker>
    ));

    return (
      <Map
        center={mapConfig.center}
        zoom={mapConfig.zoom}
        className={styles.map}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>, &copy; <a href=&quot;https://carto.com/attribution&quot;>CARTO</a>"
        />
        {LeafletMarkers}
        {/* You can now try to find Alabama on a Map to see how it looks like now with GeoJSON*/}
        <GeoJSON data={data} style={this.getStyle} />
      </Map>
    );
  }
}

export default ReactMap;
