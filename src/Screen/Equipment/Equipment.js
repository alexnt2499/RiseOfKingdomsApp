//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,Picker,Image,SafeAreaView } from 'react-native';
import {fonts,colors} from './../../theme/theme';
import ListTrangBi from './../../database/Equipment';
import ListTrangBiEng from './../../database/EquipmentEng';
import {LocalizationContext} from './../../../App';
import equipVi from './../../utils/langDrop/equipmentVi';
import equipEn from './../../utils/langDrop/equipmentEn';
import BannerAds from './../../Components/AdsMob/BannerAds';
import Header from './../../Components/Header/Header';
import AsyncStorage from '@react-native-community/async-storage';
const Equipment = ({navigation}) => {
    const { t, locale, setLocale } = React.useContext(LocalizationContext);
    const [ListDrop,setListDrop] = useState([])
    const [value,setValue] = useState('VuKhi');
    const [ListValue, setListValue] = useState([]);
    const [ListOri,setListOri] = useState(ListTrangBiEng);
    const [lang,setLang] = useState([]);
    useEffect(() => {
        renderEquipment(value);
    },[ListOri])

    const renderEquipment = async (valuC) => {
        
        if(locale) {
            if(locale == 'vi') {setListOri(ListTrangBi);setListDrop(equipVi)}
            else {setListOri(ListTrangBiEng);setListDrop(equipEn)}
        } 
        
        

            for (let [key, value] of Object.entries(ListOri)) {
                if(key == valuC) {
                    setListValue(value)
                }
            }

          
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='TRANG BỊ' checkEquiq={true} navigation={navigation}></Header>
            <Picker
                    mode={'dropdown'}
                    selectedValue={value}
                    style={{height: 50, width: 200, marginLeft : 10, color : '#FFF'}}
                    onValueChange={(itemValue, itemIndex) =>{
                        setValue(itemValue); renderEquipment(itemValue);
                    } }>
                        {ListDrop.map((value) => {
                            return (<Picker.Item label={value.label} value={value.value} />)
                        })}
                    </Picker>
            <ScrollView style={{width : '100%'}}>
                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                
                {ListValue.map((value,index) => {
                    
                  
                        return (
                        <View style={styles.containerInner}>
                             <View style={{width : '100%', height:131, flexDirection : 'row'}}>
                                 <View style={{width : '25%', justifyContent :'center',alignItems :'center'}}>
                                     <Image style={{width : 66, height : 65}} source={value.image}></Image>
                                </View>
                                 <View style={{width : '80%', paddingVertical : 20, paddingLeft: 10}}>
                                    <Text style={{fontSize : 15, fontFamily : fonts.bold,color : 'orange'}}>{value.name}</Text>
                                    <Text style={{fontSize : 13, fontFamily : fonts.light,color : '#FFF'}}>{value.update}</Text>
                                 </View>
                             </View>
                        </View>
                        )
                    
                    
                })}
                </View>
            </ScrollView>
            <BannerAds></BannerAds>
        </SafeAreaView>
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
        height : 131,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        marginVertical : 10
        
    },
});

//make this component available to the app
export default Equipment;
