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

class MrBot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render(){
    const {} = this.state;
    return(
      <SafeAreaView style={{ flex:1, }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={{ position: 'absolute', left: width * 0.03, top: width* 0.03, padding: width * 0.06, paddingTop: 0, paddingLeft: 0, backgroundColor: '', zIndex: 10 }} onPress={()=> this.props.navigation.goBack()}>
              <Image style={{ width: width * 0.03, height: width * 0.03, resizeMode: 'contain',   }} source={require('../../assets/images/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={{  textAlign: 'center',top: width* 0.03, width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', fontSize: width * 0.04}}>Mr Bot</Text>
          </View>
          <Image style={{ width: width * 0.4, height: width * 0.4, resizeMode: 'contain', alignSelf: 'center', marginTop: width * 0.05  }} source={require('../../assets/images/botLarge.png')}/>
          <View style={{ flexDirection: 'row', marginTop: width * 0.06, alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BotDetails', 'Pneus')}  style={[styles.textContainer, { backgroundColor:'#7EA8FC'}]}>
              <Text style={styles.labels}>Pneus</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BotDetails', 'Huile')}  style={[styles.textContainer, { backgroundColor:'#7E7EFC'}]}>
              <Text style={styles.labels}>Huile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BotDetails', 'Bougie')}  style={[styles.textContainer, { backgroundColor:'#FC7E7E'}]}>
              <Text style={styles.labels}>Bougie</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: width * 0.06, alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BotDetails', 'Lavage')} style={[styles.textContainer, { backgroundColor:'#A29F3A'}]}>
              <Text style={styles.labels}>Lavage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigate('BotDetails', 'Vidange')} style={[styles.textContainer, { backgroundColor:'#E34C4C'}]}>
              <Text style={styles.labels}>Vidange</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('BotDetails', 'Maintenance')}  style={[styles.textContainer, { backgroundColor:'#719868', marginTop: width *  0.04, padding: width * 0.04, marginLeft: width * 0.04, width: width * 0.5}]}>
            <Text style={styles.labels}>Maintenance </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', width: width, height: height * 0.7 }}>
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
    backgroundColor: '#212020',
    minHeight: height,
  },
  labels:{
    fontFamily: 'Barlow-Regular', 
    fontSize: width * 0.04,
    color: 'white'
  },
  textContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.04, paddingHorizontal: width * 0.1,
    borderRadius: width * 0.07,
  }
});

export default MrBot;
