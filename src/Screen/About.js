//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons'
// create a component
const About = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{flex : 2}}>
            <View style={{height : 50}}>
                    <TouchableOpacity
                        onPress={() => {navigation.goBack()}}
                    >
                        <Icon name='ios-arrow-back' size={30} color='#FFF' style={{top : 10, left : 20}}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MainColor,
    },
});

//make this component available to the app
export default About;
