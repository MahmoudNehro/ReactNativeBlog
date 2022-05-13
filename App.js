import * as React from 'react';
import Splash from './source/components/screens/Splash'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/components/screens/HomeScreen';
import About from './source/components/screens/About';
import CardView from './source/components/screens/CardView';

const Stack = createNativeStackNavigator();

function App() {
   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' name='Splash' component={Splash}  screenOptions={{ headerShown: false}}>
        <Stack.Screen options={{ title:'' }} name="Splash" component={Splash}/>
        <Stack.Screen  options={{ title:'' }} name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen  options={{ title:'' }} name="About" component={About}/>
        <Stack.Screen  options={{ title:'' }} name="CardView" component={CardView}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;