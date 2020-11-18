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

  onMarkerClick = (props, marker, e) => {
    axios
      .get(`${this.state.API_URL}/dealers/getByName/${props.name}`)
      .then((response) => {
        this.setState({ selectedPlace: response.data[0] });
      });
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
    });
    this.props.getActiveMarker(props.id);
  };

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
          id={place._id}
          onClick={this.onMarkerClick}
          title={place.name}
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
    minWidth: "20rem",
    minHeight: "20rem",
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
        zoom={12}
      >
        {this.placeMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <h4 className="infoWindow__title">{this.state.selectedPlace.name}</h4>
          <div className="infoWindow">
            <div className="infoWindow__img">
              <img
                src="https://images.wheels.ca/wp-content/uploads/2019/02/TrackWorthy-DSC_1774-wide-1500x5001.jpg"
                style={{
                  width: "50vw",
                  height: "50vw",
                  maxWidth: "13rem",
                  maxHeight: "10rem",
                }}
                alt="dealer img"
              />
            </div>
            <div className="infoWindow__desc">
              <p>{this.state.selectedPlace.address}</p>
              <a href={`tel:${this.state.selectedPlace.tel}}`}>
                <p>tel: {this.state.selectedPlace.tel}</p>
              </a>
              <a href={`fax:${this.state.selectedPlace.fax}}`}>
                <p>fax: {this.state.selectedPlace.fax}</p>
              </a>
              <a
                href="https://kyh8725.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{this.state.selectedPlace.web}</p>
              </a>
            </div>
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
