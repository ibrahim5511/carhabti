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
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class MyCar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  checkKilometerStatus(){
    //API
    this.setState({ kilometerFeedback: 'kilometerFeedback' });
  }


  render(){
    const {kilometerFeedback} = this.state;
    const car = this.props.navigation.state.params;
    return(
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={{ resizeMode: 'contain', position: 'absolute', zIndex: -1, width: width, height: width * 0.7,}} source={require('../../assets/images/audiBackground.png')}/>
          <Image style={{ width: width * 0.2, height: width * 0.1, resizeMode: 'contain', position: 'absolute',top: width * 0.03 ,left: width * 0.03 }} source={require('../../assets/images/slogan.png')}/>
          <Text style={{ textAlign: 'center', width: width, color: '#FFC000', fontFamily: 'Barlow-Regular', fontSize: width * 0.05, top: width * 0.03 }}>Ma Voiture</Text>
          <TouchableOpacity style={{ position: 'absolute', right: width * 0.03, }}>
            <Image style={{ width: width * 0.2, height: width * 0.1, resizeMode: 'contain',top: width * 0.03 }} source={require('../../assets/images/slogan.png')}/>
          </TouchableOpacity>
          <View style={{ position: 'absolute', bottom: width * 0.05 }}>
            <Text style={{ textAlign: 'center', width: width, color: 'white', fontFamily: 'Barlow-Regular', fontSize: width * 0.07, }}>{car.name}</Text>
            <Text style={{ textAlign: 'center', width: width, color: 'white', fontFamily: 'Barlow-light', fontSize: width * 0.03,  }}>{car.model}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'black', height: height * 0.7, paddingTop: width * 0.08 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', width: width, alignItems: 'center' }}>
            <TextInput
              style={{ borderRadius: width * 0.04, backgroundColor: '#727272', width: width * 0.7, height: width * 0.13, padding: width * 0.03 }}
              placeholder="Kilometrage..."
              placeholderTextColor="white"
              onChangeText={(text)=> this.setState({ email: text }) }
            />
            <TouchableOpacity onPress={()=> this.checkKilometerStatus()} style={{  }}>
              <Image style={{ width: width * 0.13, height: width * 0.13, resizeMode: 'contain', }} source={require('../../assets/images/checkYellow.png')}/>
            </TouchableOpacity>
          </View>
          {kilometerFeedback!=''  &&
            <Text style={{ fontFamily:'Barlow', fontSize: width * 0.04, alignSelf: 'center' }}>{kilometerFeedback}</Text>
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //backgroundColor: 'yellow',
  },
  header:{
    width: width, 
    height: height * 0.3,
    //marginTop: width * 0.03,
    backgroundColor: 'black',
    //alignItems: 'center',
    //justifyContent: 'space-between',
    //flexDirection: 'row',
  },
  section:{
    width: width * 0.4, 
    height: width * 0.4, 
    resizeMode: 'contain'
  },
});

export default MyCar;
