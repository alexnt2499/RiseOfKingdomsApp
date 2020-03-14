//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Header from './../Components/Header/Header';
import {fonts,colors} from './../theme/theme';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from './../utils/i18n';
import RNrestart from 'react-native-restart';
// create a component
const ChooseLang = ({navigation}) => {

    const setLang = async (lang) => {
        let langa = await AsyncStorage.getItem('@lang');
        if(langa) I18n.locale = langa;


        Alert.alert(
            I18n.t('doi_ngon_ngu'),
            I18n.t('ban_co_chan_muon_doi_nn'),
            [
              {
                text: 'NO',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'YES', onPress: async () => {await AsyncStorage.setItem('@lang',lang); RNrestart.Restart()}},
            ],
            {cancelable: false},
          );
    }

    return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation} title='doi_ngon_ngu' checkLang={true}></Header>
            <View style={{width : '100%', justifyContent : 'center', marginVertical : 10}}>
                <TouchableOpacity onPress={() => {setLang('vi')}} style={styles.buttonStyle}>
                    <Image style={{width : 30, height : 30}} source={require('./../../assets/images/IconRes/vietnam.png')}></Image>
                    <Text style={styles.textStyle}>Vietnamese</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setLang('en')}} style={styles.buttonStyle}>
                    <Image style={{width : 30, height : 30}} source={require('./../../assets/images/IconRes/united-kingdom.png')}></Image>
                    <Text style={styles.textStyle}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.goBack()}} style={{...styles.buttonStyle, borderBottomColor : colors.HoverColor, }}>
                     <Text style={{...styles.textStyle,color : colors.HoverColor, fontSize : 17, fontFamily : fonts.light}}>Back</Text>
                </TouchableOpacity>
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
    textStyle: {
        color : '#FFF',
        fontFamily : fonts.regular,
        fontSize : 15,
        marginLeft : 10

    },
    buttonStyle : {
        marginLeft : 20, alignItems : 'center' ,flexDirection : "row", marginVertical : 10
    }
    
});

//make this component available to the app
export default ChooseLang;
