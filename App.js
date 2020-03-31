//import liraries
import 'react-native-gesture-handler';
import React from 'react';
import {View,YellowBox} from 'react-native';
import {AppContainer,AppContainer2} from './src/router/index';
import i18n from './src/utils/i18n';
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification  from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import WelcomeScreen from './src/Screen/WelcomeScreen';

export const LocalizationContext = React.createContext();

// create a component
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

const App = () => {
  console.disableYellowBox = true;
  const [locale, setLocale] = React.useState('vi');
  const [page,setPage] = React.useState(false);
    

    
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  const changePage = () => {
    setTimeout(() => {
        setPage(true);
    },2000)
}

  const requestPermission = async () => {
    
     
      const granted = messaging().requestPermission();
 
      if (granted) {
        console.log('User granted messaging permissions!');
      } else {
        console.log('User declined messaging permissions :(');
      }
      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log('FCM Message Data:', remoteMessage.data);
        PushNotification.localNotification({
          /* Android Only Properties */
          largeIcon: remoteMessage.data.image, // (optional) default: "ic_launcher"
          smallIcon:  remoteMessage.data.image, // (optional) default: "ic_notification" with fallback for "ic_launcher"
          vibration: 5000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
          title: remoteMessage.data.title, // (optional)
          message: remoteMessage.data.body, // (required)
          soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    
      });
      unsubscribe()
       
      });
     
     
      

  


    
  }

  React.useEffect(() => {
    getLang()
    requestPermission();
    changePage()
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

       
      {page ? <AppContainer2></AppContainer2> : <WelcomeScreen></WelcomeScreen>}
     </LocalizationContext.Provider>
  );
};


export default App;
