import React, { Component } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Item, Input, Icon, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default ({history}) => (
    <Container >
        <Footer style = {{backgroundColor:'white' , color: 'white', borderColor: 'black'}}>
          <FooterTab>
            <Button vertical onPress={Actions.home}>
            <Ionicons name="ios-search" size={30} color="#585858" /> 
              <Text style = {{fontStyle:'bold' ,fontSize: '13' ,color: '#585858'}}>SEARCH</Text>
            </Button>
            <Button vertical onPress={Actions.favourite}>
              <Ionicons name="md-heart" size={30} color="#585858" /> 
              <Text style = {{fontSize: '13' ,color: '#585858'}}>FAVOURITE</Text>
            </Button>
            <Button vertical onPress={Actions.noti}>
              <Ionicons name="ios-notifications" size={30} color="#585858" /> 
              <Text style = {{fontSize: '13' ,color: '#585858'}}>NOTI</Text>
            </Button>
            <Button vertical onPress={Actions.gonesin}>
              <Ionicons name="ios-restaurant" size={30} color="#585858" /> 
              <Text style = {{fontSize: '13' ,color: '#585858'}}>GONE SIN</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
);