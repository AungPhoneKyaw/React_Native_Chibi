import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView  } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, H1,H2,H3, H4, Item, Input, Icon, Thumbnail, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import ToggleSwitch from 'toggle-switch-react-native';

export default () => (
    <Container>
        <Grid>
            <Content style = {{backgroundColor:'#dfdfdf'}}>
                <Row>
                <Col style={{ backgroundColor: 'white', height: 30 }}>
                    <H3 style={{ color: 'black',fontWeight: "bold", paddingLeft: 15, paddingTop: 10 }}>
                    Favourite List
                    </H3>
                </Col>
                </Row>
                <Row>
              <Col style={{ backgroundColor: 'white', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Button transparent style={{height: '100%', width: '100%'}} onPress={Actions.restaurantdetail}>
                    <Thumbnail style={styles.image} square large source={require('./img/kfclogo.png')} /> 
                  </Button> 
                </View>
              </Col> 
              <Col style={{ backgroundColor: 'white', height: 150 }}>
                <View style = {styles.imgcoltwo}>
                  <Text style={{color: 'black', fontSize: '20',paddingBottom: 10}}>Kentucky Fried Chicken (KFC)</Text>
                  <Button style={{backgroundColor:'#49afd7'}}>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col> 
              <Col style={{ backgroundColor: 'white', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                    <ToggleSwitch
                        isOn={true}
                        onColor='orange'
                        offColor='grey'
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn) }
                    />;
                </View>
              </Col> 
          </Row>
          <Row>
              <Col style={{ backgroundColor: 'white', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/loterialogo.jpg')} />  
                </View>
              </Col>
              <Col style={{ backgroundColor: 'white', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'black', fontSize: '20',paddingBottom: 10}}>Loteria(City Mart Branch)</Text>
                  <Button style={{backgroundColor:'#49afd7'}}>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col>  
              <Col style={{ backgroundColor: 'white', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                <ToggleSwitch
                      isOn={true}
                      onColor='orange'
                      offColor='grey'
                      labelStyle={{color: 'black', fontWeight: '900'}}
                      size='medium'
                      onToggle={ (isOn) => console.log('changed to : ', isOn) }
                  />;
                </View>
              </Col> 
          </Row>
          <Row>
              <Col style={{ backgroundColor: 'white', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/gongcha.jpg')} />  
                </View>
                  {/* <Image style={styles.image} source = {require('./img/kfclogo.png')} /> */}
              </Col> 
              <Col style={{ backgroundColor: 'white', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'black', fontSize: '20',paddingBottom: 10}}>GongCha(DC-2 Branch)</Text>
                  <Button style={{backgroundColor:'#49afd7'}}>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col> 
              <Col style={{ backgroundColor: 'white', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                <ToggleSwitch
                        isOn={true}
                        onColor='orange'
                        offColor='grey'
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn) }
                    />;
                </View>
              </Col> 
          </Row>
          <Row>
              <Col style={{ backgroundColor: 'white', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/burgerkinglogo.png')} />  
                </View>
              </Col>
              <Col style={{ backgroundColor: 'white', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'black', fontSize: '20',paddingBottom: 10}}>Burger King(JS Branch)</Text>
                  <Button style={{backgroundColor:'#49afd7'}}>
                  <Text>Get Direction</Text>
                  </Button>
                </View> 
              </Col>  
              <Col style={{ backgroundColor: 'white', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                <ToggleSwitch
                        isOn={true}
                        onColor='orange'
                        offColor='grey'
                        labelStyle={{color: 'black', fontWeight: '900'}}
                        size='medium'
                        onToggle={ (isOn) => console.log('changed to : ', isOn) }
                    />;
                </View>
              </Col> 
          </Row>
            </Content>
        </Grid>
    </Container>
);
const styles= StyleSheet.create({
    image:{
      height: '100%',
      width: '100%',
      borderColor: '#787878',
      borderWidth: 1
    },
    imagetwo:{
      height: 125,
      width: 120,
      borderColor: '#a3a3a3',
      borderWidth: 0.5,
      padding: 0
    },
    imgcol:{
      padding: 20,
      color: 'white',
    },
    imgcoltwo:{
      paddingTop: 20,
      paddingLeft: 20,
      color: 'white',
    },
    imgcolthree:{
      paddingTop: 20,
      color: 'white',
    },
    imgcolfour:{
      paddingTop: 20,
      paddingLeft:20,
      paddingRight:0,
      color: 'white',
    },
    container:{
      flex:1,
      width:'100%',
      height:'100%',
    }
  })