import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AnnouncementsScreen from './screens/AnnouncementsScreen';
import CalendarScreen from './screens/CalendarScreen';
import CalendarTestingScreen from './screens/CalendarTestingScreen';
import BlankPageTemplateScreen from './screens/BlankPageTemplateScreen';
import AdminScreen from './screens/AdminScreens';
import DonationsScreen from './screens/DonationsScreen';
import HomePageScreen from './screens/HomePageScreen';
import FirstUseScreen from './screens/FirstUseScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Page">

        <Drawer.Screen name="Home Page" component={HomePageScreen} />
        <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Calendar 2" component={CalendarTestingScreen} />
        <Drawer.Screen name="Donations" component={DonationsScreen} />
        <Drawer.Screen name="Admin" component={AdminScreen} />
        <Drawer.Screen name="Testing" component={BlankPageTemplateScreen} />  
        <Drawer.Screen name="Change groups" component={SettingsScreen} />     
        <Drawer.Screen name="Select groups" component={FirstUseScreen} />     

      </Drawer.Navigator>
    </NavigationContainer>
  );
}