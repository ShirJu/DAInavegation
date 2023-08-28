import React from 'react';
import { StyleSheet} from 'react-native';
import { View, Text } from 'react';


const Screen01 = ({navigation}) => {
  return (
    <View>
        <Text>Screen01</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen01;