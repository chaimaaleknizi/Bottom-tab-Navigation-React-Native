
import React from 'react';
import {StatusBar} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import AddScreen from './Screens/AddScreen';
import ActivityScreen from './Screens/ActivityScreen';
import ProfileScreen from './Screens/ProfileScreen';



const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
    <NavigationContainer>
      <Tab.Navigator  screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
         let iconName;
         if(route.name === 'Home'){
           iconName = focused ? 'ios-home' : 'ios-home-outline';
           size = focused ? size + 7 : size + 3;
        }else if (route.name === 'Search') {
          iconName = focused ? 'search-sharp' : 'search-outline';
          size = focused ? size + 7 : size + 3;
        }else if (route.name === 'Add'){
          iconName = focused ? 'add-circle' : 'add-circle-outline';
          size = focused ? size + 7 : size + 3;
        }else if (route.name === 'Activity'){
          iconName = focused ? 'heart' : 'heart-outline';
          size = focused ? size + 7 : size + 3;
        }else if(route.name === 'Profile'){
          iconName = focused 
          ? 'person-circle-sharp'
          : 'person-circle-outline';
          size = focused ? size + 7 : size + 3;
        }
        return <Ionic name={iconName} size={size} color={color}/>;
        },
        
        
      })}

      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTinColor: 'black',
        showLabel: false,
        style: {
          backgroundColor: '#ffc125',
          height: 60,
        },
      }}

    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};



export default App;
