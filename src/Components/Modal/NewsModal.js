//import liraries
import React, { Component,forwardRef,useImperativeHandle, useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Dimensions,Image,ScrollView  } from 'react-native';
import Modal from "react-native-modal";
import {colors,fonts} from './../../theme/theme';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('window');
import moment from 'moment'
import BASE_URL from '../../utils/BASE_URL';
import IconA from 'react-native-vector-icons/AntDesign';
import ImageView from 'react-native-image-view';

// create a component
const NewModal = forwardRef((props,ref) => {
    const {t,locale} = React.useContext(LocalizationContext);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [time,setTime] = useState();
    const [listImage,setListImage] = useState([]);
    const [index,setIndex] = useState(0);
    const [isImageViewVisible,setIsImageViewVisible] = useState(false);

    const close = () => {
        setIsModalVisible(false);
    }
    const open = () => {
        setIsModalVisible(true);
    }

    useImperativeHandle(ref,()=>{
        return {
            open: () => {open()},
            close : () => {close()}
        }
    });

  

    useEffect(() => {
        
        getImage();
    },[props])


    const getImage = () => {
        let list = [{
            source: {
                uri: props.item.thumnail,
            },
            width : '100%',
            height : 200
        }];

        if(props.content) {
            for (let i = 0; i < props.content.length; i++) {
                const element = props.content[i];
                if(element.type == 'image') {
                    list.push({
                        source: {
                                     uri: element.value
                                },
                                width : '100%',
                                height : 200
                    ,})
                }
                
            }
        }

        setListImage(list);
        


    }
   
    const seTtimess = () => {
        let dateS = new Date();
        
        let dateB = new Date(props.item.dateCreate);

        dateS.setUTCDate(dateB.getDate());
        dateS.setUTCMonth(dateB.getMonth());
        dateS.setUTCFullYear(dateB.getFullYear());
        dateS.setUTCHours(dateB.getHours());
        dateS.setUTCMinutes(dateB.getMinutes());
        
        return dateS;
    }
    
    let item = props.item;

    return (
        <Modal  
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isModalVisible}
        style={styles.container}
        >
             <ScrollView showsVerticalScrollIndicator={false} style={{width : '100%', position : 'relative'}}>
                <Image
                    source={{uri : item.thumnail}}
                    style={{ width : '100%', height : 210}}>

                </Image>
                 <TouchableOpacity style={{position : 'absolute', top : 10, left : 20}} onPress={() =>{close()}}>
                    <Icon name={'arrow-back'} color="green" size={25} style={{marginTop : 20, color : '#FFF'}}></Icon>
                </TouchableOpacity>
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
                            {moment(seTtimess()).fromNow()}
                        </Text>
                        </View>

                        
                    </View>

                
                </View>

                <View style={{width : '95%', marginVertical : 20, marginLeft : 10}}>
                    {item.content ? item.content.map((value) => {
                        if(value.type == 'text') {
                            return(<Text style={{fontFamily : fonts.regular, color : '#FFF',fontSize : 13, marginLeft : 5}}>
                                {value.value}
                            </Text>)
                        }
                        else if(value.type == 'image') {
                            return(<TouchableOpacity onPress={() => {setIsImageViewVisible(true)}} style={{marginVertical : 20}}>
                                <Image resizeMode='cover' source={{uri : value.value}} style={{width : '100%', borderRadius : 20 ,height : 200}}>
                                
                                </Image>
                            </TouchableOpacity>)
                        }else if(value.type == 'title') {
                            return(<Text style={{fontFamily : fonts.bold, color : colors.HoverColor,fontSize : 15, marginLeft : 5, marginVertical : 5}}>
                            {value.value}
                        </Text>)
                        }
                    }) :null}
                </View>
               
              
                <ImageView
                    images={listImage}
                    onClose={() => {setIsImageViewVisible(false)}}
                    imageIndex={index}
                    isVisible={isImageViewVisible}
                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                />
             </ScrollView>

        </Modal>
    );
});

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
