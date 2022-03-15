import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ToDoScreen from './TodoScreen';
import AboutScreen from './AboutScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const ToDoStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting={true}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#EE4B2B',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="Todo"
      component={ToDoStackScreen}
      options={{
        tabBarLabel: 'TODO',
        tabBarColor: '#BF40BF',
        tabBarIcon: ({color}) => (
          <Icon name="ios-calendar" color={color} size={22} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutStackScreen}
      options={{
        tabBarLabel: 'About',
        tabBarColor: '#FFD700',
        tabBarIcon: ({color}) => (
          <Icon name="ios-ellipsis-vertical" color={color} size={22} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#EE4B2B',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        fontSize: 18,
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#EE4B2B"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ToDoStackScreen = ({navigation}) => (
  <ToDoStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#BF40BF',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        fontSize: 18,
      },
    }}>
    <ToDoStack.Screen
      name="Todo"
      component={ToDoScreen}
      options={{
        title: 'TODO',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#BF40BF"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ToDoStack.Navigator>
);

const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FFD700',
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        fontSize: 18,
      },
    }}>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={{
        title: 'About',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#FFD700"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </AboutStack.Navigator>
);
