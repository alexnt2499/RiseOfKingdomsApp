//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,ScrollView,TouchableOpacity } from 'react-native';
import {colors,fonts} from './../../theme/theme';
import ListT4In from './../../databaseTroop/Tier4In';
import ListT5In from './../../databaseTroop/Tier5In';
import ListT4Ar from './../../databaseTroop/Tier4Ar';
import ListT5Ar from './../../databaseTroop/Tier5Ar';
import ListT4Ca from './../../databaseTroop/Tier4Ca';
import ListT5Ca from './../../databaseTroop/Tier5Ca';
import CardTroop from './../Items/CardTroop';
import TextComponent from './../../Components/Text/Title';


// create a component
const TroopTab = ({type,navigation}) => {
    const [listT4,setListT4] = useState([]);
    const [listT5,setListT5] = useState([]);

    useEffect(() => {
        getDataByType();
    },[])

    const getDataByType = () => {
        if(type == 'infantry') {
            setListT4(ListT4In);
            setListT5(ListT5In);
        }else if(type == 'archer') {
            setListT4(ListT4Ar);
            setListT5(ListT5Ar);
        }else if(type == 'cavalry') {
            setListT4(ListT4Ca);
            setListT5(ListT5Ca);
        }

      
        
    }

    return (
        <ScrollView style={styles.container}>
           
                <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                        <TextComponent text='tier4'></TextComponent>
                        <TouchableOpacity onPress={() => {navigation.navigate('TroopToolHome')}}>
                            <TextComponent text='cal_troop' iconName='calculator' checkBar={true}></TextComponent>
                        </TouchableOpacity>
                </View>
                <FlatList
                    data={listT4}
                    renderItem={({item}) =>  
                        <TouchableOpacity onPress={() => {navigation.navigate('TroopD',{item : item,type:type})}}>
                            <CardTroop item={item} type={type}></CardTroop>
                        </TouchableOpacity>
                        }
                ></FlatList>

                <TextComponent text='tier5'></TextComponent>
                <FlatList
                    data={listT5}
                    renderItem={({item}) => 
                    <TouchableOpacity onPress={() => {navigation.navigate('TroopD',{item : item,type: type})}}>
                        <CardTroop item={item} type={type}></CardTroop>
                    </TouchableOpacity>}
                ></FlatList>
            
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: colors.MainColor,
    },
});

//make this component available to the app
export default TroopTab;
