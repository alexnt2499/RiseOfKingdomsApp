//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';

import {fonts,colors} from  './../../theme/theme';
import {LocalizationContext} from './../../../App';
// create a component
const HeaderSearch = (props) => {
    const { t, locale, setLocale } = React.useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <View style={{width : '85%',paddingLeft : 25}}>
                <View style={{borderBottomWidth : 0.5, marginBottom : 10, width : '100%', height : 40, borderColor : '#FFF'}}>
                <TextInput 
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={t('nhap_ten_chi_huy')}
                placeholderTextColor={colors.unColor}
                style={{color : '#FFF', fontSize :13, fontFamily : fonts.light, width : '100%'}}
                ></TextInput>
                </View>

            </View>
            <View style={{width : '15%', alignItems : 'flex-end', marginRight : 15}}>
               
                     <IconA name='search1' color='#FFF' size={25} style={{marginRight : 15}}></IconA>
                
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
export default HeaderSearch;
