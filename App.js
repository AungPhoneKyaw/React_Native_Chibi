import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import { AppRegistry, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {NativeRouter, Switch, Route} from 'react-router-native';

import Main from "./Main.js";
import Login from "./components/Login";



export default class LotsOfGreetings extends Component {

  render() {
    return (
    <Container>
      <NativeRouter>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
        </Switch>
      </NativeRouter>
    </Container>
    );
  }
}
