import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.header}>
        <View style={{alignItems: 'center'}}>
          <Text style={(colors = '#234534')}>Author:</Text>
          <Text style={{colors: '#234534', fontSize: 18, fontWeight: 'bold'}}>
            Adewuyi Alawusa
          </Text>
          <Image source={require('../assets/profile.jpg')} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            My name is Toluwanimi Adewuyi i am a graduating stunet and i just
            wanted to tell you a bit about myself. I am graduating this
            semsester and this is my end of term project. It was a short one
            that helps a lot of scatter brains like me organize themselves just
            a bit.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
