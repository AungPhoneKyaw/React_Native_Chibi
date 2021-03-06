// 'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, View, TextInput,TouchableWithoutFeedback
  } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, H1,H2, H4, Item, Input, Icon, Thumbnail, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import QRCode from 'react-native-qrcode';
import {Link} from 'react-router-native';


class HelloWorld extends Component {
    state = {
      text: 'http://facebook.github.io/react-native/',
    };
   
    render() {
      return (
        <Container>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text: text})}
                value={this.state.text}
            />
            <QRCode
                value={this.state.text}
                size={200}
                bgColor='purple'
                fgColor='white'/>  
            </View> 
            <TouchableWithoutFeedback onPress={() => Actions.qrscanner()}>
                <View>
                <Text>My Component</Text>
                </View>
            </TouchableWithoutFeedback>
            <Link to='/'><Text style = {{color: 'black'}}>Log Out</Text></Link>
        </Container>
        
      );
    };
  }

//   const Userprofile = () => {
//       return (
//         <Text >
//             QR Code scanner
//         </Text>
//       );
//   };

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
      },
   
      input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          borderRadius: 5,
          padding: 5,
      }
  });
   
  AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
   
  module.exports = HelloWorld;
