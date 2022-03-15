import React from 'react';
import {View, Button, SafeAreaView, Text} from 'react-native';

const ToDoScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>To Do Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to ToDo Screen"
        onPress={() => navigation.push('Todo')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to About Page"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Go to Settings Page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default ToDoScreen;
