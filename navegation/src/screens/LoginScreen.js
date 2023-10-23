import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import 'react-native-gesture-handler';

export default function LoginScreen() {
  const video = React.useRef(null);

/*
source={{
          uri: require ("./../../assets/videos/big_buck_bunny.mp4")
        }}
*/

  return (
    //a traves de un url local se reproduce el video
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require ("./../../assets/videos/big_buck_bunny.mp4")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
    </View>
    /*

<View style={styles.container}>
<Video
  ref={video}
  style={styles.video}
  source={{
    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  }}
  useNativeControls
  resizeMode={ResizeMode.CONTAIN}
  isLooping
  onPlaybackStatusUpdate={status => setStatus(() => status)}
/>
</View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
