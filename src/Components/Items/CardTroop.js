//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image } from 'react-native';
import {fonts,colors} from './../../theme/theme';
import ListSkill from './../../databaseTroop/Skill';

const {width} = Dimensions.get('window');

// create a component
const CardTroop = ({item,type}) => {
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
        <View style={styles.container}>
            <View style={styles.cardStyle}>
               
                <View style={{width : '50%', height : 200}}>
                    <View style={{marginLeft : 20, marginTop : 20}}>
                        <Image  source={item.VanMinh}></Image>
                        <Text style={{fontFamily : fonts.bold, color : '#FFF', fontSize : 20, marginTop : 2}}>
                            {item.name}
                        </Text>
                    </View>
                    
                        {renderImageSkill()}
                
                </View>
                <View style={{width : '50%', height : 200}}>
                    <Image resizeMode='contain' style={{height : 200, width : 200}} source={item.image}></Image>
                </View>
            </View>
      
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width : width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MainColor,
        marginVertical : 20
    },
    cardStyle : {
        width : '90%',
        height : 200,
        backgroundColor : colors.CardColor,
        borderRadius: 10,
        flexDirection : 'row'
    },
    imageSkillStyle : {
        width : 60,
        height : 60,
        marginRight :5
    },
    skillCard : {
        flexDirection : 'row', 
        marginVertical : 20, 
        marginLeft : 20, 
        justifyContent : 'space-between'
    }
});

//make this component available to the app
export default CardTroop;
