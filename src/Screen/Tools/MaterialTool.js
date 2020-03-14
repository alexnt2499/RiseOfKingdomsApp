//import liraries
import React, { Component, useState, useEffect,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Picker,Image } from 'react-native';
import {fonts,colors} from './../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import ImageView from 'react-native-image-view';
import AppText from '../../Components/AppText';
import { TextField } from 'react-native-material-textfield';
import Button from './../../Components/Buttons/Button';
import Stone from './../../utils/dataPicker/stone';
import Gold from './../../utils/dataPicker/gold';
import Food from './../../utils/dataPicker/food';
import Vip from './../../utils/dataPicker/vip';
import gem from '../../utils/dataPicker/gem';
import material from './../../utils/dataPicker/material';
import {LocalizationContext} from './../../../App';

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
// create a component 
const MaterialTool = ({navigation}) => {
    const {t, locate, setLocate} = React.useContext(LocalizationContext);

    const [ListDrop,setListDrop] = useState([ {
        label : 'ADVANCED',
        value : 'nangCao'
    },
    {
        label : 'ELITE',
        value : 'elite'
    },
    {
        label : 'EPIC',
        value : 'epic'
    },
    {
        label : 'LEGENDARY',
        value : 'leng'
    },
   
    ,])
    const [value,setValue] = useState('nangCao');
    const [uri,setUri] = useState();
    const [images,setImages] = useState([]);
    const [isVisible,setIsVisible] = useState(false);
    const [sum,setSum] = useState([
        0,
        0,
        0,
        0
    ]);
    const [listRes, setListRes] = useState({
        res4 : {
            label : '',
            value : 0,
            sl: 0,
            error : false
        }
    })
    const [checkS,setCheckS] = useState(false);
   
    const inputRes4 = useRef();
   

    const renderImage = () => {
        if(value == 'nangCao') {
            return<Image style={{width: 20, height : 20}} source={require('./../../../assets/images/Equipment/Material/advanced-iron-ore.png')}></Image>;
        }
        else if(value == 'elite') {
            return<Image style={{width: 20, height : 20}} source={require('./../../../assets/images/Equipment/Material/iron-ore-elite.png')}></Image>;
        }
        else if(value == 'epic') {
            return<Image style={{width: 20, height : 20}} source={require('./../../../assets/images/Equipment/Material/iron-ore-epic.png')}></Image>;
        }
        else if(value == 'leng') {
            return<Image style={{width: 20, height : 20}} source={require('./../../../assets/images/Equipment/Material/legendary-feather.png')}></Image>;
        }
    }
    
    const chooseImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log("Hello image");
                
              setUri(source);
            }
          });
    }

    

    const refreshRes = () => {
        setListRes({
            res4: {...listRes.res4,sl : 0,value : 0,check : false},
        })
        setSum([0,0,0,0])
        inputRes4.current.setValue();

        

    }

    const checkOut = () => {
        if(!Number.isInteger(listRes.res4.value)) {
            setListRes({...listRes,res4: {...listRes.res4, check : true }})
        }else {
            if(value == 'nangCao') {
                setSum([
                    listRes.res4.value*4,0,0,0
                ])
            }else if(value == 'elite'){
                setSum([
                    listRes.res4.value*4*4,listRes.res4.value*4,0,0
                ])
            }else if(value == 'epic'){
                setSum([
                    listRes.res4.value*4*4*4,listRes.res4.value*4*4,listRes.res4.value*4,0
                ])
            }else if(value == 'leng'){
                setSum([
                    listRes.res4.value*4*4*4*4,listRes.res4.value*4*4*4,listRes.res4.value*4*4,listRes.res4.value*4
                ])
            }
        }
    } 

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const renderResGem = () => {
        if(value == 'gem' && checkS == true) {
            return( <View style={{width : '100%', justifyContent : 'space-around', alignItems : 'center', flexDirection : 'row'}}>
            <View style={{width : '20%'}}>
                <TextField
                    textColor={'#FFF'}
                    tintColor={'#FFF'}
                    baseColor={'#cfd8dc'}
                    label={listRes.res8.label}
                    ref={inputRes8}
                    error={listRes.res8.check ? 'error' : ''}
                    keyboardType={'numeric'}
                    onChangeText={(e) => {setListRes({...listRes,res8: {...listRes.res8,sl : Number(e), check : false }})}}
                ></TextField>
            </View>

            <View style={{width : '20%'}}>
                <TextField
                    textColor={'#FFF'}
                    tintColor={'#FFF'}
                    baseColor={'#cfd8dc'}
                    label={listRes.res9.label}
                    ref={inputRes9}
                    error={listRes.res9.check ? 'error' : ''}
                    keyboardType={'numeric'}
                    onChangeText={(e) => {setListRes({...listRes,res9: {...listRes.res9,sl : Number(e), check : false }})}}
                ></TextField>
            </View>
        </View>)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardHeader}>
                <View style={{height : 50}}>
                    <TouchableOpacity
                        onPress={() => {navigation.goBack()}}
                    >
                        <Icon name='ios-arrow-back' size={30} color='#FFF' style={{top : 10, left : 20}}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={{width : '100%', height : 170}}>
                    <TouchableOpacity onPress={() => {
                        if(uri) {setIsVisible(true);setImages([{source : {uri : uri.uri}}]);}
                    }}>
                        {uri ? <Image resizeMode='center' style={{width : '100%', height : 170}} source={uri}></Image> : 
                            <View style={{width : '100%', height : '100%', justifyContent : 'center', alignItems : 'center'}}>
                                <AppText i18nKey={'vui_long_chon_anh'} style={{fontFamily : fonts.light, color : '#FFF',fontSize : 13}}></AppText>
                            </View>}
                    </TouchableOpacity>
                </View>

                <View style={{width : '100%', height : 50, flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                    <View style={{flexDirection : 'row',justifyContent : 'flex-start'}}>
                       
                    </View>
                    <View style={{flexDirection : 'row', marginRight : 30}}>
                        <TouchableOpacity
                            style={{marginRight : 15}}
                                onPress={() => {chooseImage()}}
                            >
                                <IconM name='camera-image' size={30} color='#FFF'></IconM>
                        </TouchableOpacity>

                        <TouchableOpacity
                                onPress={() => {setImages(0);setUri();}}
                            >
                                <IconM name='refresh' size={30} color='#FFF'></IconM>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/*Phần tính toán */}
            

            <View style={{width : '100%', justifyContent : 'space-around', alignItems : 'center', flexDirection : 'row'}}>
                

            <View style={{flexDirection : 'row',justifyContent : 'flex-start', alignItems : 'center'}}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={value}
                            style={{height: 50, width: 200, marginLeft : 10, color : '#FFF'}}
                            onValueChange={(itemValue, itemIndex) =>{
                                
                                setValue(itemValue);
                                setSum([0,0,0,0]);
                                setListRes({
                                    res4: {...listRes.res4,sl : 0,value : 0,check : false},
                                })
                                inputRes4.current.setValue('');

                            } }>
                                {ListDrop.map((value) => {
                                    return (<Picker.Item label={value.label} value={value.value} />)
                                })}
                        </Picker>
                    </View>
                    <View style={{marginTop : 20, marginHorizontal : 5}}>
                        {renderImage()}
                    </View>

                <View style={{width : '20%'}}>

                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={t('so_luong')}
                        ref={inputRes4}
                        error={listRes.res4.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res4: {...listRes.res4,value : Number(e), check : false }})}}
                    ></TextField>
                </View>
            </View>

           

            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginTop : 20, alignItems : 'center'}}>
                    <AppText i18nKey='tongNguyenLieu' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>
                </View>
            
            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'space-around', marginTop : 20, alignItems : 'center'}}>
               <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Image style={{width: 50, height : 50}} source={require('./../../../assets/images/Equipment/Material/iron-ore-normal.png')}></Image>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF', marginLeft : 10}}>{sum[0]}</Text>
               </View>
               <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Image style={{width: 50, height : 50}} source={require('./../../../assets/images/Equipment/Material/advanced-iron-ore.png')}></Image>
                <Text style={{fontFamily : fonts.regular, color : '#FFF', marginLeft : 10}}>{sum[1]}</Text>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Image style={{width: 50, height : 50}} source={require('./../../../assets/images/Equipment/Material/iron-ore-elite.png')}></Image>
                <Text style={{fontFamily : fonts.regular, color : '#FFF', marginLeft : 10}}>{sum[2]}</Text>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Image style={{width: 50, height : 50}} source={require('./../../../assets/images/Equipment/Material/iron-ore-epic.png')}></Image>
                <Text style={{fontFamily : fonts.regular, color : '#FFF', marginLeft : 10}}>{sum[3]}</Text>
                </View>
            </View>

            <View style={{width : '100%', flexDirection :'row', justifyContent : 'center', marginVertical : 30, alignItems : 'center'}} >
                <View style={{width : '40%'}}>
                    <Button text={'reset'} onclick={() => {refreshRes()}} icon={false}></Button>
                </View>
                <View style={{width : '40%', justifyContent : 'center', alignItems : 'center'}}>
                    <Button text={'tinh'} onclick={() => {checkOut()}} icon={false}></Button>
                </View>
            </View>

            <ImageView
                images={images}
                onClose={() => {setIsVisible(false)}}
                imageIndex={0}
                isVisible={isVisible}
            />
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MainColor,
    },
    cardHeader : {
        width : '100%',
        height : 270,
        position : 'relative',
        backgroundColor : colors.CardColor
    }
});

//make this component available to the app
export default MaterialTool;
