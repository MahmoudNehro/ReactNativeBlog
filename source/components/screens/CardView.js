import { View, Text,ScrollView,Image} from 'react-native';
import * as React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer'

export default function CardView({navigation,route})  {
  const{title,image,desc} = route.params
    return (
      <ScrollView style={{ backgroundColor:'#faedcd' }}>
        <Header navigation={navigation}  />
          <Image
            source={image}
            style={{ height:200,width: 350, borderRadius: 50,marginTop:200,marginLeft:30,justifyContent:'center' }}
          />
        
            <Text style={{ marginLeft:100,fontWeight:'bold',fontSize:21 }}>
            {title}
              
            </Text>
            <Text style={{textAlign:'center',fontSize:14 }}>
              {desc}
              
            </Text>
            

         <Footer navigation={navigation} />
      </ScrollView>
    )
    
  }