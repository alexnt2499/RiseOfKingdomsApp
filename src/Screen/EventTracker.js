//import liraries
import React, { Component, useState,useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,FlatList,SafeAreaView } from 'react-native';
import {colors,fonts} from './../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './../Components/Header/Header';
import AppText from '../Components/AppText';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import AddModal from './../Components/Modal/AddEventMdoal';
import EditModal from './../Components/Modal/EditEventModal';
import PushNotification from 'react-native-push-notification';
import BannerAds from './../Components/AdsMob/BannerAds';

import {LocalizationContext} from './../../App';
import getRealm from './../services/realm';
import EventItemFlatlist from './../Components/Items/eventItem';
const EventTracker = ({navigation}) => {
    const {t} = React.useContext(LocalizationContext);
    const [dayIn,setDayIn] = useState(moment.utc().format('DD-MM-YYYY'));
    const [timeIn,setTimeIn] = useState(moment.utc().format('HH:mm:ss'));
    const [listShedule,setListShedule] = useState([]);
    const [dayIn2,setDayIn2] = useState(moment(new Date()).format('DD-MM-YYYY'));
    const [timeIn2,setTimeIn2] = useState(moment(new Date()).format('HH:mm:ss'));
    const [itemProps,setItemProps]= useState({});
    const [refreshingData,setrefreshingData] = useState(false);
    const timeClock = () => {
        setInterval(()=>{
            setDayIn(moment.utc().format('DD-MM-YYYY'));
            setTimeIn(moment.utc().format('HH:mm:ss'));
            setDayIn2(moment(new Date()).format('DD-MM-YYYY'));
            setTimeIn2(moment(new Date()).format('HH:mm:ss'));
            
        },1000);
    }

  
    const refeshList = async () => {
       try {
        let realm = await getRealm();
        let data = realm.objects('shedules');
        let array = Array.prototype.slice.call(data);
      
            setListShedule(array);

       } catch (error) {
        setListShedule([]);

       }
        
    }

    const refreshingDatas = () => {
        console.log('Haha');
        
        setrefreshingData(true);
    }

    const refeshListRemove = async (id) => {
        let listFilter = listShedule.filter((value) => {
            return value.id != id;
        })
        setListShedule(listFilter);
        console.log(listFilter);
        let realm = await getRealm();
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey('shedules', Number(id));
            realm.delete(deletingTodoList);
        })
        PushNotification.cancelLocalNotifications({id: `${id}`});
 
        
    }

    useEffect(() => {
        refeshList();
    },[])
    
    useFocusEffect(
        React.useCallback(() => {
            timeClock();
          return () => {
            clearInterval(timeClock);
           
          };
        }, [])
      );

    const addModalRef = useRef();
    const editModalRef = useRef();


    return (
        <SafeAreaView style={styles.container}>
            <Header checkBack={true} title={'event_check'} navigation={navigation}></Header>
            <View style={styles.headerCard}>
                <View style={{flexDirection : 'row', width : '100%', marginHorizontal : 15, marginTop : 20}}>
                    <Icon name='calendar-clock' size={20} color={'#FFF'} style={{marginRight : 5}}></Icon>
                    <AppText i18nKey='gio_trong_game' style={styles.textStyle}></AppText>
                </View>

                <View style={{flexDirection : 'row', width : '100%', marginHorizontal : 15, marginTop : 5}}>
                    <Text style={{...styles.textStyle, fontFamily : fonts.light, fontSize : 13}}>
                       {t('day')} {dayIn}  {t('time')} {timeIn}
                    </Text>
                </View>

                <View style={{flexDirection : 'row', width : '100%', marginHorizontal : 15, marginTop : 20}}>
                    <Icon name='account-clock' size={20} color={'#FFF'} style={{marginRight : 5}}></Icon>
                    <AppText i18nKey='gio_trong_cua_may' style={styles.textStyle}></AppText>
                </View>

                <View style={{flexDirection : 'row', width : '100%', marginHorizontal : 15, marginTop : 5}}>
                    <Text style={{...styles.textStyle, fontFamily : fonts.light, fontSize : 13}}>
                       {t('day')} {dayIn2}  {t('time')} {timeIn2} 
                    </Text>
                </View>

                <View style={{position : 'absolute', right : -20, }}>
                    <Image source={require('./../../assets/images/Commander/Legendary/Richard/Richard.png')} style={{width : 200, height : 290}}></Image>
                </View>
            </View>

            <ScrollView>
                <View style={{width : '100%', alignItems : 'center', marginTop : 10, marginBottom : 10}}>
                    <Text style={[styles.textStyle]}>{t('list_shedule')}</Text>
                </View>
                <View style={{marginBottom : 90}}>
                {
                listShedule.length == 0 ? <View style={{alignItems : 'center'}}><Text style={[styles.textStyle,{fontFamily : fonts.light, fontSize : 13}]}>{t('hien_tai_ko')}</Text></View> : <FlatList
                showsVerticalScrollIndicator={false}
                data={listShedule}
                refreshing={refreshingData}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {setItemProps(item);editModalRef.current.open();}}>
                             <EventItemFlatlist listRemove={() => {refeshListRemove(item.id)}} item={item}></EventItemFlatlist>
                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
            
            
            }
            </View>

            </ScrollView>
            

       
        <View style={{bottom : 0,position : 'absolute', width : '100%',justifyContent : 'center',alignItems : 'center'}}>
            <BannerAds></BannerAds>
        </View>

            <AddModal ref={addModalRef} getList={refeshList}></AddModal>
            <EditModal ref={editModalRef} item={itemProps} refreshingDatas={refreshingDatas} getList={refeshList}></EditModal>
            <TouchableOpacity style={styles.iconBtn} onPress={() => {
                    addModalRef.current.open()
                
            }}>
                <Icon name={'calendar-plus'} size={30}></Icon>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MainColor,
        position : 'relative'

    },
    containerIner: {
        width : '100%',
        height : '100%',
        backgroundColor: colors.MainColor,
        position : 'relative'
    },
    textStyle : {
        fontFamily : fonts.bold,
        fontSize : 15,
        color : '#FFF'
    },
    headerCard : {
        width : '100%',
        backgroundColor : colors.BottomColor,
        height : 150,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
        overflow : 'hidden'
    },
    iconBtn : {
        width: 60,
        height : 60,
        borderRadius : 30,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        backgroundColor : '#FFF',

        bottom : 80,
        right : 30,
       

    }
});

//make this component available to the app
export default EventTracker;
