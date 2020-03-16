//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview';
import Header from './../Components/Header/Header';
// create a component
const WebViews = ({navigation}) => {
    return (
        <SafeAreaView style={{flex : 1}}>
            <Header checkBack={true} checkWeb={true} title='rok_tlent' navigation={navigation} ></Header>
            <WebView
            source={{uri: 'https://roktalents.com/'}}

            >
                
            </WebView>
        </SafeAreaView>
        
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default WebViews;
