//import liraries
import React from 'react';
import {  Text, StyleSheet, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fonts,colors} from './../../theme/theme';
// create a component
const MyComponent = ({items}) => {
    return (
      <LinearGradient
        colors={['orange','#ff995e']}
       style={{
           width : 215,
           height : 190,
           marginRight : 50,
           marginHorizontal : 20,
           borderRadius : 12,
           position : 'relative',
        
                           
       }}>
           <Image resizeMode='cover' style={{width : 190, height : 350, marginLeft : 90}} source={items.image}></Image>
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
