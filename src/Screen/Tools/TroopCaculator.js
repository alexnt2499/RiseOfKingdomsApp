//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import {fonts, colors} from './../../theme/theme';
import Header from './../../Components/Header/Header';
import { TabView, SceneMap,TabBar,SceneRendererProps } from 'react-native-tab-view';
import {LocalizationContext} from './../../../App';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrainingTroop from './../../Components/Tabs/TrainingTab';
import UpdateTroop from './../../Components/Tabs/UpdateTab';

const initialLayout = { width: Dimensions.get('window').width };
// create a component
const TroopCaculator = ({navigation}) => {
    const [index, setIndex] = React.useState(0);
    const {t,locale, setLocale} = React.useContext(LocalizationContext);

    const [routes] = React.useState([
        { key: 'train', title: t('train') , icon : 'bullseye-arrow' },
      { key: 'update', title: t('update'), icon : 'arrow-up-bold-box' },
    ]);

    
    const renderScene = SceneMap({
        train: () => (<TrainingTroop navigation={navigation}></TrainingTroop>),
        update:   () => (<UpdateTroop type='archer' navigation={navigation}></UpdateTroop>),
     
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
        <View style={styles.container}>
            <Header title={'cal_troop'} 
            nameIcon='calculator' 
            navigation={navigation} 
            checkCustom={true}
            checkBack={true}></Header>
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={{ backgroundColor: '#FFF', color: '#000' }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
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
export default TroopCaculator;
