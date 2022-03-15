import React from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go To TODO screen"
        onPress={() => navigation.navigate('Todo')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
