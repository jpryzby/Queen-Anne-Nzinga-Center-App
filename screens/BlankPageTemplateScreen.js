import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


function BlankPageTemplateScreen(props) {
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>

            {/* This is where all of our content will go!*/}

            </View>
            <BottomBar/>
        </View>
    );
}

export default BlankPageTemplateScreen;


const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',


    },
    mainContent: {
        flex: 8,
    },
})