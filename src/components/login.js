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
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render(){
    return(
      <ScrollView>
        <View style={{ flex:1, alignSelf: 'center' }}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(text)=> this.setState({ email: text }) }
            />
            <Text style={styles.title}>Numéro Tel</Text>
            <TextInput
              style={styles.input}
              placeholder="VIN"
              placeholderTextColor="black"
              onChangeText={(text)=> this.setState({ phone: text }) }
            />
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('App')}  style={{ backgroundColor: '#212020', marginTop: width * 0.03 , borderRadius: width * 0.05, alignItems: 'center', justifyContent: 'center', padding: width * 0.04, paddingHorizontal: width * 0.05 }}>
              <Text style={{ color: 'white', fontSize: width * 0.04, fontFamily: 'Barlow-Regular', }}>COMMANCER</Text>
            </TouchableOpacity>
        </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  group:{
    marginTop: width * 0.04,
    alignSelf: 'center',
    width: width * 0.8,
    height: 400,
    padding: width * 0.03,
    backgroundColor: 'red',
  },
  title:{
    marginTop: width * 0.05,
    fontSize: width * 0.05,
    fontFamily: 'Barlow-Regular',
  },
  input:{
    width: width * 0.8,
    height: width * 0.1,
    borderBottomWidth: 1,
  }
});

export default withNavigation(Login);;
