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
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Login from '../components/login';
import SignUp from '../components/signUp';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class LoginSignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      routes: [
        { key: 'first', title: "S'INSCRIRE" },
        { key: 'second', title: 'SE CONNECTER' },
      ]
    };
  }

  _renderScene = SceneMap({
    'first': SignUp,
    'second': Login,
  });

  _handleIndexChange = index => this.setState({ index });

  render(){
    return(
      <View>
        <View style={{ backgroundColor: '#3E3E3E', width: width, height: height * 0.4 }}>
          <Image style={{ width: width * 0.8, height: width * 0.2,  position: 'absolute', resizeMode: 'contain', top: 30, alignSelf: 'center', zIndex: 10}} source={require('../../assets/images/onBoardSmall.png')} />
        </View> 
        <View style={{ width: width, height: height * 0.6 }}>
          <TabView
            style={{ width: width, height: 400 }}
            navigationState={{ index: this.state.index, routes: this.state.routes }}
            renderTabBar={(props)=> 
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: '#3E3E3E' }}
              />
            }
            renderScene={this._renderScene}
            onIndexChange={this._handleIndexChange}
            // /initialLayout={initialLayout}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default LoginSignUp;
