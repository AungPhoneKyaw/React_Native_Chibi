import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, ScrollView  } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Badge, H3, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default () => (
    <Container> 
        <Grid>
            <Content style = {{backgroundColor:'#dfdfdf'}}>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#dfdfdf', height: 105, width: '100%'}}>
                    <Card style={{flex: 0, marginLeft: 0, width: '100%' }}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('./img/kfclogo.png')} />
                                <Body>
                                <Text style={{fontWeight:'bold',fontSize:20}}>KFC</Text>
                                <Text style={{textAlign:'justify',color:'#5d5d5d'}}>You have gained 500 points from KFC. Please Keep in mind that
                                    these points are only valid before the expire date.
                                </Text>
                                </Body>
                            </Left>
                            </CardItem>
                    </Card>
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