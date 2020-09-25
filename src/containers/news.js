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

class News extends Component{
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
          <Image style={{ width: width, height: width * 0.3, resizeMode: 'contain', position: 'absolute', zIndex: -1, }} source={require('../../assets/images/headerNews.png')}/>
          <Image style={{ width: width * 0.2, height: width * 0.2, resizeMode: 'contain', position: 'absolute', left: width * 0.03 }} source={require('../../assets/images/carhabtekWhite.png')}/>
          <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular', }}>News</Text>
          <Image style={{ width: width * 0.07, height: width * 0.07, position: 'absolute', right: width * 0.03, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
        </View>
        <View style={{ backgroundColor: '', flexDirection: 'row', alignItems: 'center', marginLeft: width * 0.08 }}>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', opacity: 0.6, borderRadius: width * 0.06, width: width * 0.6, height: width * 0.1, alignSelf: 'center', position: 'absolute', zIndex:-1 }}></View>
          <TextInput
            style={styles.input}
            placeholder="Recherche Nouveauté ... "
            placeholderTextColor="white"
            onChangeText={(text)=> this.setState({ vin: text }) }
          />
          <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain',marginLeft: width * 0.025,  }} source={require('../../assets/images/search.png')}/>
        </View>
        <Image style= {styles.sections} source={require('../../assets/images/news1.png')}/>
        <Image style= {styles.sections} source={require('../../assets/images/news2.png')}/>
        <Image style= {styles.sections}  source={require('../../assets/images/news3.png')}/>
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
  input:{
    marginLeft: width * 0.03,
    fontFamily: 'Barlow-Regular',
  },
  sections:{
    width: width * 0.95, 
    height: width * 0.45,
    resizeMode: 'contain', 
    alignSelf: 'center',
  }
});

export default News;
