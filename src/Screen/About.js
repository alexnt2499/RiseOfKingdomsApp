//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './../Components/Header/Header';
// create a component
const About = ({navigation}) => {
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex : 2}}>
                <Header checkBack={true} navigation={navigation} checkPerson={true} title={'info'} ></Header>
                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Image style={{width : 150, height : 150}} source={require('./../../assets/images/logome.png')}></Image>
                </View>
            </ScrollView>
        </SafeAreaView>
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
