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
} from 'react-native';
import BottomBar from '../components/bottomBar';

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
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image style={{ width: width, height: width * 0.3, resizeMode: 'contain', position: 'absolute', zIndex: -1, }} source={require('../../assets/images/headerNews.png')}/>
            <Image style={{ width: width * 0.15, height: width * 0.1 , resizeMode: 'contain', position: 'absolute', left: width * 0.03,  }} source={require('../../assets/images/carhabtekWhite.png')}/>
            <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', fontFamily: 'Barlow-Regular',fontSize: width * 0.04 }}>News</Text>
            <TouchableOpacity style={{ position: 'absolute', right: width * 0.03,  }} onPress={()=> this.props.navigation.navigate('MrBot')}>
              <Image style={{ width: width * 0.07, height: width * 0.07, resizeMode: 'contain' }} source={require('../../assets/images/botHeader.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: width * 0.08, }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', opacity: 0.6, borderRadius: width * 0.06, width: width * 0.6, height: width * 0.1, alignSelf: 'center', position: 'absolute', zIndex:-1 }}>
              <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', right: 0, position: 'absolute'   }} source={require('../../assets/images/search.png')}/>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Recherche Nouveauté ... "
              placeholderTextColor="white"
              onChangeText={(text)=> this.setState({ vin: text }) }
            />
          </View>
          {/* <View style={{ width: width, height: 40, backgroundColor: 'red', alignSelf: 'center', bottom: 0 }}></View> */}
          {/* <View style={{ width: width, height: 300, backgroundColor: 'red', position: 'absolute' }}></View> */}
          <Image style= {styles.sections} source={require('../../assets/images/news1.png')}/>
          <Image style= {styles.sections} source={require('../../assets/images/news2.png')}/>
          <Image style= {styles.sections}  source={require('../../assets/images/news3.png')}/>
        </ScrollView>
        <BottomBar/>
      </SafeAreaView>
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
