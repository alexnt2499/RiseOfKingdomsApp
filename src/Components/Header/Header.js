//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconIo from 'react-native-vector-icons/Ionicons';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFon from 'react-native-vector-icons/Fontisto';

import AppText from './../../Components/AppText';


import {fonts,colors} from  './../../theme/theme';

// create a component
const Header = ({ navigation,nameIcon,checkCustom,title,checkEquiq,checkTool,checkLang,onSearchScreen,checkBack,checkPerson,checkWeb,checkAction }) => {
    const renderBtn = () => {
        console.log(nameIcon);
        
        if(checkEquiq == true) {
           return   <Icon name={'shield-plus'} color='#FFF' size={25} style={{marginRight : 15}}></Icon>

        }else if(checkTool == true) {
            return  <IconFa5 name={'tools'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa5>
        }else if(checkLang == true) {
            return  <IconFa name={'language'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa>
        }else if(checkPerson == true) {
            return  <IconFa5 name={'user-astronaut'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa5>
        }else if(checkBack == true) {
            if(checkEquiq) {
                return  <IconFa name={'shield-plus'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa>
            }else if(checkWeb == true) {
                return  <IconFon name={'earth'} color='#FFF' size={25} style={{marginRight : 15}}></IconFon>
            }else if(checkCustom == true) {
                return <Icon name={nameIcon} color='#FFF' size={25} style={{marginRight : 15}}></Icon>
            }else return  <IconFa name={'calendar'} color='#FFF' size={25} style={{marginRight : 15}}></IconFa>
            
        }
        else {
            return  <TouchableOpacity onPress={() => {
                if(checkAction) {
                    onSearchScreen()
                }else {
                    navigation.navigate('CommanderTab')}
                }
                }
                ><IconA name={'search1'} color='#FFF' size={25} style={{marginRight : 15}}></IconA></TouchableOpacity> 
        }
    }
    return (
        <View style={styles.container}>
            <View style={{width : '20%', }}>
               {checkBack ? <TouchableOpacity onPress={() => {navigation.goBack()}}> 
                   <IconIo name='ios-arrow-back' color='#FFF' size={30} style={{marginLeft : 15}}></IconIo>
                </TouchableOpacity> : <TouchableOpacity style={{marginLeft : 20}} onPress={() => {navigation.openDrawer()}}> 
                   <Icon name='menu' color='#FFF' size={30} ></Icon>
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
       height : 55,
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
