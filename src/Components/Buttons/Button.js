//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity , Image } from 'react-native';
import { fonts, colors } from '../../theme/theme';
import AppText from './../AppText';
// create a component
const Button = ({text,onclick,icon}) => {

    const renderImage = () => {
        if(icon == 'resourse') {
            return <Image style={styles.imageStyle} source={require('./../../../assets/images/IconRes/food.png')} ></Image>
        }
        else  if(icon == 'speed') {
            return <Image style={styles.imageStyle} source={require('./../../../assets/images/IconRes/speed.png')} ></Image>
        }
        else  if(icon == 'material') {
            return <Image style={styles.imageStyle} source={require('./../../../assets/images/IconRes/material.png')} ></Image>
        }
        else  if(icon == 'armor') {
            return <Image style={styles.imageStyle} source={require('./../../../assets/images/IconRes/armor.png')} ></Image>
        }
        else  if(icon == 'calendar') {
            return <Image style={styles.imageStyle} source={require('./../../../assets/images/IconRes/calendar.png')} ></Image>
        }
    } 
    return (
        <TouchableOpacity
        onPress={onclick}
        style={styles.container}>
            {renderImage()}
            <AppText i18nKey={text} style={styles.textStyle}></AppText>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.HoverColor,
        fontSize : 15,
        width : '90%',
        height : 51,
        borderRadius : 7,
        flexDirection : 'row',
        marginVertical : 10,
        shadowOpacity : 1,
        shadowColor : 'red'
    },
    textStyle: {
        color :'#FFF',
        fontFamily : fonts.bold,
        fontSize : 15
    },
    imageStyle : {
        width : 25,
        height : 25,
        marginHorizontal : 5
    }
});

//make this component available to the app
export default Button;
