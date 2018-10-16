import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import { AppRegistry, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {NativeRouter, Switch, Route, Link} from 'react-router-native';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Footer_main from "./components/Footer_main";
import Noti from "./components/Noti";
import Userprofile from "./components/Userprofile";
import Restaurantdetail from "./components/Restaurantdetail";
import GoneSin from "./components/GoneSin";
import QRscanner from "./components/QRscanner.js";
// import Login from "./components/Login";

import {Constants} from 'expo';

import firebase from 'firebase';
import Expo from 'expo';


const id="276082606569782";

export default class LotsOfGreetings extends Component {

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(id, {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
    
  }
  }
    
  get button() {
    return(
      <TouchableOpacity onPress={() => this.login()}>
        <View>
          <Text style={{color:'black'}}>Login to Facebook</Text>
        </View>
      </TouchableOpacity>
    )
  }


  render() {
    return (
    <Container>
      {/* <Header>
        {this.button}
      </Header> */}
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title='Home'/>
          <Scene key="favourite" component={Favourite} title='Favourite'/>
          <Scene key="noti" component={Noti} title='Noti'/>
          <Scene key="userprofile" component={Userprofile} title='Userprofile'/>
          <Scene key="restaurantdetail" component={Restaurantdetail} title='restaurant_detail'/>
          <Scene key="gonesin" component={GoneSin} title='GoneSin'/>
          <Scene key="qrscanner" component={QRscanner} title='QRscanner'/>
        </Stack>
      </Router>
      <Footer>
        <Footer_main/>
      </Footer>    

    </Container>
    );
  }
}
