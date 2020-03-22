//import liraries
import React, { Component,useEffect,useState } from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native';
import {colors,fonts} from './../../../theme/theme';
import SkillFlatListItem from './../../Items/SkillFlatListItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {LocalizationContext} from './../../../../App';

// create a component
const Skill = ({items,checkEpic}) => {
    const { t, locale, setLocale } = React.useContext(LocalizationContext);

    const [skill,setSkill] = useState([
        1,1,1,1
    ]);
    const [daNang,setDaNang] = useState(0);
    const [conThieu,setConThieu] = useState(690)
    const [skill5,setSkill5] = useState(false);


    useEffect(() => {
        ChangeCheck()
    },[checkEpic]);

    const ChangeCheck = () => {
        if(checkEpic == true) {
            setConThieu(440)
        }
    }

    const getD = () => {
        const sumend = skill.reduce((begin,skill) => {
            return begin + skill;
        });
        console.log(sum);
        let sum = sumend - 4;
        if(sum == 16) {setSkill5(true)}
        if(sum == 1 || sum == 2) {setDaNang(daNang+10);setConThieu(conThieu-10)}
        else if(sum == 3 || sum == 4) {setDaNang(daNang+15);setConThieu(conThieu-15)}
        else if(sum == 5 || sum == 6) {setDaNang(daNang+30);setConThieu(conThieu-30)}
        else if(sum == 7 || sum == 8) {setDaNang(daNang+40);setConThieu(conThieu-40)}
        else if(sum == 9 || sum == 10) {setDaNang(daNang+45);setConThieu(conThieu-45)}
        else if(sum == 11 || sum == 12) {setDaNang(daNang+50);setConThieu(conThieu-50)}
        else if(sum == 13 || sum == 14) {setDaNang(daNang+75);setConThieu(conThieu-75)}
        else if(sum == 15 || sum == 16) {setDaNang(daNang+80);setConThieu(conThieu-80)}
        
    }

    const getDEpic = () => {
        const sumend = skill.reduce((begin,skill) => {
            return begin + skill;
        });
        console.log(sum);
        let sum = sumend - 4;
        if(sum == 16) {setSkill5(true)}
        if(sum == 1 || sum == 2 || sum == 3) {setDaNang(daNang+10);setConThieu(conThieu-10)}
        else if(sum == 4 || sum == 5 || sum == 6 || sum == 7) {setDaNang(daNang+20);setConThieu(conThieu-20)}
        else if(sum == 8 || sum == 9 || sum == 10 || sum == 11) {setDaNang(daNang+30);setConThieu(conThieu-30)}
        else if(sum == 12 || sum == 13 || sum == 14 || sum == 15) {setDaNang(daNang+40);setConThieu(conThieu-40)}
        else if(sum == 16) {setDaNang(daNang+50);setConThieu(conThieu-50)}


       
    
        
    }

    

    return (
        <ScrollView style={[styles.container]}>
                <View style={{justifyContent : 'center' , alignItems : 'center', width : '100%'}}>
                    <View style={{...styles.containerInner,marginTop : 10}}>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', paddingHorizontal : 20, paddingTop : 20}}>
                            {items.skill.map((value,index) => {
                                if(index == 4) {
                                    return (
                                        skill5 ? 
                                        <View > 
                                            <View style={{alignItems : 'center', justifyContent :'center'}}>
                                            <Image source={value.image} style={{width : 50, height : 49}}></Image>
                                            <Text style={{fontFamily : fonts.light, fontSize : 10, color : '#FFF'}}>{t('open')}</Text>
                                            </View>
                                        </View> : null
                                    )
                                }else {
                                    return (
                                        <View style={{alignItems : 'center', justifyContent :'center'}}>
                                             <TouchableOpacity
                                                onPress={() => {
                                                    if(skill[index] < 5) {
                                                        
                                                        
                                                        let arrSkill = skill;
                                                        arrSkill[index] = skill[index]+1;
                                                        setSkill(arrSkill);
                                                        if(checkEpic == true) getDEpic();
                                                        else getD();
                                                        console.log(daNang);
                                                    }
                                                }}
                                             >
                                                <Image source={value.image} style={{width : 50, height : 49}}></Image>
                                             </TouchableOpacity>
                                            <Text style={{fontFamily : fonts.light, fontSize : 10, color : '#FFF'}}>{skill[index]}</Text>
                                        </View>
                                    )
                                }
                            })}

                            
                        </View>
                        <View style={{marginLeft : 20, marginTop : 10}}>
                            <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center'}}>
                                <Image source={items.tuongImage} style={{width : 30, height : 40}}></Image>

                                 <Text style={{fontFamily : fonts.light, fontSize : 15, marginLeft : 10, color : '#FFF'}}>{t('tuong_da_nang')} : {daNang}</Text>

                            </View> 

                            <View style={{flexDirection : 'row', marginTop : 10 , justifyContent : 'space-between', alignItems : 'center'}}>
                                <View style={{ justifyContent : 'flex-start', alignItems : 'center', flexDirection : 'row'}}>
                                <Image source={items.tuongImage} style={{width : 30, height : 40}}></Image>

                                <Text style={{fontFamily : fonts.light, fontSize : 15, marginLeft : 10, color : '#FFF'}}>{t('tuong_con_thieu')} : {conThieu} </Text>
                                </View>
                                <TouchableOpacity style={{marginRight : 20}} onPress={() => {
                                    setSkill([1,1,1,1]);
                                    setSkill5(false);
                                    setDaNang(0);
                                    setConThieu(690);
                                }}>
                                <Icon name={'refresh'} size={30} color='#FFF'></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {items.skill.map((item) => {
                    return (
                        <SkillFlatListItem item={item}></SkillFlatListItem>
                    )
                })}
  
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width : '100%',
        backgroundColor: colors.MainColor,
        height : 600
    },
    containerInner : {
        width : '95%',  
        height : 198,
        backgroundColor: colors.CardColor,
        borderRadius : 10,
        
        
    },
});

//make this component available to the app
export default Skill;
