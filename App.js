import React , {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Camera, camera , cameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from './src/components/Button';
export default function App() {
  const [HasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage]= useState(null);
  const [type,setType]=useState(Camera.Constants.Type.back);
  const [flash,setFlash]=useState(Camera.Constants.FlashMode.off);
  const CameraRef = useRef(null);
  useEffect(()=>{
    (async ()=>{
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus=await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status ==='granted'); 
    })
  },[])
  return (
    <View style={styles.container}>
    <Camera
      style={styles.camera}
      type={type}
      flashMode={flash}
      ref={CameraRef}>
    <Text>Hello</Text>
    </Camera>
    <View>
      <Button title={'Shot On Iphone'} icon="camera"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  camera: {
    flex:1,
    borderRadius:20,

  }
});
