import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView  } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, H1,H2,H3, H4, Item, Input, Icon, Thumbnail, Content, Button, Footer, FooterTab, Badge, Card, CardItem, Body, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';
import ToggleSwitch from 'toggle-switch-react-native';

export default ({history}) => (
    <Container>
        <Header searchBar rounded style = {{height: 70,backgroundColor: '#a3080c' , color: 'orange', paddingBottom: 10, paddingTop: 10}}>
          <Button transparent onPress={Actions.userprofile}>
              <Thumbnail style = {{borderColor: 'white', borderWidth: 2}}  source={require('./img/usothree.jpg')} />
              <Text style = {{color: 'white'}}>BitGeeks</Text>
          </Button>
          <Button transparent>
              <Text style = {{color: 'white'}}>Available Coin : 1,866P</Text>
                {/* <Text style={{ color: 'white' }}>1,866</Text> */}
                
          </Button>
          {/* 49afd7 */}
        </Header>
      <Header searchBar rounded style = {{backgroundColor:'white', height: 60, paddingBottom: 10, paddingTop: 10}}>
        <Item  style = {{marginLeft: 30 , backgroundColor: 'white' ,borderColor: 'orange', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1}}>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text style = {{color: 'black'}}>Search</Text>
        </Button>
      </Header>
      <Grid>
        <Content style = {{backgroundColor:'#dfdfdf'}}>
          <Row>
              <Col style={{ backgroundColor: 'white', height: 40 }}>
                <H3 style={{ color: 'black',fontWeight: "bold", paddingLeft: 10, paddingTop: 10 }}>
                  Recommendation
                </H3>
              </Col>
          </Row>
        <Card style = {{height: 190,width: '100%',paddingLeft:0,marginLeft:0., marginBottom: 12,marginTop: 0}}>
            <CardItem style = {{width: '100%',paddingTop:0, paddingLeft:0, paddingRight:0}}>
              <Body>

          <View style={{backgroundColor: "white"}}>
            <ScrollView horizontal={true}>
              <Row>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140,marginRight:0 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/kfclogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>KFC Fast Food</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/taco.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Taco Bell</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/loterialogo.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Loteria</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/gongcha.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Gong Cha</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/burgerkinglogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Burger King</Text>
                      </Button>
                    </View>
                </Col>
              </Row>
            </ScrollView>
          </View>
              </Body>
            </CardItem>
        </Card>

        <Row>
              <Col style={{ backgroundColor: 'white', height: 40 }}>
                <H3 style={{ color: 'black',fontWeight: "bold", paddingLeft: 10, paddingTop: 10 }}>
                  Newly established Restaurants
                </H3>
              </Col>
        </Row>
        <Card style = {{height: 190,width: '100%',paddingLeft:0,marginLeft:0., marginBottom: 12,marginTop: 0}}>
            <CardItem style = {{width: '100%',paddingTop:0, paddingLeft:0, paddingRight:0}}>
              <Body>

          <View style={{backgroundColor: "white"}}>
            <ScrollView horizontal={true}>
              <Row>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140,marginRight:0 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/kfclogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>KFC Fast Food</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/taco.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Taco Bell</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/loterialogo.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Loteria</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/gongcha.jpg')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Gong Cha</Text>
                      </Button>
                    </View>
                </Col>
                <Col style={{ backgroundColor: 'white', height: 180, width: 140 }}>
                    <View style = {styles.imgcolfour}>
                      <Button transparent style={{height: 120 , width: '100%'}} onPress={Actions.restaurantdetail}>
                        <Thumbnail style={styles.imagetwo} square source={require('./img/burgerkinglogo.png')} /> 
                      </Button> 
                      <Button transparent textStyle={{color: '#87838B'}}>
                        <Text style={{paddingTop:14,paddingBottom: 23, color: 'black', paddingLeft:3 }}>Burger King</Text>
                      </Button>
                    </View>
                </Col>
              </Row>
            </ScrollView>
          </View>
              </Body>
            </CardItem>
        </Card>

          <Row>
              <Col style={{ backgroundColor: 'white', height: 40 }}>
                <H3 style={{ color: 'black',fontWeight: "bold", paddingLeft: 10, paddingTop: 10 }}>
                  Popular Restaurants!
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
