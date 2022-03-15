/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {SafeAreaView, Text, Button, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from './Components/Context';

import SettingsScreen from './Screens/SettingsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './Screens/DrawerContent';
import MainTabScreen from './Screens/MainTabScreen';

import RootStackScreen from './Screens/RootStackScreen';
import {ActivityIndicator} from 'react-native-paper';

const Drawer = createDrawerNavigator();

const App = () => {
  const initialLoginState = {
    isloading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isloading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isloading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isloading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isloading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        let userToken;
        userName = null;
        if (userName == 'user' && password == 'pass') {
          userToken = 'rgqhtd';
        }
        console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: () => {
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        setUserToken('Tolu');
        setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      let userToken;
      userToken = 'fgg;';
      console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen
              name="HomeDrawer"
              component={MainTabScreen}
              options={{headerShown: false}}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingsScreen}
              options={{headerShown: false}}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
