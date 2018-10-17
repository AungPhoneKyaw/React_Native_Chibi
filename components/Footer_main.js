import React, { Component } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Item, Input, Icon, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default ({history}) => (
    <Container >
        <Footer style = {{backgroundColor:'#323232' , color: 'white', borderColor: 'black'}}>
          <FooterTab> 585858
            <Button vertical onPress={Actions.home}>
            <Ionicons name="ios-search" size={30} color="#49afd7" /> 
              <Text style = {{fontStyle:'bold' ,fontSize: '13' ,color: 'white'}}>SEARCH</Text>
            </Button>
            <Button vertical onPress={Actions.favourite}>
              <Ionicons name="md-heart" size={30} color="#fb2424" /> 
              <Text style = {{fontSize: '13' ,color: 'white'}}>FAVOURITE</Text>
            </Button>
            <Button vertical onPress={Actions.noti}>
              <Ionicons name="ios-notifications" size={30} color="#fdd70a" /> 
              <Text style = {{fontSize: '13' ,color: 'white'}}>NOTI</Text>
            </Button>
            <Button vertical onPress={Actions.gonesin}>
              <Ionicons name="ios-restaurant" size={30} color="#c2c2c2" /> 
              <Text style = {{fontSize: '13' ,color: 'white'}}>GONE SIN</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
);