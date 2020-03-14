//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

// create a component
const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>WelcomeScreen</Text>
            <Text onPress={() => {
                navigation.navigate('Home')
            }}>HomeScreen go</Text>
        </View>
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
export default WelcomeScreen;
