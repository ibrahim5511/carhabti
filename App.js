import React from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  Dimensions,
  Alert,
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
import BotDetails from './src/containers/botDetails';
import MyCar from './src/containers/myCar';
import Stations from './src/containers/stations';
import Rdv from './src/containers/rdv';

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
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'LoginSignUp',
  },
);





const BottomNavigatorStack = createBottomTabNavigator(
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
      screen: Stations,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: ({ navigation }) => {
          return(<View style={{ backgroundColor: 'red', width: 600, height: 600 }}></View>);
          
        },
        tabBarIcon: ({tintColor}) => (
          <Image style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain', }} source={require('./assets/images/autresIcon.png')} />
        ),
      })
    },
  },
  {
    tabBarOptions: {
      style: { display: "none", }
    }
  }
);

const AppStack = createStackNavigator(
  {
    BottomNavigator: {screen: BottomNavigatorStack},
    MrBot: {screen: MrBot},
    Rdv: {screen: Rdv},
    Stations: {screen: Stations},
    BotDetails: {screen: BotDetails},
    MyCar: {screen: MyCar},
  },
  {
    initialRouteName:'BottomNavigator',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      OnBoard: OnBoardStack,
      Auth: AuthStack,
      App: AppStack,
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