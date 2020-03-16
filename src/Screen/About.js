//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,SafeAreaView,Linking } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './../Components/Header/Header';
import {LocalizationContext} from './../../App';
// create a component
const About = ({navigation}) => {
    const {t} = React.useContext(LocalizationContext);
    const LinkTo = (url) => {
        if(url == 'fb') {
            Linking.openURL('fb://page/ntd2471999');
        }else if(url == 'gmail') {
            Linking.openURL('mailto:briannguyen247199@gmail.com');
        }else {
            Linking.openURL(url);
        }
    }
    return (
        
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex : 2}}>
                <Header checkBack={true} navigation={navigation} checkPerson={true} title={'info'} ></Header>
                <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 20}}>
                    <Image style={{width : 100, height : 100}} source={require('./../../assets/images/logome.png')}></Image>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'flex-start',marginHorizontal : 50}}>
                     <Text style={[styles.textStyle,{fontSize : 17, marginVertical : 10, fontFamily : fonts.bold,color : 'orange'}]}>{t('aboutme')}</Text>

                    <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'card-bulleted'} size={30} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>vnboy from Kingdom 1645</Text>
                    </View>

                    <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'android-head'} size={30} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>Mobile developer</Text>
                    </View>
                    
                    <Text style={[styles.textStyle,{fontSize : 17, marginVertical : 10, fontFamily : fonts.bold,color : 'orange'}]}>{t('contact')}</Text>

                    <TouchableOpacity onPress={() =>{LinkTo('gmail')}} style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'gmail'} size={30} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>briannguyen247199@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{LinkTo('fb')}} style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'facebook-box'} size={30} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>www.facebook.com/ntd2471999</Text>
                    </TouchableOpacity>

                    <Text style={[styles.textStyle,{fontSize : 17, marginVertical : 10, fontFamily : fonts.bold,color : 'orange'}]}>{t('imgandres')}</Text>
                    <TouchableOpacity onPress={() =>{LinkTo('https://riseofkingdoms.fandom.com/wiki/Rise_of_Kingdoms_Wiki')}} style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'link-variant'} size={25} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>Wiki Rise Of Kingdoms</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{LinkTo('https://rok.guide/talent-guide/')}} style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'link-variant'} size={25} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>rok.guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{LinkTo('https://roktalents.com/')}} style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                        <Icon name={'link-variant'} size={25} color={'#FFF'}></Icon>
                        <Text style={[styles.textStyle,{marginLeft : 10}]}>roktalents.com</Text>
                    </TouchableOpacity>
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
    textStyle : {
        color : '#FFF',
        fontFamily : fonts.light
    }
});

//make this component available to the app
export default About;
