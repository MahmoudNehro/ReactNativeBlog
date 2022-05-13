import { View, StyleSheet, Linking, Alert } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const url1 = "http://www.google.com"


export default function Header  ({navigation}) {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know to open url go to:${url}`)
    }
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',zIndex:1000 }}>

        <View style={styles.headerFooterStyle}>
          <View style={styles.textStyle}>
            <Icon.Button
              name="google"
              backgroundColor=""
              size={35}
              onPress={() => {
                Linking.openURL(url1)
              }}
              style={{
                position: 'fixed',
                left: 10,
                top: 3


              }}

            />

            <Icon.Button name="home" backgroundColor="" size={35} style={{ position: 'fixed', right: 10, top: 3}} onPress={() =>{navigation.navigate('HomeScreen')}} />
          </View>
          <View style={styles.textStyle}>
          </View>
        </View>
      </View>
    )
  }





const styles = StyleSheet.create({


  headerFooterStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#1f2557',
    position: 'fixed',
    top: 0,
    

  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});