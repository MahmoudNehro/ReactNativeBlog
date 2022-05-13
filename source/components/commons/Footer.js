import { View,Image, Text, StyleSheet,Linking,Alert} from 'react-native'; 
import React from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

 
 const number = '201006761231'

const url2="http://www.google.com"
const message="hello"
 
export default class Footer extends React.Component  { 
   
    openUrl=async(url)=>{
        const isSupported=await Linking.canOpenURL(url);
        if(isSupported){
          await Linking.openURL(url);
        }else{
          Alert.alert(`Don't know to open url go to:${url}`)
        }
      }
    
    render() { 
    return ( 
      <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}> 
       
      <View style={styles.headerFooterStyle}> 
        <View style={styles.textStyle}>
            
        <Icon.Button 
            name="info" 
            color='white'
            backgroundColor="" 
            size={27} 
            borderRadius={40}
             style={{  
                  position:'fixed', 
                  left:50    , 
                  bottom:11 ,
                  width:30,
                  height:30,

                  

                
   
 
             }} 
             onPress={       () =>{this.props.navigation.navigate('About')}
            }
 
          /> 
                   
        <Icon.Button 
            name="whatsapp" 
            color='white'
            backgroundColor="" 
            size={35} 
            borderRadius={40}
            onPress={()=>{
                Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`)
               }}
             style={{  
                  position:'fixed', 
                  left:180    , 
                  bottom:8 ,
                  width:30,
                  height:30,

                  

                
   
 
             }} 
            
 
          /> 
 
            <Icon.Button 
            name="home" 
            color="white"
            backgroundColor="" 
            size={35} 
            style={{  
              position:'fixed', 
              right:50,          
              bottom:3, 
 
         }} 
         onPress={       () =>{this.props.navigation.navigate('HomeScreen')}
        }
 
           
 
           
          /> 
            </View> 
      </View> 
      </View> 
    ) 
    } 
     
     
 
  } 
 
  const styles = StyleSheet.create({ 
   
   
    headerFooterStyle: { 
      width: '100%', 
      backgroundColor: '#1d3557', 
      position: 'fixed', 
       left: 0, 
       bottom: 0, 
       height:50
    }, 
    textStyle: { 
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 18, 
        padding: 7, 
      }, 
  });