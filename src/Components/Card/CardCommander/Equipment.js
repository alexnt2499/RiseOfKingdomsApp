//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Picker } from 'react-native';
import {colors, fonts} from './../../../theme/theme';
import ListTrangBi from './../../../database/Equipment';
import ListTrangBiEn from './../../../database/EquipmentEng';

import equipVi from './../../../utils/langDrop/equipmentVi';
import equipEn from './../../../utils/langDrop/equipmentEn';
import {LocalizationContext} from './../../../../App';


// create a component

const Equipment = ({items}) => {
    const { t, locale, setLocale } = React.useContext(LocalizationContext);

    const [ListDrop,setListDrop] = useState([]);
    const [value,setValue] = useState('VuKhi');
    const [ListValue, setListValue] = useState([]);
    const [ListOri, setListOri] = useState([]);

    
    useEffect(() => {
        renderEquipment(value);
    },[ListOri])

    const renderEquipment = async (valuC) => {
        if(locale) {
            if(locale == 'vi') {setListOri(ListTrangBi);setListDrop(equipVi)}
            else {setListOri(ListTrangBiEn);setListDrop(equipEn)}
        } 
        
        for (let [key, value] of Object.entries(ListOri)) {
            if(key == valuC) {
                setListValue(value)

                
            }
        }
        console.log(ListValue);


          
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={{fontFamily : fonts.black, fontSize : 17,color : '#FFF', marginTop : 10, marginLeft : 20}}>
                 {t('trang_bi_khuyen_dung')}
                </Text>
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
            <View style={{width : '100%', justifyContent : 'center', alignItems :'center'}}>
                {ListValue.map((value,index) => {
                    
                    console.log(items.trangBi);
                    
                    if(value.update.indexOf(items.trangBi) != -1) {
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
                    }
                    
                })}

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
        height : 131,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        marginVertical : 10
        
    },
});

//make this component available to the app
export default Equipment;
