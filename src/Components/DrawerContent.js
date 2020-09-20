//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
// create a component
const MyComponent = ({navigation}) => {
    return (
       <View>
            <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#42275a','#734b6d']} style={styles.container}>
               <Image
               source={require('./../../assets/images/VanMinh/Britain.png')}
                style={{position : 'absolute',
                top : 20,
                right : 20}}
               ></Image>

                <Image 
                    style={{width : 250, height : 450, marginTop : 320}}
                    source={require('./../../assets/images/Commander/Epic/Boudica/Boudica.png')}></Image>
            </LinearGradient>
            <View style={{marginHorizontal : 10, marginVertical : 20}}>
                <Text style={styles.textStyle}>Version 1.0.3</Text>
            </View>
       </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        height : 160,
        overflow : 'hidden',
        borderBottomEndRadius : 5,
        borderBottomLeftRadius : 5,
        position : 'relative'
    },
    textStyle : {
        color :  '#FFF',
        fontSize : 17,
        fontFamily : fonts.light
    }
});

//make this component available to the app
export default MyComponent;