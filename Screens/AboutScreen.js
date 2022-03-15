import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>To Do Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to About Screen"
        onPress={() => navigation.push('About')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Settings Page"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default AboutScreen;
