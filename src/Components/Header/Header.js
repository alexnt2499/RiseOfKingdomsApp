//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import IconFa from 'react-native-vector-icons/FontAwesome';
import AppText from './../../Components/AppText';


import {fonts,colors} from  './../../theme/theme';

// create a component
const Header = ({ navigation,title,checkEquiq,checkTool,checkLang,checkBack }) => {
    const renderBtn = () => {
        if(checkEquiq == true) {
           return   <Icon name={'shield-plus'} color='#FFF' size={25} style={{marginRight : 15}}></Icon>

        }else if(checkTool == true) {
            return  <IconFa5 name={'tools'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa5>
        }else if(checkLang == true) {
            return  <IconFa name={'language'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa>
        }else if(checkBack == true) {
            return  <IconFa name={'calendar'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa>
        }
        else {
            return  <TouchableOpacity onPress={() => {navigation.navigate('CommanderTab')}}><IconA name={'search1'} color='#FFF' size={25} style={{marginRight : 15}}></IconA></TouchableOpacity> 
        }
    }
    return (
        <View style={styles.container}>
            <View style={{width : '20%', }}>
               {checkBack ? <TouchableOpacity onPress={() => {navigation.goBack()}}> 
                   <IconIo name='ios-arrow-back' color='#FFF' size={30} style={{marginLeft : 15}}></IconIo>
                </TouchableOpacity> : <TouchableOpacity onPress={() => {navigation.openDrawer()}}> 
                   <Icon name='menu' color='#FFF' size={30} style={{marginLeft : 15}}></Icon>
                </TouchableOpacity>}
            </View>
            <View style={{width : '60%', alignItems : 'center'}}>
            <AppText i18nKey={title ? title : 'HOME'} style={styles.titleStyle}></AppText>

            </View>
            <View style={{width : '20%', alignItems : 'flex-end', marginRight : 15}}>
               {renderBtn()}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       height : 50,
       width : '100%',
       flexDirection : 'row',
       justifyContent : 'center',
       alignItems : 'center',
        backgroundColor : colors.BottomColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.90,
        shadowRadius: 13.16,
        elevation: 20,
    },
    titleStyle : {
        color : '#FFF',
        fontFamily : fonts.light,
        fontSize : 20
    }
});

//make this component available to the app
export default Header;