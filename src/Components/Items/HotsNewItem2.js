//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image } from 'react-native';
import { fonts, colors } from '../../theme/theme';
import BASE_URL from '../../utils/BASE_URL';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { TextInput } from 'react-native-gesture-handler';
import {LocalizationContext} from './../../../App';
// create a component
const HotsNewItem = ({item}) => {
    let {t} = React.useContext(LocalizationContext);
    const seTtimess = () => {
        let dateS = new Date();
        
        let dateB = new Date(item.dateCreate);

        dateS.setUTCDate(dateB.getDate());
        dateS.setUTCMonth(dateB.getMonth());
        dateS.setUTCFullYear(dateB.getFullYear());
        dateS.setUTCHours(dateB.getHours());
        dateS.setUTCMinutes(dateB.getMinutes());
        console.log(dateS);
        
        return dateS;
    }
    return (
        <View style={styles.container}>
            <View style={{width : '30%'}}>
                <Image 
                    resizeMode='cover'
                    source={{uri : item.thumnail}}
                    style={styles.imageBg}>
                </Image>
            </View>

            <View style={{width : '66%', height : '92%', alignItems : 'flex-start', justifyContent : 'space-between'}}>
                <Text style={{fontFamily : fonts.bold, color : '#FFF',fontSize : 13}}>{item.title}</Text>

                <View style={{width : '100%', flexDirection : 'row' ,justifyContent :'space-between',alignItems : 'center'}}>
                    
                    
                        <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
                            <Image style={{width : 26, height : 26, borderRadius : 13 }} source={{uri : item.author.avatar}}/>
                            <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{item.author.fullname}</Text>
                            <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 8, marginLeft : 5}}>({item.author.level})</Text>
                        </View>

                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>
                            {moment(seTtimess()).fromNow()}
                        </Text>
                </View>

                <View style={{flexDirection : 'row'}}>
                    <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{t('view') }</Text>
                    <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{item.view}</Text>
                </View>

                   
                  

            

           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageBg: {
        width: '100%',
        height : 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius : 10
      
    },
    container : {
        justifyContent : 'space-between', 
        alignItems : 'flex-start', 
        width : '90%', 
        height : 100,
        overflow : 'hidden',
        flexDirection : 'row'

        
    }
});

//make this component available to the app
export default HotsNewItem;
