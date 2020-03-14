//import liraries
import React, { Component, useState, useEffect,forwardRef,useImperativeHandle } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Image, Alert } from 'react-native';
import Modal from "react-native-modal";
import {colors,fonts} from './../../theme/theme';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker'
import getRealm from './../../services/realm';
import PushNotification  from "react-native-push-notification"

// create a component
const AddEventModal = forwardRef((props,ref) => {
    const {t} = React.useContext(LocalizationContext);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [date,setDate] = useState(new Date());
    const [time,setTime] = useState(new Date());
    const [note,setNote] = useState('');
    const [errorNote,setErrorNote] = useState(false);
    const [id,setId] = useState('');
    const [checkUTC,setCheckUTC] = useState(false);

    const [lists,setLists] = useState({
        t1 : {check : true,id : 1,image : require('./../../../assets/images/events/attack.png')},
        t2 : {check : false,id : 2,image : require('./../../../assets/images/events/babaria.png')},
        t3 : {check : false,id : 3,image : require('./../../../assets/images/events/duaThongDoc.png')},
        t4 : {check : false,id : 4,image : require('./../../../assets/images/events/fram.png')},
        t5 : {check : false,id : 5,image : require('./../../../assets/images/events/lohar.png')},
        t6 : {check : false,id : 6,image : require('./../../../assets/images/events/LostKingDom.png')},
        t7 : {check : false,id : 7,image : require('./../../../assets/images/events/vongQuay.png')}

    });
    useEffect(() =>{
        refreshCom();
    },[isModalVisible])

    const refreshCom = () => {
        console.log(props.item);
        let dateUTC = new Date();
        let getdateUTC = new Date(props.item.date);

       if(props.item.checkUTC) { 
        dateUTC.setDate(getdateUTC.getUTCDate());
        dateUTC.setMonth(getdateUTC.getUTCMonth());
        dateUTC.setFullYear(getdateUTC.getUTCFullYear());
        dateUTC.setHours(getdateUTC.getUTCHours());
        dateUTC.setMinutes(getdateUTC.getUTCMinutes());

        setDate(dateUTC);
        setTime(dateUTC);
       }else {
        setDate(getdateUTC);
        setTime(getdateUTC);
       }
        setErrorNote(false);
        setId(props.item.id);
        setCheckUTC(props.item.checkUTC)
        setNote(props.item.note);
        setLists({
            t1 : {check : props.item .topic == 1 ?true:false,id : 1,image : require('./../../../assets/images/events/attack.png')},
            t2 : {check : props.item .topic == 2 ?true:false,id : 2,image : require('./../../../assets/images/events/babaria.png')},
            t3 : {check : props.item .topic == 3 ?true:false,id : 3,image : require('./../../../assets/images/events/duaThongDoc.png')},
            t4 : {check : props.item .topic == 4 ?true:false,id : 4,image : require('./../../../assets/images/events/fram.png')},
            t5 : {check : props.item .topic == 5 ?true:false,id : 5,image : require('./../../../assets/images/events/lohar.png')},
            t6 : {check : props.item .topic == 6 ?true:false,id : 6,image : require('./../../../assets/images/events/LostKingDom.png')},
            t7 : {check : props.item .topic == 7 ?true:false,id : 7,image : require('./../../../assets/images/events/vongQuay.png')}
    
        })
    }
    const open = () => {        
        setIsModalVisible(true);
    }

    let checkTopice = () => {
        let value = '';
        let arrayS = Object.entries(lists);
        
        for (let index = 0; index < arrayS.length; index++) {
            const element = arrayS[index];

            if(element[1].check) {
                value = element[1].id;
            }
        }

        return value;
    }

    const close = () => {
        setIsModalVisible(false);
    }
    useImperativeHandle(ref,()=>{
        return {
            open: () => {open()},
            close : () => {close()}
        }
    });

   

    const addToDB = async () => {
        if(note) {
                let getDate = new Date(date);
            
            let getTime = new Date(time);
            let hour = 0;
            let min = 0;

            if(checkUTC == true) {
                if(getTime.toString() == 'Invalid Date') {
                    hour = time.substring(0,time.indexOf(':'));
                    min = time.substring(time.indexOf(':')+1,time.length);
                    
                }else {
                    hour = getTime.getHours();
                    min = getTime.getMinutes();
                }
                getDate.setUTCHours(hour);
                getDate.setUTCMinutes(min);
                getDate.setUTCSeconds(0);
            }else {
                if(getTime.toString() == 'Invalid Date') {
                    hour = time.substring(0,time.indexOf(':'));
                    min = time.substring(time.indexOf(':')+1,time.length);
                    
                }else {
                    hour = getTime.getHours();
                    min = getTime.getMinutes();
                }
                getDate.setHours(hour);
                getDate.setMinutes(min);
                getDate.setSeconds(0);
            }
            try {
                const realm = await getRealm();
                
                

                realm.write(() => {
                    realm.create('shedules',{
                        id : id,
                        note : note,
                        topic : Number(checkTopice()),
                        date : getDate.getTime(),
                        checkUTC : checkUTC
                    },'modified');
                    props.getList();
                    props.refreshingDatas();
                    close();
                })
                console.log();
                
               
                    PushNotification.cancelLocalNotifications({id: `${id}`});

                    PushNotification.localNotificationSchedule({
                        id : `${id}`,
                        message: note, 
                        date: getDate // in 60 secs
                    });     
                      
                console.log('Oke');


            } catch (error) {
                console.log(error + 'Oke');
                
            }
        }else {
            setErrorNote(true);
        }

        
        
     
    }

    return (
        <Modal  
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        isVisible={isModalVisible}>
          <View style={styles.container}>
             <TouchableOpacity onPress={close} style={{position : 'absolute', right: 20, top : 20}}> 
                 <Icon name='close-box' size={30} ></Icon>
             </TouchableOpacity>
            <Text style={[styles.textStyle,{marginTop : 25}]}>{t('edit_event').toUpperCase()}</Text>
            <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 30}}>
                <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14}]}>{t('chon_ngay').toUpperCase()}</Text>
                <View style={{flexDirection : 'row', marginTop : 5}}>
                    

                    <TouchableOpacity onPress={() => {setCheckUTC(false)}}  style={{flexDirection : 'row'}}>
                        <View style={{width : 20,height : 20, borderRadius : 10, backgroundColor : !checkUTC ? 'orange' : null,borderWidth : 1,marginRight : 5}}></View>
                        <Text style={[styles.textStyle,{fontFamily : fonts.light,fontSize : 14}]}>{t('time_out_game')}</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setCheckUTC(true)}} style={{flexDirection : 'row', marginLeft : 10}}>
                        <View style={{width : 20,height : 20, borderRadius : 10, backgroundColor : checkUTC ? 'orange' : null,borderWidth : 1,marginRight : 5}}></View>
                        <Text style={[styles.textStyle,{fontFamily : fonts.light,fontSize : 14}]}>{t('time_in_game')}</Text>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 30}}>
            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14}]}>{t('chon_ngay').toUpperCase()}</Text>

            <DatePicker
                style={{width: 250}}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateText : {
                    fontFamily : fonts.light
                },
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36,
                    borderWidth : 0,
                    borderBottomWidth : 1,
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {setDate(date)}}
            />
            </View>

            <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginVertical : 10}}>
            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14}]}>{t('chon_time').toUpperCase()}</Text>

            <DatePicker
                style={{width: 250}}
                date={time}
                mode="time"
                placeholder="select time"
                format="HH:mm"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateText : {
                    fontFamily : fonts.light
                },
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36,
                    borderWidth : 0,
                    borderBottomWidth : 1,
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {setTime(date)}}
            />
             
            </View>

            <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 5}}>
            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14}]}>{t('note').toUpperCase()}</Text>
                <TextInput
                    placeholder={t('note')+'...'}
                    style={{borderBottomWidth : 1, width : '80%', fontFamily : fonts.light, borderBottomColor : errorNote ? 'red' : '#000'}}
                    onChangeText={(e)=>{setNote(e);setErrorNote(false);
                    }}
                    value={note}
                    
                >

                </TextInput>
               {errorNote ? <Text style={{color : 'red', fontFamily : fonts.light}}>{t('vui_long')}</Text> : null}

            </View>

            <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 5}}>
            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14}]}>{t('chon_chu_de').toUpperCase()}</Text>
               <View style={{flexDirection : 'row', width : '90%'}}>
               <TouchableOpacity
                onPress={() => {setLists({t1:{...lists.t1,check : true},t2:{...lists.t2,check : false},t3:{...lists.t3,check : false},t4:{...lists.t4,check : false},t5:{...lists.t5,check : false},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : false}})}}

                style={lists.t1.check ? styles.focusBtn : styles.unFocusBtn}>
                    <Image style={{width : 25, height : 25}} source={lists.t1.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : true},t3:{...lists.t3,check : false},t4:{...lists.t4,check : false},t5:{...lists.t5,check : false},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : false}})}}

                     style={lists.t2.check ? styles.focusBtn : styles.unFocusBtn}>
                    <Image style={{width : 25, height : 25}} source={lists.t2.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : false},t3:{...lists.t3,check : true},t4:{...lists.t4,check : false},t5:{...lists.t5,check : false},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : false}})}}
                    style={lists.t3.check ? styles.focusBtn : styles.unFocusBtn}>
                    <Image style={{width : 25, height : 25}} source={lists.t3.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : false},t3:{...lists.t3,check : false},t4:{...lists.t4,check : true},t5:{...lists.t5,check : false},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : false}})}}

                style={lists.t4.check ? styles.focusBtn : styles.unFocusBtn}>
                    <Image style={{width : 29, height : 25}} source={lists.t4.image}></Image>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : false},t3:{...lists.t3,check : false},t4:{...lists.t4,check : false},t5:{...lists.t5,check : true},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : false}})}}

                style={lists.t5.check ? styles.focusBtn : styles.unFocusBtn}>
                    <Image style={{width : 25, height : 25}} source={lists.t5.image}></Image>
                </TouchableOpacity>
                
               </View>

               <View style={{flexDirection : 'row', width: '90%'}}>
                <TouchableOpacity
                    onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : false},t3:{...lists.t3,check : false},t4:{...lists.t4,check : false},t5:{...lists.t5,check : false},t6:{...lists.t6,check : true},t7 : {...lists.t7,check : false}})}}

                    style={lists.t6.check ? styles.focusBtn : styles.unFocusBtn}>
                        <Image style={{width : 25, height : 25}} source={lists.t6.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {setLists({t1:{...lists.t1,check : false},t2:{...lists.t2,check : false},t3:{...lists.t3,check : false},t4:{...lists.t4,check : false},t5:{...lists.t5,check : false},t6:{...lists.t6,check : false},t7 : {...lists.t7,check : true}})}}
                    style={lists.t7.check ? styles.focusBtn : styles.unFocusBtn}>
                        <Image style={{width : 25, height : 29}} source={lists.t7.image}></Image>
                    </TouchableOpacity>
               </View>
                
            </View>

            <TouchableOpacity onPress={() => {addToDB()}} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : colors.MainColor, width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
            <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>{t('sua_event')}</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => {close()}} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : colors.MainColor, width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
            <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>{t('dong')}</Text>
            </TouchableOpacity>
          </View>
          
       

          
          
        </Modal>
    );
}) 

const styles = StyleSheet.create({
    container : {
        width : "100%", 
        borderRadius : 10 ,
        justifyContent : 'flex-start', 
        alignItems : "center", 
        backgroundColor : '#FFF'
    },
    textStyle : {
        fontFamily : fonts.bold,
        color : '#000',
        fontSize : 17
    },
    focusBtn : {
        width : 50,
        height : 50,
        borderRadius : 25,
        backgroundColor : 'orange',
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 2.5,
    },
    unFocusBtn : {
        width : 50,
        height : 50,
        borderRadius : 25,
        marginHorizontal : 2.5,

        justifyContent : 'center',
        alignItems : 'center'
    }
})


//make this component available to the app
export default AddEventModal;
