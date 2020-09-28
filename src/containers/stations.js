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
  ScrollView,
  FlatList,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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

  componentDidMount(){
  }

  render(){
    const {} = this.state;
    return(
      <View style={styles.container}>
          <MapView
            provider={Platform.OS === 'ios' ? null : PROVIDER_GOOGLE} // remove if not using Google Maps
            style={additionalStyle.MapView}
            region={{
              latitude: 32.1194,
              longitude: 20.0868,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
              <MapView.Marker
                coordinate={{latitude: 100, longitude: 100}}
              />
              
            
          </MapView>
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
    width: 250,
    height: 250,
  },
});

const additionalStyle = {
  icon: {paddingTop: 2, paddingLeft: 5},
  MapView: {height: height - 200, width: '100%'},
};

export default Stations;
