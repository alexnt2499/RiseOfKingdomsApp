//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,SafeAreaView } from 'react-native';
import {fonts,colors} from './../../theme/theme';
import Header from './../../Components/Header/Header';
import Button from './../../Components/Buttons/Button';
import AppText from './../../Components/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BannerAds from './../../Components/AdsMob/BannerAds';
import { InterstitialAd,AdEventType  } from '@react-native-firebase/admob';

// create a component
const ToolsIndex = ({navigation}) => {
    const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-7033028927124341/6324920687', {
        requestNonPersonalizedAdsOnly: true,
    });

    interstitial.onAdEvent((type) => {
        if (type === AdEventType.LOADED) {
          interstitial.show();
        }
    });


    return (
        <SafeAreaView style={styles.container}>

            <Header title={'TOOLS'} navigation={navigation} checkTool={true}></Header>
            <View style={{ marginVertical : 5 , justifyContent : 'center',alignItems : 'center'}}>
                    <BannerAds></BannerAds>

                </View>
            <ScrollView>
            <View style={{width : '100%', justifyContent : 'center', alignItems : 'center', marginTop : 20, marginBottom : 10, flexDirection : 'row'}}>
                <Icon name={'calendar-edit'} size={20} color={'#FFF'} style={{marginRight : 10}}></Icon>
                <AppText style={styles.textStyle} i18nKey={'eventTrack'}></AppText>
            </View>
            <View style={styles.container2}>
                <Button text={'eventTrack'} onclick={() => {navigation.navigate('EventTool');interstitial.load();}} icon={'calendar'}></Button>
            </View>

            <View style={{width : '100%', justifyContent : 'center', alignItems : 'center', marginTop : 20, marginBottom : 10, flexDirection : 'row'}}>
                <Icon name={'shield-plus'} size={20} color={'#FFF'} style={{marginRight : 10}}></Icon>
                <AppText style={styles.textStyle} i18nKey={'toolTrangBi'}></AppText>
            </View>
            <View style={styles.container2}>
                <Button text={'toolTrangBi'} onclick={() => {navigation.navigate('EquipmentS');interstitial.load();}} icon={'armor'}></Button>
            </View>
            <View style={styles.container2}>
                <Button text={'rokTalent'} onclick={() => {navigation.navigate('WebViewTalent');interstitial.load();}} icon={'armor'}></Button>
            </View>


            <View style={{width : '100%', justifyContent : 'center', alignItems : 'center', marginTop : 20, marginBottom : 10, flexDirection : 'row'}}>
                <Icon name={'calculator-variant'} size={20} color={'#FFF'} style={{marginRight : 10}}></Icon>
                <AppText style={styles.textStyle} i18nKey={'mayTinh'}></AppText>
            </View>
            <View style={styles.container2}>
                <Button text={'cal_Res'} onclick={() => {navigation.navigate('RTool');interstitial.load();}} icon={'resourse'}></Button>
            </View>

            <View style={styles.container2}>
                <Button text={'cal_Speed'} onclick={() => {navigation.navigate('STool');interstitial.load();}} icon={'speed'}></Button>
            </View>

            <View style={styles.container2}>
                <Button text={'cal_Material'} onclick={() => {navigation.navigate('MaterialTool');interstitial.load();}} icon={'material'}></Button>
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
    container2 : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    textStyle : {
        fontSize : 17,
        fontFamily : fonts.light,
        color : '#FFF'
    }
});

//make this component available to the app
export default ToolsIndex;
