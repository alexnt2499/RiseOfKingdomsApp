//import liraries
import React, { Component,forwardRef,useImperativeHandle, useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import {colors,fonts} from './../../theme/theme';
import {LocalizationContext} from './../../../App';
import Icon from 'react-native-vector-icons/AntDesign';

// create a component
const ConfirmModal = forwardRef((props,ref) => {
    const {t,locale} = React.useContext(LocalizationContext);
    const [isModalVisible,setIsModalVisible] = useState(false);
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
   
    return (
        <Modal  
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        isVisible={isModalVisible}>
             <View style={styles.container}>
                <Icon name={'checkcircle'} color="green" size={60} style={{marginTop : 20}}></Icon>
                <Text style={[styles.textStyle,{marginVertical : 5, fontSize : 13, fontFamily : fonts.light}]}>{props.body}</Text>
               
                <TouchableOpacity onPress={() => {close()}} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : 'green', width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
                    <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>OK</Text>
                </TouchableOpacity>
              
             
             </View>

        </Modal>
    );
});

// define your styles
const styles = StyleSheet.create({
    container : {
        width : "100%", 
        borderRadius : 10 ,
        justifyContent : 'flex-start', 
        alignItems : "center", 
        backgroundColor : '#FFF'
    },
    textStyle : {
        fontFamily : fonts.bold,
        color : '#000',
        fontSize : 17
    },
});

//make this component available to the app
export default ConfirmModal;
