//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

// create a component
const BannerAds = (props) => {
    return (
        <BannerAd
                    unitId={'ca-app-pub-7033028927124341/5474292886'}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                    size={BannerAdSize.BANNER}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                    onAdFailedToLoad={(error) => {
                       console.log(error);
                                               
                    }}
                    />
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
export default BannerAds;
