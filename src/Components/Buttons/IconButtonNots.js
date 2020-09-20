//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { fonts } from '../../theme/theme';
import {LocalizationContext} from './../../../App';

// create a component
const IconButton = (props) => {
    const {t} = React.useContext(LocalizationContext);
    return (
        <TouchableOpacity style={[styles.iconBtn,props.styleIconBtn]} onPress={props.onPress}>
            <Icon name={props.nameIcon} size={30} color={'#FFF'}></Icon>
    {/* <Text style={{fontSize : 15, color : '#FFF', fontFamily : fonts.black}}>{t('save')}</Text> */}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    iconBtn : {
        width: 60,
        height : 60,
        borderRadius : 30,
        justifyContent : 'center',
        alignItems : 'center',
       
       

    }
});

//make this component available to the app
export default IconButton;
