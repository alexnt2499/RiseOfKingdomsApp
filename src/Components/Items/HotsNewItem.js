//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image } from 'react-native';
import { fonts, colors } from '../../theme/theme';
import BASE_URL from '../../utils/BASE_URL';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

// create a component
const HotsNewItem = ({item}) => {

    const seTtimess = () => {
        let dateS = new Date();
        
        let dateB = new Date(item.dateCreate);

        dateS.setUTCDate(dateB.getDate());
        dateS.setUTCMonth(dateB.getMonth());
        dateS.setUTCFullYear(dateB.getFullYear());
        dateS.setUTCHours(dateB.getHours());
        dateS.setUTCMinutes(dateB.getMinutes());
  
        
        return dateB.getDate() + '/' + (dateB.getMonth()+1) + '/' + dateB.getFullYear() + ' ' + dateB.getHours() + ":" + dateB.getMinutes();
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
                 imageStyle={{ borderRadius: 5 }}
                source={{uri : item.thumnail}}
                style={styles.imageBg}>
                
                <View style={{
                    width : '100%',
                    height : 90,
                    backgroundColor : '#000',
                     borderRadius : 5, 
                     opacity : 0.7, 
                     paddingVertical : 6,
                     paddingHorizontal : 12, position : 'absolute'}}>

                </View>
                <View style={{
                    width : '100%',
                    height : 90,
                     borderRadius : 5, 
                     paddingVertical : 6,
                     paddingHorizontal : 12, position : 'relative'}}>
                    <Text style={{fontFamily : fonts.bold, color : '#FFF',fontSize : 13}}>{item.title}</Text>

                    <View style={{width : '100%', position : 'absolute', bottom : 0, left : 10, bottom : 10, flexDirection : 'row' ,justifyContent :'flex-start',alignItems : 'center'}}>
                        <Image style={{width : 26, height : 26, borderRadius : 13 }} source={{uri : item.author.avatar}}/>
                    <View>
                    <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{item.author.fullname}</Text>
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 8, marginLeft : 5}}>({item.author.level})</Text>
                    </View>

                        <Icon name='eye' style={{marginLeft : 20}} size={20} color={colors.HoverColor}></Icon> 
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{item.view}</Text>
                    </View>

                    <View style={{position : 'absolute', bottom : 15, right : 20}}>
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>
                       {seTtimess()}

                        </Text>

                    </View>
                </View>
            </ImageBackground>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageBg: {
        width: '100%',
        height : 195,
        justifyContent: 'flex-end',
        alignItems: 'center',
      
    },
    container : {
        justifyContent : 'center', 
        alignItems : 'center', 
        width : '90%', 
        height : 195,
        overflow : 'hidden',
        
    }
});

//make this component available to the app
export default HotsNewItem;
