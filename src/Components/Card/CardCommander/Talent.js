//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView, FlatList } from 'react-native';
import {colors,fonts} from './../../../theme/theme';
import ListComander from './../../../database/ListCommander';
import CardCommanders from './../../Items/CardCommander2';
import ImageView from 'react-native-image-view';
import {LocalizationContext} from './../../../../App';
import ListCommanderEpic from '../../../database/ListCommanderEpic';

// create a component
const Talent = ({items, navigation}) => {
    const { t, locale, setLocale } = React.useContext(LocalizationContext);
    const [ListComanderU, setListCommanderU] = useState([]);
    const [ListComanderUEpic, setListCommanderUEpic] = useState([]);

    const [listImage,setListImage] = useState([]);
    const [index,setIndex] = useState(0);
    const [isImageViewVisible,setIsImageViewVisible] = useState(false);
    useEffect(() => {
       
        getData()
    },[items]);

    const getData = () => {
        let list = [];
        let list2 = [];
        for (let index = 0; index < items.partner.length; index++) {
            const element = items.partner[index];
            for (let j = 0; j < ListComander.length; j++) {
                const value = ListComander[j];
                
                if(value.id == element) {
                    console.log(value.id,element);

                    list.push(value);
                }
                
            }
            
        }

  
        
       
            if(items.partnerEpic) {
                console.log(items.partnerEpic);

                for (let index = 0; index < items.partnerEpic.length; index++) {
                    const element = items.partnerEpic[index];
                    for (let j = 0; j < ListCommanderEpic.length; j++) {
                        const value = ListCommanderEpic[j];
                        
                        if(value.id == element) {
                            console.log(value.id,element);
        
                            list2.push(value);
                        }
                        
                    }
                    
                }
            }
    

        console.log(list2,'hello');
        
        setListCommanderUEpic(list2);

        
        setListCommanderU(list);
    }

   
   
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginLeft : 30,}}>
                <Text style={{fontFamily : fonts.black, fontSize : 17,color : '#FFF'}}>
                    {t('bang_tai_nang')}
                </Text>
                <Text style={{fontFamily : fonts.light, fontSize : 10, marginVertical : 10,color : '#FFF'}}>
                {t('anh_qua_nang')}</Text>
                {items.talentTree.length == 0 ?<Text style={{fontFamily : fonts.light, fontSize : 14, marginVertical : 10,color : '#FFF'}}>
                        {t('chua_co_tai_nguyen')}</Text> : items.talentTree.map((value) => (
                    <TouchableOpacity
                        onPress={()=> {
                            setListImage([{
                                source: {
                                    uri: value.uri,
                                },
                            
                            }])
                            setIsImageViewVisible(true);
                        }}
                    >
                     <Image source={value} resizeMode='center' style={{width : 300,height : 200, borderRadius : 10, shadowOpacity : 1}}></Image>
                    </TouchableOpacity>
            ))}

                <Text style={{fontFamily : fonts.black, fontSize : 17,color : '#FFF'}}>
                    {t('cap')}
                </Text>
                
               
            </View>
                <FlatList 
                    data={ListComanderU}
                    showsHorizontalScrollIndicator={false}
                  
                    keyExtractor={item => item.id}
                    renderItem={({item, index, separators}) => (
                        <View
                            style={{marginVertical : 20}}
                            onTouchEndCapture={() => {navigation.navigate('CommanderDPair',{items : item})}}
                          >
                              <CardCommanders items={item}></CardCommanders>
                        </View>
                      )}
                >

                </FlatList>
                <FlatList 
                    data={ListComanderUEpic}
                    showsHorizontalScrollIndicator={false}
                  
                    keyExtractor={item => item.id}
                    renderItem={({item, index, separators}) => (
                        <View
                            style={{marginVertical : 20}}
                            onTouchEndCapture={() => {navigation.navigate('CommanderDPair',{items : item,checkEpic : true})}}
                          >
                              <CardCommanders checkEpic={true} items={item}></CardCommanders>
                        </View>
                      )}
                >

                </FlatList>

                <ImageView
                    onClose={() => {setIsImageViewVisible(false)}}
                    images={listImage}
                    imageIndex={index}
                    isVisible={isImageViewVisible}
                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                />

            
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
       
        marginVertical : 10,
        backgroundColor: colors.MainColor,
    },
});

//make this component available to the app
export default Talent;
