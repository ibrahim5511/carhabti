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
} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={{ width: width * 0.2, height: width * 0.2, resizeMode: 'contain', position: 'absolute', left: width * 0.03 }} source={require('../../assets/images/slogan.png')}/>
          <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', }}>ACCUEIL</Text>
          <Image style={{ width: width * 0.07, height: width * 0.07, position: 'absolute', right: width * 0.03, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.06, fontSize: width * 0.045, color: '#FFC000', marginTop: width * 0.2 }}>Ma Voiture</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: width * 0.03 }}>
          <TouchableOpacity>
            <Image style={{ width: width * 0.35, height: width * 0.35, resizeMode: 'contain' }} source={require('../../assets/images/audiView.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: width * 0.35, height: width * 0.35,resizeMode: 'contain', marginLeft: width * 0.04 }} source={require('../../assets/images/renaultView.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.06, fontSize: width * 0.045, color: '#FFC000', marginTop: width * 0.2 }}>STATUT DE VEHICULE</Text>
        <ScrollView style={{ marginTop: width * 0.04 }} horizontal={true}>
        {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: width * 0.03 }}> */}
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: '#FFC000', fontSize: width * 0.05 }}>Moteur</Text>
            <Image style={{ width: width * 0.18, height: width * 0.18, resizeMode: 'contain' }} source={require('../../assets/images/moteur.png')}/>
          </View>
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', fontSize: width * 0.05 }}>Pneus</Text>  
            <Image style={{ width: width * 0.18, height: width * 0.18,resizeMode: 'contain', }} source={require('../../assets/images/pneus.png')}/>
          </View>
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: 'white' }}>Pneus</Text>  
            <Image style={{ width: width * 0.18, height: width * 0.18,resizeMode: 'contain', }} source={require('../../assets/images/huile.png')}/>
          </View>
          </ScrollView>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2B2B2B',
  },
  header:{
    marginTop: width * 0.03,
    alignItems: 'center',
    //justifyContent: 'space-between',
    flexDirection: 'row',
  },
  function:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7E7E7E',
    borderRadius: width * 0.03,
    width: width * 0.3, 
    height: width * 0.3,
    marginLeft: width * 0.04

  }
});

export default App;
