//import liraries
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ActivityIndicator,FlatList,TouchableOpacity,ScrollView } from 'react-native';
import {colors, fonts} from './../../theme/theme';
import HeaderSearch from './../../Components/Header/HeaderSearch';
import {LocalizationContext} from './../../../App';
import Axios from 'axios';
import BASE_URL from '../../utils/BASE_URL';
import HotNewItem2 from '../../Components/Items/HotsNewItem2';

// create a component
const SearchNews = ({navigation}) => {
    const [listNews,setListNews] = useState([]);
    const [page,setPage] = useState(0);
    const [isLoading3,setIsLoading3] = useState(false);
    const {t, locale} = React.useContext(LocalizationContext);
    const [keyword,setKeyword] = useState();
 
    useEffect(() => {
       
        getNews(true)
    },[])

    const getNews = async (load,topic) =>{
        if(load) setIsLoading3(true);

        let getPosts = await Axios.get(`${BASE_URL}/api/posts/getAllPost?page=${page}&lang=${locale}`);
        if(getPosts.data.status == 200) {
           
            
            setListNews(getPosts.data.data.reverse());
        }
        if(load) setIsLoading3(false);

    }

    const onSearch = async (keyword) => {
     setIsLoading3(true);
        
        
        let getPosts = await Axios.get(`${BASE_URL}/api/posts/getByKeyword?keyword=${keyword}&lang=${locale}`);
        if(getPosts.data.status == 200) {
            
            setListNews(getPosts.data.data.reverse());
        }
        setIsLoading3(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSearch placeholder='input_keyword' onChangeText={onSearch} checkEnd={true}></HeaderSearch>
            <ScrollView>
            <View style={{marginLeft : '5%', marginTop : 20, flexDirection : 'row'}}>
                <View style={styles.tabBar}></View>
                <Text style={{fontFamily : fonts.black, fontSize :15,color : '#FFF', marginLeft : 10}}>
                    {t('ket_qua_tim_duoc').toUpperCase()}
                </Text>
            </View>

            <View style={{marginVertical : 20}}>
            {isLoading3 ? <View><ActivityIndicator size={25} color={colors.HoverColor}></ActivityIndicator></View> : 
            listNews.length == 0 ? <Text style={{color : '#FFF',fontFamily : fonts.light, textAlign : 'center'}}>{t('khong_tim_thay_ket_qua')}</Text> : <FlatList
                    data={listNews}
                    renderItem={({item}) => (
                        <TouchableOpacity  onPress={() => {navigation.navigate('NewD',{item})}} style={{justifyContent : 'center', alignItems : 'center', marginVertical : 10}}>
                            <HotNewItem2 item={item}/>
                        </TouchableOpacity>
                            
                    
                    )}
                >

            </FlatList>}
         

                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        backgroundColor: colors.MainColor,
    },
    tabStyle : {
        borderWidth : 1,
        borderColor : '#FFF',
        height : 30,
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 30,
        paddingRight: 30,
        borderRadius : 100,
        marginHorizontal : 5
    },
    textTabStyle : {
        color : '#FFF',
        fontFamily : fonts.light
    },
    tabBar : {
        height : 25, width : 4, 
        backgroundColor : colors.barColor, 
        borderTopRightRadius:5,borderBottomRightRadius : 5
    }
});

//make this component available to the app
export default SearchNews;
