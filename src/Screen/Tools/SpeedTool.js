//import liraries
import React, { Component, useState, useEffect,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, SafeAreaView,Image } from 'react-native';
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
import speed from './../../utils/dataPicker/speed';
import BannerAds from './../../Components/AdsMob/BannerAds';

const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
// create a component
const SpeedTool = ({navigation}) => {
  
    const [value,setValue] = useState('luongThuc');
    const [uri,setUri] = useState();
    const [images,setImages] = useState([]);
    const [isVisible,setIsVisible] = useState(false);
    const [sum,setSum] = useState(0);
    const [listRes, setListRes] = useState(speed)
    const [checkS,setCheckS] = useState(false);
    const [fullDay,setfullDay] = useState({
        day : 0,
        hour: 0,
        min : 0
    });

    const inputRes1 = useRef();
    const inputRes2 = useRef();
    const inputRes3 = useRef();
    const inputRes4 = useRef();
    const inputRes5 = useRef();
    const inputRes6 = useRef();
    const inputRes7 = useRef();
    const inputRes8 = useRef();
    const inputRes9 = useRef();
    const inputRes10 = useRef();
    const inputRes11 = useRef();
    const inputRes12 = useRef();
    const inputRes13 = useRef();

    const getDayHourMin = (s) => {
        let day = Math.floor(s/1440);
        let hour = Math.floor((s%1440)/60);
        let min = s-(day*1440 + hour*60);
        
       return {
           day,
           hour,
           min
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
        setSum(0);
        setListRes({
            res1: {...listRes.res1,sl : 0,check : false},
            res2: {...listRes.res2,sl : 0,check : false},
            res3: {...listRes.res3,sl : 0,check : false},
            res4: {...listRes.res4,sl : 0,check : false},
            res5: {...listRes.res5,sl : 0,check : false},
            res6: {...listRes.res6,sl : 0,check : false},
            res7: {...listRes.res7,sl : 0,check : false},
            res8: {...listRes.res8,sl : 0,check : false},
            res9: {...listRes.res9,sl : 0,check : false},
            res10: {...listRes.res10,sl : 0,check : false},
            res11: {...listRes.res11,sl : 0,check : false},
            res12: {...listRes.res12,sl : 0,check : false},
            res13: {...listRes.res13,sl : 0,check : false}
        })
        inputRes1.current.setValue();
        inputRes2.current.setValue();
        inputRes3.current.setValue();
        inputRes4.current.setValue();
        inputRes5.current.setValue();
        inputRes6.current.setValue();
        inputRes7.current.setValue();
        inputRes9.current.setValue();
        inputRes8.current.setValue();
        inputRes10.current.setValue();
        inputRes11.current.setValue();
        inputRes12.current.setValue();
        inputRes13.current.setValue();


        

    }

    const checkOut = () => {
        if(!Number.isInteger(listRes.res1.sl)) {
            setListRes({...listRes,res1: {...listRes.res1, check : true }})
        }else if(!Number.isInteger(listRes.res2.sl)) {
            setListRes({...listRes,res2: {...listRes.res2, check : true }})
        }else if(!Number.isInteger(listRes.res3.sl)) {
            console.log('Hello');

            setListRes({...listRes,res3: {...listRes.res3, check : true }})
        }else if(!Number.isInteger(listRes.res4.sl)) {
            setListRes({...listRes,res4: {...listRes.res4, check : true }})
        }else if(!Number.isInteger(listRes.res5.sl)) {
            setListRes({...listRes,res5: {...listRes.res5, check : true }})
        }else if(!Number.isInteger(listRes.res6.sl)) {
            setListRes({...listRes,res6: {...listRes.res6, check : true }})
        }else if(!Number.isInteger(listRes.res7.sl)) {
            setListRes({...listRes,res7: {...listRes.res7, check : true }})
        }else if(!Number.isInteger(listRes.res8.sl)) {
            setListRes({...listRes,res8: {...listRes.res8, check : true }})
        }else if(!Number.isInteger(listRes.res9.sl)) {
            setListRes({...listRes,res9: {...listRes.res9, check : true }})
        }else if(!Number.isInteger(listRes.res10.sl)) {
            setListRes({...listRes,res10: {...listRes.res10, check : true }})
        }else if(!Number.isInteger(listRes.res11.sl)) {
            setListRes({...listRes,res11: {...listRes.res11, check : true }})
        }else if(!Number.isInteger(listRes.res12.sl)) {
            setListRes({...listRes,res12: {...listRes.res12, check : true }})
        }else if(!Number.isInteger(listRes.res13.sl)) {
            setListRes({...listRes,res13: {...listRes.res13, check : true }})
        }else {
            let sums = 0;
            let arrayNew = Object.entries(listRes);
            console.log(arrayNew);
            
            for (let index = 0; index < arrayNew.length; index++) {
                const element = arrayNew[index];
                sums += element[1].sl*element[1].value;
            }     
            setfullDay(getDayHourMin(sums))
            setSum(formatNumber(sums));                   
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
        <SafeAreaView style={styles.container}>
        <ScrollView >
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

                <View style={{width : '100%', height : 50, flexDirection : 'row', justifyContent : 'flex-end', alignItems : 'center'}}>
                   
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
                

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res1.label}
                        ref={inputRes1}
                        error={listRes.res1.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res1: {...listRes.res1,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res2.label}
                        error={listRes.res2.check ? 'error' : ''}
                        ref={inputRes2}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res2: {...listRes.res2,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res3.label}
                        ref={inputRes3}
                        error={listRes.res3.check ? 'error' : ''}

                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res3: {...listRes.res3,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res4.label}
                        ref={inputRes4}
                        error={listRes.res4.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res4: {...listRes.res4,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>
            </View>

            <View style={{width : '100%', justifyContent : 'space-around', alignItems : 'center', flexDirection : 'row'}}>
                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res5.label}
                        ref={inputRes5}
                        error={listRes.res5.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res5: {...listRes.res5,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res6.label}
                        ref={inputRes6}
                        error={listRes.res6.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res6: {...listRes.res6,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res7.label}
                        ref={inputRes7}
                        keyboardType={'numeric'}
                        error={listRes.res7.check ? 'error' : ''}
                        onChangeText={(e) => {setListRes({...listRes,res7: {...listRes.res7,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

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

              
            </View>

            <View style={{width : '100%', justifyContent : 'space-around', alignItems : 'center', flexDirection : 'row'}}>
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

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res10.label}
                        ref={inputRes10}
                        error={listRes.res10.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res10: {...listRes.res10,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res11.label}
                        ref={inputRes11}
                        keyboardType={'numeric'}
                        error={listRes.res11.check ? 'error' : ''}
                        onChangeText={(e) => {setListRes({...listRes,res11: {...listRes.res11,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

                <View style={{width : '20%'}}>
                <TextField
                    textColor={'#FFF'}
                    tintColor={'#FFF'}
                    baseColor={'#cfd8dc'}
                    label={listRes.res12.label}
                    ref={inputRes12}
                    error={listRes.res12.check ? 'error' : ''}
                    keyboardType={'numeric'}
                    onChangeText={(e) => {setListRes({...listRes,res12: {...listRes.res12,sl : Number(e), check : false }})}}
                ></TextField>
                </View>

              
            </View>

            <View style={{width : '100%', justifyContent : 'space-around', alignItems : 'center', flexDirection : 'row'}}>
                <View style={{width : '20%'}}>
                    <TextField
                        textColor={'#FFF'}
                        tintColor={'#FFF'}
                        baseColor={'#cfd8dc'}
                        label={listRes.res13.label}
                        ref={inputRes13}
                        error={listRes.res13.check ? 'error' : ''}
                        keyboardType={'numeric'}
                        onChangeText={(e) => {setListRes({...listRes,res13: {...listRes.res13,sl : Number(e), check : false }})}}
                    ></TextField>
                </View>

              
            </View>
            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginTop : 20, alignItems : 'center'}}>
                    <AppText i18nKey='tongSpeed' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{sum}</Text>
                    <AppText i18nKey='min' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>

                </View>

                <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginTop : 20, alignItems : 'center'}}>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{fullDay.day}</Text>
                    <AppText i18nKey='day' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{fullDay.hour}</Text>
                    <AppText i18nKey='hour' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{fullDay.min}</Text>
                    <AppText i18nKey='mins' style={{fontFamily : fonts.regular, color : '#FFF'}}></AppText>

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
    cardHeader : {
        width : '100%',
        height : 270,
        position : 'relative',
        backgroundColor : colors.CardColor
    }
});

//make this component available to the app
export default SpeedTool;
