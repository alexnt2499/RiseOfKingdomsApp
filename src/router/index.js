import React from 'react';
import {TouchableOpacity,Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent,DrawerContentScrollView,DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import HomeScreen from './../Screen/HomeScreen';
import Commander from './../Screen/Commander/Commanders';
import CommanderDetails from './../Screen/Commander/CommandersDetails'
import Troop from './../Screen/Troop/Troop';
import Equipment from './../Screen/Equipment/Equipment';
import EquipmentDetails from './../Screen/Equipment/EquipmentDetails';
import Tools from './../Screen/Tools/index';
import MaterialTool from './../Screen/Tools/MaterialTool';
import SpeedTool from './../Screen/Tools/SpeedTool';
import ResounseTool from './../Screen/Tools/ResoucesTool';
import Building from './../Screen/Building/Building';
import BuildingDetail from './../Screen/Building/BuildingDetails';
import ChooseLang from './../Screen/ChooseLang';
import About from './../Screen/About';
import {LocalizationContext} from './../../App';
import Event from './../Screen/EventTracker';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconTool from 'react-native-vector-icons/FontAwesome5';
import IconFa from 'react-native-vector-icons/FontAwesome';

import DrawerC from './../Components/DrawerContent';
import {fonts, colors} from './../theme/theme';
import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
        initialRouteName='Home'
        
    >
        <Stack.Screen 
         name='Home'
         component={HomeScreen}

         options={{
            headerShown : false
         }}
        />
         <Stack.Screen 
         name='CommanderD'
         component={CommanderDetails} 
         options={{headerShown : false}}
        />
        
        <Stack.Screen 
         name='EquipmentD'
         component={EquipmentDetails} 
         options={{headerShown : false}}
        />
        <Stack.Screen 
         name='MaterialTool'
         component={MaterialTool} 
         options={{headerShown : false}}
        />
        
    </Stack.Navigator>
)

const ToolStack = () => (
    <Stack.Navigator
     initialRouteName='Tool'
    >
         <Stack.Screen 
         name='Tool'
         component={Tools} 
         options={{headerShown : false}}
         />
          <Stack.Screen 
         name='MaterialTool'
         component={MaterialTool} 
         options={{headerShown : false}}
        />
         <Stack.Screen 
         name='RTool'
         component={ResounseTool} 
         options={{headerShown : false}}
        />
         <Stack.Screen 
         name='STool'
         component={SpeedTool} 
         options={{headerShown : false}}
        />
          <Stack.Screen 
         name='EventTool'
         component={Event} 
         options={{headerShown : false}}
        />


    </Stack.Navigator>
)

const EquipmentStack = () => (
    <Stack.Navigator
     initialRouteName='Equipment'
    >
         <Stack.Screen 
         name='Equipment'
         component={Equipment} 
         options={{headerShown : false}}
        />
         <Stack.Screen 
         name='EquipmentD'
         component={EquipmentDetails} 
         options={{headerShown : false}}
        />
    </Stack.Navigator>
)

const CommanderStack = () => (
    <Stack.Navigator
        initialRouteName='Commander'
    >
        <Stack.Screen 
            name='Commander'
            component={Commander}
            options={{headerShown : false}}
        />
        <Stack.Screen 
            name='CommanderD'
            component={CommanderDetails}
            options={{headerShown : false}}
        />

    </Stack.Navigator>
)

const TroopStack = () => {
    <Stack.Navigator 
        initialRouteName='Troop'
    >
        <Stack.Screen 
            name='Troop'
            component={Troop}
            options={{headerShown : false}}
        />

      
    </Stack.Navigator>
}

const BuildingStack = () => (
    <Stack.Navigator 
        initialRouteName='Building'
    >
        <Stack.Screen 
            name='Building'
            component={Building}
            options={{headerShown : false}}
        />
         <Stack.Screen 
            name='BuildingD'
            component={BuildingDetail}
            options={{headerShown : false}}
        />

      
    </Stack.Navigator>
)

const BTab = createMaterialBottomTabNavigator();

