import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../commons/Header';
import Footer from '../commons/Footer'
export default class Splash extends React.Component {
    navigateTohome(){
        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen')
        }, 4000);
       
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Header navigation={this.props.navigation} />
         
        <Text style={{ color: 'white' }}>Blog</Text>
        <Image
          source={require("../../images/logo.jpg")}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        {this.navigateTohome()}
        <ActivityIndicator size="large" color="#00ff00" />
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}
