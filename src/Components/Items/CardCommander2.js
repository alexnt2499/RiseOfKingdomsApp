//import liraries
import React,{useState,useEffect} from 'react';
import {  Text, StyleSheet, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts,colors} from './../../theme/theme';
// create a component
const MyComponent = ({items,checkEpic}) => {
    const [widthS, setWidths] = useState(200);
    const [heightS, setheightS] = useState(400);
    const [colorg,setColorg] = useState(['orange','#ff995e'])
    useEffect(() => {
        setWidthHeight();
        setColor();
    },[items.name])

    const setWidthHeight = () => {
        if(items.id == 6) {
            setWidths(100)
        }else if(items.id == 22) {
            setWidths(300);
            setheightS(200)
        }
        else if(items.id == 18) {
            setWidths(300);
            setheightS(350)
        }
        else if(items.id == 26 || items.id == 50 || items.id == 53) {
            setWidths(300);
          
        }
        else if(items.id == 16 ) {
            setWidths(300);
            setheightS(350)
          
        }
        else if(items.id == 51) {
            setWidths(250)
        }
      
        else if(items.id == 1 || items.id == 2 || items.id == 3 || items.id == 4 || items.id == 5) {
            setColorg(['orange','#ff995e'])

        }
    }

    const setColor = () => {
        if(checkEpic == true) {
            console.log(checkEpic + items.name)

            setColorg(['#42275a','#734b6d'])
        }
    }
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={colorg}
       style={{
           width : '90%',
           height : 190,
           marginRight : 50,
           marginHorizontal : 20,
           borderRadius : 12,
           position : 'relative',
            overflow : 'hidden'
                           
       }}>
           <Image resizeMode='cover' style={{width : widthS, height : heightS, marginLeft : items.id == 6 ?190:90}} source={items.image}></Image>
           <Image source={items.VanMinh} style={{ 
               position : 'absolute',top : 20, left : 20}}></Image>
           
           <Text style={{...styles.textStyle, position : 'absolute', 
           color : '#FFF', top : 50, left : 20 , width : 100}}>{items.name}</Text>
            <View ource={items.VanMinh} style={{ 
               position : 'absolute',bottom : 10, left : 20, flexDirection : "row"}}>
                   {items.talent.map((value,index) => (
                       <Image style={{width : 40, height : 40}} source={value.image}></Image>
                   ))}
            </View>
       </LinearGradient>

      
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    textStyle :{
        fontFamily : fonts.black,
        fontSize : 20,
        
    }
});

//make this component available to the app
export default MyComponent;
