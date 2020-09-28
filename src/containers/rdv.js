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
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Rdv extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  reserve(date){
    const {type} = this.state;
    //example: type: lavage
    //call api to reserve 

  }

  render(){
    const {showDatePicker} = this.state;
    return(
      <ScrollView style={styles.container}>
        <Image style={{ width: width, height: height, resizeMode: 'stretch',  zIndex: -1 }} source={require('../../assets/images/rdvBackground.png')}/>
        <View style={{ width: width, position: 'absolute', flexDirection: 'row', }}>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{ position: 'absolute', left: width * 0.03, top: width* 0.03, padding: width * 0.06, paddingTop: 0, paddingLeft: 0, backgroundColor: '' }} onPress={()=> this.props.navigation.goBack()}>
              <Image style={{ width: width * 0.07, height: width * 0.07, resizeMode: 'contain'  }} source={require('../../assets/images/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', width: width, color: '#9E9E9E', top: width * 0.03 ,fontFamily: 'Barlow-Regular',fontSize: width * 0.04 }}>RDV</Text>
        </View>
        {showDatePicker && (
        <DateTimePicker

           mode= 'date'
          value={new Date()}
          //mode={mode}
          minimumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={(value)=>  this.reserve(value)}
        />
      )}
        <View style={{position: 'absolute', top: width * 0.2, flexDirection: 'row', justifyContent: 'space-around', width: width, alignItems: 'center'  }}> 
          <Image style={{ width: width * 0.07, height: width * 0.07 , resizeMode: 'contain',  }} source={require('../../assets/images/pointRdv.png')}/> 
          <Text style={styles.labels}>Rendez-Vous Lavage</Text>
          <TouchableOpacity onPress={()=>this.setState({ type: 'lavage' ,showDatePicker: true }) }>
            <Image style={{ width:  width * 0.1, height: width * 0.1, resizeMode: 'contain',  }} source={require('../../assets/images/calender.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: width * 0.4, flexDirection: 'row', justifyContent: 'space-around', width: width, alignItems: 'center'  }}> 
          <Image style={{ width: width * 0.07, height: width * 0.07 , resizeMode: 'contain',  }} source={require('../../assets/images/pointRdv.png')}/> 
          <Text style={styles.labels}>Rendez-Vous Pneus</Text>
          <TouchableOpacity onPress={()=>this.setState({ type: 'pneus' ,showDatePicker: true }) }>
            <Image style={{ width:  width * 0.1, height: width * 0.1, resizeMode: 'contain',  }} source={require('../../assets/images/calender.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: width * 0.6, flexDirection: 'row', justifyContent: 'space-around', width: width, alignItems: 'center'  }}> 
          <Image style={{ width: width * 0.07, height: width * 0.07 , resizeMode: 'contain',  }} source={require('../../assets/images/pointRdv.png')}/> 
          <Text style={styles.labels}>Rendez-Vous Vidange</Text>
          <TouchableOpacity onPress={()=>this.setState({ type: 'vidange' ,showDatePicker: true }) }>
            <Image style={{ width:  width * 0.1, height: width * 0.1, resizeMode: 'contain',  }} source={require('../../assets/images/calender.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: width * 0.8, flexDirection: 'row', justifyContent: 'space-around', width: width, alignItems: 'center'  }}> 
          <Image style={{ width: width * 0.07, height: width * 0.07 , resizeMode: 'contain',  }} source={require('../../assets/images/pointRdv.png')}/> 
          <Text style={styles.labels}>Rendez-Vous Entretien</Text>
          <TouchableOpacity onPress={()=>this.setState({ type: 'entretien' ,showDatePicker: true }) }>
            <Image style={{ width:  width * 0.1, height: width * 0.1, resizeMode: 'contain',  }} source={require('../../assets/images/calender.png')}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
  labels:{
    fontFamily: 'Barlow-Regular',
    color: 'white',
    fontSize: width * 0.045
  }
});

export default Rdv;
