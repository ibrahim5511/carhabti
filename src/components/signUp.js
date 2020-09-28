/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput, 
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render(){
    const {isChecked} = this.state;
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
            <Text style={styles.title}>Mot De Passe</Text>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="black"
              onChangeText={(text)=> this.setState({ password: text }) }
            />
            <Text style={styles.title}>Numéro VIN</Text>
            <TextInput
              style={styles.input}
              placeholder="VIN"
              placeholderTextColor="black"
              onChangeText={(text)=> this.setState({ vin: text }) }
            />
            <TouchableOpacity onPress={()=> this.setState({ isChecked: !isChecked })} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start', marginTop: width * 0.04 }}>
              <View style={{ backgroundColor: 'white', borderRadius: width * 0.05, width: width * 0.05, height: width * 0.05, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center'  }}>
                {isChecked &&
                <View style={{ backgroundColor: 'black', width: width * 0.03, height: width * 0.03, borderRadius: width * 0.03 }}></View>
                }
              </View>
              <Text style={{ fontFamily: 'Barlow-Regular', fontSize: width * 0.04, marginLeft: width * 0.04 }}>Termes du Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('App')} style={{ backgroundColor: '#212020', marginTop: width * 0.03 , borderRadius: width * 0.05, alignItems: 'center', justifyContent: 'center', padding: width * 0.04, paddingHorizontal: width * 0.05 }}>
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

export default withNavigation(SignUp);
