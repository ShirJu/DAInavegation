import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from '../components/Menu';

export default function Screen01(){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen01</Text>
        <Menu></Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignText: 'center',
  },
  text: {
    color: "#9BCDF4",
    fontSize : 20,
    textAlign: 'center',
    marginTop:350

  },
});
