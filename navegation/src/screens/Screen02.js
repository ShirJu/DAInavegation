import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from '../components/Menu';

export default function Screen02(){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen02</Text>
        <Menu></Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2be67c',
    alignText: 'center',
  },
  text: {
    color: "#9BCDF4",
    fontSize : 20,
    textAlign: 'center',
    marginTop:350

  },
});