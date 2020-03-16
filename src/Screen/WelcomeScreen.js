//import liraries
import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet, Image,ActivityIndicator } from 'react-native';
import HomeScreen from './HomeScreen';

// create a component
const WelcomeScreen = ({navigation}) => {
    

    return (
        <View style={styles.container}>
            <Image style={{width : 100, height : 100}} source={require('./../../assets/images/logo.png')}></Image>
            <ActivityIndicator size={30} style={{marginTop : 5}} color='orange'></ActivityIndicator>

        </View> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default WelcomeScreen;
