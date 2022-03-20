import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View styles={styles.circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EE4B2B',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  itemText: {
    maxWidth: '80%',
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: '#800080',
    opacity: 0.3,
    borderRadius: 5,
    marginRight: 15,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
