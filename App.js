/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import OnBoard from './src/containers/onBoard';
import LoginSignUp from './src/containers/loginSignUp';
import Home from './src/containers/home';
import News from './src/containers/news';
import Offres from './src/containers/offres';
import MrBot from './src/containers/mrBot';
import MyCar from './src/containers/myCar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OnBoardStack = createStackNavigator(
  {
    onBoard: {screen: OnBoard},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'onBoard',
  },
);

const AuthStack = createStackNavigator(
  {
    LoginSignUp: {screen: LoginSignUp},
    MyCar: {screen: MyCar,}
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'LoginSignUp',
  },
);

const BotStack = createStackNavigator(
  {
    MrBot: {screen: MrBot},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'MrBot',
  },
);


const AppStack = createBottomTabNavigator(
  {
    'Ma Voiture': {
      screen: Home,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <Image style={{ width: width * 0.14, height: width * 0.06, resizeMode: 'contain', }} source={require('./assets/images/carIcon.png')} />
          ),
        }),
    },
    Blog: {
      screen: News,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain',  }} source={require('./assets/images/blog.png')} />
        ),
      }),
    },
    Offres: {
      screen: Offres,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', }} source={require('./assets/images/offresIcon.png')} />
        ),
      }),
    },
    Autres: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Image style={{ width: width * 0.07, height: width * 0.1, resizeMode: 'contain', }} source={require('./assets/images/autresIcon.png')} />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Ma Voiture',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white', // active icon color
      inactiveTintColor: '#9F9F9F', // inactive icon color
      tabBarPosition: 'bottom',
      style: {
        height: width * 0.18,
        borderTopRightRadius: width * 0.03,
        borderTopLeftRadius: width * 0.03,
        backgroundColor: '#3E3E3E', // TabBar background
      },
    },
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      OnBoard: OnBoardStack,
      Auth: AuthStack,
      App: AppStack,
      //Bot: BotStack,
    },
    {
      initialRouteName: 'OnBoard',
      defaultNavigationOptions: {
        gestureEnabled: false,
      },
    },
  ),
);


export default AppContainer;
