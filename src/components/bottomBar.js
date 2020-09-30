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
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Modal from 'react-native-modal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class BottomBar extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render(){
    const {showModal} = this.state;
    return(
      <SafeAreaView style={{ flexDirection: "row", height: width * 0.18, justifyContent: "space-between", alignItems: "center", width: "100%", backgroundColor: '#3E3E3E', position: 'absolute', bottom:0, borderTopRightRadius: width * 0.04, borderTopLeftRadius: width * 0.04, paddingHorizontal: width * 0.03, zIndex: 100}}>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Ma Voiture")}>
          <Image style={[styles.image, {width: width * 0.1, height: width * 0.1}]} source={require('../../assets/images/carIcon.png')}/>
          <Text style={[styles.textLabels, {color: '#9F9F9F'} ]}>Ma Voiture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Blog")}>
          <Image style={styles.image} source={require('../../assets/images/blog.png')}/>
          <Text style={[styles.textLabels, {color: '#9F9F9F'} ]}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Offres')}>
          <Image style={styles.image} source={require('../../assets/images/offresIcon.png')}/>
          <Text style={[styles.textLabels, {color: '#9F9F9F'} ]}>Offres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => this.setState({ showModal: true })}>
          <Image style={styles.image} source={require('../../assets/images/autresIcon.png')}/>
          <Text style={[styles.textLabels, {color: '#9F9F9F'} ]}>Autres</Text>
        </TouchableOpacity>
        {showModal &&
          <Modal 
            deviceWidth={width} 
            onBackdropPress={() => this.setState({ showModal: false })} 
            backdropOpacity={0}
            deviceHeight={height} 
            style={{ width: width * 0.4, height: width * 0.35, position: 'absolute', bottom: 0, right: 0, backgroundColor: 'white', margin: 0,  borderTopRightRadius: width * 0.03, borderTopLeftRadius: width * 0.03}} 
            isVisible={showModal}
          >
            <View style={{ flex:1 }}>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', }} onPress={() => { this.setState({ showModal:false }); this.props.navigation.navigate('Stations')} }>
                <Text style={[styles.textLabels, {marginTop: width * 0.03, fontSize: width * 0.04} ]}>Les Stations</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginTop: width * 0.02 }} onPress={() => { this.setState({ showModal:false });this.props.navigation.navigate('Rdv')}}>
                <Text style={[styles.textLabels, {color: '#9F9F9F', fontSize: width * 0.04} ]}>Rendez-vous</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row' , alignItems: 'center', justifyContent: 'center', marginTop: width * 0.04 }} onPress={() => this.props.navigation.navigate('OnBoard')}>
                <Image style={{ width: width * 0.05, height: width * 0.05, resizeMode: 'contain' }} source={require('../../assets/images/logout.png')}/>
                <Text style={[styles.textLabels, {color: '#9F9F9F', marginLeft: width * 0.02} ]}>Se Deconnecter</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  image:{
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
    //backgroundColor: 'red'
  }
});

export default withNavigation(BottomBar);;
