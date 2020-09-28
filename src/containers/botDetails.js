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
  TextInput,
  Alert
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class BotDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    const {history} = this.state;
    //const {navigate}= this.props.navigation;
    return(
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={{ position: 'absolute', left: width * 0.03, top: width* 0.03, padding: width * 0.06, paddingTop: 0, paddingLeft: 0, backgroundColor: '', zIndex: 10 }}  onPress={()=> this.props.navigation.goBack()}>
              <Image style={{ width: width * 0.03, height: width * 0.03, resizeMode: 'contain', }} source={require('../../assets/images/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={{  textAlign: 'center',top: width* 0.03, width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', fontSize: width * 0.04}}>Mr Bot</Text>
          </View>
          <Image style={{ width: width * 0.4, height: width * 0.4, resizeMode: 'contain', alignSelf: 'center', marginTop: width * 0.1  }} source={require('../../assets/images/botLarge.png')}/>
          <View style={{ width: width, alignItems: 'center', height: width * 0.8, marginTop: height * 0.1}}>
            <Text style={{ color: 'white', alignSelf: 'flex-start', marginLeft: width * 0.06, fontSize: width * 0.05, fontFamily: 'Barlow-Regular',  }}>{this.props.navigation.state.params}</Text>
            <View style={{ marginTop: width * 0.04, alignItems: 'center', justifyContent: 'center', marginTop: width * 0.3   }}>
              <Image style={{ width: width * 0.9, height: width * 0.5, resizeMode: 'contain', position: 'absolute', zIndex: -1,  }} source={require('../../assets/images/dialogue.png')}/>
              <Text style={{ color: 'white', maxWidth: width * 0.7, fontSize: width * 0.04, bottom :width * 0.03 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: width, height: height * 0.2 }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', opacity: 0.6, borderRadius: width * 0.06, width: width * 0.9, height: width * 0.1, alignSelf: 'center', position: 'absolute', zIndex:-1 }}>
              <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', right: 0, position: 'absolute'   }} source={require('../../assets/images/search.png')}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Recherche Services... "
              placeholderTextColor="white"
              onChangeText={(text)=> this.setState({ vin: text }) }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2B2B2B',
    height: height,
    width: width,
  },
});

export default BotDetails;
