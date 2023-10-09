import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react'
import RNFetchBlob from 'rn-fetch-blob'


export const SubirVideo = () => {
    const postVideo = (video,url) =>  {
        RNFetchBlob.fetch('POST',url, {
             'content-type': 'multipart/form-data',
             "Accept":"multipart/form-data",
             'access-token': AuthToken.token, //token from server
          },[
            //the value of name depends on the key from server
            {name: 'video', filename: 'vid.mp4', data: RNFetchBlob.wrap(video.uri) },
          ]).then(response => response.json())
            .then(response => {
                if (response.status === 'success') {
                    alert("Upload success");
                    this.props.navigation.navigate('publish');
                } else {
                   alert(response.msg);
                }})
             .catch((err) => {
                 alert(err);
            })
        }
  return (

    <TouchableOpacity style={styles.boton} onPress={postVideo}><Text style={styles.ingresar}>Ingresar</Text></TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    ingresar:{
        color:'#ffffff',
        textAlign: 'center'
      }
});

