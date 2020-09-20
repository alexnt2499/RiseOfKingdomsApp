//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RewardedAd, TestIds } from '@react-native-firebase/admob';



// create a component
const RewardAds = (props) => {
    return (
        <RewardedAd
                    unitId={TestIds}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
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
export default RewardAds;
