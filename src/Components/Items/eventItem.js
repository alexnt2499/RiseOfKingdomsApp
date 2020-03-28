//import liraries
import React, { useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,Alert } from 'react-native';
import {colors, fonts} from './../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LocalizationContext} from './../../../App';
import moment from 'moment';
import ConfirmModal from './../Modal/ConfirmModal';

const ListTopic = {
    t1 : {check : true,id : 1,image : require('./../../../assets/images/events/attack.png')},
    t2 : {check : false,id : 2,image : require('./../../../assets/images/events/babaria.png')},
    t3 : {check : false,id : 3,image : require('./../../../assets/images/events/duaThongDoc.png')},
    t4 : {check : false,id : 4,image : require('./../../../assets/images/events/fram.png')},
    t5 : {check : false,id : 5,image : require('./../../../assets/images/events/lohar.png')},
    t6 : {check : false,id : 6,image : require('./../../../assets/images/events/LostKingDom.png')},
    t7 : {check : false,id : 7,image : require('./../../../assets/images/events/vongQuay.png')}

};
// create a component
const EventItems = ({item,listRemove}) => {
    const [source,setSource] = useState();
    const [width,setWidth] = useState(30);
    const [height,setHeight] = useState(30);
    const [dateUTCstring,setDateUTCstring] = useState();
    const {t} = React.useContext(LocalizationContext);
    useEffect(()=> {
        getImage();
        refresh();
    },[item]);

    const getImage = () =>{ 
        switch(item.topic) {
            case 1 : setSource(ListTopic.t1.image); break;
            case 2 : setSource(ListTopic.t2.image); break;
            case 3 : setSource(ListTopic.t3.image); break;
            case 4 : setSource(ListTopic.t4.image); setWidth(40); break;
            case 5 : setSource(ListTopic.t5.image); break;
            case 6 : setSource(ListTopic.t6.image);  break;
            case 7 : setSource(ListTopic.t7.image); setHeight(40); break;

        }
    }

    const refresh = () => {

        let dateUTC = new Date(item.date);

        let dateUTCs = t('day')+' '+ dateUTC.getUTCDate() + '-' + (dateUTC.getUTCMonth()+1) + '-'+ dateUTC.getUTCFullYear()+' ' +t('time') + ' ' +dateUTC.getUTCHours() + ':' + dateUTC.getUTCMinutes();
        console.log(dateUTCs);

        setDateUTCstring(dateUTCs)
    }
  
   const deleteEvent = () => {
        ConfirmModalRef.current.open();
   }
   const ConfirmModalRef = useRef();


   
    return (
        <View style={styles.container}>
            <View style={[styles.containerIn, {flexDirection :'row'}]}>
                <Image style={{width : width, height : height, marginLeft : 8, marginTop : 13}} source={source}></Image>
                <View style={{width :'65%', marginLeft : 30, marginTop : 10, marginBottom : 10}}>
                    <View style={{flexDirection : 'row'}}>
                        <Text style={[styles.textStyle,{fontFamily : fonts.bold, color : 'orange'}]}>{t('day')} : </Text> 
                        <Text style={[styles.textStyle,{}]}>{moment(item.date).format('DD-MM-YYYY')}</Text>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style={[styles.textStyle,{fontFamily : fonts.bold, color : 'orange'}]}>{t('time')} : </Text> 
                        <Text style={[styles.textStyle,{}]}>{moment(item.date).format('HH:mm')}</Text>
                    </View>
                    <View style={{flexDirection : 'row', width:'80%'}}>
                        <Text style={[styles.textStyle,{fontFamily : fonts.bold, color : 'orange'}]}>{t('note')} : </Text> 
                        <Text style={[styles.textStyle,{}]}>{item.note}</Text>
                    </View>
                    <View style={{flexDirection : 'row'}}>
                        <Text style={[styles.textStyle,{fontFamily : fonts.bold, color : 'orange'}]}>{t('thoi_gian_tuong_ung')} : </Text> 
                       
                    </View>
                    <Text style={[styles.textStyle,{}]}>{dateUTCstring}</Text>


                </View>

                <View style={{position : 'absolute', top : 8, right : 8, width : 50, height : 50, paddingLeft : 20}}>
                    <TouchableOpacity onPress={() => {deleteEvent()}}>
                        <Icon name='delete-forever' size={25} color='#FFF'></Icon>
                    </TouchableOpacity>

                   

                </View>
                <ConfirmModal
                    ref={ConfirmModalRef}
                    title={t('xac_nhan')}
                    body={t('ban_co_muon_xoa')}
                    onConfirm={() => {listRemove()}}
                ></ConfirmModal>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position : 'relative'
    },
    containerIn: {
     
        backgroundColor: colors.CardColor,
        marginVertical : 10,
        
        width : '95%',
        borderRadius : 10
    },
    textStyle : {
        fontFamily : fonts.light,
        color : '#FFF'
    }
});

//make this component available to the app
export default EventItems;
