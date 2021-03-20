import React from 'react'
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Announcement = (props) => {
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity styles = {styles.square}></TouchableOpacity>
                <Text styles = {styles.textStyle}> {props.text}</Text>
            </View>
            <View style = {styles.circular}></View>   
        </View>
    )
}
export default Announcement;



const styles = StyleSheet.create ({


    
    
    item:{
        backgroundColor: '#FFF',
        //color: '#f1cf5b',
        padding:15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    
    textStyle: {
        color: '#f1cf5b',
        fontSize:12,
        textAlign: 'center',
    },


    

    


    


});


