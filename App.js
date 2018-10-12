import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import { AppRegistry, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {NativeRouter, Switch, Route} from 'react-router-native';
import {Router, Scene} from 'react-native-router-flux';

import Home from "./components/Home";
import Favourite from "./components/Favourite";
import Footer_main from "./components/Footer_main";
import Noti from "./components/Noti";
import Userprofile from "./components/Userprofile";
import Restaurantdetail from "./components/Restaurantdetail";
import GoneSin from "./components/GoneSin";

export default class LotsOfGreetings extends Component {
  render() {
    return (

    <Container>
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title='Home'/>
          <Scene key="favourite" component={Favourite} title='Favourite'/>
          <Scene key="noti" component={Noti} title='Noti'/>
          <Scene key="userprofile" component={Userprofile} title='Userprofile'/>
          <Scene key="restaurantdetail" component={Restaurantdetail} title='restaurant_detail'/>
          <Scene key="gonesin" component={GoneSin} title='GoneSin'/>
        </Scene>
      </Router>
      <Footer>
        <Footer_main/>
      </Footer>    
      {/* <NativeRouter>
      <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/favourite" component={Favourite} />
          <Footer>
          <Route path="/" component={Footer_main} />
          </Footer>
      </Switch>
      </NativeRouter> */}

    </Container>
    );
  }
}
