//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet,ScrollView, Picker,FlatList} from 'react-native';
import {colors , fonts} from './../../theme/theme';
import HeaderSearch from './../../Components/Header/HeaderSearch';
import ListCommanderVi from './../../database/ListCommander';
import ListCommanderEpicVi from './../../database/ListCommanderEpic';
import BannerAd from './../../Components/AdsMob/BannerAds';
import ListCommanderEn from './../../database/ListCommanderEn';
import ListCommanderEpicEn from './../../database/ListCommanderEpicEn';
import {LocalizationContext} from './../../../App';
import Cardcommander2 from './../../Components/Items/CardCommander2';
import AsyncStorage from '@react-native-community/async-storage';
import { InterstitialAd,AdEventType  } from '@react-native-firebase/admob';

// create a component
const Commanders = ({navigation}) => {
    const {t, locale} = React.useContext(LocalizationContext);
    const [listS,setListS] = useState([
        
    ])
    const [keyword,setKeyword] = useState('');
    const [ListCommander,setListCommander] = useState([]);

    const [ListCommanderOri,setListCommanderOri] = useState([]);
    const [dem,setDem] = useState(0);

    const [value,setValue] = useState('huyenThoai');
    const onChangeKeyword = (e) => {
        let ListBegin = [];
        if(value == 'huyenThoai') ListBegin = ListCommanderOri;
        else ListBegin = ListCommanderOri
        const list = [];
        for (let index = 0; index < ListBegin.length; index++) {
            const element = ListBegin[index];
           

            if(element.name.toLowerCase().indexOf(e.toLowerCase()) != -1) {
                console.log(e);

                list.push(element);
            }
        }
        setKeyword(e);
        
        setListCommander(list)
    }

    useEffect(() => {
        getListData()
    },[])

    const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-7033028927124341/6324920687', {
        requestNonPersonalizedAdsOnly: true,
    });

    interstitial.onAdEvent((type) => {
        if (type === AdEventType.LOADED) {
          interstitial.show();
        }
    });

    const showAd = () => {
        if(dem == 2) {
            setDem(0);
            interstitial.load();
            
        }else{
            console.log(dem);
        
        setDem(dem + 1);
        }
        
        

    }


    const getListData = async () => {
        let lang = await AsyncStorage.getItem('@lang');
        if(lang) {
            if(lang == 'vi') {
                setListS([{
                    label : 'Chỉ huy huyền thoại',
                    value : 'huyenThoai'
                },
                {
                    label : 'Chỉ huy anh hùng',
                    value : 'anhHung'
                },])
                setListCommander(ListCommanderVi);
                setListCommanderOri(ListCommanderVi);
            }
            else {
                setListS([{
                    label : 'Legendary Commander',
                    value : 'huyenThoai'
                },
                {
                    label : 'Epic Commander',
                    value : 'anhHung'
                },])
                setListCommander(ListCommanderEn);
                setListCommanderOri(ListCommanderEn);
            }
        } 
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSearch value={keyword} onChangeText={onChangeKeyword}></HeaderSearch>
            <Picker
                mode={'dropdown'}
                selectedValue={value}
                style={{height: 50, width: 250, marginLeft : 10, color : '#FFF'}}
                onValueChange={(itemValue, itemIndex) =>{
                    setValue(itemValue); 

                    if(itemValue == 'huyenThoai') {
                        if(locale == 'vi') {
                            setListCommander(ListCommanderVi);
                            setListCommanderOri(ListCommanderVi);
                        }else {
                            setListCommander(ListCommanderEn);
                            setListCommanderOri(ListCommanderEn);
                        }
                        
                    }else if(itemValue == 'anhHung') {
                        if(locale == 'vi') {
                            setListCommander(ListCommanderEpicVi);
                            setListCommanderOri(ListCommanderEpicVi);
                        }else {
                            setListCommander(ListCommanderEpicEn);
                            setListCommanderOri(ListCommanderEpicEn);
                        }

                    }
                } }>
                    {listS.map((value) => {
                        return (<Picker.Item label={value.label} value={value.value} />)
                    })}
                </Picker>
                {value == 'huyenThoai' ?  <FlatList
                    data={ListCommander}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                      
                           return  (<View style={{marginVertical : 10}}  onTouchEndCapture={() => {console.log(item.id);navigation.navigate('CommanderD',{items : item});showAd();}}>
                                 <Cardcommander2 items={item} checkEpic={false} />
                            </View>)
                        
                        
                    }}
              
                >

                </FlatList> : <FlatList
                    data={ListCommander}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        
                            return (<View style={{marginVertical : 10}}  onTouchEndCapture={() => {navigation.navigate('CommanderD',{items : item , checkEpic:  true });showAd()}}>
                             <Cardcommander2 items={item} checkEpic={true} />
                         </View>)
                        
                    }}
              
                >

                </FlatList>}

                <View style={{ marginVertical : 5, justifyContent : 'center',alignItems : 'center'}}>
                    <BannerAd></BannerAd>

                </View>
                
        </SafeAreaView>
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
export default Commanders;
