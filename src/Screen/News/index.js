//import liraries
import React, { Component, useEffect,useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView, Dimensions ,TouchableOpacity,FlatList,ActivityIndicator,RefreshControl  } from 'react-native';
import {fonts,colors} from './../../theme/theme';
import Header from './../../Components/Header/Header';
import Axios from 'axios';
import BASE_URL from '../../utils/BASE_URL';
import HotNewItem from '../../Components/Items/HotsNewItem';
import HotNewItem2 from '../../Components/Items/HotsNewItem2';
import NewsModal from './../../Components/Modal/NewsModal';
import {LocalizationContext} from './../../../App';

// create a component
const News = ({navigation}) => {
    const {width} = Dimensions.get('window');
    const [listTopic,setListTopic] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isLoading2,setIsLoading2] = useState(false);
    const [isLoading3,setIsLoading3] = useState(false);
    const [refresh,setRefresh] = useState(false);
    const [listHotNews,setListHotNews] = useState([]);
    const [listNews,setListNews] = useState([]);
    const [isLoadingRender,setIsLoadingRender] = useState(false);
    const [page,setPage] = useState(0);
    const [topicSelect, setTopicSelect] = useState('5e7b7c6b6861760c70b41f13');
    const [items,setItems] = useState({
        author : {avatar : ''}
    });
    const {t, locale} = React.useContext(LocalizationContext);

    const ModalRef = React.useRef();

    useEffect(() => {
       
    
        getNews(true);
        getHotNew(true);
        
    },[topicSelect])

    useEffect(() => {

        getData(true);
        getNews(true);
        getHotNew(true);
        setPage(0)
    },[])
    function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }

    const getData = async (loads) => {
        
        
         if(loads) setIsLoading(true);
        let getTopic = await Axios.get(`${BASE_URL}/api/topics/getAllTopic`);
        if(getTopic.data.status == 200) {
            
            setListTopic(getTopic.data.data);
        }
        if(loads) setIsLoading(false);
    }

    const getHotNew = async (load,topic) =>{
        if(load) setIsLoading2(true);

        let getPosts = await Axios.get(`${BASE_URL}/api/posts/getByView?page=${0}&lang=${locale}&topic=${topicSelect ? topicSelect : '5e7b7c6b6861760c70b41f13'}`);
        if(getPosts.data.status == 200) {
            
            setListHotNews(getPosts.data.data);
        }
        if(load) setIsLoading2(false);
    }

   

    const getNews = async (load,topic) =>{
        if(load) setIsLoading3(true);

        let getPosts = await Axios.get(`${BASE_URL}/api/posts/getAllPostByTopic?page=${0}&lang=${locale}&topic=${topicSelect ? topicSelect : '5e7b7c6b6861760c70b41f13'}`);
        if(getPosts.data.status == 200) {
            
           
                setListNews(getPosts.data.data.reverse());
           
        }
        
        if(load) setIsLoading3(false);

    }

    const getNews2 = async (load) =>{
        if(load) setIsLoadingRender(true);
        
        let pageGain = page;
        console.log(page);

        let getPosts = await Axios.get(`${BASE_URL}/api/posts/getAllPostByTopic?page=${pageGain + 1}&lang=${locale}&topic=${topicSelect ? topicSelect : '5e7b7c6b6861760c70b41f13'}`);
        if(getPosts.data.status == 200) {
            if(getPosts.data.data.length != 0) {
                let datanew = listNews.concat(getPosts.data.data.reverse());
                setListNews(datanew);
                setPage(pageGain + 1);

               
            }
        }
      
        
        if(load) setIsLoadingRender(false);

    }
    
 

    const onRefresh = () => {
      
        setRefresh(true);
        
         wait(1500).then(() =>{
            getData(false,topicSelect);
            getNews(false,topicSelect);
            getHotNew(false,topicSelect);
            setRefresh(false);
         })
     
      };

    const handleLoadMore = () => {
        
        getNews2(true);
        
      
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='posts' navigation={navigation} checkAction={true} onSearchScreen={() =>{navigation.navigate('SearchNew')}}>;
            }}></Header>
            
            <View style={{marginVertical : 20}}>
            {isLoading ? <View style={{marginVertical : 20}}><ActivityIndicator size={25} color={colors.HoverColor}></ActivityIndicator></View> :
                
                <FlatList
                horizontal={true}
                data={listTopic}
                showsHorizontalScrollIndicator={false}

                keyExtractor={item => item.id}
                renderItem={({item}) => (
                     <TouchableOpacity onPress={() => {setTopicSelect(item._id);setPage(0)}} 
                     style={[styles.tabStyle,{backgroundColor : topicSelect == item._id ? colors.HoverColor : null, borderWidth : topicSelect == item._id ?0 : 1 }]}>
                        <Text style={styles.textTabStyle}>{locale == 'vi' ? item.name : item.nameEn}</Text>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
            }
            </View>
            <ScrollView
                 refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}
            >
            <View style={{marginLeft : '5%', marginBottom : 20, flexDirection : 'row'}}>
                <View style={styles.tabBar}></View>
                <Text style={{fontFamily : fonts.black, fontSize :18,color : '#FFF', marginLeft : 10}}>
                    {t('tin_moi_nhat').toUpperCase()}
                </Text>
            </View>
            <View>
            {isLoading2 ? <View><ActivityIndicator size={25} color={colors.HoverColor}></ActivityIndicator></View> :
             listHotNews.length == 0 ? <Text style={{color : '#FFF',fontFamily : fonts.light, textAlign : 'center'}}>{t('chua_co_bai_viet')}</Text> : <FlatList
                    horizontal={true}
                    data={listHotNews}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => { setItems(item)  ;navigation.navigate('NewD',{item})}} style={{justifyContent : 'center',width : width, alignItems : 'center'}}>
                            <HotNewItem item={item}/>
                        </TouchableOpacity>
                            
                    
                    )}
                >

                </FlatList>}
            </View>
            <View style={{marginLeft : '5%', marginBottom : 20,marginTop : 20, flexDirection : 'row'}}>
                <View style={styles.tabBar}></View>
                <Text style={{fontFamily : fonts.black, fontSize :18,color : '#FFF', marginLeft : 10}}>
                    {t('tat_ca_bai_dang').toUpperCase()}
                </Text>
            </View>
            <View>
            {isLoading3 ? <View><ActivityIndicator size={25} color={colors.HoverColor}></ActivityIndicator></View> : 
            listNews.length == 0 ? <Text style={{color : '#FFF',fontFamily : fonts.light, textAlign : 'center'}}>{t('chua_co_bai_viet')}</Text> : <FlatList
                    data={listNews}
  

                    ListFooterComponent={() => 
                       (isLoadingRender ?  <View><ActivityIndicator size={20} color={colors.HoverColor}></ActivityIndicator></View>  : 
                        <TouchableOpacity style={{marginBottom : 10}} onPress={() => {handleLoadMore()}}>
                            <Text style={{fontFamily : fonts.light,color : colors.HoverColor, textAlign : 'center'}}>{t('xem_them')}</Text>
                        </TouchableOpacity>
                        )
                    }
                    renderItem={({item}) => (
                        <TouchableOpacity  onPress={() => {setItems(item)  ;navigation.navigate('NewD',{item})}} style={{justifyContent : 'center', alignItems : 'center', marginVertical : 10}}>
                            <HotNewItem2 item={item}/>
                        </TouchableOpacity>
                            
                    
                    )}
                    
                >

            </FlatList>}
           

                
            </View>
            </ScrollView>
            <NewsModal ref={ModalRef} item={items}></NewsModal>
       
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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
export default News;
