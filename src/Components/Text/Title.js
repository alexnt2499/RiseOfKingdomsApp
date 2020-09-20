//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors,fonts} from './../../theme/theme';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const TextComponent = (props) => {
    const {t} = React.useContext(LocalizationContext);
    return (
        <View style={{marginHorizontal : '5%', marginBottom : 20,marginTop : 20, flexDirection : 'row'}}>
        {props.checkBar? null :<View style={styles.tabBar}></View>}
        <Text style={{fontFamily : fonts.black, fontSize :18,color : '#FFF', marginLeft : 10}}>
            {t(props.text).toUpperCase()}
        </Text>
        {props.iconName? <Icon 
        color='#FFF'
        style={{marginLeft : 5}}
        name={props.iconName} 
        size={24}></Icon> :null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    tabBar : {
        height : 25, width : 4, 
        backgroundColor : colors.barColor, 
        borderTopRightRadius:5,borderBottomRightRadius : 5
    }
});

//make this component available to the app
export default TextComponent;
