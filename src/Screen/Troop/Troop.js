//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { TabView, SceneMap,TabBar,SceneRendererProps } from 'react-native-tab-view';
import TroopTab from './../../Components/Tabs/TroopTab';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors, fonts } from '../../theme/theme';
import {LocalizationContext} from './../../../App';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const initialLayout = { width: Dimensions.get('window').width };


const Troop = ({navigation}) => {
    const [index, setIndex] = React.useState(0);
    const {t,locale, setLocale} = React.useContext(LocalizationContext);

    const [routes] = React.useState([
      { key: 'infantry', title: t('infantry'), icon : 'knife-military' },
      { key: 'archer', title: t('archer') , icon : 'bullseye-arrow' },
      { key: 'cavalry', title: t('cavalry') , icon : 'chess-knight' }
    ]);
   

   
  
    const renderScene = SceneMap({
      infantry: () => (<TroopTab type='infantry' navigation={navigation}></TroopTab>),
      archer:   () => (<TroopTab type='archer' navigation={navigation}></TroopTab>),
      cavalry: () => (<TroopTab type='cavalry' navigation={navigation}></TroopTab>),
    });

    const renderTabBar = (props) => {
      return (
        <TabBar
          {...props}
          navigationState={{ index, routes }} 
          indicatorStyle={styles.indicator}
          labelStyle={styles.labelStyle}
          renderIcon={renderIcon}
          style={styles.tabbar}
        />
      );
    };

    const renderIcon = ({ route, color }) => (
      <MaterialIcon name={route.icon} size={24} color={color} />
    );

  
  
    return (
      <SafeAreaView style={{flex : 1}}>
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ backgroundColor: '#FFF', color: '#000' }}
       />

      </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.MainColor,
    },
    tabbar: {
      backgroundColor: colors.BottomColor,
     
    },
    indicator: {
      backgroundColor: colors.HoverColor,
    },
    labelStyle:{
      fontFamily : fonts.black
    }
});

//make this component available to the app
export default Troop;
