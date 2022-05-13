import { View, Text,Button ,StyleSheet,ScrollView} from 'react-native';
import * as React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer'
import Card from '../card/Card';

export default class HomeScreen extends React.Component  {
    render() {
    return (
      <View style={{ backgroundColor:'#eae4e9' }}>
        <Header navigation={this.props.navigation}  />
        <Text style={{ position:'fixed',top:10,color:'white',fontSize:21 ,right:70 ,zIndex:1000}}>  News</Text>
        <Card navigation={this.props.navigation} />
         <Footer navigation={this.props.navigation}  />
      </View>
    )
    }
  }

