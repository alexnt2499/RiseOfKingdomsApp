//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker, Image, TouchableOpacity } from 'react-native';
import {colors,fonts} from './../../theme/theme';
import  {
    TextField,
   
  } from 'react-native-material-textfield';
import {LocalizationContext} from './../../../App';
import Button from './../Buttons/Button';
import List from './../../databaseTroop/TrainTroop';


// create a component
const TrainingTab = () => {
    const {t} = React.useContext(LocalizationContext);
    const [sT, setST] = useState("T3");
    const [sTroop, setSTroop] = useState("in");
    const [form,setForm] = useState({
        numberTroop : {
            value : '',
            error : false
        },
        buff : {
            value : '',
            error : false
        }
    })

    const [res,setRes] = useState({
        gold : 0,
        wood : 0,
        food : 0,
        stone : 0
    })

    const [time,setTime] = useState({
        day :0 ,
        hour : 0,
        min : 0
    });

    const [power,setPower] = useState(0);

    const onCalculed = () => {
       let check = true;
       if(!form.buff.value) {
            setForm({...form, buff : {...form.buff,error : true}});
            check = false;
       }
       if(!form.numberTroop.value) {
            setForm({...form, numberTroop : {...form.numberTroop,error : true}});
            check = false;
       }
       console.log(sT, sTroop);
       let perUp = 1;
       if(form.buff.value == 0) {
            perUp = 1;
       }else {
        perUp = form.buff.value/100; 

       }
       
       if(check) {
            if(sT == 'T3') {
                if(sTroop == 'in') {
                    console.log(List.T3.tIn.gold*form.numberTroop.value);
                    
                    setRes({
                        gold : List.T3.tIn.gold*form.numberTroop.value,
                        wood : List.T3.tIn.wood*form.numberTroop.value,
                        food : List.T3.tIn.food*form.numberTroop.value,
                        stone : List.T3.tIn.stone*form.numberTroop.value
                    })
                }else if(sTroop == 'ar'){
                    setRes({
                        gold : List.T3.tAr.gold*form.numberTroop.value,
                        wood : List.T3.tAr.wood*form.numberTroop.value,
                        food : List.T3.tAr.food*form.numberTroop.value,
                        stone : List.T3.tAr.stone*form.numberTroop.value
                    })
                }else if(sTroop == 'ca') {
                    setRes({
                        gold : List.T3.tCa.gold*form.numberTroop.value,
                        wood : List.T3.tCa.wood*form.numberTroop.value,
                        food : List.T3.tCa.food*form.numberTroop.value,
                        stone : List.T3.tCa.stone*form.numberTroop.value
                    })
                }else {
                    setRes({
                        gold : List.T3.tXe.gold*form.numberTroop.value,
                        wood : List.T3.tXe.wood*form.numberTroop.value,
                        food : List.T3.tXe.food*form.numberTroop.value,
                        stone : List.T3.tXe.stone*form.numberTroop.value
                    })
                }
                setPower(List.T3.tIn.power*form.numberTroop.value)
                getDayHourMin(List.T3.tIn.time*form.numberTroop.value*perUp);

            }
            if(sT == 'T4') {
                if(sTroop == 'in') {
                    console.log(List.T4.tIn.gold*form.numberTroop.value);
                    
                    setRes({
                        gold : List.T4.tIn.gold*form.numberTroop.value,
                        wood : List.T4.tIn.wood*form.numberTroop.value,
                        food : List.T4.tIn.food*form.numberTroop.value,
                        stone : List.T4.tIn.stone*form.numberTroop.value
                    })
                    
                }else if(sTroop == 'ar'){
                    setRes({
                        gold : List.T4.tAr.gold*form.numberTroop.value,
                        wood : List.T4.tAr.wood*form.numberTroop.value,
                        food : List.T4.tAr.food*form.numberTroop.value,
                        stone : List.T4.tAr.stone*form.numberTroop.value
                    })
                }else if(sTroop == 'ca') {
                    setRes({
                        gold : List.T4.tCa.gold*form.numberTroop.value,
                        wood : List.T4.tCa.wood*form.numberTroop.value,
                        food : List.T4.tCa.food*form.numberTroop.value,
                        stone : List.T4.tCa.stone*form.numberTroop.value
                    })
                }else {
                    setRes({
                        gold : List.T4.tXe.gold*form.numberTroop.value,
                        wood : List.T4.tXe.wood*form.numberTroop.value,
                        food : List.T4.tXe.food*form.numberTroop.value,
                        stone : List.T4.tXe.stone*form.numberTroop.value
                    })
                }
                setPower(List.T4.tIn.power*form.numberTroop.value)
                getDayHourMin(List.T4.tIn.time*form.numberTroop.value*perUp);

            }
            if(sT == 'T5') {
                if(sTroop == 'in') {
                    console.log(List.T5.tIn.gold*form.numberTroop.value);
                    
                    setRes({
                        gold : List.T5.tIn.gold*form.numberTroop.value,
                        wood : List.T5.tIn.wood*form.numberTroop.value,
                        food : List.T5.tIn.food*form.numberTroop.value,
                        stone : List.T5.tIn.stone*form.numberTroop.value
                    })
                }else if(sTroop == 'ar'){
                    setRes({
                        gold : List.T5.tAr.gold*form.numberTroop.value,
                        wood : List.T5.tAr.wood*form.numberTroop.value,
                        food : List.T5.tAr.food*form.numberTroop.value,
                        stone : List.T5.tAr.stone*form.numberTroop.value
                    })
                }else if(sTroop == 'ca') {
                    setRes({
                        gold : List.T5.tCa.gold*form.numberTroop.value,
                        wood : List.T5.tCa.wood*form.numberTroop.value,
                        food : List.T5.tCa.food*form.numberTroop.value,
                        stone : List.T5.tCa.stone*form.numberTroop.value
                    })
                }else {
                    setRes({
                        gold : List.T5.tXe.gold*form.numberTroop.value,
                        wood : List.T5.tXe.wood*form.numberTroop.value,
                        food : List.T5.tXe.food*form.numberTroop.value,
                        stone : List.T5.tXe.stone*form.numberTroop.value
                    })
                }
                alert(perUp)
                setPower(List.T5.tIn.power*form.numberTroop.value);
                getDayHourMin(List.T5.tIn.time*form.numberTroop.value*perUp);

            }
       }


    }

    const getDayHourMin = (s) => {
        let day = Math.floor(s/1440);
        let hour = Math.floor((s%1440)/60);
        let min = s-(day*1440 + hour*60);
        
       setTime({
           day,
           hour,
           min
       })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{justifyContent : 'center', flexDirection : 'row', 
            alignItems : 'flex-start',marginHorizontal : '10%', marginTop : 50}}>
               
               <Picker
                       selectedValue={sT}
                       style={{ height: 50, width: '51%', color : '#FFF' }}
                       mode={'dropdown'}
                       onValueChange={(itemValue, itemIndex) => 
                        setST(itemValue)}
               >
                   <Picker.Item label="T3" value="T3" />
                   <Picker.Item label="T4" value="T4" />
                   <Picker.Item label="T5" value="T5" />
               </Picker>

               <Picker
                       selectedValue={sTroop}
                       style={{ height: 50, width: '51%', color : '#FFF' }}
                       mode={'dropdown'}
                       onValueChange={(itemValue, itemIndex) => 
                        setSTroop(itemValue)}
               >
                    <Picker.Item label={t('infantry')} value="in" />
                    <Picker.Item label={t('archer')} value="ar" />
                    <Picker.Item label={t('cavalry')} value="ca" />
                    <Picker.Item label={t('xe')} value="xe" />

               </Picker>
        
            </View>
            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                
                
                <TextField
                    label={t('input_number')}
                    keyboardType='phone-pad'
                    onChangeText={(e) => {
                        setForm({...form,numberTroop : {
                            value : e,
                            error : false
                        }})
                    }}
                    textColor='#FFF'
                    baseColor='#FFF'
                    value={form.numberTroop.value}
                    error={form.numberTroop.error}
                    inputContainerStyle={{width : '80%'}}
                ></TextField>

                <TextField
                    label={t('training_buff')}
                    keyboardType='phone-pad'
                    value={form.numberTroop.value}
                    onChangeText={(e) => {
                       
                        setForm({...form,buff : {
                            value : e,
                            error : false
                        }})
                    }}
                    textColor='#FFF'
                    baseColor='#FFF'
                    error={form.buff.error}
                    inputContainerStyle={{width : '80%'}}
                ></TextField>
            </View>
            <View style={{flexDirection : 'row', width : '100%', paddingHorizontal : '5%', paddingVertical : '5%', marginTop : 20, justifyContent : 'space-between', alignItems : 'center'}}>
                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Image style={styles.image} source={require('./../../../assets/images/IconRes/food.png')}></Image>
                    <Text style={styles.text}>{res.food}</Text>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Image style={styles.image} source={require('./../../../assets/images/Equipment/Material/wood.png')}></Image>
                    <Text style={styles.text}>{res.wood}</Text>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Image style={styles.image} source={require('./../../../assets/images/Equipment/Material/stone.png')}></Image>
                    <Text style={styles.text}>{res.stone}</Text>
                </View>

                <View style={{justifyContent : 'center', alignItems : 'center'}}>
                    <Image style={styles.image} source={require('./../../../assets/images/Equipment/Material/gold.png')}></Image>
                    <Text style={styles.text}>{res.gold}</Text>
                </View>
            </View>

            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Text style={styles.text}>
                    {t('total_time')}
                </Text>
                <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginVertical : 10, alignItems : 'center'}}>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{time.day}</Text>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{t('day')}</Text>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{time.hour}</Text>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{t('hour')}</Text>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{time.min}</Text>
                    <Text style={{fontFamily : fonts.regular, color : '#FFF'}}>{t('mins')}</Text>

                </View>
            </View>

            <View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 10}}>
                <Text style={styles.text}>
                    {t('total_power')}
                </Text>
                <Text style={[styles.text]}>
                    {power}
                </Text>
            </View>

            <View style={{justifyContent : 'center', alignItems : 'center'}}>
                <Button
                    onclick={onCalculed}
                    text={'tinh'}
                >

                </Button>
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
    image : {
        width : 25,
        height : 25
    },
    text : {
        fontFamily : fonts.bold,
        color : '#FFF'
    }
});

//make this component available to the app
export default TrainingTab;
