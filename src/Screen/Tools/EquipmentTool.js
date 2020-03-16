//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,TouchableOpacity,Picker,SafeAreaView } from 'react-native';
import {colors,fonts} from './../../theme/theme';
import Header from './../../Components/Header/Header';
import {LocalizationContext} from './../../../App';
import ListEquipmentEn from './../../utils/langDrop/equipmentEn';
import ListEquipmentVn from './../../utils/langDrop/equipmentVi';
import EquipmentVi from './../../database/Equipment';
import EquipmentEng from './../../database/EquipmentEng';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from "react-native-modal";
import BannerAds from './../../Components/AdsMob/BannerAds';
// create a component
const EquipmentTool = ({navigation}) => {
    const {t,locale} = React.useContext(LocalizationContext);
    const [listDrop,setListDrop] = useState(ListEquipmentEn);
    const [value,setValue] = useState('VuKhi');
    const [ListValue,setListValue] = useState([]);
    const [isVisible,setIsVisible] = useState(false);
    const [toString,setToString] = useState('');
    const [dataTotal,setDataTotal] = useState({
        tanCongKyBinh : 0,
        phongThuKyBinh : 0,
        sucKhoeKyBinh : 0,
        tanCongCungThu : 0,
        phongThuCungThu : 0,
        sucKhoeCungThu : 0,
        tanCongBoBinh : 0,
        phongThuBoBinh : 0,
        sucKhoeBoBinh : 0,
        tocDoDieuHanh : 0,
        tocDoThuGom : 0,
        kinhNghiemChiHuy : 0,
        satThuongManRo : 0
    })

    const close = () => {
        setIsVisible(false);
    }

    const open = () => {
        setIsVisible(true);
    }

    const [listUp,setListUp] = useState({
        Giap : {},
        Giay : {},
        VuKhi : {},
        Gang : {},
        TrangSuc : {},
        Quan : {},
        Mu : {}
    })

    useEffect(() => {
        getData()
        renderEquipment(value)
    },[])


    const getData = async () => {
        let lang = await AsyncStorage.getItem('@lang');
        if(lang == 'vi') {
            setListDrop(ListEquipmentVn)
        }else {
            setListDrop(ListEquipmentEn)
        }
    }

    const putItem = (item) => {
        if(value == 'VuKhi') setListUp({...listUp,VuKhi : item});
        if(value == 'Giay') setListUp({...listUp,Giay : item});
        if(value == 'Giap') setListUp({...listUp,Giap : item});
        if(value == 'Gang') setListUp({...listUp,Gang : item});
        if(value == 'Mu') setListUp({...listUp,Mu : item});
        if(value == 'TrangSuc') setListUp({...listUp,TrangSuc : item});
        if(value == 'Quan') setListUp({...listUp,Quan : item});



    }

    const renderEquipment = async (valuC) => {
        
        if(locale) {
            if(locale == 'vi') {
                for (let [key, value] of Object.entries(EquipmentVi)) {
                    if(key == valuC) {
                        setListValue(value)
                    }
                }
            }
            else {
                for (let [key, value] of Object.entries(EquipmentEng)) {
                    if(key == valuC) {
                        setListValue(value)
                    }
                }
            }
        } 
    }


    const refreshMethod = () => {
        setListUp({
            Giap : {},
            Giay : {},
            VuKhi : {},
            Gang : {},
            TrangSuc : {},
            Quan : {},
            Mu : {}
        })
    }

    const getToString = () => {
        let tanCongKyBinh = (listUp.Gang.tanCongKyBinh ? listUp.Gang.tanCongKyBinh : 0) +
        (listUp.Giap.tanCongKyBinh ? listUp.Giap.tanCongKyBinh : 0) + (listUp.VuKhi.tanCongKyBinh ? listUp.VuKhi.tanCongKyBinh : 0) +
        (listUp.Giay.tanCongKyBinh ? listUp.Giay.tanCongKyBinh : 0) + (listUp.Mu.tanCongKyBinh ? listUp.Mu.tanCongKyBinh : 0)+
        (listUp.Quan.tanCongKyBinh ? listUp.Quan.tanCongKyBinh : 0) + (listUp.TrangSuc.tanCongKyBinh ? listUp.TrangSuc.tanCongKyBinh : 0);

        let phongThuKyBinh = (listUp.Gang.phongThuKyBinh ? listUp.Gang.phongThuKyBinh : 0) +
        (listUp.Giap.phongThuKyBinh ? listUp.Giap.phongThuKyBinh : 0) + (listUp.VuKhi.phongThuKyBinh ? listUp.VuKhi.phongThuKyBinh : 0) +
        (listUp.Giay.phongThuKyBinh ? listUp.Giay.phongThuKyBinh : 0) + (listUp.Mu.phongThuKyBinh ? listUp.Mu.phongThuKyBinh : 0)+
        (listUp.Quan.phongThuKyBinh ? listUp.Quan.phongThuKyBinh : 0) + (listUp.TrangSuc.phongThuKyBinh ? listUp.TrangSuc.phongThuKyBinh : 0);

        let sucKhoeKyBinh = (listUp.Gang.sucKhoeKyBinh ? listUp.Gang.sucKhoeKyBinh : 0) +
        (listUp.Giap.sucKhoeKyBinh ? listUp.Giap.sucKhoeKyBinh : 0) + (listUp.VuKhi.sucKhoeKyBinh ? listUp.VuKhi.sucKhoeKyBinh : 0) +
        (listUp.Giay.sucKhoeKyBinh ? listUp.Giay.sucKhoeKyBinh : 0) + (listUp.Mu.sucKhoeKyBinh ? listUp.Mu.sucKhoeKyBinh : 0)+
        (listUp.Quan.sucKhoeKyBinh ? listUp.Quan.sucKhoeKyBinh : 0) + (listUp.TrangSuc.sucKhoeKyBinh ? listUp.TrangSuc.sucKhoeKyBinh : 0);
        

        let tanCongBoBinh = (listUp.Gang.tanCongBoBinh ? listUp.Gang.tanCongBoBinh : 0) +
        (listUp.Giap.tanCongBoBinh ? listUp.Giap.tanCongBoBinh : 0) + (listUp.VuKhi.tanCongBoBinh ? listUp.VuKhi.tanCongBoBinh : 0) +
        (listUp.Giay.tanCongBoBinh ? listUp.Giay.tanCongBoBinh : 0) + (listUp.Mu.tanCongBoBinh ? listUp.Mu.tanCongBoBinh : 0)+
        (listUp.Quan.tanCongBoBinh ? listUp.Quan.tanCongBoBinh : 0) + (listUp.TrangSuc.tanCongBoBinh ? listUp.TrangSuc.tanCongBoBinh : 0);

        let phongThuBoBinh = (listUp.Gang.phongThuBoBinh ? listUp.Gang.phongThuBoBinh : 0) +
        (listUp.Giap.phongThuBoBinh ? listUp.Giap.phongThuBoBinh : 0) + (listUp.VuKhi.phongThuBoBinh ? listUp.VuKhi.phongThuBoBinh : 0) +
        (listUp.Giay.phongThuBoBinh ? listUp.Giay.phongThuBoBinh : 0) + (listUp.Mu.phongThuBoBinh ? listUp.Mu.phongThuBoBinh : 0)+
        (listUp.Quan.phongThuBoBinh ? listUp.Quan.phongThuBoBinh : 0) + (listUp.TrangSuc.phongThuBoBinh ? listUp.TrangSuc.phongThuBoBinh : 0);

        let sucKhoeBoBinh = (listUp.Gang.sucKhoeBoBinh ? listUp.Gang.sucKhoeBoBinh : 0) +
        (listUp.Giap.sucKhoeBoBinh ? listUp.Giap.sucKhoeBoBinh : 0) + (listUp.VuKhi.sucKhoeBoBinh ? listUp.VuKhi.sucKhoeBoBinh : 0) +
        (listUp.Giay.sucKhoeBoBinh ? listUp.Giay.sucKhoeBoBinh : 0) + (listUp.Mu.sucKhoeBoBinh ? listUp.Mu.sucKhoeBoBinh : 0)+
        (listUp.Quan.sucKhoeBoBinh ? listUp.Quan.sucKhoeBoBinh : 0) + (listUp.TrangSuc.sucKhoeBoBinh ? listUp.TrangSuc.sucKhoeBoBinh : 0);

        let tanCongCungThu = (listUp.Gang.tanCongCungThu ? listUp.Gang.tanCongCungThu : 0) +
        (listUp.Giap.tanCongCungThu ? listUp.Giap.tanCongCungThu : 0) + (listUp.VuKhi.tanCongCungThu ? listUp.VuKhi.tanCongCungThu : 0) +
        (listUp.Giay.tanCongCungThu ? listUp.Giay.tanCongCungThu : 0) + (listUp.Mu.tanCongCungThu ? listUp.Mu.tanCongCungThu : 0)+
        (listUp.Quan.tanCongCungThu ? listUp.Quan.tanCongCungThu : 0) + (listUp.TrangSuc.tanCongCungThu ? listUp.TrangSuc.tanCongCungThu : 0);

        let phongThuCungThu = (listUp.Gang.phongThuCungThu ? listUp.Gang.phongThuCungThu : 0) +
        (listUp.Giap.phongThuCungThu ? listUp.Giap.phongThuCungThu : 0) + (listUp.VuKhi.phongThuCungThu ? listUp.VuKhi.phongThuCungThu : 0) +
        (listUp.Giay.phongThuCungThu ? listUp.Giay.phongThuCungThu : 0) + (listUp.Mu.phongThuCungThu ? listUp.Mu.phongThuCungThu : 0)+
        (listUp.Quan.phongThuCungThu ? listUp.Quan.phongThuCungThu : 0) + (listUp.TrangSuc.phongThuCungThu ? listUp.TrangSuc.phongThuCungThu : 0);

        let sucKhoeCungThu = (listUp.Gang.sucKhoeBoBinh ? listUp.Gang.sucKhoeBoBinh : 0) +
        (listUp.Giap.sucKhoeCungThu ? listUp.Giap.sucKhoeCungThu : 0) + (listUp.VuKhi.sucKhoeCungThu ? listUp.VuKhi.sucKhoeCungThu : 0) +
        (listUp.Giay.sucKhoeCungThu ? listUp.Giay.sucKhoeCungThu : 0) + (listUp.Mu.sucKhoeCungThu ? listUp.Mu.sucKhoeCungThu : 0)+
        (listUp.Quan.sucKhoeCungThu ? listUp.Quan.sucKhoeCungThu : 0) + (listUp.TrangSuc.sucKhoeCungThu ? listUp.TrangSuc.sucKhoeCungThu : 0);

        let tocDoDieuHanh = (listUp.Gang.tocDoDieuHanh ? listUp.Gang.tocDoDieuHanh : 0) +
        (listUp.Giap.tocDoDieuHanh ? listUp.Giap.tocDoDieuHanh : 0) + (listUp.VuKhi.tocDoDieuHanh ? listUp.VuKhi.tocDoDieuHanh : 0) +
        (listUp.Giay.tocDoDieuHanh ? listUp.Giay.tocDoDieuHanh : 0) + (listUp.Mu.tocDoDieuHanh ? listUp.Mu.tocDoDieuHanh : 0)+
        (listUp.Quan.tocDoDieuHanh ? listUp.Quan.tocDoDieuHanh : 0) + (listUp.TrangSuc.tocDoDieuHanh ? listUp.TrangSuc.tocDoDieuHanh : 0);

        let tocDoThuGom = (listUp.Gang.tocDoThuGom ? listUp.Gang.tocDoThuGom : 0) +
        (listUp.Giap.tocDoThuGom ? listUp.Giap.tocDoThuGom : 0) + (listUp.VuKhi.tocDoThuGom ? listUp.VuKhi.tocDoThuGom : 0) +
        (listUp.Giay.tocDoThuGom ? listUp.Giay.tocDoThuGom : 0) + (listUp.Mu.tocDoThuGom ? listUp.Mu.tocDoThuGom : 0)+
        (listUp.Quan.tocDoThuGom ? listUp.Quan.tocDoThuGom : 0) + (listUp.TrangSuc.tocDoThuGom ? listUp.TrangSuc.tocDoThuGom : 0);

        let satThuongManRo = (listUp.Gang.satThuongManRo ? listUp.Gang.satThuongManRo : 0) +
        (listUp.Giap.satThuongManRo ? listUp.Giap.satThuongManRo : 0) + (listUp.VuKhi.satThuongManRo ? listUp.VuKhi.satThuongManRo : 0) +
        (listUp.Giay.satThuongManRo ? listUp.Giay.satThuongManRo : 0) + (listUp.Mu.satThuongManRo ? listUp.Mu.satThuongManRo : 0)+
        (listUp.Quan.satThuongManRo ? listUp.Quan.satThuongManRo : 0) + (listUp.TrangSuc.satThuongManRo ? listUp.TrangSuc.satThuongManRo : 0);

        let kinhNghiemChiHuy = (listUp.Gang.kinhNghiemChiHuy ? listUp.Gang.kinhNghiemChiHuy : 0) +
        (listUp.Giap.kinhNghiemChiHuy ? listUp.Giap.kinhNghiemChiHuy : 0) + (listUp.VuKhi.kinhNghiemChiHuy ? listUp.VuKhi.kinhNghiemChiHuy : 0) +
        (listUp.Giay.kinhNghiemChiHuy ? listUp.Giay.kinhNghiemChiHuy : 0) + (listUp.Mu.kinhNghiemChiHuy ? listUp.Mu.kinhNghiemChiHuy : 0)+
        (listUp.Quan.kinhNghiemChiHuy ? listUp.Quan.kinhNghiemChiHuy : 0) + (listUp.TrangSuc.kinhNghiemChiHuy ? listUp.TrangSuc.kinhNghiemChiHuy : 0);
        
        
        
       setToString({
            tanCongKyBinh ,
            phongThuKyBinh ,
            sucKhoeKyBinh ,
            tanCongCungThu ,
            phongThuCungThu ,
            sucKhoeCungThu ,
            tanCongBoBinh ,
            phongThuBoBinh ,
            sucKhoeBoBinh ,
            tocDoDieuHanh ,
            tocDoThuGom ,
            kinhNghiemChiHuy,
            satThuongManRo
       })

       console.log(toString);
       
        
        
        



        
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Header checkBack={true} checkEquiq={true} title={'build_trang_bi'} navigation={navigation}></Header>

            <View style={{flexDirection : 'row', justifyContent : 'space-around', marginTop : 10}}>
                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                       <Image style={styles.imageStyle} source={listUp.VuKhi.image}></Image>
                    </View>
                    <Text style={[styles.textStyle]}>{t('vu_khi')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                         <Image style={styles.imageStyle} source={listUp.Giap.image}></Image> 
                    </View>
                    <Text style={[styles.textStyle]}>{t('giap')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                       <Image style={styles.imageStyle} source={listUp.Quan.image}></Image>
                    </View>
                    <Text style={[styles.textStyle]}>{t('quan')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                       <Image style={styles.imageStyle} source={listUp.Mu.image}></Image>
                    </View>
                    <Text style={[styles.textStyle]}>{t('mu')}</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection : 'row', justifyContent : 'space-around', marginTop : 5}}>
                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                       <Image style={styles.imageStyle} source={listUp.Giay.image}></Image> 
                    </View>
                    <Text style={[styles.textStyle]}>{t('giay')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                      <Image style={styles.imageStyle} source={listUp.Gang.image}></Image> 
                    </View>
                    <Text style={[styles.textStyle]}>{t('gang')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.box2, {marginHorizontal : 5}]}>
                    <View style={styles.box}>
                       <Image style={styles.imageStyle} source={listUp.TrangSuc.image}></Image> 
                    </View>
                    <Text style={[styles.textStyle]}>{t('trang_suc')}</Text>
                </TouchableOpacity>

              
            </View>

            <View style={{flexDirection : 'row', marginTop: 5, justifyContent : 'center', alignItems : 'center'}}>
                <Picker
                    mode={'dropdown'}
                    selectedValue={value}
                    style={{height: 50, width: 150, marginLeft : 10, color : '#FFF'}}
                    onValueChange={(itemValue, itemIndex) =>{
                        setValue(itemValue); 
                        renderEquipment(itemValue);
                    } }>
                        {listDrop.map((value) => {
                            return (<Picker.Item label={value.label} value={value.value} />)
                        })}
                </Picker>

                <TouchableOpacity onPress={() => {refreshMethod()}}><Icon name='refresh' size={30} color='#FFF'></Icon></TouchableOpacity>

                    <TouchableOpacity onPress={() => {getToString();open()}} style={{flexDirection : 'row',marginLeft : 25}}><Icon name='eye' size={20} color='#FFF'></Icon><Text style={[styles.textStyle,{fontFamily : fonts.light, marginLeft : 5}]}>{t('xem_full')}</Text></TouchableOpacity>

             
            </View>

            <ScrollView>
            <View style={{width : '100%', justifyContent : 'center', alignItems :'center'}}>
                {ListValue.map((value,index) => {
                    
                  
                        return (
                       
                            <TouchableOpacity onPress={() => {putItem(value)}} style={styles.containerInner}>
                                <View style={{width : '100%', height:131, flexDirection : 'row'}}>
                                    <View style={{width : '25%', justifyContent :'center',alignItems :'center'}}>
                                        <Image style={{width : 66, height : 65}} source={value.image}></Image>
                                    </View>
                                    <View style={{width : '80%', paddingVertical : 20, paddingLeft: 10}}>
                                        <Text style={{fontSize : 15, fontFamily : fonts.bold,color : 'orange'}}>{value.name}</Text>
                                        <Text style={{fontSize : 13, fontFamily : fonts.light,color : '#FFF'}}>{value.update}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    
                    
                })}

            </View>
            </ScrollView>
            <BannerAds></BannerAds>

            <Modal
                 animationIn={'zoomInDown'}
                 animationOut={'zoomOutUp'}
                 isVisible={isVisible}
            >   
                <View style={styles.containerModal}>

                <TouchableOpacity onPress={close} style={{position : 'absolute', right: 20, top : 20}}> 
                    <Icon name='close-box' size={30} ></Icon>
                </TouchableOpacity>
                <Text style={[styles.textStyle,{marginTop : 25,color : '#000' , fontSize : 18}]}>{t('xem_full').toUpperCase()}</Text>

               {toString.tanCongKyBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('tanCongKyBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.tanCongKyBinh}%</Text>

                </View> : null}

                {toString.phongThuKyBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('phongThuKyBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.phongThuKyBinh}%</Text>

                </View> : null}

                {toString.sucKhoeKyBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('sucKhoeKyBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.sucKhoeKyBinh}%</Text>

                </View> : null}

                {toString.tanCongBoBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('tanCongBoBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000', fontSize : 13}]}>+{toString.tanCongBoBinh}%</Text>

                </View> : null}

                {toString.phongThuBoBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000', fontSize : 13}]}>{t('phongThuBoBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.phongThuBoBinh}%</Text>

                </View> : null}

                {toString.sucKhoeBoBinh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('sucKhoeBoBinh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000', fontSize : 13}]}>+{toString.sucKhoeBoBinh}%</Text>

                </View> : null}

                {toString.tanCongCungThu != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('tanCongCungThu').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.tanCongCungThu}%</Text>

                </View> : null}

                {toString.phongThuCungThu != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('phongThuCungThu').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.phongThuCungThu}%</Text>

                </View> : null}

                {toString.sucKhoeCungThu != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('sucKhoeCungThu').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.sucKhoeCungThu}%</Text>

                </View> : null}

                {toString.tocDoThuGom != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000', fontSize : 13}]}>{t('tocDoThuGom').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.tocDoThuGom}%</Text>

                </View> : null}

                {toString.tocDoDieuHanh != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('tocDoDieuHanh').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.tocDoDieuHanh}%</Text>

                </View> : null}

                {toString.satThuongManRo != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('satThuongManRo').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.satThuongManRo}%</Text>

                </View> : null}

                {toString.kinhNghiemChiHuy != 0 ?  <View style={styles.contentText}>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>{t('kinhNghiemChiHuy').toUpperCase()} : </Text>
                    <Text style={[styles.textStyle,{color : '#000' , fontSize : 13}]}>+{toString.kinhNghiemChiHuy}%</Text>

                </View> : null}



                

                

                <TouchableOpacity onPress={() => {close()}} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : colors.MainColor, width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
                    <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>{t('dong')}</Text>
                </TouchableOpacity>
                </View>

            </Modal>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        backgroundColor: colors.MainColor,
    },
    textStyle : {
        fontFamily : fonts.regular,
        color : '#FFF'
    },
    box : {
        width : 60,
        height : 60, 
        borderRadius : 5,
        backgroundColor : colors.CardColor
    },
    box2 : {
        justifyContent : 'center',
        alignItems : 'center'
    },
    containerInner : {
        width : '95%',  
        height : 131,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        marginVertical : 10
        
    },
    imageStyle :{
        width : 60,
        height : 60, 
    },
    containerModal : {
        width : "100%", 
        borderRadius : 10 ,
        justifyContent : 'flex-start', 
        alignItems : "center", 
        backgroundColor : '#FFF',
        height : 400
    },
    contentText : {
        width : '100%', justifyContent : 
        'flex-start',flexDirection : 'row',
        paddingHorizontal : 20,
        marginTop : 10,
    }
});

//make this component available to the app
export default EquipmentTool;
