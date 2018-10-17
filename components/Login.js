import React from "react";
import { ImageBackground,StyleSheet,View} from "react-native";
import { Content,Container,Thumbnail, Card, CardItem, Body, Form,Text,Icon,Button} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default ({history}) => (
    <Container>
        <ImageBackground source={require('./img/foodblur.png')} style={{width: '100%', height: 800}}>            
            <View style={styles.container}>
                <Thumbnail style={styles.image} square source={require('./img/Gonesinlogo.png')} />     
                <Button iconLeft full onPress={() => history.push("/main")}><Text> Customer</Text></Button>
                <Button iconLeft full danger><Text>Restaurant Owner</Text></Button>
                <Button full success><Text>Developer</Text>
          </Button>
            </View>
        </ImageBackground>
    </Container>
); 
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:300,
        marginTop: 200,
        backgroundColor:'',
    },
    logincard: {
        width:300,
        height:400,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        height: 120,
        width: 500,
        borderColor: '#a3a3a3',
        borderWidth: 0,
      },
});