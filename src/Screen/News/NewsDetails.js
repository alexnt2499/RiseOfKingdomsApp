//import liraries
import React, { Component,forwardRef,useImperativeHandle, useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Dimensions,Image,ScrollView,TouchableHighlight,Animated  } from 'react-native';
import Modal from "react-native-modal";
import {colors,fonts} from './../../theme/theme';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');
import moment from 'moment'
import BASE_URL from '../../utils/BASE_URL';
import IconA from 'react-native-vector-icons/AntDesign';
import ImageView from 'react-native-image-view';
import Axios from 'axios';
import Bannder from './../../Components/AdsMob/BannerAds';
import BannderBig from './../../Components/AdsMob/BannerAdsBig';


// create a component
const NewModal = ({navigation,route}) => {
    const {t,locale} = React.useContext(LocalizationContext);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [time,setTime] = useState();
    const [listImage,setListImage] = useState([]);
    const [index,setIndex] = useState(0);
    const [isImageViewVisible,setIsImageViewVisible] = useState(false);
    const [listContent,setListContent] = useState(route.params.item.content);
    const [heightAnimated,setHeightAnimated] = useState(0)
    const [colorAnimated,setColorAnimated] = useState(null);
    const [animatedStyle, setAnimatedStyle] = useState({});

  

    useEffect(() => {
        
        getImage();
        upView();
    },[route.params])

    const upView = async () => {
 
        
        let plus1View = await Axios.post(`${BASE_URL}/api/posts/upView`,{
            id : route.params.item._id
        })
    
        
    }

    const getImage = () => {
        let dem = 1;
        let list = [{
            source: {
                uri: route.params.item.thumnail,
            },
            index : dem
          
        }];
        let listContents= [];
        
        if(route.params.item.content) {
            for (let i = 0; i < route.params.item.content.length; i++) {
                const element = route.params.item.content[i];
                if(element.type == 'image') {
                    dem++;
                    list.push({
                        source: {
                                     uri: element.value
                                },
                        index : dem
                    ,})
                    listContents.push({...element,index : dem-1});
                }else {
                    listContents.push(element);
                }
                
            }
        }

        setListImage(list);
        setListContent(listContents);
        


    }

    const handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
        if(event.nativeEvent.contentOffset.y >= 210) {
            setColorAnimated(colors.MainColor);
            setHeightAnimated(event.nativeEvent.contentOffset.y);

        }else {
            setColorAnimated(null);
            setHeightAnimated(0);

        }
    }
   
    const seTtimess = () => {
        let dateS = new Date();
        
        let dateB = new Date(route.params.item.dateCreate);

        dateS.setUTCDate(dateB.getDate());
        dateS.setUTCMonth(dateB.getMonth());
        dateS.setUTCFullYear(dateB.getFullYear());
        dateS.setUTCHours(dateB.getHours());
        dateS.setUTCMinutes(dateB.getMinutes());
        
        return dateB.getDate() + '/' + (dateB.getMonth()+1) + '/' + dateB.getFullYear() + ' ' + dateB.getHours() + ":" + dateB.getMinutes();
    }
    
    let item = route.params.item;

    return (
            
             <ScrollView
             onScroll={handleScroll}
             showsVerticalScrollIndicator={false} style={{width : '100%', position : 'relative', backgroundColor : colors.MainColor}}>
                <TouchableHighlight onPress={() => {setIndex(0);setIsImageViewVisible(true)}}><Image
                   
                    source={{uri : item.thumnail}}
                    style={{ width : '100%', height : 210}}
                    >

                </Image></TouchableHighlight>

                <View>
                    <Text style={{fontFamily : fonts.bold, fontSize :23,color : '#FFF', marginLeft : 10, marginVertical : 10}}>
                        {item.title}
                    </Text>
                </View>

                <View style={{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'center', marginLeft : 10}}>
                    <View style={{width : '100%', flexDirection : 'row' ,justifyContent :'flex-start',alignItems : 'center'}}>
                        <Image style={{width : 26, height : 26, borderRadius : 13 }} source={{uri : item.author.avatar}}/>
                       <View>
                       <Text style={{fontFamily : fonts.regular, color : '#FFF',fontSize : 11, marginLeft : 5}}>{item.author.fullname}</Text>
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 8, marginLeft : 5}}>({ item.author.level })</Text>
                       </View>

                       <IconA name='eye' style={{marginLeft : 20}} size={20} color={colors.HoverColor}></IconA> 
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 5}}>{ item.view }</Text>
                        <View style={{}}>
                        <Text style={{fontFamily : fonts.light, color : '#FFF',fontSize : 11, marginLeft : 30}}>
                            {seTtimess()}
                        </Text>
                        </View>

                        
                    </View>

                
                </View>

                <View style={{width : '95%', marginVertical : 20, marginLeft : 10}}>
                    {listContent.map((value) => {
                        if(value.type == 'text') {
                            return(<Text style={{fontFamily : fonts.regular, color : '#FFF',fontSize : 13, marginLeft : 5}}>
                                {value.value}
                            </Text>)
                        }
                        else if(value.type == 'image') {
                            return(<TouchableHighlight onPress={() => {setIndex(value.index),setIsImageViewVisible(true)}} style={{marginVertical : 20}}>
                                <Image resizeMode='cover' source={{uri : value.value}} style={{width : '100%', borderRadius : 5 ,height : 200}}>
                                
                                </Image>
                            </TouchableHighlight>)
                        }else if(value.type == 'title') {
                            return(<Text style={{fontFamily : fonts.bold, color : colors.HoverColor,fontSize : 15, marginLeft : 5, marginVertical : 5}}>
                            {value.value}
                        </Text>)
                        }
                        else if(value.type == 'adBanner') {
                            return(<View style={{justifyContent : 'center', alignItems : 'center', marginVertical : 5}}><Bannder></Bannder></View>)
                        }
                        else if(value.type == 'adBig') {
                            return(<View style={{justifyContent : 'center', alignItems : 'center' , marginVertical : 5}}><BannderBig></BannderBig></View>)
                        }
                    })}
                </View>
               
              
                <ImageView
                    images={listImage}
                    onClose={() => {setIsImageViewVisible(false)}}
                    imageIndex={index}
                    isVisible={isImageViewVisible}
                renderFooter={(currentImage) => { console.log(currentImage);
                 return(<View><Text style={{color : '#FFF', textAlign : 'center' ,fontFamily : fonts.regular}}>{currentImage.index}/{listImage.length}</Text></View>)}}
                />

                    
                    <Animated.View style={[{position : 'absolute', top : heightAnimated,backgroundColor : colorAnimated, width: '100%',height : 50}
                                            ]}>
                        <TouchableOpacity style={{ width: 50,height : 50, marginLeft : 20}} onPress={() =>{navigation.goBack()}}>
                            <Icon name={'arrow-back'} color="green" size={25} style={{marginTop : 20, color : '#FFF'}}></Icon>
                        </TouchableOpacity>
                    </Animated.View>
             </ScrollView>

     
    );
}

// define your styles
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'flex-start', 
        alignItems : "center", 
        backgroundColor : colors.MainColor,
        margin: 0,
    },
    textStyle : {
        fontFamily : fonts.bold,
        color : '#000',
        fontSize : 17
    },
});

//make this component available to the app
export default NewModal;
