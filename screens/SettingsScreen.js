import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';


function SettingsScreen(props) {
    return (
        <View style={styles.background}>
            <TopBar navigation={props.navigation}/>
            <View style={styles.mainContent}>
                <View style = {styles.announcementsWrapper}>
                    <Text style = {styles.sectionTitle}>Change your groups</Text> 
                </View>
            
            {/* This is where all of our content will go!*/}
            
            </View>
            <BottomBar/>
        </View>
    );
}
export default SettingsScreen;







const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',
    },
    mainContent: {
        flex: 8,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal:20,
    },
    sectionTitle:{
        color: '#f1cf5b',
        fontSize:45,
        fontWeight: 'bold',
    },
})