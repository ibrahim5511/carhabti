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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Offres extends Component{
  constructor(props) {
    super(props);
    this.state = {
      history: [{id: '0', date: 'Mar / 2020', service: 'Pneus'}, {id: '0', date: 'Jan / 2020', service: 'Moteur'}, {id: '0', date: 'Dec / 2019', service: 'Vidange'}]
    };
  }
  render(){
    const {history} = this.state;
    return(
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={{ width: width * 0.2, height: width * 0.2, resizeMode: 'contain', position: 'absolute', left: width * 0.03 }} source={require('../../assets/images/slogan.png')}/>
          <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', }}>Offres</Text>
          <Image style={{ width: width * 0.07, height: width * 0.07, position: 'absolute', right: width * 0.03, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.05, color: 'white', marginTop: width * 0.1, }}>MEILLEURS PRODUITS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: width * 0.05 }}>
          <Image style={styles.section} source={require('../../assets/images/offresHuile.png')}/>
          <Image style={styles.section} source={require('../../assets/images/offresPistons.png')}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: width * 0.04 }}>
          <Image style={styles.section} source={require('../../assets/images/offresBougies.png')}/>
          <Image style={styles.section} source={require('../../assets/images/offresMoteur.png')}/>
        </View>
      </ScrollView>
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
  section:{
    width: width * 0.4, 
    height: width * 0.4, 
    resizeMode: 'contain'
  },
});

export default Offres;
