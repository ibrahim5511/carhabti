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
      categories:[
        {id:'0', name: 'Pneus',subCategories:[{id:'0', name: 'Audi RS7', image: require('../../assets/images/audiTire1.png')},{id:'1', name:'Audi RS7', image: require('../../assets/images/audiTire2.png')}]},
        {id:'0', name: 'Bougies',subCategories:[{id:'0', name: 'Audi RS7', image: require('../../assets/images/audiTire1.png')},{id:'1', name:'Audi RS7', image: require('../../assets/images/audiTire2.png')}]},
      ],
      openedIndex: [],
    };
  }

  checkKilometerStatus(){
    //API
    this.setState({ kilometerFeedback: 'Attention Vous devez …..  !!!' });
  }

  openCloseModal(index){
    var {openedIndex} = this.state;
    if(openedIndex.length<1){
      openedIndex.push(index);
    }
    else {
      for(var i =0;i<openedIndex.length;i++ ){
        if(openedIndex.includes(index)){
          openedIndex.splice(openedIndex.indexOf(index),1);
          break;
        }
        else {
          openedIndex.push(index);
          break;
        }
      }
    }
    this.setState({ openedIndex });
    console.log(openedIndex);
  }


  render(){
    const {kilometerFeedback, categories, openedIndex} = this.state;
    const car = this.props.navigation.state.params;
    return(
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={{ resizeMode: 'contain', position: 'absolute', zIndex: -1, width: width, height: width * 0.7,}} source={require('../../assets/images/audiBackground.png')}/>
          <TouchableOpacity style={{ position: 'absolute', left: width * 0.03, padding: width * 0.06,paddingLeft: 0, zIndex: 10,}} onPress={()=> this.props.navigation.goBack()}>
            <Image style={{ width: width * 0.03, height: width * 0.03, resizeMode: 'contain',   }} source={require('../../assets/images/backArrow.png')}/>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', width: width, color: '#FFC000', fontFamily: 'Barlow-Regular', fontSize: width * 0.05, top: width * 0.04}}>Ma Voiture</Text>
          <Image style={{ width: width * 0.2, height: width * 0.1, resizeMode: 'contain', position: 'absolute',top: width * 0.03 ,right: width * 0.03 }} source={require('../../assets/images/slogan.png')}/>
          <View style={{ position: 'absolute', bottom: width * 0.05 }}>
            <Text style={{ textAlign: 'center', width: width, color: 'white', fontFamily: 'Barlow-Regular', fontSize: width * 0.07, }}>{car.name}</Text>
            <Text style={{ textAlign: 'center', width: width, color: 'white', fontFamily: 'Barlow-light', fontSize: width * 0.03,  }}>{car.model}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'black',  paddingTop: width * 0.08 }}>
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
            <Text style={{ fontFamily:'Barlow-Regular', fontSize: width * 0.04, alignSelf: 'center', color: 'white' }}>{kilometerFeedback}</Text>
          }
        </View>
        <FlatList
          data={categories}
          style={{ backgroundColor: 'black', flex:1}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity onPress={()=> this.openCloseModal(index)} style={{  padding: width * 0.03, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: width * 0.06 }}>
                <Text style={{ fontFamily: 'Barlow-Regular', color: openedIndex.includes(index) ? 'white' : '#FFC000', fontSize: width * 0.04 }}>{item.name}</Text>
                <Image style={{ width: width * 0.04, height: width * 0.04, resizeMode: 'contain', marginLeft: width * 0.04, marginTop: width * 0.01}} source={ openedIndex.includes(index) ? require('../../assets/images/arrowUp.png') :require('../../assets/images/arrowYellowDown.png')}/>
              </TouchableOpacity>
              {openedIndex.includes(index) &&
                <FlatList
                  data={item.subCategories}
                  style={{ backgroundColor: 'white',borderRadius: width * 0.03,  width: width * 0.9, alignSelf: 'center' }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=> this.setState({  })} style={{  padding: width * 0.03, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                      <Text style={{ fontFamily: 'Barlow-Regular', color: '#212020', fontSize: width * 0.045 }}>{item.name}</Text>
                      <Image style={{ width: width * 0.3, height: width * 0.3, resizeMode: 'contain', marginLeft: width * 0.04, marginTop: width * 0.01}} source={item.image}/>
                    </TouchableOpacity>
                  )}
                />
              }
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black',
  },
  header:{
    width: width, 
    height: height * 0.3,
    //marginTop: width * 0.03,
    backgroundColor: 'black',
    alignItems: 'center',
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
