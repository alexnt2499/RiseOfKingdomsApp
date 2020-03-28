//import liraries
import React, { Component,useState, useEffect,useRef } from 'react';
import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity,Image,TextInput,Platform,PermissionsAndroid } from 'react-native';
import {WebView} from 'react-native-webview';
import Header from './../Components/Header/Header';
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'
import {colors,fonts} from './../theme/theme';
import {LocalizationContext} from './../../App';
import ViewShot from 'react-native-view-shot';
import IconButton from './../Components/Buttons/IconButton';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageView from 'react-native-image-view';
import RNFS from 'react-native-fs';
import Realm from './../services/realm';
import TalentItem from './../Components/Items/TalentItem';
import ConfirmModal from './../Components/Modal/ConfirmModal';
import SuccessModal from './../Components/Modal/SuccessModal';
import BannerAds from './../Components/AdsMob/BannerAds';

// create a component
const WebViews = ({navigation}) => {
    const {t} = React.useContext(LocalizationContext);
    const [visibleModal,setVisibleModal] = useState(false);
    const [imageAt,setImageAt] = useState();
    const [openIV,setOpenIV ] = useState(false);
    const [listImage,setListImage] = useState([]);
    const [note,setNote] = useState('');
    const [errorNote,setErrorNote] = useState(false);
    const [title,setTitle] = useState('');
    const [ListTalent,setListTalent] = useState([]);
    const [errorTitle,setErrorTitle] = useState(false);
    const [idDelete,setIdDelete] = useState();
    const [textBodyModal,settextBodyModal] = useState();

    const viewShotRef = useRef();
    const ConfirmModalRef = useRef();
    const SuccessModalRef = useRef();

    const OnShot = async () => {
        let checkPer = await askPermisson();
        if(checkPer) {
        setVisibleModal(true);
        viewShotRef.current.capture().then(uri => {
            copy(uri);
     
            setListImage([
                { 
                    source: {
                        uri: uri,
                    },
                }
            ])
        })}else {
            alert(t('ban_vui_long_cap_quyen'))
        }
    }



    useEffect (() => {
        getTalents()
    },[])

    const getTalents = async () => {
        let realm = await Realm();
        let data = realm.objects('talents');
        let array = Array.prototype.slice.call(data);
        setListTalent(array);
        
    }

    const copy = (uri) => {
        const imagePath = `${RNFS.DownloadDirectoryPath}/${new Date().toISOString()}.jpg`.replace(/:/g, '-');

        if(Platform.OS === 'ios') {
            RNFS.copyAssetsFileIOS(uri, imagePath, 0, 0)
                .then(res => {})
                .catch(err => {
                    console.log('ERROR: image file write failed!!!');
                    console.log(err.message, err.code);
                });
        } else if(Platform.OS === 'android') {
            RNFS.copyFile(uri, imagePath)
                .then(res => {
                    console.log(res);
                    
                    setImageAt({uri : 'file://'+ imagePath});
                })
                .catch(err => {
                    console.log('ERROR: image file write failed!!!');
                    console.log(err.message, err.code);
                });
        }

    }

    const saveTalent = async () => {
        try {
            
            let check = true;
            if(!title) {
                check = false;
                setErrorTitle(true);
            }
            if(!note) {
                check = false;
                setErrorNote(true);
            }
           
            if(check == true) {
                const realm = await Realm();
            let id = new Date().getTime();
            realm.write(() => {
                realm.create('talents',{
                    id : id,
                    image : imageAt.uri,
                    title : title,
                    sub : note,
                    date : new Date().toString(),
                   
                },'modified');
                setTitle('');
                setNote('');
                getTalents();
                settextBodyModal(t('them_thanh_cong'));
                close();
                SuccessModalRef.current.open();
            })
            }

        } catch (error) {
            console.log(error);
            
        }
    }

    const askPermisson= async () => {
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: "Storage Permission",
                message: "App needs access to memory to download the file "
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            console.warn(err);
            return false;
          }
    }

    const deleteTalent = async () => {
        let arrayDelete = ListTalent.filter((value) => {
            return value.id != idDelete;
        })
        setListTalent(arrayDelete);
        let realm = await Realm();
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey('talents', Number(idDelete));
            deleteImageFile(deletingTodoList.image);
            console.log(deletingTodoList.image);
            

            realm.delete(deletingTodoList);

            settextBodyModal(t('xoa_thanh_cong'));
            ConfirmModalRef.current.close();
            SuccessModalRef.current.open();


        })
    }

    const deleteImageFile = (uri) => {

        const filepath = uri ? uri : imageAt.uri;
        console.log(filepath);
        
        RNFS.exists(filepath)
        .then( (result) => {
            console.log("file exists: ", result);
    
            if(result){
              return RNFS.unlink(filepath)
                .then(() => {
                  console.log('FILE DELETED');
                })
                // `unlink` will throw an error, if the item to unlink does not exist
                .catch((err) => {
                  console.log(err.message);
                });
            }
    
          })
          .catch((err) => {
            console.log(err.message);
          });
      }

    const close = () => {setVisibleModal(false)}
    return (
        <SafeAreaView style={{flex : 1, backgroundColor : colors.MainColor}}>
            <Header checkBack={true} checkWeb={true} title='rok_tlent' navigation={navigation} ></Header>
            <ScrollableTabView
                tabBarActiveTextColor={'#FFF'}
                tabBarInactiveTextColor={'#707070'}
                tabBarUnderlineStyle={{backgroundColor : '#FFF', borderColor : colors.MainColor}}
                tabBarTextStyle={{fontFamily : fonts.black,fontSize : 15}}
            >
                   
                    <ViewShot
                        ref={viewShotRef}
                        options={{ format: "jpg", quality: 0.9 }}
                        tabLabel={t('build')}
                        style={{height : '100%', position : 'relative', width : '100%'}}
                    >
                        <WebView
                            source={{uri: 'https://roktalents.com/'}}
                           style={{width : '100%', height : '100%'}}
                            >
                            </WebView>

                        <View style={{position : 'absolute', bottom : -70, right : '34%'}}>
                            <IconButton onPress={() => {OnShot()}} nameIcon='content-save-edit'></IconButton>
                        </View>
                    </ViewShot>

                    <View tabLabel={t('saved')} style={{width : '100%', position : 'relative', height : '100%'}} >
                        {ListTalent.length == 0 ? <Text style={{textAlign : 'center',fontFamily : fonts.light,color : '#FFF', marginVertical : 10, fontSize : 13}}>
                            {t('not_data')}
                        </Text> : <FlatList
                            data={ListTalent}
                            renderItem={({item}) => {                                
                            return <TouchableOpacity onPress={() => {
                               setListImage([
                                   {
                                       source : {uri : item.image}
                                   }
                               ])

                               setOpenIV(true)
                            
                       
                            }}>
                                <TalentItem item={item} onDelete={() => {setIdDelete(item.id);ConfirmModalRef.current.open();}}></TalentItem>
                            </TouchableOpacity>
                            }}
                        >

                        </FlatList>}
                        <View style={{position : 'absolute',width : '100%', justifyContent : 'center',alignItems : 'center', bottom : 0}}>
                         <BannerAds></BannerAds>
                        </View>
                    </View>
                    
            </ScrollableTabView>
            <Modal
                 animationIn={'zoomInDown'}
                 animationOut={'zoomOutUp'}
                 isVisible={visibleModal}
            >
                 <View style={styles.containerModal}>

                    <TouchableOpacity onPress={() => {close(); deleteImageFile(imageAt.uri)}} style={{position : 'absolute', right: 20, top : 20}}> 
                        <Icon name='close-box' size={30} ></Icon>
                    </TouchableOpacity>

                    <Text style={[styles.textStyle,{marginTop : 25,color : '#000' , fontSize : 18}]}>{t('luu_tai_nang').toUpperCase()}</Text>

                    <TouchableOpacity
                        style={{width : '100%', height : 100}}
                        onPress={() => {setOpenIV(true)}}
                    >
                        <Image resizeMode="center" style={{width : '100%', height : 100}} source={imageAt}></Image>

                    </TouchableOpacity>

                    <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 5}}>
                        <View style={{flexDirection : 'row'}}>
                            <Icon name={'subtitles'} size={19}></Icon>
                            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14, marginLeft : 5}]}>{t('title').toUpperCase()}</Text>
                        </View>
                            <TextInput
                                placeholder={t('title')+'...'}
                                style={{borderBottomWidth : 1, width : '80%', fontFamily : fonts.light, borderBottomColor : errorTitle ? 'red' : '#000'}}
                                onChangeText={(e)=>{setTitle(e);setErrorTitle(false);
                                }}
                                value={title}
                                
                            >

                            </TextInput>
                        {errorTitle ? <Text style={{color : 'red', fontFamily : fonts.light}}>{t('vui_long')}</Text> : null}

                    </View>
                    
                    <View style={{width : '100%', justifyContent : 'center', alignItems : 'flex-start',marginLeft : 50, marginTop : 5}}>
                        <View style={{flexDirection : 'row'}}>
                            <Icon name={'notebook-multiple'} size={19}></Icon>
                            <Text style={[styles.textStyle,{fontFamily : fonts.regular,fontSize : 14, marginLeft : 5}]}>{t('note').toUpperCase()}</Text>
                        </View>
                            <TextInput
                                placeholder={t('note')+'...'}
                                style={{borderBottomWidth : 1, width : '80%', fontFamily : fonts.light, borderBottomColor : errorNote ? 'red' : '#000'}}
                                onChangeText={(e)=>{setNote(e);setErrorNote(false);
                                }}
                                value={note}
                                
                            >

                            </TextInput>
                        {errorNote ? <Text style={{color : 'red', fontFamily : fonts.light}}>{t('vui_long')}</Text> : null}

                    </View>

                    <TouchableOpacity onPress={() => {saveTalent()}} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : colors.MainColor, width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
                        <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>{t('save')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {close();
                                            deleteImageFile(imageAt.uri);

                    }} style={{marginVertical : 10, borderRadius : 5 ,backgroundColor : colors.MainColor, width : '90%',justifyContent : 'center', alignItems : 'center', height : 40}}>
                        <Text style={[styles.textStyle,{color : '#FFF', fontFamily : fonts.light}]}>{t('dong')}</Text>
                    </TouchableOpacity>

                </View>

            </Modal>

            <ImageView
                isVisible={openIV}
                onClose={() => {
                    setOpenIV(false);
                
                }}
                images={listImage}
                imageIndex={0}
            >

            </ImageView>

            <ConfirmModal
                ref={ConfirmModalRef}
                title={t('xoa_tai_nang')}
                body={t('ban_co_muon_xoa_talent')}
                onConfirm={deleteTalent}
            >

            </ConfirmModal>
            <SuccessModal
                ref={SuccessModalRef}
                body={textBodyModal}
            >

            </SuccessModal>
        </SafeAreaView>
        
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
    containerModal : {
        width : "100%", 
        borderRadius : 10 ,
        justifyContent : 'flex-start', 
        alignItems : "center", 
        backgroundColor : '#FFF',
     
    }
});

//make this component available to the app
export default WebViews;
