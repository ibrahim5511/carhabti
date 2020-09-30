/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity, 
  Linking,
   Alert
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Stations extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Location Permission',
          'message': 'This App needs access to your location ' +
                     'so we can know where you are.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(info => {
          console.log(info);
          this.setState({ coords: info.coords, ready: true })
         //Alert.alert(JSON.stringify(info));
        },
        err => {
          console.log(err);
        },
        { enableHighAccuracy: false, timeout: 20000, showLocationDialog: true, forceRequestLocation: true,},
        );

      } else {
        console.log("Location permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

  componentDidMount(){

    this.requestLocationPermission();

  }
  

  render(){
    const {coords, ready} = this.state;
    return(
      <View style={styles.container}>
        {ready &&
          <MapView
            style={styles.map}
  
            region={
              {
                latitude:coords.latitude,
                longitude:coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            }
            followUserLocation={true}
            ref={ref => (this.mapView = ref)}
            zoomEnabled={true}
            showsUserLocation={true}
            initialRegion={this.state.initialRegion}>
          </MapView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  map: {
    width: width,
    height: height,
  },
});

const additionalStyle = {
  icon: {paddingTop: 2, paddingLeft: 5},
  MapView: {
    width: width,
    height: height,
  },
};

export default Stations;
