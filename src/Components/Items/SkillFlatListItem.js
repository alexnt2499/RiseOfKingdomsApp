//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {color,fonts, colors} from './../../theme/theme';
// create a component
const SkillFlatListItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInner}>
                <View style={{width : '100%', height : 198-60, flexDirection :'row'}}>
                    <View style={{width : '25%', height : 198-60, justifyContent : 'center', alignItems : 'center'}} >
                        <Image source={item.image} style={{width : 73, height : 74}}></Image>
                        <Text style={{fontFamily : fonts.light, fontSize : 13,color : '#FFF'}}>{item.type}</Text>
                    </View>
                    <View style={{width : '85%', paddingHorizontal : 10, paddingVertical : 15, height : 198-60}}>
                        
                            <Text style={{fontSize : 15, fontFamily : fonts.bold,color : 'orange'}}>{item.rage}</Text>
                            <Text style={{fontSize : 15, fontFamily : fonts.bold,color : '#FFF'}}>{item.name}</Text>
                            <Text style={{fontSize : 10, fontFamily : fonts.light,color : '#FFF',width : 240}}>{item.about}</Text>
                        
                    </View>
                </View>
                <View style={{width : '100%', height : 60, marginHorizontal : 15, marginVertical : 10}}>
                    <Text style={{fontSize : 10, fontFamily : fonts.light,color : '#FFF'}}>{item.update}</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width : '100%',
        height : 198,
        marginVertical : 10,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000073',
        shadowOpacity: 0.6,
        elevation: 10,
        // background color must be set
     
    },
    containerInner : {
        width : '95%',  
        height : 198,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        
        
    }, 
    textStyle : {
        fontFamily : fonts.regular,
        color : '#FFF'
    }
});

//make this component available to the app
export default SkillFlatListItem;
