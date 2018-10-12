import React, { Component } from 'react';
import { View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, H1,H2, H4, Item, Input, Icon, Thumbnail, Content, Button, Footer, FooterTab, Badge, Text } from 'native-base';

export default () => (
    <Grid>
        <Content style = {{backgroundColor:'#484848'}}>
            <Row>
                <Col style={{ backgroundColor: '#484848', height: 150 }}></Col>
            </Row>
            <Row>
                <Col style={{ backgroundColor: '#484848', height: 200, paddingTop: 50}}>
                    <H2  style={{ textAlign: 'center', color: 'white'}}>Noti Page Coming Soon!</H2>
                </Col>
            </Row>
        </Content>
    </Grid>
);