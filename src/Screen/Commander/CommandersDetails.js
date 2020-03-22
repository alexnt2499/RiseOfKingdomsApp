//import liraries
import React, { Component,useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet, Image,Animated, TouchableOpacity, ScrollView, Dimensions,SafeAreaView } from 'react-native';
import {colors, fonts} from './../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import SkillComponent from './../../Components/Card/CardCommander/Skill';
import TalentComponent from './../../Components/Card/CardCommander/Talent';
import Equipment from './../../Components/Card/CardCommander/Equipment';
import About from './../../Components/Card/CardCommander/About';
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'

   

const CommanderDetails = ({route,navigation}) => {
    const items = route.params.items;
    const checkEpic = route.params.checkEpic;
    const {width,height} = Dimensions.get('window');

    const [active,setActive] = useState(0);
    const [xTab1,setXTab1] = useState(0);
    const [xTab2,setXTab2] = useState(0);
    const [xTab3,setXTab3] = useState(0);
    const [xTab4,setXTab4] = useState(0);
    const [widthHover , setWidthHover] = useState();
    const [translateX, setTranslateX] = useState(new Animated.Value(0));
    const [param, setParam] = useState(30);
    const [widthS, setWidths] = useState(200);
    const [heightS, setheightS] = useState(400);
    const [colorg,setColorg] = useState(['orange','#ff995e'])

    useEffect(() => {
        setWidthHeight();
        setColor();
    },[items])

    const setWidthHeight = () => {
        if(items.id == 6) {
            setWidths(100)
        }else if(items.id == 22) {
            setWidths(300);
            setheightS(200)
        }
        else if(items.id == 51) {
            setWidths(250)
        }
        else if(items.id == 26 || items.id == 50 || items.id == 53 ) {
            setWidths(300);
          
        }
        else if(items.id == 16) {
            setWidths(300);
            setheightS(350)
          
        }
    }
  

    const refScroll = React.createRef();
    const setColor = () => {
        if(checkEpic == true) {
            setColorg(['#42275a','#734b6d'])
        }
    }
  

    const handleSlide = (type) => {
        console.log(type);
        
        Animated.spring(translateX, {
            toValue : type,
            duration : 100
        }).start()
    }

    const handleScroll = (event) => {

        let scrollX = event.nativeEvent.contentOffset.x;
        console.log(scrollX);
        
        let tab1 = 0;
        let tab2 = width;
        let tab3 = width*2;
        let tab4 = width*3;
        console.log('width' + width/2);
        
        if(scrollX == tab1){
            
            setActive(0); handleSlide(xTab1); setWidthHover(50);
        }

        if(scrollX == tab2){
            setActive(2), handleSlide(xTab2) ; setWidthHover(95)


        }

        
        if(scrollX == tab3){
            setActive(3), handleSlide(xTab3); setWidthHover(60)
        }

        if(scrollX == tab4){
            setActive(3), handleSlide(xTab4); setWidthHover(60)
        }

       
        
    }


    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={colorg} style={styles.cardHeader}>
                <TouchableOpacity
                    onPress={() => {navigation.goBack()}}
                >
                    <Icon name='ios-arrow-back' size={30} color='#FFF' style={{top : 10, left : 20}}></Icon>
                </TouchableOpacity>
                <Image style={{...styles.styleImage, width : widthS, height : heightS}} source={items.image}></Image>
                <Image source={items.VanMinh} style={{ 
               position : 'absolute',bottom : 100, left : 20}}></Image>
                <Text style={{...styles.textStyle, position : 'absolute', 
                color : '#FFF', bottom : 60, left : 20 , width : 200}}>{items.name}</Text>
                    <View ource={items.VanMinh} style={{ 
                    position : 'absolute',bottom : 10, left : 20, flexDirection : "row"}}>
                        {items.talent.map((value,index) => (
                            <Image style={{width : 40, height : 40}} source={value.image}></Image>
                        ))}
                    </View>
            </LinearGradient>
            {/* <View style={styles.containerTab}>
                <View
                
                    onLayout={event => setXTab1(event.nativeEvent.layout.x-param)}
                    
                >
                    <Text style={{...styles.tabText, color : active == 0 ? '#FFF' : '#707070'}}>SKILL</Text>
                </View>

                <View
                
                    onLayout={event => setXTab2(event.nativeEvent.layout.x -param)}
                   
                >
                    <Text  style={{...styles.tabText, color : active == 1 ? '#FFF' : '#707070'}}>TALENTS</Text>
                </View>

                <View
                    onLayout={event => setXTab3(event.nativeEvent.layout.x-param)}
                   

                >
                    <Text  style={{...styles.tabText, color : active == 2 ? '#FFF' : '#707070'}}>EQUIPMENT</Text>
                </View>

                <View
                    onLayout={event => setXTab4(event.nativeEvent.layout.x-param)}
                   

                >
                    <Text  style={{...styles.tabText, color : active == 3 ? '#FFF' : '#707070'}}>ABOUT</Text>
                </View>
                
            </View>

            <Animated.View style={[
                {
                    marginBottom : 10,
                    width : '100%',
                    paddingHorizontal : 25,
                    transform : [{
                        translateX : translateX
                    }]
                }
            ]}>
                <View style={{ borderBottomWidth : 4,
                    borderColor : colors.HoverColor, 
                    width : widthHover ? widthHover : 60,
                    
                    }}></View>

            </Animated.View> */}

            <ScrollableTabView
                tabBarActiveTextColor={'#FFF'}
                tabBarInactiveTextColor={'#707070'}
                tabBarUnderlineStyle={{backgroundColor : colors.HoverColor, borderColor : colors.MainColor}}
                tabBarTextStyle={{fontFamily : fonts.black,fontSize : 15}}
            >
                   
                       <SkillComponent tabLabel="SKILL" items={items} checkEpic={checkEpic}></SkillComponent>
                    
                   

                  
                    
                        <TalentComponent tabLabel="TALENTS" navigation={navigation} items={items}></TalentComponent>
                   

                    
                        <Equipment tabLabel="EQUIPMENT" items={items}></Equipment>
            

                   
                        <About tabLabel="ABOUT" items={items}></About>
                    
            </ScrollableTabView>
       

            {/* <ScrollView 
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                onScrollEndDrag={handleScroll}
                ref={refScroll}
                pagingEnabled={true}
            >
                    
                    <View style={{width : width}}>
                       <SkillComponent items={items} checkEpic={checkEpic}></SkillComponent>
                    </View>
                   

                  
                    <View style={{width : width}}>
                        <TalentComponent navigation={navigation} items={items}></TalentComponent>
                    </View>

                    <View style={{width : width}}>
                        <Equipment items={items}></Equipment>
                    </View>

                    <View style={{width : width}}>
                        <About items={items}></About>
                    </View>
            
            </ScrollView> */}
            
            
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.MainColor,
        
    },
    cardHeader : {
        width : '100%',
        height : 235,
        backgroundColor : colors.BottomColor,
        position : 'relative',
        overflow : 'hidden',
        shadowOpacity : 1,
        shadowOffset : {
            width : 2,
            height : -2
        },
        shadowColor: "red",

    },
    styleImage : {
        position : 'absolute',
        top : 20, 
        right : 0,
        width : 200, 
        height : 350
    },
    textStyle :{
        fontFamily : fonts.black,
        fontSize : 25,
        
    },
    TabStyle : {
        // width : '25%'
    },
    containerTab : {
        width : '100%',
        flexDirection :"row", 
        paddingHorizontal : 25,
        justifyContent : 'space-around',
        marginTop : 20,
       
        paddingBottom : 3.5
    },tabText :{
        fontFamily : fonts.black,
        fontSize : 15,
        color : '#707070'
        
    }
});

//make this component available to the app
export default CommanderDetails;
