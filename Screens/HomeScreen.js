import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          padding: 30,
          backgroundColor: '#FFF',
          position: 'relative',
        }}>
        <Image
          source={require('../assets/image.jpg')}
          style={{position: 'absolute', left: -50}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}></View>
        <Text style={{fontSize: 30, lineHeight: 45, alignItems: 'flex-end'}}>
          Good Morning Adewuyi!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
