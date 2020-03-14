//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const MyComponent = ({navigation}) => {
    return (
       <View>
            <View style={styles.container}>
               <Image
               source={require('./../../assets/images/VanMinh/China.png')}
                style={{position : 'absolute',
                top : 20,
                right : 20}}
               ></Image>

                <Image 
                    style={{width : 200, height : 400, marginTop : 270}}
                    source={require('./../../assets/images/Commander/Legendary/CaoCao/CaoCao.png')}></Image>
            </View>
            <View style={{marginHorizontal : 10, marginVertical : 20}}>
                <Text style={styles.textStyle}>Version 1.0.0</Text>
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
        backgroundColor: colors.CardColor,
        height : 150,
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