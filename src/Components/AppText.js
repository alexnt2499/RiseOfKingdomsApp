//import liraries
import React, { useState, useEffect,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import I18n from './../utils/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import {LocalizationContext} from './../../App';
// create a component
const AppText = ({i18nKey,style}) => {
    const [i18n,setI18n] = useState(I18n);
    const [lang,setLang] = useState(I18n);
    const { t } = React.useContext(LocalizationContext);


    useEffect(() => {
        getLang();
    },[i18n])

    const setMainLocaleLanguage = language => {
        let i18ns = i18n;
        i18ns.locale = language;
        setI18n(i18ns)
      };
    
    const getLang = async () => {
        let language = await AsyncStorage.getItem('@lang');
        if(language) {
          setLang(language);
      } 
        
        if(language) setMainLocaleLanguage(language);
    }


    return (
      <Text style={style}>
        {i18nKey ? t(i18nKey) : this.props.children}
      </Text>
      )
};


//make this component available to the app
export default AppText;
