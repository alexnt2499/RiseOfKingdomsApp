//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity } from 'react-native';
import {colors,fonts} from './../../theme/theme';
import IconS from 'react-native-vector-icons/MaterialIcons';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListSkill from './../../databaseTroop/Skill';
// create a component
const TroopDetails = ({navigation,route}) => {
    const {t} = React.useContext(LocalizationContext);
    let {item,type} = route.params;
    const renderImageSkill = () => {
        console.log(type);
        
        if(type == 'infantry') {
            return (
                <View style={styles.skillCard}>
                <Image style={styles.imageSkillStyle} source={ListSkill.boBinh.skill1.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.boBinh.skill2.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.boBinh.skill3.image}></Image>
                </View>
            )
        }else if(type == 'archer') {
            return (
                <View style={styles.skillCard}>
                <Image style={styles.imageSkillStyle} source={ListSkill.cungThu.skill1.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.cungThu.skill2.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.cungThu.skill3.image}></Image>
                </View>
            )
        }else if(type == 'cavalry') {
            return (
                <View style={styles.skillCard}>
                <Image style={styles.imageSkillStyle} source={ListSkill.kyBinh.skill1.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.kyBinh.skill2.image}></Image>
                <Image style={styles.imageSkillStyle} source={ListSkill.kyBinh.skill3.image}></Image>
                </View>
            )
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View>
                <TouchableOpacity style={{ width: 50,height : 50, marginLeft : 20}} onPress={() =>{navigation.goBack()}}>
                                <IconS name={'arrow-back'} color="green" size={25} style={{marginTop : 20, color : '#FFF'}}/>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent : 'center',alignItems : 'center', marginVertical : 10}}>
                <Image style={styles.image} source={item.image}></Image>
            </View>
            <View>
                <View style={{marginLeft : 20, marginTop : 20, flexDirection : 'row'}}>
                        <Image  source={item.VanMinh}></Image>
                        <Text style={styles.textTitle}>
                            {item.name} 
                        </Text>
                </View>

                <View style={{marginLeft : 20, marginTop : 20}}>
                        <View style={{width : '100%' , flexDirection : 'row'}}>
                            <View style={{flexDirection : 'row'}}>
                                <Icon name='knife-military' size={25} 
                                color={'#ef5350'}></Icon>
                                <Text style={styles.textStyle}>
                                    {t('atk')} : {item.atk}
                                </Text>
                            </View>

                            <View style={{flexDirection : 'row', marginLeft : 25}}>
                                <Icon name='shield' size={25} color={'#1565c0'}></Icon>
                                <Text style={styles.textStyle}>
                                {t('def')} : {item.def}
                                </Text>
                            </View>
                        </View>

                        <View style={{flexDirection : 'row', marginVertical : 20}}>
                            <Icon name='plus-box' size={25} color={'#8bc34a'}></Icon>
                            <Text style={styles.textStyle}>
                                 {t('health')} : {item.health}
                            </Text>
                        </View>

                     
                </View>

                {renderImageSkill()}
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
    textStyle : {
        fontFamily : fonts.light,
        marginLeft : 10 ,
        color : '#FFF',
        fontSize : 15, 
        marginTop : 2
    },
    textTitle : {
        fontFamily : fonts.bold,
        marginLeft : 10 ,
        color : '#FFF',
        fontSize : 20, 
        marginTop : 2
    },
    skillCard : {
        flexDirection : 'row', 
        marginVertical : 20, 
        marginHorizontal : 20, 
        justifyContent : 'space-between'
    },
    imageSkillStyle : {
        width : 100,
        height : 100,
        marginRight :5
    },
});

//make this component available to the app
export default TroopDetails;
