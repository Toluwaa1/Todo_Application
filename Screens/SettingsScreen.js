import React from 'react';
import {View, SafeAreaView, Button, Text} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>To Do Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Settings Screen"
        onPress={() => navigation.push('Settings')}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to About Page"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default SettingsScreen;
