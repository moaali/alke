import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { withScriptjs, GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import './index.less';

const Map = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
  </GoogleMap>
)));


export default class SimpleMap extends Component {
  static propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setMapCenter);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setMapCenter);
  }

  @autobind
  setMapCenter() {
    const { latitude, longitude } = this.props;
    this.setState({ latitude, longitude });
  }

  render() {
    return (
      <div
        style={{
          height: 400,
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <Map
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          isMarkerShown
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px', width: '100%', marginLeft: 0 }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}
