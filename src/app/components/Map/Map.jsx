import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Container = styled.div`
  height: 300px;
  width: 100%;
`;

class Map extends Component {
  /**
   * Props for the Google Maps appearance.
   * Center: set to San Jose
   * Options: map style from snazzy maps
   * 
   * @type {{center: {lat: number, lng: number}, zoom: number, options: {styles: *[]}}}
   */
  static defaultProps = {
    center: {
      lat: 37.33899,
      lng: -121.871202
    },
    zoom: 11,
    options: {
      styles: [
        {
          featureType: 'all',
          stylers: [
            {
              saturation: 0
            },
            {
              hue: '#e7ecf0'
            }
          ]
        },
        {
          featureType: 'road',
          stylers: [
            {
              saturation: -70
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            {
              visibility: 'simplified'
            },
            {
              saturation: -60
            }
          ]
        }
      ]
    }
  };

  render() {
    return (
      <Container>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAz5oFsltDk6fb1_Zp69pzHfejXpbPP6KQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.options}
        />
      </Container>
    );
  }
}

export default Map;
