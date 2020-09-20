//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview';
import Header from './../Components/Header/Header';
import htmlStyle from './../Screen/css/post';
// create a component
const text  = `<h2>JULIUS CAESAR vị tướng công thành bá nhất mọi thời đại.</h2><img src="https://firebasestorage.googleapis.com/v0/b/riseofkingdoms-protools.appspot.com/o/imgPosts%2F1585208666776JuliusCaesar.png?alt=media&amp;token=c8dc67b4-470d-4c4c-9588-8a7a89347b12" alt="1585208666776JuliusCaesar.png" width="100%"><p><br></p><p>Julius Caesar sử dụng để tấn công các thành phố của người chơi khác, hay rally pháo đài</p><p><br></p><p><img class="size-large wp-image-1788 lazyloaded" src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-3-1024x576.png" data-src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-3-1024x576.png" alt="Julius Caesar City Rally Talent" width="680" height="383"></p><p><br></p><p>Julius Caesar sử dụng để chơi open filde (đánh nhau ngoài thành phố)</p><p><br></p><p><img class="size-large wp-image-1790 lazyloaded" src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-1-1024x576.png" data-src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-1-1024x576.png" alt="Julius Caesar Field Fight Build" width="680" height="383"></p><p><br></p><p>Julius Caesar sử dụng để chơi đánh cờ, đánh pháo đài man rợ.</p><p><br></p><p><br></p><p><img class="size-large wp-image-1789 lazyloaded" src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-2-1024x576.png" data-src="https://rok.guide/wp-content/uploads/2019/06/julius-talent-tree-2-1024x576.png" alt="Julius Caesar Flag/Fort Rally Build" width="680" height="383"></p><p><br></p><p><br></p>`;

const style = `${htmlStyle}<div class='containers'>
    ${text}
</div>`;
const WebViews = ({navigation}) => {
    return (
        <SafeAreaView style={{flex : 1}}>
            <Header checkBack={true} checkWeb={true} title='Event_facebook' navigation={navigation} ></Header>
            <WebView
            source={{html: style}}

            >
                
            </WebView>
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
});

//make this component available to the app
export default WebViews;
