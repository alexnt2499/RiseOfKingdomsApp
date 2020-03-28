//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,Alert } from 'react-native';
import {colors, fonts} from './../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LocalizationContext} from './../../../App';
import moment from 'moment';


// create a component
const EventItems = ({item,onDelete}) => {
   
  const {t} = React.useContext(LocalizationContext);

  
    console.log(item);
    


   
    return (
        <View style={styles.container}>
            <View style={[styles.containerIn, {flexDirection :'row'}]}>
                <Image resizeMode='center' style={{width : '20%', height : 100, marginLeft : 8,borderRadius : 5, marginVertical : 10}} source={{uri : item.image}}></Image>
                <View style={{width :'60%', marginLeft : 15, marginTop : 10, marginBottom : 10}}>
                    <View style={{flexDirection : 'row'}}>
                        <Text style={[styles.textStyle,{fontFamily : fonts.bold, color : 'orange'}]}>{item.title}</Text>
                    </View>
                
                    <View style={{flexDirection : 'row', width:'100%'}}>
                        <Text style={[styles.textStyle,{fontSize : 12}]}> - {item.sub}</Text>
                    </View>

                </View>

                <View style={{position : 'absolute', top : 8, right : 8, width : 50, height : 50, paddingLeft : 20}}>
                    <TouchableOpacity onPress={() => {onDelete()}}>
                        <Icon name='delete-forever' size={25} color='#FFF'></Icon>
                    </TouchableOpacity>

                   

                </View>
                
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
        position : 'relative'
    },
    containerIn: {
     
        backgroundColor: colors.CardColor,
        marginVertical : 10,
        
        width : '95%',
        borderRadius : 10
    },
    textStyle : {
        fontFamily : fonts.light,
        color : '#FFF'
    }
});

//make this component available to the app
export default EventItems;
