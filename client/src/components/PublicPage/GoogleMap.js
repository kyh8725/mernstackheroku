import React, { Component } from "react";
import {
  GoogleApiWrapper,
  InfoWindow,
  Map,
  Marker,
  LoadingContainer,
} from "google-maps-react";
import axios from "axios";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markerPlaces: [],
    API_URL: process.env.REACT_APP_API_URL,
    mapCenter: {
      lat: 49.126386,
      lng: -122.692122,
    },
  };

  async componentDidMount() {
    await axios.get(`${this.state.API_URL}/dealers/getall`).then((response) => {
      this.setState({ markerPlaces: response.data });
    });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  placeMarkers = () => {
    const markers = this.state.markerPlaces.map((place) => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          title={place.title}
          name={place.name}
          position={{ lat: place.lat, lng: place.long }}
        />
      );
    });
    return markers;
  };

  containerStyle = {
    position: "relative",
    width: "50vw",
    height: "30vw",
    maxWidth: "45rem",
    maxHeight: "20rem",
  };

  render() {
    return (
      <Map
        containerStyle={this.containerStyle}
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
        center={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
        zoom={12}
      >
        {this.placeMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);
