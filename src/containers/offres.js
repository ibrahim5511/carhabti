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
import BottomBar from '../components/bottomBar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Offres extends Component{
  constructor(props) {
    super(props);
    this.state = {
      offres: [
        {id: '0', text: 'Huiles ...', count: '25', type: 'oil', image: require('../../assets/images/huilesOffre.png')}, 
        {id: '1', type: 'Pistons', count: '36', type: 'piston', image: require('../../assets/images/pistonOffre.png')}, 
        {id: '2', text: 'Bougies', count: '154', type: 'bougie', image: require('../../assets/images/bougieOffre.png')}, 
        {id: '3', text: 'Moteur', count: '15', type: 'engine', image: require('../../assets/images/moteurOffre.png')}
      ],
    }
  }
  render(){
    const {offres, showModal} = this.state;
    return(
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image style={{ width: width * 0.15, height: width * 0.1 , resizeMode: 'contain', position: 'absolute', left: width * 0.03, }} source={require('../../assets/images/slogan.png')}/>
            <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', fontSize: width * 0.04}}>Offres</Text>
            <TouchableOpacity style={{ position: 'absolute', right: width * 0.03,  }} onPress={()=> this.props.navigation.navigate('MrBot')}>
              <Image style={{ width: width * 0.07, height: width * 0.07, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.05, color: 'white', marginTop: width * 0.1, }}>MEILLEURS PRODUITS</Text>
          <FlatList
            data={offres}
            numColumns={2}
            style={{ width: width }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={{ width: width * 0.5, height: width * 0.45, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{width: width * 0.4, height: width * 0.4}} source={item.image}/>
                <View style={{ position: 'absolute', right: width * 0.1, bottom: width * 0.05, alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={{position: 'absolute', width: width * 0.13, height: width * 0.13, }} source={require('../../assets/images/yellowCount.png')}/>
                  <Text style={{  color: 'white', fontFamily: 'Barlow-Regular', fontSize: width * 0.04, right: width * 0.01 }}>{item.count}</Text>
                  <Text style={{  color: 'white', fontFamily: 'Barlow-Regular', fontSize: width * 0.023, right: width * 0.015 }}>DT</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
        <BottomBar/>
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

});

export default Offres;
