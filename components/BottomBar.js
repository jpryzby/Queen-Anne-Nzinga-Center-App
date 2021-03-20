import React from 'react'
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const BottomBar = (props) => {
    return (
        <View style={styles.bottomBar}>
            
                <TouchableOpacity  onPress={() => props.navigation.navigate('Announcements')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Announcements</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => props.navigation.navigate('Calendar')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Calendar</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => props.navigation.navigate('Donate')} style={styles.buttonContainerStyle}>
                    <Text style={styles.buttonTextStyle}>Donate</Text>
                </TouchableOpacity>

            </View>
    )
}



const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#2d0f4c',


    },
    topBar:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    mainContent: {
        flex: 8,

    },
    bottomBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2d0f4c',

    },
    burgerButton: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 10,
    },
    nzingaCrown: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 10,
        
    },
    textStyle: {
        color: '#f1cf5b',
        fontSize: 24,
        textAlign: 'center',
    },
    buttonContainerStyle: {
        flex: 1,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderColor: '#048074' ,
        borderWidth: 5,
    },
    buttonTextStyle: {
        color: '#ffffff',
        fontSize: 18,
        alignSelf: "center",
        
        
        //textAlign: 'center',
        //fontWeight: "bold",
    },

    


});
export default BottomBar;

