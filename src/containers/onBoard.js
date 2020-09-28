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
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class OnBoard extends Component{
  render(){
    return(
      <Swiper 
        style={styles.wrapper} 
        loop={false}
        paginationStyle={{ paddingBottom: width * 0.03 }}
        dotStyle={{ backgroundColor: 'white', width: width * 0.02, height:width * 0.02, borderRadius: width * 0.02, opacity: 0.3 }}
        activeDotStyle={{ backgroundColor: 'white', width: width * 0.02, height:width * 0.02, borderRadius: width * 0.02 }}
      >
        <View style={styles.container}>
          <Image style={{ width: 100, height: 60,  position: 'absolute', resizeMode: 'contain', top: 30, alignSelf: 'center', zIndex: 10}} source={require('../../assets/images/onBoardSmall.png')} />
          <Image style={{ width: '100%', height: '100%', zIndex: -1, position: 'absolute' }} source={require('../../assets/images/onBoard.png')} />
          <Text style={{ fontFamily: 'Barlow-Bold', color: 'white', marginTop: height * 0.4, fontSize: width * 0.06 }}>CARHABTEK</Text>
          <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', textAlign: 'center', width: '60%', marginTop: width * 0.08 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginSignUp')} style={{  marginTop: width * 0.08, alignItems: 'center', justifyContent: 'center'  }}>
            <View style={{ backgroundColor: 'white', width: width * 0.5, height: width * 0.12, borderRadius: width * 0.04, opacity: 0.3 }}></View>
            <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', position: 'absolute', zIndex: 10 }}>COMMANCER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Image style={{ width: 100, height: 60,  position: 'absolute', resizeMode: 'contain', top: 30, alignSelf: 'center', zIndex: 10}} source={require('../../assets/images/onBoardSmall.png')} />
          <Image style={{ width: '100%', height: '100%', zIndex: -1, position: 'absolute' }} source={require('../../assets/images/onBoard2.png')} />
          <Text style={{ fontFamily: 'Barlow-Bold', color: 'white', marginTop: height * 0.4, fontSize: width * 0.18 }}>LAVAGE</Text>
          <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', textAlign: 'center', width: '80%', marginTop: width * 0.08 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.</Text>
        </View>
        <View style={styles.container}>
          <Image style={{ width: 100, height: 60,  position: 'absolute', resizeMode: 'contain', top: 30, alignSelf: 'center', zIndex: 10}} source={require('../../assets/images/onBoardSmall.png')} />
          <Image style={{ width: '100%', height: '100%', zIndex: -1, position: 'absolute' }} source={require('../../assets/images/onBoard3.png')} />
          <Text style={{ fontFamily: 'Barlow-Bold', color: 'white', marginTop: height * 0.4, fontSize: width * 0.18 }}>PNEUS</Text>
          <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', textAlign: 'center', width: '80%', marginTop: width * 0.02 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.</Text>
        </View>
        <View style={styles.container}>
          <Image style={{ width: 100, height: 60,  position: 'absolute', resizeMode: 'contain', top: 30, alignSelf: 'center', zIndex: 10}} source={require('../../assets/images/onBoardSmall.png')} />
          <Image style={{ width: '100%', height: '100%', zIndex: -1, position: 'absolute' }} source={require('../../assets/images/onBoard4.png')} />
          <Text style={{ fontFamily: 'Barlow-Bold', color: 'white', marginTop: height * 0.4, fontSize: width * 0.2 }}>VIDANGE</Text>
          <Text style={{ fontFamily: 'Barlow-Regular', color: 'white', textAlign: 'center', width: '80%', marginTop: width * 0.02 }}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.</Text>
        </View>
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default OnBoard;
