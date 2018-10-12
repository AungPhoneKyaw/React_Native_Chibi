import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView  } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, H1,H2, H4, Item, Input, Icon, Thumbnail, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import ToggleSwitch from 'toggle-switch-react-native';

 

export default ({history}) => (
    <Container>
        <Header searchBar rounded style = {{backgroundColor: '#2c2c2c' , color: 'orange', paddingBottom: 10, paddingTop: 10}}>
          <Button transparent onPress={Actions.userprofile}>
              <Thumbnail style = {{borderColor: 'white', borderWidth: 2}}  source={require('./img/usothree.jpg')} />
              <Text style = {{color: 'orange'}}>BitGeeks</Text>
          </Button>
          <Button transparent>
              <Text style = {{color: 'orange'}}>Available Coin</Text>
                <Text style={{ color: 'white' }}>1,866</Text>
          </Button>
        </Header>
      <Header searchBar rounded style = {{backgroundColor:'#2c2c2c', height: 60, paddingBottom: 10, paddingTop: 10}}>
        <Item  style = {{marginLeft: 30 , backgroundColor: 'white' ,borderColor: 'orange', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1}}>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text style = {{color: 'white'}}>Search</Text>
        </Button>
      </Header>
      <Grid>
        <Content style = {{backgroundColor:'black'}}>
          <Row>
              <Col style={{ backgroundColor: '#a1a1a1', height: 40 }}>
                <H2 style={{ color: 'black',fontWeight: "bold", paddingLeft: 10, paddingTop: 7 }}>
                  Recommendation
                </H2>
              </Col>
          </Row>
          <View style={{backgroundColor: "white"}}>
            <ScrollView horizontal={true}>
              <Row>
                <Col style={{ backgroundColor: 'white', height: 180, width: 170 }}>
                    <View style = {styles.imgcol}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/kfclogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingBottom: 23, color: 'black', paddingLeft:3 }}>KFC Fast Food</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 170 }}>
                    <View style = {styles.imgcol}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/taco.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingBottom: 23, color: 'black', paddingLeft:3 }}>Taco Bell</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 170 }}>
                    <View style = {styles.imgcol}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/loterialogo.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingBottom: 23, color: 'black', paddingLeft:3 }}>Loteria</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 170 }}>
                    <View style = {styles.imgcol}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/gongcha.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingBottom: 23, color: 'black', paddingLeft:3 }}>Gong Cha</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 170 }}>
                    <View style = {styles.imgcol}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/burgerkinglogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingBottom: 23, color: 'black', paddingLeft:3 }}>Burger King</Text>
                      </Button>
                    </View>
                </Col>
              </Row>
            </ScrollView>
          </View>
          <Row>
              <Col style={{ backgroundColor: '#a1a1a1', height: 40 }}>
                <H2 style={{ color: 'black',fontWeight: "bold", paddingLeft: 10, paddingTop: 7 }}>
                  Popular Restaurants!
                </H2>
              </Col>
          </Row>
          <Row>
              <Col style={{ backgroundColor: '#484848', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Button transparent style={{height: '100%', width: '100%'}} onPress={Actions.restaurantdetail}>
                    <Thumbnail style={styles.image} square large source={require('./img/kfclogo.png')} /> 
                  </Button> 
                </View>
              </Col> 
              <Col style={{ backgroundColor: '#484848', height: 150 }}>
                <View style = {styles.imgcoltwo}>
                  <Text style={{color: 'white', fontSize: '20',paddingBottom: 10}}>Kentucky Fried Chicken (KFC)</Text>
                  <Button bordered light>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col> 
              <Col style={{ backgroundColor: '#484848', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                
                <ToggleSwitch
                      isOn={false}
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
              <Col style={{ backgroundColor: '#2c2c2c', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/loterialogo.jpg')} />  
                </View>
              </Col>
              <Col style={{ backgroundColor: '#2c2c2c', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'white', fontSize: '20',paddingBottom: 10}}>Loteria(City Mart Branch)</Text>
                  <Button bordered light>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col>  
              <Col style={{ backgroundColor: '#2c2c2c', height: 150, width: 70 }}>
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
              <Col style={{ backgroundColor: '#484848', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/gongcha.jpg')} />  
                </View>
                  {/* <Image style={styles.image} source = {require('./img/kfclogo.png')} /> */}
              </Col> 
              <Col style={{ backgroundColor: '#484848', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'white', fontSize: '20',paddingBottom: 10}}>GongCha(DC-2 Branch)</Text>
                  <Button bordered light>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col> 
              <Col style={{ backgroundColor: '#484848', height: 150, width: 70 }}>
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
              <Col style={{ backgroundColor: '#2c2c2c', height: 150, width: 170 }}>
                <View style = {styles.imgcol}>
                  <Thumbnail style={styles.image} square large source={require('./img/burgerkinglogo.png')} />  
                </View>
              </Col>
              <Col style={{ backgroundColor: '#2c2c2c', height: 150 }}>
                <View style = {styles.imgcol}>
                  <Text style={{color: 'white', fontSize: '20',paddingBottom: 10}}>Burger King(JS Branch)</Text>
                  <Button bordered light>
                  <Text>Get Direction</Text>
                  </Button>
                </View>
              </Col>  
              <Col style={{ backgroundColor: '#2c2c2c', height: 150, width: 70 }}>
                <View style = {styles.imgcolthree}>
                <ToggleSwitch
                      isOn={false}
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
    borderColor: 'white',
    borderWidth: 3
  },
  imagetwo:{
    height: '100%',
    width: '100%',
    borderColor: 'black',
    borderWidth: 1
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
  container:{
    flex:1,
    width:'100%',
    height:'100%',
  }
})
