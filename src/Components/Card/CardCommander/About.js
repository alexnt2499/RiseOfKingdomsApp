//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, ScrollView, StyleSheet,Text, TouchableOpacity, Image } from 'react-native';
import {colors, fonts} from './../../../theme/theme';
import ListIcon from './../../../database/Icon';
import AppText from './../../../Components/AppText';
import AsyncStorage from '@react-native-community/async-storage';
// create a component
const About = ({items}) => {
    const [readMore,setReadmore] = useState(false);
    const [lang,setLang] = useState();

    useEffect(() => {
        getLang();
    },[])

    const getLang = async () => {
        let lang = await AsyncStorage.getItem('@lang');
        setLang(lang);
    }

    return (
        <ScrollView style={styles.container}>
          <View style={{width: '100%',justifyContent : 'center', alignItems : 'center'}}>
            <View style={styles.containerInner}>
                <AppText i18nKey='tieu_su' style={{fontFamily : fonts.bold, fontSize : 15,color : '#FFF', marginLeft : 20,marginBottom: 5, marginTop : 15}}></AppText>
                <View style={{marginLeft : 20, height : readMore ? 'auto' : 190 }}>
                    <Text style={{fontFamily : fonts.light, fontSize : 13,color : '#FFF'}}>
                        - {readMore ? items.about : items.about.substring(0,500)+'...'}
                    </Text>
                </View>
               <View style={{width : '100%',alignItems : 'flex-end'}}>
                <TouchableOpacity
                    onPress={() => {setReadmore(!readMore)}}
                >
                    <AppText i18nKey={readMore ? 'an_bot'  : 'hien_thi_them'} style={{fontFamily : fonts.bold, fontSize : 13,color : colors.HoverColor, marginRight : 20,marginBottom: 5}}></AppText>
                </TouchableOpacity>
               </View>
            </View>
          </View>

          <View style={{width: '100%',justifyContent : 'center', alignItems : 'center'}}>
            <View style={{...styles.containerInner, paddingVertical : 10, paddingHorizontal : 15}}>
                {items.talent.map((value) => {
                    return (
                        <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center'}}>
                            <Image style={{width : 45, height :45}} source={value.image}></Image>
                            <Text style={{fontFamily : fonts.light, fontSize : 13,color : '#FFF'}}>{lang == 'vi'? value.namevi : value.name}</Text>
                        </View>
                    )
                })}
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
    containerInner : {
        width : '95%',  
        paddingBottom : 10,
        marginVertical : 10,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        
        
    },
});

//make this component available to the app
export default About;
