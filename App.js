//import liraries
import 'react-native-gesture-handler';
import React from 'react';
import {View,YellowBox} from 'react-native';
import {AppContainer,AppContainer2} from './src/router/index';
import i18n from './src/utils/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification  from "react-native-push-notification";
import admob from '@react-native-firebase/admob';

export const LocalizationContext = React.createContext();

// create a component
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const App = () => {
  console.disableYellowBox = true;
  const [locale, setLocale] = React.useState('vi');
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  const testPush = () => {
    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + 60 * 1000) // in 60 secs
    });
  }

  const cPush = () => {
    PushNotification.cancelAllLocalNotifications();

  }
  React.useEffect(() => {
    getLang()
    // testPush()
  },[])

  const getLang = async () => {
    console.log('Haha123123');
    
    let lang = await AsyncStorage.getItem('@lang');
    if(lang){
      setLocale(lang)
    }
      else {
        
        await AsyncStorage.setItem('@lang','en');setLocale('en')
        setLocale('en')

      }
  }

  return (
    <LocalizationContext.Provider value={localizationContext}>

       <AppContainer>
      
      </AppContainer>
      <AppContainer2></AppContainer2>
     </LocalizationContext.Provider>
  );
};


export default App;