const BottomTab = () => (
    <BTab.Navigator
        barStyle={
            {
                backgroundColor : colors.BottomColor,
                shadowColor: "#000",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }
        }
    >
        <BTab.Screen 
            name='HomeTab'
            component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="shield-home" color={color} size={25} />
                ),
            }}
        />
        <BTab.Screen 
            name='CommanderTab'
            component={CommanderStack}
            options={{
                tabBarLabel: 'Commander',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="ninja" color={color} size={25} />
                ),
            }}
        />
        <BTab.Screen 
            name='EquipmentTab'
            component={EquipmentStack}
            options={{
                tabBarLabel: 'Equipment',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="shield-plus" color={color} size={25} />
                ),
            }}
        />
        <BTab.Screen 
            name='ToolTab'
            component={ToolStack}
            options={{
                tabBarLabel: 'Tools',
                tabBarIcon: ({ color, size }) => (
                  <IconTool name="tools" color={color} size={25} />
                ),
            }}
        />
    </BTab.Navigator>
)
const Drawer = createDrawerNavigator();
const DrawerMenu = () => (
    <Drawer.Navigator
    
    drawerContentOptions={{
        activeTintColor : '#FFF',
    
    }}
    drawerContent={props => CustomDrawerContent(props)}
    drawerStyle = {{
        backgroundColor : colors.BottomColor,
    }}
    >
       
        <Drawer.Screen 
            name='Home'
            component={BottomTab}
            
        />

        <Drawer.Screen 
            name='ChooseLang'
            component={ChooseLang}
            
        />

        <Drawer.Screen 
            name='About'
            component={About}
            
        />
        
    </Drawer.Navigator>
)
function CustomDrawerContent(props) {
    const renderLang = async () => {
        let lang = await AsyncStorage.getItem('@lang');
        return lang;
    }
    return (
      <DrawerContentScrollView {...props}>
        <DrawerC></DrawerC>
        <DrawerItem
            icon={({focused, color, size}) => (
                <Icon color={'#FFF'} size={size} name={focused ? 'home' : 'home-outline'} />
            )}
            label={renderLang() == 'vi' ? 'Trang chủ' : 'Home'}
            style={{color : '#FFF'}}
            onPress={() => { props.navigation.jumpTo('Home')
            }}
            labelStyle={{color : '#FFF' , fontFamily : fonts.regular}}
        />

        <DrawerItem
            icon={({focused, color, size}) => (
                <IconFa color={'#FFF'} size={size} name={'language'} />
            )}
            label={renderLang() == 'vi' ? 'Đổi ngôn ngữ' : 'Switch language'}
            style={{color : '#FFF'}}
            onPress={() => { props.navigation.jumpTo('ChooseLang')
            }}
            labelStyle={{color : '#FFF' , fontFamily : fonts.regular}}
        />
        <DrawerItem
            icon={({focused, color, size}) => (
                <Icon color={'#FFF'} size={size} name={'castle'} />
            )}
            label={renderLang() == 'vi' ? 'Công trình' : 'Building'}
            style={{color : '#FFF'}}
            onPress={() => { 
                if(renderLang() == 'vi') alert('Tính năng này đang trong quá trình hoàn thiện, xin vui lòng chờ phiên bản sau.');
                else alert('This feature is in the process of finishing, please wait for the next version.')
            }}
            labelStyle={{color : '#FFF' , fontFamily : fonts.regular}}
        />
    <DrawerItem
            icon={({focused, color, size}) => (
                <IconTool color={'#FFF'} size={size} name={'chess-knight'} />
            )}
            label={renderLang() == 'vi' ? 'Quân đội' : 'Troop'}
            style={{color : '#FFF'}}
            onPress={() => { 
                if(renderLang() == 'vi') alert('Tính năng này đang trong quá trình hoàn thiện, xin vui lòng chờ phiên bản sau.');
                else alert('This feature is in the process of finishing, please wait for the next version.')
            }}
            labelStyle={{color : '#FFF' , fontFamily : fonts.regular}}
        />


        <DrawerItem
            icon={({focused, color, size}) => (
                <IconTool color={'#FFF'} size={size} name={'user-astronaut'} />
            )}
            label={renderLang() == 'vi' ? 'Giới thiệu' : 'Info'}
            style={{color : '#FFF'}}
            onPress={() => { props.navigation.jumpTo('About')
            }}
            labelStyle={{color : '#FFF' , fontFamily : fonts.regular}}
        />
       
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
    );
  }
  


export const AppContainer = () => (
    <NavigationContainer>
       
    </NavigationContainer>
)

export const AppContainer2 = () => (
    <NavigationContainer>
   
            <DrawerMenu></DrawerMenu>
        
    </NavigationContainer>
)


