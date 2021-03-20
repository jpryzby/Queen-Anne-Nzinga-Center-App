import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator, CreateAppContainer, createAppContainer} from 'react-navigation';

import Announcements from '../screens/Announcements';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';

const WIDTH = Dimensions.get('window'). WIDTH;
const drawerNavigator = createDrawerNavigator({
    Announcements:{
        screen: AnnouncementsScreen
    }
})

export default createAppContainer(drawerNavigator);