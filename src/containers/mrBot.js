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

class MrBot extends Component{
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
          <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', }}>ACCUEIL</Text>
          <Image style={{ width: width * 0.07, height: width * 0.07, position: 'absolute', right: width * 0.03, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.045, color: '#FFC000', marginTop: width * 0.1 }}>Ma Voiture</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: width * 0.03 }}>
          <TouchableOpacity>
            <Image style={{ width: width * 0.35, height: width * 0.35, resizeMode: 'contain' }} source={require('../../assets/images/audiView.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: width * 0.35, height: width * 0.35,resizeMode: 'contain', marginLeft: width * 0.04 }} source={require('../../assets/images/renaultView.png')}/>
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.045, color: '#FFC000', marginTop: width * 0.1 }}>STATUT DE VEHICULE</Text>
        <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: width * 0.04 }} horizontal={true}>
        {/* <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: width * 0.03 }}> */}
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: '#FFC000', fontSize: width * 0.04, marginTop: width * 0.03 }}>Moteur</Text>
            <Image style={{ width: width * 0.15, height: width * 0.15, resizeMode: 'contain' }} source={require('../../assets/images/moteur.png')}/>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '40%', height: 3, borderRadius: width * 0.05, backgroundColor: '#FFC000',  }}></View>
              <View style={{ width: '20%', height: 3, borderRadius: width * 0.05, backgroundColor: 'white',  }}></View>
            </View>
            <Text style={{ color: '#FFC000', fontFamily: 'Barlow-Regular' }}>2/5</Text>
          </View>
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', fontSize: width * 0.04, marginTop: width * 0.03 }}>Pneus</Text>  
            <Image style={{ width: width * 0.15, height: width * 0.15,resizeMode: 'contain', }} source={require('../../assets/images/pneus.png')}/>
          </View>
          <View style={styles.function}>
            <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', fontSize: width * 0.04, marginTop: width * 0.03 }}>Huile</Text>  
            <Image style={{ width: width * 0.15, height: width * 0.15,resizeMode: 'contain', }} source={require('../../assets/images/huile.png')}/>
          </View>
        </ScrollView>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.045, color: 'white', marginTop: width * 0.06 }}>TRACKING DU MAINTENANCE</Text>  
        <View style={{ marginVertical: width * 0.03, backgroundColor: '', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '100%', backgroundColor: 'white', height: width * 0.025, position: 'absolute', zIndex: -1, top: width * 0.1 }}></View>
          <View style={[styles.statusContainer,{alignItems: 'flex-start'}]}>
            <Image style={{ width: width * 0.07, height: width * 0.07,resizeMode: 'contain', }} source={require('../../assets/images/receivedCar.png')}/>
            <Image style={styles.status} source={require('../../assets/images/taskComplete.png')}/>
            <Text style={[styles.trackItemText,{color: '#FFC000'}]}>Voiture Reçu</Text>
          </View>
          <View style={styles.statusContainer}>
            <Image style={{ width: width * 0.07, height: width * 0.07,resizeMode: 'contain', }} source={require('../../assets/images/tire.png')}/>
            <Image style={styles.status} source={require('../../assets/images/taskEmpty.png')}/>
            <Text style={styles.trackItemText}>Pneus</Text>
          </View>
          <View style={styles.statusContainer}>
            <Image style={{ width: width * 0.07, height: width * 0.07,resizeMode: 'contain', }} source={require('../../assets/images/vidange.png')}/>
            <Image style={styles.status} source={require('../../assets/images/taskEmpty.png')}/>
            <Text style={styles.trackItemText}>Vidange</Text>
          </View>
          <View style={styles.statusContainer}>
            <Image style={{ width: width * 0.07, height: width * 0.07,resizeMode: 'contain', }} source={require('../../assets/images/lavage.png')}/>
            <Image style={styles.status} source={require('../../assets/images/taskEmpty.png')}/>
            <Text style={styles.trackItemText}>Lavage</Text>
          </View>
          <View style={[styles.statusContainer,{alignItems: 'flex-end'}]}>
            <Image style={{ width: width * 0.07, height: width * 0.07,resizeMode: 'contain', }} source={require('../../assets/images/carIcon.png')}/>
            <Image style={styles.status} source={require('../../assets/images/taskEmpty.png')}/>
            <Text style={styles.trackItemText}>Livraison Voiture</Text>
          </View>
        </View>
        <Text style={{ fontFamily: 'Barlow-Regular', marginLeft: width * 0.03, fontSize: width * 0.045, color: '#FFC000', marginTop: width * 0.06 }}>HISTORIQUE</Text>  
        <View style={{ marginLeft: width * 0.03, marginTop: width * 0.03, paddingBottom: width * 0.03}}>
          <View style={{ width: width * 0.02, height: history.length * width * 0.08, backgroundColor: 'white', position: 'absolute', zIndex: -1, left: width * 0.25 }}></View>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={{ flexDirection: 'row', marginTop: index!=0 ? width * 0.05 : 0 }}>
                <Text style={{ color: 'white' }}>{item.date}</Text>
                <Image style={[styles.status,{position: 'absolute', left: width * 0.225}]} source={require('../../assets/images/taskEmpty.png')}/>
                <Text style={{ color: 'white', marginLeft: width * 0.13 }}>{item.service}</Text>
              </View>
            )}
          />
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
  function:{
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#7E7E7E',
    borderRadius: width * 0.03,
    width: width * 0.33, 
    height: width * 0.33,
    marginLeft: width * 0.03

  },
  trackItemText:{
    fontFamily: 'Barlow-Regular', 
    fontSize: width * 0.03,
    color: 'white'
  },
  status:{
    width: width * 0.07, 
    height: width * 0.07,
    resizeMode: 'contain', 
  },
  statusContainer:{
    alignItems: 'center',
  }
});

export default MrBot;
